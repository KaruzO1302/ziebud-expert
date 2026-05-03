import "server-only";

import { appendFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { LeadFormPayload, LeadSource } from "@/lib/lead-data";
import {
  COMPANY_EMAIL,
  LEAD_FROM_EMAIL,
  LEAD_NOTIFICATION_EMAIL,
  ORG_SHORT_NAME,
  RESEND_API_KEY,
  SITE_URL,
  SUPABASE_LEADS_TABLE,
  SUPABASE_REST_URL,
  SUPABASE_SERVICE_ROLE_KEY,
} from "@/lib/site";

export type LeadRecord = LeadFormPayload & {
  id: string;
  referenceCode: string;
  createdAt: string;
  sourceLabel: string;
  referer?: string;
  userAgent?: string;
  storage: "supabase" | "local";
};

type ValidationResult =
  | { ok: true; data: LeadFormPayload }
  | { ok: false; errors: string[] };

const sourceLabels: Record<LeadSource, string> = {
  zapytanie: "Zapytanie ofertowe",
  kontakt: "Kontakt",
  wycena: "Wycena",
  awaria: "Pilna awaria",
};

export function validateLeadPayload(input: Partial<LeadFormPayload>): ValidationResult {
  const errors: string[] = [];

  const data: LeadFormPayload = {
    source: normalizeText(input.source) as LeadSource,
    investorType: normalizeText(input.investorType),
    company: normalizeText(input.company),
    contactName: normalizeText(input.contactName),
    email: normalizeText(input.email).toLowerCase(),
    phone: normalizeText(input.phone),
    voivodeship: normalizeText(input.voivodeship),
    city: normalizeText(input.city),
    projectLocation: normalizeText(input.projectLocation),
    projectType: normalizeText(input.projectType),
    projectStage: normalizeText(input.projectStage),
    plannedTerm: normalizeText(input.plannedTerm),
    message: normalizeText(input.message),
    attachmentUrl: normalizeText(input.attachmentUrl),
    attachmentName: normalizeText(input.attachmentName),
    rodo: Boolean(input.rodo),
  };

  if (!["zapytanie", "kontakt", "wycena", "awaria"].includes(data.source)) {
    errors.push("Nieprawidłowe źródło formularza.");
  }

  if (data.source === "awaria") {
    data.investorType ||= "Do ustalenia przy oddzwonieniu";
    data.contactName ||= "Pilne zgłoszenie ze strony";
    data.email ||= "brak-emailu@awarie24h.pl";
    data.voivodeship ||= "dolnośląskie";
    data.projectType ||= "Pilna awaria kanalizacji";
    data.projectStage ||= "Awaria teraz";
    data.plannedTerm ||= "Jak najszybciej";

    if (!data.phone) errors.push("Podaj numer telefonu.");
    if (!data.message || data.message.length < 12) {
      errors.push("Opisz awarię w co najmniej 12 znakach.");
    }
    if (!data.rodo) errors.push("Zgoda RODO jest wymagana.");

    return errors.length ? { ok: false, errors } : { ok: true, data };
  }

  if (!data.contactName) errors.push("Podaj imię i nazwisko.");
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Podaj poprawny adres e-mail.");
  }
  if (!data.phone) errors.push("Podaj numer telefonu.");
  if (!data.investorType) errors.push("Wybierz typ inwestora.");
  if (!data.voivodeship) errors.push("Wybierz województwo.");
  if (!data.projectType) errors.push("Wybierz zakres projektu.");
  if (!data.projectStage) errors.push("Wybierz etap projektu.");
  if (!data.message || data.message.length < 30) {
    errors.push("Opisz projekt w co najmniej 30 znakach.");
  }
  if (!data.rodo) errors.push("Zgoda RODO jest wymagana.");

  return errors.length ? { ok: false, errors } : { ok: true, data };
}

export async function createLead(
  payload: LeadFormPayload,
  meta?: { referer?: string; userAgent?: string },
) {
  const baseRecord = {
    ...payload,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    sourceLabel: sourceLabels[payload.source],
    referer: meta?.referer,
    userAgent: meta?.userAgent,
  };
  const recordWithReference = {
    ...baseRecord,
    referenceCode: buildLeadReference(baseRecord.source, baseRecord.createdAt, baseRecord.id),
  };

  const storage = await persistLead(recordWithReference);
  const record: LeadRecord = { ...recordWithReference, storage };

  await notifyLead(record);

  return record;
}

async function persistLead(
  record: Omit<LeadRecord, "storage">,
): Promise<LeadRecord["storage"]> {
  if (SUPABASE_REST_URL && SUPABASE_SERVICE_ROLE_KEY) {
    const response = await fetch(
      `${SUPABASE_REST_URL}/rest/v1/${SUPABASE_LEADS_TABLE}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          id: record.id,
          created_at: record.createdAt,
          source: record.source,
          source_label: record.sourceLabel,
          investor_type: record.investorType,
          company: record.company || null,
          contact_name: record.contactName,
          email: record.email,
          phone: record.phone,
          voivodeship: record.voivodeship,
          city: record.city || null,
          project_location: record.projectLocation || null,
          project_type: record.projectType,
          project_stage: record.projectStage,
          planned_term: record.plannedTerm || null,
          message: record.attachmentUrl
            ? `Numer zgłoszenia: ${record.referenceCode}\n\n${record.message}\n\nZałączone zdjęcie: ${record.attachmentUrl}${record.attachmentName ? ` (${record.attachmentName})` : ""}`
            : `Numer zgłoszenia: ${record.referenceCode}\n\n${record.message}`,
          rodo: record.rodo,
          referer: record.referer || null,
          user_agent: record.userAgent || null,
        }),
      },
    );

    if (response.ok) {
      return "supabase";
    }

    console.error("Lead storage fallback: Supabase insert failed", await safeText(response));
  }

  const fallbackPath = join(tmpdir(), "ziebud-expert-leads.ndjson");
  await appendFile(fallbackPath, `${JSON.stringify(record)}\n`, "utf8");
  return "local";
}

async function notifyLead(record: LeadRecord) {
  if (!RESEND_API_KEY) {
    console.info("Lead notification skipped: RESEND_API_KEY missing", record.id);
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: LEAD_FROM_EMAIL,
      to: [LEAD_NOTIFICATION_EMAIL],
      ...(isValidEmail(record.email) ? { reply_to: record.email } : {}),
      subject: `[${ORG_SHORT_NAME}] ${record.sourceLabel} — ${record.projectType} — ${record.voivodeship}`,
      text: buildLeadEmailText(record),
      html: buildLeadEmailHtml(record),
    }),
  });

  if (!response.ok) {
    console.error("Lead notification failed", await safeText(response));
  }
}

function buildLeadEmailText(record: LeadRecord) {
  return [
    `${record.sourceLabel} (${record.referenceCode})`,
    "",
    `ID techniczne: ${record.id}`,
    `Kontakt: ${record.contactName}`,
    `Firma: ${record.company || "-"}`,
    `E-mail: ${record.email}`,
    `Telefon: ${record.phone}`,
    `Województwo: ${record.voivodeship}`,
    `Miasto / lokalizacja: ${record.city || "-"} ${record.projectLocation || ""}`.trim(),
    `Zakres: ${record.projectType}`,
    `Etap: ${record.projectStage}`,
    `Termin: ${record.plannedTerm || "-"}`,
    `Załączone zdjęcie: ${record.attachmentUrl || "-"}`,
    `Nazwa pliku: ${record.attachmentName || "-"}`,
    "",
    "Opis projektu:",
    record.message,
    "",
    `Źródło: ${SITE_URL}/${record.source}`,
    `Storage: ${record.storage}`,
  ].join("\n");
}

function buildLeadEmailHtml(record: LeadRecord) {
  const htmlRows = [
    ["Numer zgłoszenia", record.referenceCode],
    ["ID techniczne", record.id],
    ["Źródło", record.sourceLabel],
    ["Kontakt", record.contactName],
    ["Firma", record.company || "-"],
    ["E-mail", record.email],
    ["Telefon", record.phone],
    ["Województwo", record.voivodeship],
    ["Miasto", record.city || "-"],
    ["Lokalizacja inwestycji", record.projectLocation || "-"],
    ["Zakres", record.projectType],
    ["Etap", record.projectStage],
    ["Termin", record.plannedTerm || "-"],
    [
      "Załączone zdjęcie",
      record.attachmentUrl
        ? `<a href="${escapeAttribute(record.attachmentUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(
            record.attachmentName || "Otwórz plik",
          )}</a>`
        : "-",
    ],
    ["Storage", record.storage],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #d7deea;font-weight:600">${label}</td><td style="padding:8px 12px;border:1px solid #d7deea">${value}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#102238">
      <h2 style="margin-bottom:16px">${escapeHtml(record.sourceLabel)} (${escapeHtml(record.id)})</h2>
      <table style="border-collapse:collapse;width:100%;max-width:760px">${htmlRows}</table>
      <h3 style="margin-top:24px">Opis projektu</h3>
      <div style="padding:16px;border:1px solid #d7deea;border-radius:12px;white-space:pre-wrap">${escapeHtml(
        record.message,
      )}</div>
      <p style="margin-top:20px;color:#556274">Po wysłaniu formularza klient przechodzi do strony z instrukcją transferu dużych plików.</p>
    </div>
  `;
}

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildLeadReference(
  source: LeadSource,
  createdAt: string,
  id: string,
) {
  const date = new Date(createdAt);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const compactId = id.replaceAll("-", "");
  const numericSuffix =
    (Number.parseInt(compactId.slice(-8), 16) % 9000) + 1000;

  const prefixMap: Record<LeadSource, string> = {
    awaria: "AWR",
    zapytanie: "ZGL",
    kontakt: "KON",
    wycena: "WYC",
  };

  return `${prefixMap[source]}-${day}${month}-${numericSuffix}`;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttribute(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
}

async function safeText(response: Response) {
  try {
    return await response.text();
  } catch {
    return "No response body";
  }
}

export { COMPANY_EMAIL };

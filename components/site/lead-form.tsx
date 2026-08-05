"use client";

import {
  type FormEvent,
  type ChangeEvent,
  type ReactNode,
  useMemo,
  useState,
  useTransition,
} from "react";
import { useRouter } from "next/navigation";
import { upload } from "@vercel/blob/client";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  Paperclip,
  PhoneCall,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  investorTypeOptions,
  projectStageOptions,
  projectTypeOptions,
  type LeadSource,
  sourceLabels,
  voivodeshipOptions,
} from "@/lib/lead-data";

type LeadFormProps = {
  source: LeadSource;
  title?: string;
  description?: string;
  submitLabel?: string;
  className?: string;
};

export function LeadForm({
  source,
  title = "Zgłoś temat do wyceny lub szybkiej interwencji",
  description = "Opisz objawy, adres i typ obiektu. Po wysłaniu oddzwonimy albo przejdziemy do dalszych zdjęć, filmów i ustalenia terminu.",
  submitLabel = "Wyślij zgłoszenie",
  className,
}: LeadFormProps) {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<string[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [attachment, setAttachment] = useState<{
    url: string;
    name: string;
  } | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isPending, startTransition] = useTransition();

  const sortedAreas = useMemo(
    () => [...voivodeshipOptions].sort((a, b) => a.localeCompare(b, "pl")),
    [],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);
    setFieldErrors([]);

    const formData = new FormData(event.currentTarget);
    const payload = {
      source,
      investorType: formData.get("investorType")?.toString() ?? "",
      company: formData.get("company")?.toString() ?? "",
      contactName: formData.get("contactName")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      voivodeship: formData.get("voivodeship")?.toString() ?? "",
      city: formData.get("city")?.toString() ?? "",
      projectLocation: formData.get("projectLocation")?.toString() ?? "",
      projectType: formData.get("projectType")?.toString() ?? "",
      projectStage: formData.get("projectStage")?.toString() ?? "",
      plannedTerm: formData.get("plannedTerm")?.toString() ?? "",
      message: formData.get("message")?.toString() ?? "",
      attachmentUrl: formData.get("attachmentUrl")?.toString() ?? "",
      attachmentName: formData.get("attachmentName")?.toString() ?? "",
      rodo: formData.get("rodo") === "on",
    };

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = (await response.json()) as
      | { ok: true; leadId: string; referenceCode: string }
      | { ok: false; errors?: string[]; message?: string };

    if (!response.ok || result.ok === false) {
      const errorResult = result as {
        ok: false;
        errors?: string[];
        message?: string;
      };
      setFieldErrors(errorResult.errors ?? []);
      setServerError(
        errorResult.message ??
          "Nie udało się wysłać formularza. Sprawdź pola i spróbuj ponownie.",
      );
      return;
    }

    startTransition(() => {
      router.push(
        `/zapytanie/dziekujemy?ref=${encodeURIComponent(
          result.referenceCode,
        )}&lead=${encodeURIComponent(result.leadId)}&source=${encodeURIComponent(
          source,
        )}`,
      );
    });
  }

  async function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setUploadError(null);

    if (!file) return;

    setIsUploading(true);
    setUploadProgress(0);

    try {
      const result = await upload(buildAttachmentPath(file.name), file, {
        access: "public",
        contentType: file.type || undefined,
        clientPayload: JSON.stringify({ source }),
        handleUploadUrl: "/api/uploads/lead-photo",
        onUploadProgress(progress) {
          setUploadProgress(Math.round(progress.percentage));
        },
      });

      setAttachment({
        url: result.url,
        name: file.name,
      });
    } catch (error) {
      console.error("Lead attachment upload error", error);
      setUploadError(
        "Nie udało się dodać zdjęcia. Formularz nadal możesz wysłać bez załącznika.",
      );
      setAttachment(null);
    } finally {
      setIsUploading(false);
      setUploadProgress(null);
      event.currentTarget.value = "";
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={[
        "rounded-[28px] border border-border bg-white p-7 shadow-[0_24px_60px_-24px_rgba(10,22,40,0.24)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <input type="hidden" name="source" value={source} />

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-700">
            {sourceLabels[source]}
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-navy-900">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-navy-700">
            {description}
          </p>
        </div>
        <span className="hidden rounded-2xl bg-aqua-50 p-3 text-aqua-700 sm:inline-flex">
          <PhoneCall className="h-5 w-5" />
        </span>
      </div>

      {serverError || fieldErrors.length > 0 ? (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <div className="flex items-start gap-2">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <div>
              {serverError ? <p>{serverError}</p> : null}
              {fieldErrors.length > 0 ? (
                <ul className="mt-1 space-y-1">
                  {fieldErrors.map((error) => (
                    <li key={error}>• {error}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      {attachment ? (
        <>
          <input type="hidden" name="attachmentUrl" value={attachment.url} />
          <input type="hidden" name="attachmentName" value={attachment.name} />
        </>
      ) : null}

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Field label="Typ klienta" required>
          <select
            name="investorType"
            required
            className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm text-navy-900"
            defaultValue=""
          >
            <option value="" disabled>
              Wybierz typ klienta
            </option>
            {investorTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Nazwa firmy / wspólnoty / obiektu">
          <Input
            name="company"
            placeholder="np. Wspólnota Zielona 12 / Restauracja / Magazyn"
          />
        </Field>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Field label="Osoba kontaktowa" required>
          <Input name="contactName" placeholder="Imię i nazwisko" required />
        </Field>
        <Field label="Telefon" required>
          <Input name="phone" type="tel" placeholder="+48 602 481 688" required />
        </Field>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Field label="E-mail" required>
          <Input name="email" type="email" placeholder="twoj@adres.pl" required />
        </Field>
        <Field label="Preferowany termin">
          <Input name="plannedTerm" placeholder="np. dziś / jutro / w tym tygodniu" />
        </Field>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <Field label="Region" required>
          <select
            name="voivodeship"
            required
            className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm text-navy-900"
            defaultValue=""
          >
            <option value="" disabled>
              Wybierz region
            </option>
            {sortedAreas.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Miasto">
          <Input name="city" placeholder="np. Wrocław" />
        </Field>
        <Field label="Adres / obiekt">
          <Input
            name="projectLocation"
            placeholder="np. osiedle, lokal, magazyn, parking"
          />
        </Field>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Field label="Zakres usługi" required>
          <select
            name="projectType"
            required
            className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm text-navy-900"
            defaultValue=""
          >
            <option value="" disabled>
              Wybierz zakres
            </option>
            {projectTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Pilność / etap" required>
          <select
            name="projectStage"
            required
            className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm text-navy-900"
            defaultValue=""
          >
            <option value="" disabled>
              Wybierz pilność
            </option>
            {projectStageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Opis problemu / zlecenia" required className="mt-4">
        <Textarea
          name="message"
          required
          rows={6}
          placeholder="Opisz, co się dzieje: zator, cofka, alarm, zapach, zalanie, niedrożny wpust albo potrzeba serwisu. Napisz też, od kiedy trwa problem i czego oczekujesz."
        />
      </Field>

      <Field label="Zdjęcie awarii / miejsca zgłoszenia" className="mt-4">
        <div className="rounded-2xl border border-border bg-muted/30 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-navy-900">
                Opcjonalny załącznik do formularza
              </p>
              <p className="mt-1 text-sm leading-relaxed text-navy-700">
                Jedno zdjęcie pomaga szybciej ocenić zator, studzienkę, cofkę,
                zalanie albo dostęp do obiektu.
              </p>
              <p className="mt-2 text-xs text-navy-600">
                JPG, PNG, WEBP, HEIC lub HEIF · do 10 MB
              </p>
            </div>
            <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-aqua-200 bg-white px-4 py-2.5 text-sm font-medium text-navy-900 transition hover:border-aqua-400 hover:text-aqua-700">
              <Paperclip className="h-4 w-4" />
              {isUploading ? "Dodawanie zdjęcia..." : "Dodaj zdjęcie"}
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
                className="hidden"
                onChange={handleFileChange}
                disabled={isUploading}
              />
            </label>
          </div>

          {isUploading ? (
            <div className="mt-4 rounded-xl border border-aqua-100 bg-aqua-50/70 px-4 py-3 text-sm text-navy-800">
              <div className="flex items-center gap-2">
                <LoaderCircle className="h-4 w-4 animate-spin text-aqua-700" />
                <span>
                  Wysyłamy zdjęcie
                  {typeof uploadProgress === "number"
                    ? ` — ${uploadProgress}%`
                    : "..."}
                </span>
              </div>
            </div>
          ) : null}

          {attachment ? (
            <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  <div>
                    <p className="font-medium">Zdjęcie dodane do zgłoszenia</p>
                    <p className="mt-1 break-all text-emerald-800">
                      {attachment.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={attachment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-emerald-900 underline underline-offset-4"
                  >
                    Otwórz plik
                  </a>
                  <button
                    type="button"
                    onClick={() => setAttachment(null)}
                    className="inline-flex items-center gap-1 rounded-lg border border-emerald-200 bg-white px-3 py-1.5 text-sm font-medium text-emerald-900 transition hover:border-emerald-300"
                  >
                    <X className="h-3.5 w-3.5" />
                    Usuń
                  </button>
                </div>
              </div>
            </div>
          ) : null}

          {uploadError ? (
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              {uploadError}
            </div>
          ) : null}
        </div>
      </Field>

      <div className="mt-5 rounded-2xl border border-aqua-100 bg-aqua-50/60 px-4 py-3 text-sm leading-relaxed text-navy-800">
        Po wysłaniu ustalimy kontakt zwrotny, potwierdzimy zakres i jeśli
        potrzeba, przejdziemy od razu do wyceny albo interwencji na obiekcie.
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm text-navy-700">
        <input
          type="checkbox"
          name="rodo"
          required
          className="mt-1 h-4 w-4 accent-aqua-500"
        />
        <span>
          Wyrażam zgodę na przetwarzanie danych osobowych w celu odpowiedzi na
          zapytanie i przygotowania wyceny lub kontaktu serwisowego.
        </span>
      </label>

      <Button
        type="submit"
        disabled={isPending || isUploading}
        className="mt-6 h-12 w-full bg-navy-900 text-white hover:bg-navy-800"
      >
        {isPending ? (
          <>
            <LoaderCircle className="h-4 w-4 animate-spin" />
            Wysyłanie...
          </>
        ) : (
          <>
            {submitLabel}
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}

function buildAttachmentPath(fileName: string) {
  const safeName = fileName
    .normalize("NFKD")
    .replace(/[^\w.-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

  return `lead-attachments/${Date.now()}-${safeName || "zalacznik.jpg"}`;
}

function Field({
  label,
  required,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={["block", className].filter(Boolean).join(" ")}>
      <span className="mb-1.5 block text-sm font-medium text-navy-900">
        {label}
        {required ? <span className="ml-1 text-aqua-700">*</span> : null}
      </span>
      {children}
    </label>
  );
}

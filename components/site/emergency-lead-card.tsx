"use client";

import { type ChangeEvent, type FormEvent, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { upload } from "@vercel/blob/client";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  Paperclip,
  PhoneCall,
  Siren,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function EmergencyLeadCard() {
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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);
    setFieldErrors([]);

    const formData = new FormData(event.currentTarget);
    const payload = {
      source: "awaria" as const,
      investorType: "",
      company: "",
      contactName: "",
      email: "",
      phone: formData.get("phone")?.toString() ?? "",
      voivodeship: "",
      city: "",
      projectLocation: "",
      projectType: "",
      projectStage: "",
      plannedTerm: "",
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
          "Nie udało się wysłać zgłoszenia. Sprawdź pola i spróbuj ponownie.",
      );
      return;
    }

    startTransition(() => {
      router.push(
        `/zapytanie/dziekujemy?ref=${encodeURIComponent(
          result.referenceCode,
        )}&lead=${encodeURIComponent(result.leadId)}&source=awaria`,
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
        clientPayload: JSON.stringify({ source: "awaria" }),
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
      console.error("Emergency attachment upload error", error);
      setUploadError(
        "Nie udało się dodać zdjęcia. Zgłoszenie nadal możesz wysłać bez załącznika.",
      );
      setAttachment(null);
    } finally {
      setIsUploading(false);
      setUploadProgress(null);
      event.currentTarget.value = "";
    }
  }

  return (
    <div className="relative overflow-hidden rounded-[30px] border border-aqua-300/35 bg-navy-950 p-6 text-white shadow-[0_30px_80px_-28px_rgba(0,0,0,0.65)]">
      <div
        aria-hidden
        className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-aqua-400/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-10 right-0 h-40 w-40 rounded-full bg-red-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-6 top-6 flex h-16 w-16 items-center justify-center"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500/30" />
        <span className="absolute inline-flex h-11 w-11 rounded-full bg-red-500/20" />
        <span className="relative inline-flex rounded-full bg-red-500 p-3 text-white shadow-lg shadow-red-500/35">
          <Siren className="h-5 w-5" />
        </span>
      </div>

      <div className="relative">
        <p className="inline-flex items-center gap-2 rounded-full border border-red-400/35 bg-red-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-100">
          Pilna awaria
        </p>
        <h2 className="mt-4 max-w-[16rem] font-display text-3xl font-semibold leading-tight tracking-tight">
          Zgłoś temat w 30 sekund
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-navy-100">
          Jeśli to cofka, zator, zalanie albo alarm, nie męcz się długim
          formularzem. Zostaw numer, wrzuć zdjęcie i napisz krótko, co się
          dzieje.
        </p>

        <a
          href="tel:+48602481688"
          className="mt-5 flex items-center justify-between gap-4 rounded-[22px] border border-aqua-300/25 bg-white/[0.06] px-4 py-4 transition hover:border-aqua-300/45 hover:bg-white/[0.08]"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex rounded-2xl bg-aqua-500/15 p-3 text-aqua-300">
              <PhoneCall className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-200">
                Telefon awaryjny
              </p>
              <p className="mt-1 font-display text-2xl font-semibold text-white">
                602 481 688
              </p>
            </div>
          </div>
          <ArrowRight className="h-5 w-5 text-aqua-300" />
        </a>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {attachment ? (
            <>
              <input type="hidden" name="attachmentUrl" value={attachment.url} />
              <input
                type="hidden"
                name="attachmentName"
                value={attachment.name}
              />
            </>
          ) : null}

          {(serverError || fieldErrors.length > 0) && (
            <div className="rounded-2xl border border-red-400/25 bg-red-500/10 px-4 py-3 text-sm text-red-50">
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
          )}

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-white">
              Numer telefonu <span className="ml-1 text-red-300">*</span>
            </span>
            <input
              name="phone"
              type="tel"
              required
              placeholder="+48 602 481 688"
              className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 text-base text-white placeholder:text-navy-300 focus:border-aqua-300 focus:outline-none"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-white">
              Krótki opis <span className="ml-1 text-red-300">*</span>
            </span>
            <Textarea
              name="message"
              required
              rows={4}
              placeholder="Np. cofka w piwnicy, zapchane WC, wybija ze studzienki, alarm na przepompowni."
              className="border-white/10 bg-white/[0.06] text-white placeholder:text-navy-300"
            />
          </label>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-white">Wrzuć zdjęcie</p>
                <p className="mt-1 text-sm leading-relaxed text-navy-100">
                  Jedno zdjęcie często wystarcza, żeby szybciej ocenić sytuację.
                </p>
                <p className="mt-2 text-xs text-navy-300">
                  JPG, PNG, WEBP, HEIC lub HEIF · do 10 MB
                </p>
              </div>
              <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-aqua-300/30 bg-white px-4 py-2.5 text-sm font-medium text-navy-900 transition hover:border-aqua-300 hover:text-aqua-700">
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
              <div className="mt-4 rounded-xl border border-aqua-300/20 bg-aqua-400/10 px-4 py-3 text-sm text-aqua-50">
                <div className="flex items-center gap-2">
                  <LoaderCircle className="h-4 w-4 animate-spin text-aqua-300" />
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
              <div className="mt-4 rounded-xl border border-emerald-300/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-50">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    <div>
                      <p className="font-medium">Zdjęcie dodane</p>
                      <p className="mt-1 break-all text-emerald-100">
                        {attachment.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={attachment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-emerald-50 underline underline-offset-4"
                    >
                      Otwórz plik
                    </a>
                    <button
                      type="button"
                      onClick={() => setAttachment(null)}
                      className="inline-flex items-center gap-1 rounded-lg border border-emerald-300/25 bg-white/10 px-3 py-1.5 text-sm font-medium text-emerald-50 transition hover:border-emerald-300/40"
                    >
                      <X className="h-3.5 w-3.5" />
                      Usuń
                    </button>
                  </div>
                </div>
              </div>
            ) : null}

            {uploadError ? (
              <div className="mt-4 rounded-xl border border-amber-300/25 bg-amber-500/10 px-4 py-3 text-sm text-amber-50">
                {uploadError}
              </div>
            ) : null}
          </div>

          <label className="flex items-start gap-3 text-sm text-navy-100">
            <input
              type="checkbox"
              name="rodo"
              required
              className="mt-1 h-4 w-4 accent-aqua-400"
            />
            <span>
              Wyrażam zgodę na przetwarzanie danych osobowych w celu kontaktu w
              sprawie pilnego zgłoszenia.
            </span>
          </label>

          <Button
            type="submit"
            disabled={isPending || isUploading}
            className="h-12 w-full bg-aqua-500 text-navy-950 hover:bg-aqua-400"
          >
            {isPending ? (
              <>
                <LoaderCircle className="h-4 w-4 animate-spin" />
                Wysyłanie...
              </>
            ) : (
              <>
                Wyślij pilne zgłoszenie
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}

function buildAttachmentPath(fileName: string) {
  const safeName = fileName
    .normalize("NFKD")
    .replace(/[^\w.-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

  return `lead-attachments/${Date.now()}-${safeName || "awaria.jpg"}`;
}

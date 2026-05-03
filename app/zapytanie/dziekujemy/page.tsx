import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Camera, Mail, Phone } from "lucide-react";
import { Container } from "@/components/site/container";
import {
  COMPANY_EMAIL,
  COMPANY_PHONE_DISPLAY,
  DEFAULT_TRANSFER_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Dziękujemy za zgłoszenie",
  description:
    "Twoje zgłoszenie zostało zapisane. Sprawdź kolejny krok do przekazania zdjęć, filmu albo dodatkowych informacji o obiekcie.",
  alternates: { canonical: "/zapytanie/dziekujemy" },
};

type SearchParams = Promise<{ lead?: string; ref?: string; source?: string }>;

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { lead, ref } = await searchParams;

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="max-w-4xl">
        <div className="rounded-[32px] border border-border bg-navy-900 p-8 text-white shadow-[0_30px_80px_-30px_rgba(10,22,40,0.42)] sm:p-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-200">
            Zgłoszenie zapisane
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Dziękujemy. Mamy Twój temat.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-navy-100">
            Jeśli chcesz, doślij jeszcze zdjęcia, film albo krótkie doprecyzowanie
            sytuacji. To często skraca drogę do właściwej diagnozy i szybszej wyceny.
          </p>

          {ref || lead ? (
            <div className="mt-8 inline-flex rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm text-aqua-100">
              Numer zgłoszenia:{" "}
              <span className="ml-2 font-semibold tracking-[0.08em]">
                {ref || lead}
              </span>
            </div>
          ) : null}

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <InfoCard
              icon={<Camera className="h-5 w-5" />}
              title="Zdjęcia i film"
              text="Jeśli masz ujęcia studni, rewizji, zalania, miejsca cofki albo separatora, doślij je po zapisaniu zgłoszenia."
            />
            <InfoCard
              icon={<Mail className="h-5 w-5" />}
              title="Kontakt mailowy"
              text={`Jeśli chcesz coś dopisać, wyślij numer zgłoszenia na ${COMPANY_EMAIL} i doprecyzuj problem lub obiekt.`}
            />
            <InfoCard
              icon={<Phone className="h-5 w-5" />}
              title="Temat pilny"
              text={`W sprawach pilnych zadzwoń pod ${COMPANY_PHONE_DISPLAY} i powołaj się na zgłoszenie.`}
            />
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-200">
              Dodatkowe pliki
            </p>
            {DEFAULT_TRANSFER_URL ? (
              <>
                <p className="mt-3 text-sm leading-relaxed text-navy-100">
                  Użyj stałego linku transferowego, jeśli chcesz dosłać większą
                  paczkę zdjęć, filmów albo dokumentów technicznych.
                </p>
                <Link
                  href={DEFAULT_TRANSFER_URL}
                  className="mt-5 inline-flex rounded-full bg-aqua-500 px-5 py-3 text-sm font-semibold text-navy-900 transition hover:bg-aqua-400"
                >
                  Otwórz transfer plików
                </Link>
              </>
            ) : (
              <p className="mt-3 text-sm leading-relaxed text-navy-100">
                Jeśli trzeba dosłać większe pliki, ustalimy najwygodniejszy kanał
                po kontakcie zwrotnym albo przez e-mail.
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <div className="inline-flex rounded-2xl bg-aqua-500/10 p-3 text-aqua-300">
        {icon}
      </div>
      <h2 className="mt-4 font-display text-lg font-semibold text-white">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-navy-100">{text}</p>
    </div>
  );
}

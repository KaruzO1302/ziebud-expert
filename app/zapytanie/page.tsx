import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowRight, Clock3, MapPin, ShieldCheck } from "lucide-react";
import { Container } from "@/components/site/container";
import { EmergencyLeadCard } from "@/components/site/emergency-lead-card";
import { HeroPhoto } from "@/components/site/hero-photo";
import { LeadForm } from "@/components/site/lead-form";
import { LinkButton } from "@/components/site/link-button";
import { getPagePhoto } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Zgłoś awarię lub serwis Wrocław",
  description:
    "Aktywny formularz zgłoszeniowy dla WUKO, udrażniania rur, kamery, separatorów i przepompowni we Wrocławiu oraz okolicach.",
  alternates: { canonical: "/zapytanie" },
};

const checklist = [
  "adres obiektu lub miejsca problemu",
  "objawy: zator, cofka, zalanie, alarm, brak odbioru",
  "typ obiektu: mieszkanie, wspólnota, firma, gastronomia",
  "zdjęcia lub krótki film, jeśli masz je pod ręką",
];

export default function ZapytaniePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <HeroPhoto photo={getPagePhoto("zapytanie")} priority overlay="navy-soft" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_10%_-10%,rgba(0,212,255,0.18),transparent_70%)]"
        />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-200">
              Zgłoszenie
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
              Zgłoś awarię, zator albo temat do stałej obsługi
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-100">
              Ten formularz jest ustawiony pod Wrocław i okolice. Zbieramy
              objawy, adres i typ obiektu, żeby od razu dobrać właściwy sprzęt,
              zakres usługi i kontakt zwrotny.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div className="space-y-5 lg:sticky lg:top-24">
              <EmergencyLeadCard />

              <InfoBox
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Co przygotować"
                content={
                  <ul className="space-y-3 text-sm leading-relaxed text-navy-700">
                    {checklist.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                }
              />

              <InfoBox
                icon={<Clock3 className="h-5 w-5" />}
                title="Jak to działa"
                content={
                  <ol className="space-y-3 text-sm leading-relaxed text-navy-700">
                    <li>1. Wypełniasz formularz i opisujesz problem.</li>
                    <li>2. Dobieramy usługę, pilność i zakres kontaktu.</li>
                    <li>3. Wracamy z terminem, wyceną albo pytaniami doprecyzowującymi.</li>
                  </ol>
                }
              />

              <InfoBox
                icon={<MapPin className="h-5 w-5" />}
                title="Obszar działania"
                content={
                  <>
                    <p className="text-sm leading-relaxed text-navy-700">
                      Formularz jest ustawiony pod Wrocław i okolice. Jeśli
                      temat jest pilny, po wysłaniu zgłoszenia możesz od razu
                      zadzwonić i podać numer kontaktowy z formularza.
                    </p>
                    <LinkButton
                      href="tel:+48602481688"
                      className="mt-5 inline-flex bg-navy-900 text-white hover:bg-navy-800"
                    >
                      602 481 688
                      <ArrowRight className="h-4 w-4" />
                    </LinkButton>
                  </>
                }
              />
            </div>

            <LeadForm
              source="zapytanie"
              title="Spokojne zgłoszenie, wycena albo temat do stałej obsługi"
              description="Ten formularz jest dla tematów, które wymagają pełniejszego opisu: wspólnoty, firmy, serwis planowany, wycena albo szersza diagnoza obiektu."
            />
          </div>
        </Container>
      </section>
    </>
  );
}

function InfoBox({
  icon,
  title,
  content,
}: {
  icon: ReactNode;
  title: string;
  content: ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-border bg-muted p-7">
      <div className="flex items-center gap-3">
        <span className="rounded-2xl bg-aqua-50 p-3 text-aqua-700">{icon}</span>
        <h2 className="font-display text-xl font-semibold text-navy-900">
          {title}
        </h2>
      </div>
      <div className="mt-5">{content}</div>
    </div>
  );
}

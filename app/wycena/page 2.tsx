import type { Metadata } from "next";
import { Calculator, Clock3, FileText } from "lucide-react";
import { LeadForm } from "@/components/site/lead-form";
import { Container } from "@/components/site/container";
import { HeroPhoto } from "@/components/site/hero-photo";
import { getPagePhoto } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Wycena inwestycji — brief pod sieci zewnętrzne",
  description:
    "Prześlij krótki brief inwestycji i rozpocznij wycenę dla wodociągów, kanalizacji, retencji, przepompowni i robót towarzyszących.",
  alternates: { canonical: "/wycena" },
};

const reasons = [
  {
    icon: Calculator,
    title: "Wycena oparta na zakresie",
    text: "Nie obiecujemy kalkulatora z sufitu. Zbieramy dane, które naprawdę wpływają na wycenę i późniejszą realizację.",
  },
  {
    icon: FileText,
    title: "Dokumentacja mile widziana",
    text: "Jeśli masz rysunki, profile lub opis inwestycji, po briefie przeprowadzimy Cię do kolejnego kroku przekazania plików.",
  },
  {
    icon: Clock3,
    title: "Szybsza decyzja",
    text: "Krótki formularz porządkuje temat i pozwala szybciej wrócić z sensowną odpowiedzią niż przy ogólnym mailu bez zakresu.",
  },
];

export default function WycenaPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <HeroPhoto photo={getPagePhoto("wycena")} priority overlay="navy-soft" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_10%_-10%,rgba(0,212,255,0.18),transparent_70%)]"
        />
        <Container className="relative py-20 sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-200">
            Wycena inwestycji
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
            Zacznij od krótkiego briefu zamiast ogólnego maila
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-100">
            Ta strona działa jako szybkie wejście do wyceny. Zbieramy kluczowe
            informacje o inwestycji, a potem przechodzimy do dokumentacji i
            dalszej analizy.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div className="grid gap-5">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="rounded-3xl border border-border bg-muted p-7"
                >
                  <div className="inline-flex rounded-2xl bg-aqua-50 p-3 text-aqua-700">
                    <reason.icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 font-display text-xl font-semibold text-navy-900">
                    {reason.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-navy-700">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>

            <LeadForm
              source="wycena"
              title="Krótki brief do wyceny"
              description="Wskaż lokalizację, zakres, etap i termin. Po wysłaniu podamy kolejny krok do dokumentacji projektowej."
              submitLabel="Rozpocznij wycenę"
            />
          </div>
        </Container>
      </section>
    </>
  );
}

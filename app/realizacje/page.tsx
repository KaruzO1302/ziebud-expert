import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { CaseStudyCard } from "@/components/site/content-cards";
import { HeroPhoto } from "@/components/site/hero-photo";
import { caseStudies } from "@/lib/case-studies-data";

export const metadata: Metadata = {
  title: "Realizacje — sieci zewnętrzne, retencja i obiekty techniczne",
  description:
    "Anonimowe case studies z budowy sieci wodociągowych, kanalizacji, retencji, przepompowni i robót bezwykopowych w całej Polsce.",
  alternates: { canonical: "/realizacje" },
  robots: { index: false, follow: false },
};

export default function RealizacjePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <HeroPhoto
          photo={{
            src: "/photos/banery/realizacje-udraznianie-spirala.webp",
            alt: "Udrażnianie rur kanalizacyjnych spiralą elektryczną — realizacja ZIĘBUD Expert Wrocław",
            source: "owned",
          }}
          priority
          overlay="navy-soft"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_10%_-10%,rgba(0,212,255,0.18),transparent_70%)]"
        />
        <Container className="relative py-20 sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-200">
            Realizacje
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
            Przykłady projektów, które pokazują jak pracujemy na dokumentacji i
            zakresie
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-100">
            Pokazujemy anonimowe studia przypadków z całej Polski. Bez nadmiaru
            marketingu, za to z naciskiem na zakres, ryzyka, logistykę i efekt
            dla inwestora.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

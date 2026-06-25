import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { HeroPhoto } from "@/components/site/hero-photo";
import { CostCalculator } from "@/components/site/cost-calculator";
import { CtaPanel } from "@/components/site/sections/cta-panel";

export const metadata: Metadata = {
  title: "Kalkulator kosztów kanalizacji — cena za metr",
  description:
    "Interaktywny kalkulator kosztów budowy kanalizacji sanitarnej. Przesuń suwak głębokości i zobacz cenę za metr bieżący z rozbiciem: wykop, szalunki, rura, odwodnienie.",
  alternates: { canonical: "/kalkulator" },
  robots: { index: false, follow: false },
};

export default function KalkulatorPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <HeroPhoto
          photo={{
            src: "/photos/adobe-panorama-budowy.jpeg",
            alt: "Plac budowy sieci wod-kan we Wrocławiu — kalkulator kosztów usług",
            source: "owned",
          }}
          priority
          overlay="navy-deep"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,rgba(0,212,255,0.18),transparent_70%)]"
        />
        <Container className="relative py-20 sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-200">
            Kalkulator kosztów
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
            Ile kosztuje metr kanalizacji?
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
            Wybierz głębokość, średnicę i warunki — kalkulator pokaże orientacyjną
            cenę za metr bieżący z pełnym rozbiciem pozycji.
          </p>
        </Container>
      </section>

      <CostCalculator />
      <CtaPanel />
    </>
  );
}

import type { Metadata } from "next";
import { Calculator, Clock3, FileText } from "lucide-react";
import { Container } from "@/components/site/container";
import { HeroPhoto } from "@/components/site/hero-photo";
import { LeadForm } from "@/components/site/lead-form";

export const metadata: Metadata = {
  title: "Wycena serwisu kanalizacji Wrocław",
  description:
    "Wyślij krótki brief do wyceny WUKO, czyszczenia kanalizacji, kamery, separatora lub przepompowni we Wrocławiu.",
  alternates: { canonical: "/wycena" },
};

const reasons = [
  {
    icon: Calculator,
    title: "Wycena oparta na realnym zakresie",
    text: "Nie obiecujemy cennika z sufitu. Najpierw ustalamy typ obiektu, objawy, dostęp i to, czy wchodzi WUKO, kamera albo serwis obiektowy.",
  },
  {
    icon: FileText,
    title: "Zdjęcia i opis robią różnicę",
    text: "Jeśli masz zdjęcia, film albo krótki opis sytuacji, dużo szybciej łapiemy, jaki sprzęt i jaka skala pracy będą potrzebne.",
  },
  {
    icon: Clock3,
    title: "Szybsza decyzja po stronie klienta",
    text: "Krótki formularz porządkuje temat i pozwala wrócić z konkretem zamiast prowadzić kilka rozmów o tym samym.",
  },
];

export default function WycenaPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <HeroPhoto
          photo={{
            src: "/photos/biuro-wycena.jpg",
            alt: "Przygotowanie wyceny robót kanalizacyjnych w biurze ZIĘBUD Expert Wrocław",
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
            Wycena
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
            Wyceń serwis, czyszczenie albo obsługę obiektu
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-100">
            Formularz służy do wyceny WUKO, udrażniania rur, inspekcji TV,
            separatorów i przepompowni. Im dokładniejszy opis miejsca, objawów
            i typu obiektu, tym szybciej możemy przygotować właściwy zakres prac.
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
              description="Wskaż adres, zakres, typ obiektu i pilność. Po wysłaniu wrócimy z kontaktem, zakresem albo pytaniami doprecyzowującymi."
              submitLabel="Rozpocznij wycenę"
            />
          </div>
        </Container>
      </section>
    </>
  );
}

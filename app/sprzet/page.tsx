import type { Metadata } from "next";
import {
  ArrowRight,
  Camera,
  Droplets,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/site/container";
import { HeroPhoto } from "@/components/site/hero-photo";
import { LinkButton } from "@/components/site/link-button";
import { CtaPanel } from "@/components/site/sections/cta-panel";
import { getPagePhoto } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Sprzęt WUKO i kamera kanalizacyjna Wrocław",
  description:
    "Zobacz jakim sprzętem ZIEBUD Expert obsługuje Wrocław i okolice: WUKO, kamera do kanalizacji, udrażnianie punktowe, separatory i przepompownie.",
  alternates: { canonical: "/sprzet" },
};

const equipment = [
  {
    icon: Truck,
    title: "WUKO do większych odcinków i cięższych zanieczyszczeń",
    text: "To zaplecze pod wspólnoty, firmy, place, wpusty, studnie, deszczówkę i odcinki, gdzie zwykłe przepchanie zatoru nic nie załatwia.",
  },
  {
    icon: Camera,
    title: "Kamera do inspekcji TV i diagnozy przyczyny",
    text: "Nie chcemy kończyć na informacji „jest drożne”. Kamera pokazuje, czy problemem jest tłuszcz, korzenie, załamanie, pęknięcie albo zły spadek.",
  },
  {
    icon: Wrench,
    title: "Sprzęt do punktowego udrażniania i szybkich interwencji",
    text: "Przy małych i średnich zatorach liczy się precyzja. Nie każdy temat wymaga dużego auta, czasem lepiej wejść szybciej i lżej.",
  },
  {
    icon: Droplets,
    title: "Obsługa separatorów i przepompowni",
    text: "To ważne dla gastronomii, parkingów, warsztatów i obiektów technicznych, które potrzebują regularnego serwisu, a nie tylko awaryjnego telefonu.",
  },
];

const reasons = [
  "dobór metody do objawu i typu obiektu, nie przypadkowa wycena przez telefon",
  "większa szansa na zamknięcie problemu przy pierwszej wizycie",
  "czytelniejsze rekomendacje dla zarządcy, firmy i technicznego po stronie klienta",
  "mniej zgadywania, więcej konkretu: czyszczenie, kamera, serwis albo plan kolejnej wizyty",
];

const scenarios = [
  {
    label: "Wybicie ścieków w budynku",
    answer: "Najczęściej wchodzi szybkie udrażnianie albo WUKO, a potem kontrola, czy problem nie siedzi głębiej w poziomie lub pionie.",
  },
  {
    label: "Separator w gastronomii lub parkingu",
    answer: "Tu sprzęt ma pracować pod regularny serwis i porządek eksploatacyjny, nie dopiero po cofce i zapachu.",
  },
  {
    label: "Powracający zator mimo wcześniejszych wizyt",
    answer: "To sygnał, że samo przepchanie nie wystarczy. Dokładamy kamerę i pokazujemy źródło problemu.",
  },
];

export default function SprzetPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <HeroPhoto photo={getPagePhoto("sprzet")} priority overlay="navy-soft" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_10%_-10%,rgba(0,212,255,0.18),transparent_70%)]"
        />
        <Container className="relative py-20 sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-200">
            Sprzęt i zaplecze
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
            Pokazujemy sprzęt, bo to on decyduje czy temat kończy się raz, czy wraca za tydzień
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-100">
            W lokalnym SEO prawie każdy pisze „profesjonalny sprzęt”. My wolimy
            pokazać, pod jakie problemy dobieramy WUKO, kamerę, punktowe
            udrażnianie i serwis obiektów technicznych.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {equipment.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-border bg-muted p-6 shadow-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-aqua-400">
                  <item.icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-display text-xl font-semibold text-navy-900">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-navy-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-muted py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
                Dlaczego to ważne
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Sprzęt ma wzmacniać diagnozę i przewidywalność pracy
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-700">
                To ważne szczególnie dla wspólnot, gastronomii, warsztatów,
                parkingów i obiektów, gdzie jedna zła decyzja oznacza kolejną
                awarię, pretensje mieszkańców albo przestój lokalu.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton
                  href="/zapytanie"
                  className="bg-navy-900 text-white hover:bg-navy-800"
                >
                  Zgłoś temat
                  <ArrowRight className="h-4 w-4" />
                </LinkButton>
                <LinkButton
                  href="/dla-wspolnot-i-firm"
                  variant="outline"
                  className="border-navy-200 bg-white text-navy-900 hover:bg-navy-50"
                >
                  Dla wspólnot i firm
                </LinkButton>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-border bg-white p-5 shadow-soft"
                >
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 text-aqua-600" />
                    <p className="text-sm font-semibold leading-relaxed text-navy-900">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
            Dobór metody
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Najpierw objaw i obiekt, potem właściwy sprzęt
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {scenarios.map((scenario) => (
              <div
                key={scenario.label}
                className="rounded-[24px] border border-border bg-muted p-6 shadow-soft"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aqua-700">
                  {scenario.label}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-navy-700">
                  {scenario.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaPanel />
    </>
  );
}

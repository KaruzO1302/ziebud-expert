import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  CalendarClock,
  ClipboardCheck,
  Flame,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/site/container";
import { HeroPhoto } from "@/components/site/hero-photo";
import { LinkButton } from "@/components/site/link-button";
import { CtaPanel } from "@/components/site/sections/cta-panel";
import { getPagePhoto } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Umowy serwisowe kanalizacji Wrocław",
  description:
    "Umowy serwisowe dla wspólnot, firm, gastronomii i obiektów technicznych we Wrocławiu: WUKO, inspekcja TV, separatory i przepompownie.",
  alternates: { canonical: "/umowy-serwisowe" },
};

const packages = [
  {
    name: "Basic",
    title: "Dla obiektów, które chcą uporządkować minimum serwisowe",
    items: [
      "przegląd i czyszczenie w ustalonej częstotliwości",
      "priorytetowe terminy względem zgłoszeń ad hoc",
      "krótkie zalecenia po wizycie",
    ],
  },
  {
    name: "Standard",
    title: "Dla wspólnot, gastronomii i firm z większą powtarzalnością zgłoszeń",
    items: [
      "harmonogram kilku wizyt w roku",
      "łączenie WUKO z kamerą i kontrolą newralgicznych punktów",
      "czytelniejsze planowanie budżetu i prac technicznych",
    ],
  },
  {
    name: "Priorytet",
    title: "Dla obiektów, które nie chcą działać wyłącznie po awarii",
    items: [
      "stały tryb współpracy i pierwszeństwo reakcji",
      "większy nacisk na raport, zdjęcia i rekomendacje kolejnych kroków",
      "model pod obiekty o wysokiej odpowiedzialności operacyjnej",
    ],
  },
];

const targetGroups = [
  {
    icon: Building2,
    title: "Wspólnoty i spółdzielnie",
    text: "Piony, poziomy, piwnice, wpusty, studnie i tematy, które wracają, gdy nikt nie pilnuje harmonogramu.",
  },
  {
    icon: Flame,
    title: "Gastronomia i retail",
    text: "Separatory tłuszczu, odpływy kuchenne i zaplecza, gdzie jedna cofka potrafi zatrzymać lokal.",
  },
  {
    icon: ShieldCheck,
    title: "Parkingi, warsztaty i obiekty techniczne",
    text: "Separatory ropopochodne, przepompownie, odwodnienia i miejsca, które muszą być pod kontrolą, nie tylko po awarii.",
  },
];

const benefits = [
  "mniej zgłoszeń w trybie kryzysowym i mniej improwizacji",
  "jedna historia obiektu zamiast każdorazowego tłumaczenia od zera",
  "łatwiejsza komunikacja z zarządcą, administracją i technicznymi",
  "lepsza przewidywalność kosztów niż przy pojedynczych, przypadkowych wezwaniach",
];

export default function UmowySerwisowePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <HeroPhoto
          photo={getPagePhoto("umowy-serwisowe")}
          priority
          overlay="navy-soft"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_10%_-10%,rgba(0,212,255,0.18),transparent_70%)]"
        />
        <Container className="relative py-20 sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-200">
            Umowy serwisowe
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
            Zamiast dzwonić dopiero po awarii, ustaw stałą obsługę kanalizacji i obiektu
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-100">
            To kierunek pod wspólnoty, firmy, gastronomię i obiekty techniczne,
            które chcą przejść z trybu reagowania na tryb kontroli:
            harmonogram, przewidywalność i lepsza dokumentacja po pracy.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-5 xl:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="rounded-[28px] border border-border bg-muted p-6 shadow-soft"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
                  {pkg.name}
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-navy-900">
                  {pkg.title}
                </h2>
                <div className="mt-6 space-y-3">
                  {pkg.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-border bg-white px-4 py-4 text-sm leading-relaxed text-navy-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
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
                Kto korzysta najmocniej
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Umowy serwisowe są najmocniejsze tam, gdzie awaria blokuje ludzi albo biznes
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-700">
                To nie jest strona dla każdego. To model współpracy dla
                obiektów, które mają powtarzalne ryzyka i wolą planować niż
                wracać do tego samego problemu co kilka tygodni.
              </p>
            </div>

            <div className="grid gap-4">
              {targetGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[24px] border border-border bg-white p-5 shadow-soft"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-aqua-400">
                      <group.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-navy-900">
                        {group.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy-700">
                        {group.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
                Co zyskujesz
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Mniej chaosu, więcej przewidywalności
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-border bg-muted p-5 shadow-soft"
                >
                  <div className="flex items-start gap-3">
                    <ClipboardCheck className="mt-0.5 h-5 w-5 text-aqua-600" />
                    <p className="text-sm font-semibold leading-relaxed text-navy-900">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-[28px] border border-aqua-100 bg-aqua-50/70 p-6 shadow-soft">
            <div className="flex items-start gap-3">
              <CalendarClock className="mt-0.5 h-5 w-5 text-aqua-700" />
              <div>
                <p className="font-semibold text-navy-900">
                  Zakres umowy ustalamy po typie obiektu, skali problemów i częstotliwości serwisu.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy-700">
                  Nie wciskamy gotowca każdemu. Inaczej wygląda wspólnota z
                  powtarzalnymi zatorami, inaczej restauracja z separatorem, a
                  jeszcze inaczej obiekt techniczny z przepompownią.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton
              href="/zapytanie"
              className="bg-navy-900 text-white hover:bg-navy-800"
            >
              Zapytaj o model serwisowy
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <LinkButton
              href="/dla-wspolnot-i-firm"
              variant="outline"
              className="border-navy-200 bg-white text-navy-900 hover:bg-navy-50"
            >
              Zobacz ofertę B2B
            </LinkButton>
          </div>
        </Container>
      </section>

      <CtaPanel />
    </>
  );
}

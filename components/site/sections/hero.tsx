import {
  ArrowRight,
  Building2,
  Camera,
  Factory,
  Flame,
  Phone,
  TriangleAlert,
} from "lucide-react";
import { Container } from "@/components/site/container";
import { LinkButton } from "@/components/site/link-button";
import { HeroPhoto } from "@/components/site/hero-photo";
import { SlaBadge } from "@/components/site/sla-badge";
import { photos } from "@/lib/photos";

const clientTypes = [
  {
    label: "Wspólnoty i spółdzielnie",
    icon: Building2,
    desc: "Piony, poziomy, piwnice, separatory i przeglądy okresowe.",
  },
  {
    label: "Firmy i gastronomia",
    icon: Factory,
    desc: "Lokale, zaplecza kuchenne, obiekty techniczne i place.",
  },
  {
    label: "Domy i osiedla",
    icon: Flame,
    desc: "Udrażnianie, inspekcje TV i szybkie interwencje na miejscu.",
  },
  {
    label: "Inwestorzy i obiekty",
    icon: TriangleAlert,
    desc: "Przyłącza, przepompownie i stała obsługa serwisowa.",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-50 text-navy-900">
      <HeroPhoto
        photo={photos.heroHomepageZiebud}
        priority
        overlay="bright-soft"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_42%_36%_at_74%_18%,rgba(0,212,255,0.1),transparent_72%),linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.2))]"
      />
      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-aqua-200 bg-white/85 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-800 shadow-soft">
              ZIĘBUD Expert · Wrocław i okolice
            </span>
            <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.03] tracking-tight text-navy-950 sm:text-5xl lg:text-[60px]">
              Pogotowie kanalizacyjne Wrocław{" "}
              <span className="block text-aqua-700">WUKO i udrażnianie rur</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-700">
              Profesjonalne usługi kanalizacyjne we Wrocławiu i okolicach.
              Obsługujemy czyszczenie kanalizacji WUKO, inspekcję TV,
              separatory i przepompownie. Pracujemy w oparciu o doświadczenie
              od 1991 roku.
            </p>

            <div className="mt-6">
              <SlaBadge variant="hero" />
            </div>

            <div className="mt-9 hidden flex-col gap-3 sm:flex-row md:flex">
              <LinkButton
                href="tel:+48602481688"
                size="lg"
                className="group bg-aqua-500 text-navy-950 hover:bg-aqua-400 shadow-[0_16px_40px_-18px_rgba(0,126,153,0.65)]"
              >
                <Phone className="h-4 w-4" />
                Zadzwoń: 602 481 688
              </LinkButton>
              <LinkButton
                href="/zapytanie"
                size="lg"
                variant="outline"
                className="border-navy-200 bg-white/85 text-navy-900 hover:bg-white"
              >
                Zgłoś awarię
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </LinkButton>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[34px] border border-white bg-white/88 p-6 shadow-[0_28px_80px_-42px_rgba(10,22,40,0.42)] backdrop-blur-md">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_65%_90%_at_50%_0%,rgba(0,212,255,0.18),transparent_75%)]"
              />
              <div className="relative rounded-[28px] border border-navy-100 bg-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-700">
                      Jak działamy
                    </p>
                    <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-navy-950">
                      Zgłoszenie, diagnoza, akceptacja zakresu i wykonanie
                      usługi bez zbędnego chaosu.
                    </h2>
                  </div>
                  <Camera className="h-6 w-6 shrink-0 text-aqua-700" />
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "1. Zgłoszenie awarii telefonicznie lub przez formularz.",
                    "2. Dojazd i diagnoza na miejscu, w razie potrzeby z kamerą TV.",
                    "3. Przedstawienie zakresu prac i ceny przed wejściem w usługę.",
                    "4. Realizacja, raport i faktura po zakończeniu prac.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-aqua-100 bg-aqua-50/70 px-4 py-4 text-sm leading-relaxed text-navy-800"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-navy-100 pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-700">
                    Główne segmenty klientów
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {clientTypes.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-navy-100 bg-white p-4 shadow-[0_16px_34px_-28px_rgba(10,22,40,0.3)]"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sun-50 text-sun-500 ring-1 ring-inset ring-sun-100">
                            <item.icon className="h-4.5 w-4.5" />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-navy-950">
                              {item.label}
                            </p>
                            <p className="mt-1 text-xs leading-relaxed text-navy-600">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 hidden flex-wrap items-center gap-x-6 gap-y-2 border-t border-navy-100 pt-8 text-xs font-medium uppercase tracking-wider text-navy-500 lg:flex">
          <span>Krzyki</span>
          <span className="text-aqua-500">·</span>
          <span>Fabryczna</span>
          <span className="text-aqua-500">·</span>
          <span>Śródmieście</span>
          <span className="text-aqua-500">·</span>
          <span>Psie Pole</span>
          <span className="text-aqua-500">·</span>
          <span>Stare Miasto</span>
          <span className="text-aqua-500">·</span>
          <span>Nadodrze</span>
        </div>
      </Container>
    </section>
  );
}

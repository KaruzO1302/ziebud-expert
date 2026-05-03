import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { LinkButton } from "@/components/site/link-button";
import { HeroPhoto } from "@/components/site/hero-photo";
import { CtaPanel } from "@/components/site/sections/cta-panel";
import { services } from "@/lib/services-data";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Technologie bezwykopowe — HDD, kraking, CIPP, mikrotunelowanie",
  description:
    "Kompleksowe technologie bezwykopowe w Polsce: HDD (przewiert sterowany), kraking, CIPP (rękaw żywiczny), mikrotunelowanie. Porównanie metod, wycena, realizacje.",
  alternates: { canonical: "/uslugi/bezwykopowe" },
  robots: { index: false, follow: false },
};

const trenchlessMethods = services.filter((s) => s.trenchless);

const comparison = [
  {
    criterion: "Zakres średnic",
    hdd: "DN50–DN1000",
    kraking: "DN50–DN600",
    cipp: "DN100–DN2500",
    mikro: "DN200–DN2500",
  },
  {
    criterion: "Maks. długość",
    hdd: "1500 m",
    kraking: "200 m",
    cipp: "500 m",
    mikro: "500 m",
  },
  {
    criterion: "Czas realizacji 100 m",
    hdd: "3–5 dni",
    kraking: "2–4 dni",
    cipp: "1–3 dni",
    mikro: "5–10 dni",
  },
  {
    criterion: "Oszczędność vs wykop",
    hdd: "−45%",
    kraking: "−38%",
    cipp: "−60%",
    mikro: "−30%",
  },
  {
    criterion: "Zastosowanie główne",
    hdd: "Nowa sieć pod przeszkodą",
    kraking: "Wymiana starej rury",
    cipp: "Renowacja istniejącej",
    mikro: "Duże średnice, zabudowa",
  },
];

const whyChooseUs = [
  "5 technologii bezwykopowych pod jednym dachem — dobieramy najlepszą",
  "Park maszynowy: wiertnice 5–80 ton, krakery, lampy UV",
  "Projekty od 100 m do 5 km — skala od osiedla do miasta",
  "Pełna dokumentacja UZP, PKP PLK, ZRiD — znamy procedury",
  "Nadzory archeologiczne i środowiskowe w obszarach chronionych",
  "Gwarancja 5-10 lat + długoterminowa trwałość materiałów (50+ lat)",
];

export default function BezwykopowePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <HeroPhoto photo={photos.heroTrenchless} priority overlay="aqua-glow" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,rgba(0,212,255,0.18),transparent_70%)]"
        />
        <Container className="relative py-20 sm:py-28">
          <nav
            aria-label="breadcrumb"
            className="flex items-center gap-2 text-xs text-navy-200"
          >
            <Link href="/" className="hover:text-aqua-300">
              Strona główna
            </Link>
            <span aria-hidden>/</span>
            <Link href="/uslugi" className="hover:text-aqua-300">
              Usługi
            </Link>
            <span aria-hidden>/</span>
            <span className="text-white">Technologie bezwykopowe</span>
          </nav>

          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-200">
            Nasza specjalność
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
            Technologie <span className="text-gradient-aqua">bezwykopowe</span>{" "}
            — 4 metody, jeden partner
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
            HDD, kraking, CIPP, mikrotunelowanie — jesteśmy w stanie pokryć
            pełne spektrum projektów bezwykopowych w Polsce. Dobieramy metodę
            do warunków i celu, a nie pod sprzęt, którym akurat dysponujemy.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <LinkButton
              href="/wycena"
              size="lg"
              className="group bg-aqua-500 text-navy-900 hover:bg-aqua-400"
            >
              Wyceń online
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </LinkButton>
            <LinkButton
              href="/kalkulator"
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              Dopasuj metodę
            </LinkButton>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
                Dlaczego my
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                4 technologie bezwykopowe, 1 zespół projektowy
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-700">
                Większość firm w Polsce specjalizuje się w jednej metodzie
                bezwykopowej i pod nią optymalizuje propozycje. My mamy wszystkie
                4 — więc rekomendacja zawsze odpowiada potrzebie Twojego
                projektu, a nie temu co akurat mamy w garażu.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {whyChooseUs.map((w) => (
                <li
                  key={w}
                  className="flex items-start gap-2.5 rounded-xl border border-border bg-muted/50 p-4 text-sm text-navy-800"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aqua-500/15 text-aqua-700">
                    <Check className="h-3 w-3" aria-hidden />
                  </span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-muted py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
              Porównanie metod
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Która metoda bezwykopowa będzie najlepsza dla Ciebie?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-700">
              Krótkie porównanie parametrów — pełną rekomendację dostaniesz po
              krótkiej rozmowie z naszym ekspertem lub przez kalkulator metody.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-white">
            <table className="w-full min-w-[700px] text-sm">
              <thead className="bg-navy-900 text-white">
                <tr>
                  <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-wider">
                    Kryterium
                  </th>
                  <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-aqua-300">
                    HDD
                  </th>
                  <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-aqua-300">
                    Kraking
                  </th>
                  <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-aqua-300">
                    CIPP
                  </th>
                  <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-aqua-300">
                    Mikrotunel
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparison.map((row) => (
                  <tr key={row.criterion}>
                    <td className="px-5 py-4 font-semibold text-navy-900">
                      {row.criterion}
                    </td>
                    <td className="px-5 py-4 tabular-nums text-navy-800">
                      {row.hdd}
                    </td>
                    <td className="px-5 py-4 tabular-nums text-navy-800">
                      {row.kraking}
                    </td>
                    <td className="px-5 py-4 tabular-nums text-navy-800">
                      {row.cipp}
                    </td>
                    <td className="px-5 py-4 tabular-nums text-navy-800">
                      {row.mikro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
              Metody szczegółowo
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Poznaj każdą technologię w szczegółach
            </h2>
          </div>

          <ul role="list" className="mt-10 grid gap-4 sm:grid-cols-2">
            {trenchlessMethods.map((m) => {
              const Icon = m.icon;
              return (
                <li key={m.slug}>
                  <Link
                    href={`/uslugi/${m.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition hover:border-aqua-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(10,22,40,0.2)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-900 ring-1 ring-inset ring-navy-100 transition group-hover:bg-navy-900 group-hover:text-aqua-400 group-hover:ring-navy-900">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="inline-flex items-center rounded-full bg-aqua-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-aqua-700">
                        Bezwykopowe
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                      {m.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-700 line-clamp-3">
                      {m.tagline}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-navy-900 transition group-hover:text-aqua-600">
                      Dowiedz się więcej
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <CtaPanel />
    </>
  );
}

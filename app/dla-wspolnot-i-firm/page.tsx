import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Factory, Flame, ShieldCheck } from "lucide-react";
import { Container } from "@/components/site/container";
import { HeroPhoto } from "@/components/site/hero-photo";
import { LinkButton } from "@/components/site/link-button";
import { getPagePhoto } from "@/lib/photos";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Obsługa kanalizacji dla wspólnot i firm Wrocław",
  description:
    "Oferta dla wspólnot mieszkaniowych i przedsiębiorstw we Wrocławiu: czyszczenie, przeglądy, separatory, przepompownie i umowy serwisowe.",
  alternates: { canonical: "/dla-wspolnot-i-firm" },
  openGraph: {
    title: "Obsługa kanalizacji dla wspólnot i firm Wrocław",
    description:
      "Oferta dla wspólnot mieszkaniowych i przedsiębiorstw we Wrocławiu: czyszczenie, przeglądy, separatory, przepompownie i umowy serwisowe.",
    url: `${SITE_URL}/dla-wspolnot-i-firm`,
    type: "website",
    images: [`${SITE_URL}/dla-wspolnot-i-firm/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Obsługa kanalizacji dla wspólnot i firm Wrocław",
    description:
      "Oferta dla wspólnot mieszkaniowych i przedsiębiorstw we Wrocławiu: czyszczenie, przeglądy, separatory, przepompownie i umowy serwisowe.",
    images: [`${SITE_URL}/dla-wspolnot-i-firm/opengraph-image`],
  },
};

const segments = [
  {
    icon: Building2,
    title: "Wspólnoty i spółdzielnie",
    text: "Piony, poziomy, studnie, wpusty, piwnice, cofki ścieków i stała obsługa budynków wielorodzinnych.",
  },
  {
    icon: Factory,
    title: "Firmy, magazyny i zakłady",
    text: "Kanały techniczne, place, odwodnienia, przepompownie i kanalizacja obiektów o większej odpowiedzialności operacyjnej.",
  },
  {
    icon: Flame,
    title: "Gastronomia i retail",
    text: "Separatory tłuszczu, odpływy kuchenne, czyszczenie planowe oraz szybkie reakcje po wybiciu ścieków.",
  },
  {
    icon: ShieldCheck,
    title: "Obiekty techniczne i parkingi",
    text: "Separatory ropopochodne, studnie, wpusty, deszczówka i plan serwisowy zamiast awaryjnego gaszenia pożarów.",
  },
];

const benefits = [
  "jeden punkt kontaktu do zgłoszeń i wycen",
  "serwis planowy zamiast ciągłych awarii",
  "kamera i zdjęcia po pracy, gdy są potrzebne",
  "lepsza komunikacja z zarządcą, administracją i technicznymi po stronie klienta",
];

const links = [
  { label: "WUKO Wrocław", href: "/uslugi/wuko-wroclaw" },
  { label: "Inspekcja TV kanalizacji", href: "/uslugi/inspekcja-tv-kanalizacji" },
  { label: "Separatory tłuszczu", href: "/uslugi/separatory-tluszczu" },
  { label: "Separatory ropopochodne", href: "/uslugi/separatory-ropopochodne" },
  { label: "Serwis przepompowni", href: "/uslugi/serwis-przepompowni" },
];

export default function DlaWspolnotIFirmPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <HeroPhoto
          photo={getPagePhoto("dla-wspolnot-i-firm")}
          priority
          overlay="navy-soft"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_10%_-10%,rgba(0,212,255,0.18),transparent_70%)]"
        />
        <Container className="relative py-20 sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-200">
            Dla wspólnot i firm
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
            Stała obsługa kanalizacji dla wspólnot, firm i obiektów technicznych
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-100">
            Obsługujemy wspólnoty, zarządców, gastronomię, firmy i obiekty
            techniczne, które potrzebują sprawnego partnera do WUKO, inspekcji
            TV, separatorów i przepompowni na terenie Wrocławia i okolic.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {segments.map((segment) => (
              <div
                key={segment.title}
                className="rounded-[28px] border border-border bg-muted p-6 shadow-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-aqua-400">
                  <segment.icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-display text-xl font-semibold text-navy-900">
                  {segment.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-navy-700">
                  {segment.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-muted py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                Co dostajesz
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Uporządkowany model współpracy dla obiektów wymagających stałej kontroli
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-700">
                Zależy nam na stabilnej i przewidywalnej obsłudze: od pierwszego
                zgłoszenia po rekomendacje po wykonanej pracy i plan kolejnych
                działań, jeśli obiekt wymaga regularnego nadzoru lub serwisu.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-border bg-white p-5 shadow-soft"
                >
                  <p className="text-sm font-semibold text-navy-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
            Najczęstsze zakresy
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Usługi, które najczęściej spinamy z obsługą obiektów
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-navy-900 transition hover:border-aqua-300 hover:text-aqua-700"
              >
                {link.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-16 text-white">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Chcesz ustawić obsługę obiektu albo wycenić serwis?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-navy-200">
              Wyślij zgłoszenie z adresem, typem obiektu i zakresem problemu.
              Ustalimy, czy wchodzi szybka interwencja, kamera czy plan stałej obsługi.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <LinkButton
                href="/zapytanie"
                size="lg"
                className="group bg-aqua-500 text-navy-900 hover:bg-aqua-400 shadow-[0_10px_40px_-12px_rgba(0,212,255,0.55)]"
              >
                Zgłoś temat
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </LinkButton>
              <LinkButton
                href="tel:+48602481688"
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                602 481 688
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

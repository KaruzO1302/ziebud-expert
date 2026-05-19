import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Droplets,
  ExternalLink,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/site/container";
import { LinkButton } from "@/components/site/link-button";
import { CtaPanel } from "@/components/site/sections/cta-panel";

export const metadata: Metadata = {
  title: {
    absolute:
      "Sprzęt do kanalizacji we Wrocławiu | Pojazdy WUKO, kamery TV, roboty frezujące | ZIEBUD Expert",
  },
  description:
    "Pojazdy WUKO, kamery samojezdne i wpychane do inspekcji TV, roboty frezujące DN 90–150. Profesjonalny park sprzętowy ZIEBUD Expert we Wrocławiu.",
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

const detailedEquipment = [
  {
    title: "Pojazdy WUKO",
    label: "Czyszczenie ciśnieniowe",
    image: {
      src: "/images/task03/sprzet-cisnieniowka.webp",
      alt: "Głowica wysokociśnieniowa w trakcie czyszczenia kanału betonowego",
    },
    text: "Specjalistyczny sprzęt wysokociśnieniowy do czyszczenia hydrodynamicznego rurociągów, wysysania urobku, pracy przy studniach, wpustach, kanalizacji deszczowej i większych odcinkach wspólnot oraz firm.",
    bullets: [
      "czyszczenie hydrodynamiczne rurociągów pod wysokim ciśnieniem",
      "jednoczesne wypłukiwanie i odbiór urobku z kanałów",
      "praca przy osadzie, piasku, tłuszczu, korzeniach i odpadach",
      "oświetlenie robocze i organizacja pracy przy zgłoszeniach awaryjnych",
    ],
    href: "/uslugi/wuko-wroclaw",
  },
  {
    title: "Kamery do inspekcji TV",
    label: "Inspekcja TV",
    image: {
      src: "/images/task03/sprzet-kamera-tv.webp",
      alt: "Kamera inspekcyjna z napędem na kołach z monitorem pokazującym wnętrze kanalizacji",
    },
    text: "Kamery wpychane i samojezdne pozwalają sprawdzić przyłącza, piony, poziomy, kolektory i miejsca, w których zator wraca mimo czyszczenia. Kamera jest etapem diagnozy, nie zgadywania.",
    bullets: [
      "inspekcja przykanalików i instalacji wewnętrznych",
      "kontrola pęknięć, korzeni, złych spadków i załamań",
      "zapis cyfrowy obrazu i materiał do decyzji zarządcy",
      "kamera po czyszczeniu WUKO lub frezowaniu twardych przeszkód",
    ],
    href: "/uslugi/inspekcja-tv-kanalizacji",
  },
  {
    title: "Roboty frezujące",
    label: "Frezowanie",
    image: {
      src: "/images/task03/sprzet-frezarka.webp",
      alt: "Frezarka korzeniowa z łańcuchami w trakcie usuwania korzeni z rury kanalizacyjnej",
    },
    text: "Przenośny sprzęt do pracy w rurach DN 90–150, kiedy w środku zostaje coś, czego woda nie ruszy: korzenie, beton, zaprawa, twarde osady albo skamieniały tłuszcz.",
    bullets: [
      "wbudowana kamera przed głowicą tnącą",
      "sterowanie przez operatora w czasie rzeczywistym",
      "wymienne głowice do różnych typów przeszkód",
      "po frezowaniu kontrola kamerą i domycie odcinka WUKO",
    ],
    href: "/uslugi/frezowanie-kanalizacji",
  },
];

const brandLinks = [
  { label: "Marki separatorów", href: "/marki-separatorow" },
  { label: "Marki przepompowni", href: "/marki-przepompowni" },
  { label: "Marki oczyszczalni", href: "/marki-oczyszczalni" },
];

const equipmentJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Sprzęt ZIEBUD Expert — pojazdy WUKO, kamery TV, roboty frezujące",
  url: "https://pogotowie-kanalizacyjne-wroclaw.com/sprzet",
  about: {
    "@type": "LocalBusiness",
    name: "ZIEBUD Expert Sp. z o.o.",
    telephone: "+48602481688",
  },
};

export default function SprzetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(equipmentJsonLd) }}
      />
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <Image
          src="/images/task03/hero-sprzet-flota.webp"
          alt="Samochód WUKO ZIEBUD Expert w Wrocławiu z ekipą pracującą przy otwartej studzience"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-900/55"
        />
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
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
              Co umiemy
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Czyszczenie ciśnieniowe, inspekcja TV i frezowanie w jednym procesie
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-700">
              Najważniejsze jest połączenie metod. Przy zatorze najpierw
              udrażniamy i czyścimy, potem diagnozujemy kamerą, a przy twardych
              przeszkodach dokładamy frezowanie.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {detailedEquipment.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[28px] border border-border bg-muted shadow-soft"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-aqua-700">
                    {item.label}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-navy-900">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-navy-700">
                    {item.text}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm text-navy-800">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-aqua-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition hover:text-aqua-700"
                  >
                    Powiązana usługa
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
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

      <section className="bg-muted py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
                Marki i urządzenia
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Sprzęt serwisowy łączymy z wiedzą o urządzeniach w obiektach
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-700">
                Separatory, przepompownie i oczyszczalnie mają różne wymagania
                serwisowe. Dlatego obok własnego sprzętu opisujemy też marki,
                które najczęściej spotykamy przy pracy.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {brandLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl border border-border bg-white p-5 text-sm font-semibold text-navy-900 shadow-soft transition hover:border-aqua-300"
                >
                  {item.label}
                  <ExternalLink className="mt-4 h-4 w-4 text-aqua-700 transition group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaPanel />
    </>
  );
}

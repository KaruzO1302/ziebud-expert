import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BadgeInfo,
  Calculator,
  CircleDollarSign,
  Phone,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/site/container";
import { HeroPhoto } from "@/components/site/hero-photo";
import { LinkButton } from "@/components/site/link-button";
import { CtaPanel } from "@/components/site/sections/cta-panel";
import { jsonLdScript } from "@/lib/jsonld";
import { getPagePhoto } from "@/lib/photos";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cennik WUKO i kanalizacji Wrocław",
  description:
    "Orientacyjny cennik usług kanalizacyjnych we Wrocławiu. WUKO, udrażnianie rur, inspekcja TV, separatory i przepompownie po indywidualnej wycenie.",
  alternates: { canonical: "/cennik" },
  openGraph: {
    title: "Cennik WUKO i kanalizacji Wrocław",
    description:
      "Orientacyjny cennik usług kanalizacyjnych we Wrocławiu. WUKO, udrażnianie rur, inspekcja TV, separatory i przepompownie po indywidualnej wycenie.",
    url: `${SITE_URL}/cennik`,
    type: "website",
    images: [`${SITE_URL}/cennik/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cennik WUKO i kanalizacji Wrocław",
    description:
      "Orientacyjny cennik usług kanalizacyjnych we Wrocławiu. WUKO, udrażnianie rur, inspekcja TV, separatory i przepompownie po indywidualnej wycenie.",
    images: [`${SITE_URL}/cennik/opengraph-image`],
  },
};

const rows = [
  {
    service: "Udrożnienie punktowe / mały zator",
    price: "od 180 zł",
    note: "mieszkanie, lokal, krótki odcinek",
  },
  {
    service: "Udrażnianie WC / pion / poziom",
    price: "od 250–350 zł",
    note: "zależnie od dostępu i długości odcinka",
  },
  {
    service: "WUKO / czyszczenie kanalizacji",
    price: "od 450–600 zł",
    note: "większe odcinki, wspólnoty, firmy, osady",
  },
  {
    service: "Inspekcja TV kanalizacji",
    price: "od 400–600 zł",
    note: "krótka diagnostyka lub kontrola po awarii",
  },
  {
    service: "Separator tłuszczu",
    price: "od 600 zł",
    note: "małe lokale i podstawowy serwis",
  },
  {
    service: "Separator ropopochodny",
    price: "od 800 zł",
    note: "zależnie od wielkości obiektu i dostępu",
  },
  {
    service: "Serwis przepompowni",
    price: "od 700 zł",
    note: "interwencja lub podstawowe czyszczenie",
  },
];

const pricingSections = [
  {
    title: "Udrażnianie rur i usuwanie zatorów",
    range: "od 180 zł do 700 zł",
    description:
      "Dotyczy małych zatorów punktowych, WC, pionów, poziomów i krótszych odcinków w mieszkaniach, lokalach oraz budynkach wielorodzinnych.",
    bullets: [
      "małe zatory w zlewie, umywalce lub odpływie",
      "WC, piony i poziomy wymagające szybkiej interwencji",
      "krótkie odcinki kanalizacji z dostępem do rewizji",
    ],
    href: "/uslugi/udraznianie-rur",
  },
  {
    title: "WUKO i czyszczenie kanalizacji",
    range: "od 450 zł do 1400 zł",
    description:
      "Ta grupa obejmuje czyszczenie hydrodynamiczne większych odcinków, studni, deszczówki, pionów wspólnot oraz przewodów z osadem, piaskiem i tłuszczem.",
    bullets: [
      "czyszczenie większych odcinków i odcinków wspólnotowych",
      "zatory z osadem, piaskiem, tłuszczem lub korzeniami",
      "serwis dla firm, gastronomii i obiektów technicznych",
    ],
    href: "/uslugi/wuko-wroclaw",
  },
  {
    title: "Inspekcja TV kanalizacji",
    range: "od 400 zł do 600 zł",
    description:
      "Inspekcja kamerą TV pozwala sprawdzić stan przewodu po awarii, przy nawracających zatorach albo przed planowaną naprawą czy szerszym serwisem.",
    bullets: [
      "kamera do rur po awarii lub wybiciu ścieków",
      "kontrola stanu przewodu przy powracającym problemie",
      "materiał i opis ustaleń po diagnostyce",
    ],
    href: "/uslugi/inspekcja-tv-kanalizacji",
  },
  {
    title: "Separatory i przepompownie",
    range: "od 600 zł do 800 zł+",
    description:
      "Dla gastronomii, parkingów, warsztatów, wspólnot i obiektów technicznych. Ostateczny koszt zależy od wielkości urządzenia, dostępu i zakresu czyszczenia.",
    bullets: [
      "separator tłuszczu dla lokali i zapleczy kuchennych",
      "separator ropopochodny przy parkingach i obiektach technicznych",
      "interwencje oraz planowy serwis przepompowni ścieków",
    ],
    href: "/dla-wspolnot-i-firm",
  },
];

const priceFactors = [
  "dostęp do instalacji, studzienki albo rewizji",
  "długość odcinka i średnica przewodu",
  "czy wystarczy udrożnienie punktowe, czy potrzebne jest WUKO",
  "czy do usługi trzeba dołączyć kamerę, lokalizację albo szerszy serwis",
  "typ obiektu: mieszkanie, wspólnota, gastronomia, firma lub obiekt techniczny",
];

const pricingGuides = [
  {
    title: "Kiedy wystarcza proste udrażnianie",
    text:
      "Jeśli problem dotyczy pojedynczego odpływu, krótkiego odcinka albo typowego zatoru w mieszkaniu, zwykle zaczynamy od udrożnienia punktowego lub pracy spiralą.",
  },
  {
    title: "Kiedy wchodzi WUKO",
    text:
      "Przy większych osadach, dłuższych odcinkach, studniach, deszczówce i nawracających problemach w budynku częściej potrzebne jest czyszczenie hydrodynamiczne.",
  },
  {
    title: "Jak wyceniamy kamerę, separator i przepompownię",
    text:
      "Tu liczy się nie tylko sam przyjazd, ale długość odcinka, wielkość urządzenia, możliwość dojazdu, dostęp do włazu i to, czy robimy samą diagnostykę, czy pełny serwis.",
  },
];

const cennikFaqs = [
  {
    q: "Ile kosztuje WUKO we Wrocławiu?",
    a: "Orientacyjnie usługa WUKO zaczyna się od 450–600 zł. Przy większych odcinkach, wspólnotach, firmach i obiektach z większą ilością osadu koszt rośnie wraz z zakresem prac.",
  },
  {
    q: "Ile kosztuje udrażnianie rur we Wrocławiu?",
    a: "Najprostsze udrożnienie punktowe zaczyna się od 180 zł. Piony, poziomy i trudniejsze zatory zwykle mieszczą się w wyższych widełkach, zależnie od dostępu i skali problemu.",
  },
  {
    q: "Czy podajecie cenę przed rozpoczęciem pracy?",
    a: "Tak. Po krótkim rozpoznaniu technicznym potwierdzamy zakres i orientacyjny koszt, zanim przejdziemy do właściwej usługi.",
  },
  {
    q: "Od czego zależy cena inspekcji TV kanalizacji?",
    a: "Na koszt wpływa długość odcinka, dostęp do instalacji i to, czy kamera jest samodzielną usługą, czy częścią większej diagnostyki po awarii albo po czyszczeniu.",
  },
  {
    q: "Czy wspólnoty i firmy wyceniacie inaczej niż mieszkania?",
    a: "Tak, bo przy wspólnotach, gastronomii i obiektach technicznych zwykle pracujemy na większych odcinkach, separatorach, przepompowniach albo kilku punktach instalacji jednocześnie.",
  },
  {
    q: "Kiedy wystarczy spirala, a kiedy potrzebne jest WUKO?",
    a: "Przy małych, lokalnych zatorach zwykle zaczynamy od prostszego udrażniania. WUKO dobieramy przy większych osadach, dłuższych odcinkach, studniach i problemach, które regularnie wracają.",
  },
  {
    q: "Jak wyceniacie separator tłuszczu albo separator ropopochodny?",
    a: "Na koszt wpływa wielkość urządzenia, dostęp do miejsca pracy, zakres czyszczenia, ilość osadu i to, czy chodzi o jednorazową interwencję, czy stały harmonogram serwisowy.",
  },
  {
    q: "Od czego zależy wycena przepompowni ścieków?",
    a: "Sprawdzamy typ obiektu, dostęp do przepompowni, stopień zabrudzenia, potrzebę wypompowania oraz to, czy chodzi o szybką awarię, czyszczenie planowe czy diagnostykę szerszego problemu.",
  },
];

const cennikFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: cennikFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function CennikPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(cennikFaqSchema)}
      />

      <section className="relative overflow-hidden bg-navy-900 text-white">
        <HeroPhoto photo={getPagePhoto("wycena")} priority overlay="navy-soft" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_10%_-10%,rgba(0,212,255,0.18),transparent_70%)]"
        />
        <Container className="relative py-20 sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-200">
            Cennik
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
            Orientacyjny cennik WUKO i usług kanalizacyjnych we Wrocławiu
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-100">
            Pokazujemy orientacyjne widełki cenowe, żeby łatwiej ocenić skalę
            usługi. Ostateczna wycena zawsze zależy od diagnozy sytuacji,
            dostępu do instalacji i rzeczywistego zakresu prac.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
                Jak czytać cennik
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Cena ma pomagać w decyzji, a nie być pułapką
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-700">
                Ostateczna wycena zależy od dostępu, długości odcinka, ilości
                osadu, typu obiektu i tego, czy potrzebna jest kamera albo
                większy samochód WUKO. Nie zmieniamy kierunku zlecenia w trakcie
                pracy bez uzgodnienia z klientem.
              </p>
              <div className="mt-6 rounded-2xl border border-aqua-100 bg-aqua-50/60 p-5 text-sm leading-relaxed text-navy-800">
                <div className="flex items-center gap-2 font-semibold text-navy-900">
                  <BadgeInfo className="h-4 w-4 text-aqua-700" />
                  Dobra praktyka ZIĘBUD Expert
                </div>
                <p className="mt-2">
                  Najpierw rozpoznanie i akceptacja zakresu, potem działanie.
                  Dzięki temu klient wie, za co płaci i gdzie kończy się
                  wyjściowa interwencja, a zaczyna szersza usługa.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton
                  href="/wycena"
                  className="bg-navy-900 text-white hover:bg-navy-800"
                >
                  <Calculator className="h-4 w-4" />
                  Poproś o wycenę
                </LinkButton>
                <LinkButton
                  href="tel:+48602481688"
                  variant="outline"
                  className="border-navy-200 bg-white text-navy-900 hover:bg-navy-50"
                >
                  <Phone className="h-4 w-4" />
                  602 481 688
                </LinkButton>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-soft">
              <table className="w-full text-sm">
                <thead className="bg-muted text-left">
                  <tr>
                    <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wider text-navy-700">
                      Usługa
                    </th>
                    <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wider text-navy-700">
                      Cena
                    </th>
                    <th className="hidden px-5 py-4 text-[11px] font-semibold uppercase tracking-wider text-navy-700 md:table-cell">
                      Uwagi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {rows.map((row) => (
                    <tr key={row.service}>
                      <td className="px-5 py-4 font-medium text-navy-900">
                        {row.service}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4 font-semibold text-navy-900">
                        {row.price}
                      </td>
                      <td className="hidden px-5 py-4 text-navy-700 md:table-cell">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-muted py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
            Ceny według typu usługi
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Ile kosztuje WUKO, udrażnianie i diagnostyka kanalizacji we Wrocławiu
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {pricingSections.map((section) => (
              <div
                key={section.title}
                className="rounded-[28px] border border-border bg-white p-7 shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-navy-900">
                      {section.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-700">
                      {section.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-aqua-200 bg-aqua-50 px-3 py-1.5 text-sm font-semibold text-aqua-800">
                    <CircleDollarSign className="h-4 w-4" />
                    {section.range}
                  </span>
                </div>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-navy-700">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <LinkButton
                    href={section.href}
                    variant="outline"
                    className="border-navy-200 bg-white text-navy-900 hover:bg-navy-50"
                  >
                    Zobacz tę usługę
                  </LinkButton>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
                Co wpływa na koszt
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Dlaczego podobny problem może mieć inną wycenę
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-700">
                Ten sam objaw nie zawsze oznacza ten sam zakres prac. Inaczej
                wycenia się mały zator w mieszkaniu, a inaczej czyszczenie
                odcinka wspólnoty, separatora albo obiektu technicznego.
              </p>
            </div>

            <div className="rounded-[30px] border border-border bg-muted p-7 shadow-soft">
              <ul className="space-y-3 text-sm leading-relaxed text-navy-700">
                {priceFactors.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy-900 text-xs font-semibold text-aqua-300">
                      <Wrench className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-20">
        <Container>
          <div className="rounded-[28px] border border-border bg-muted p-6 shadow-soft">
            <p className="text-sm leading-relaxed text-navy-700">
              Ten cennik ma charakter orientacyjny. Przy wspólnotach, firmach,
              większych obiektach, separatorach i przepompowniach dokładny
              zakres ustalamy po rozpoznaniu technicznym i krótkiej analizie
              warunków na miejscu.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
            Jak dobieramy zakres
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Inaczej wyceniamy mały zator, a inaczej pełny serwis obiektu
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pricingGuides.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-border bg-muted p-6 shadow-soft"
              >
                <h3 className="font-display text-xl font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white pb-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
            FAQ o cenach
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Najczęstsze pytania o cennik usług kanalizacyjnych we Wrocławiu
          </h2>
          <div className="mt-8">
            <Accordion className="space-y-3">
              {cennikFaqs.map((faq, index) => (
                <AccordionItem
                  key={faq.q}
                  value={`cennik-faq-${index}`}
                  className="rounded-[24px] border border-border bg-white px-5 shadow-[0_10px_30px_-22px_rgba(10,22,40,0.18)]"
                >
                  <AccordionTrigger className="py-4 text-left font-display text-[15px] font-semibold text-navy-900 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-relaxed text-navy-700">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      <CtaPanel />
    </>
  );
}

import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  Camera,
  ClipboardList,
  Factory,
  Flame,
  MapPin,
  ShieldCheck,
  TriangleAlert,
  Waves,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/site/container";
import { PhotoFrame } from "@/components/site/hero-photo";
import { LinkButton } from "@/components/site/link-button";
import { HomeFaq } from "@/components/site/sections/home-faq";
import { CtaPanel } from "@/components/site/sections/cta-panel";
import { Hero } from "@/components/site/sections/hero";
import { ProcessSteps } from "@/components/site/sections/process-steps";
import { ServicesGrid } from "@/components/site/sections/services-grid";
import { homeFaqSchema, jsonLdScript } from "@/lib/jsonld";
import { getPhoto } from "@/lib/photos";

export const metadata: Metadata = {
  title: {
    absolute: "Pogotowie kanalizacyjne Wrocław | WUKO, czyszczenie kanalizacji",
  },
  description:
    "Usługi kanalizacyjne we Wrocławiu. WUKO, udrażnianie rur, inspekcja TV, separatory i przepompownie. Doświadczenie od 1991 roku. Zadzwoń: 602-481-688.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pogotowie kanalizacyjne Wrocław | WUKO, czyszczenie kanalizacji",
    description:
      "Usługi kanalizacyjne we Wrocławiu. WUKO, udrażnianie rur, inspekcja TV, separatory i przepompownie. Doświadczenie od 1991 roku. Zadzwoń: 602-481-688.",
    type: "website",
    locale: "pl_PL",
    url: "https://pogotowie-kanalizacyjne-wroclaw.com",
    images: [
      "https://pogotowie-kanalizacyjne-wroclaw.com/opengraph-image",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pogotowie kanalizacyjne Wrocław | WUKO, czyszczenie kanalizacji",
    description:
      "Usługi kanalizacyjne we Wrocławiu. WUKO, udrażnianie rur, inspekcja TV, separatory i przepompownie. Doświadczenie od 1991 roku. Zadzwoń: 602-481-688.",
    images: [
      "https://pogotowie-kanalizacyjne-wroclaw.com/opengraph-image",
    ],
  },
};

const segments = [
  {
    icon: Building2,
    title: "Wspólnoty i spółdzielnie",
    desc: "Piony, separatory, przeglądy okresowe i bieżąca obsługa budynków wielorodzinnych.",
  },
  {
    icon: Factory,
    title: "Firmy i obiekty gastronomiczne",
    desc: "Lokale usługowe, zaplecza kuchenne, separatory tłuszczu i kanalizacja obiektów komercyjnych.",
  },
  {
    icon: Flame,
    title: "Domy jednorodzinne",
    desc: "Udrażnianie rur, inspekcje TV i szybkie interwencje przy zatorach i cofkach ścieków.",
  },
  {
    icon: MapPin,
    title: "Deweloperzy i inwestorzy",
    desc: "Przyłącza, przepompownie, testy szczelności i wsparcie przy technicznym domykaniu zakresu.",
  },
];

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Doświadczenie od 1991 r.",
    desc: "Wieloletnia praktyka na rynku wrocławskim i serwis oparty na realnym doświadczeniu terenowym.",
  },
  {
    icon: Camera,
    title: "Sprzęt WUKO i kamery TV",
    desc: "Nowoczesne pojazdy ciśnieniowe i diagnostyka kamerowa z raportem, gdy potrzebna jest pełna diagnoza.",
  },
  {
    icon: ClipboardList,
    title: "Faktura VAT i dokumentacja",
    desc: "Każdą usługę kończymy czytelnym zakresem wykonanych prac, raportem i dokumentem sprzedażowym.",
  },
];

const commonSituations = [
  {
    icon: Wrench,
    title: "Zatkany odpływ w kuchni lub łazience",
    desc: "Najczęściej chodzi o tłuszcz, włosy, papier albo drobne osady. W takich tematach zwykle zaczynamy od precyzyjnego udrażniania, a dopiero przy większym problemie przechodzimy do szerszego czyszczenia.",
  },
  {
    icon: TriangleAlert,
    title: "Cofka ścieków w piwnicy albo lokalu",
    desc: "To sygnał, że problem może siedzieć głębiej: w pionie, poziomie albo na przyłączu. Tu liczy się szybkie rozpoznanie i decyzja, czy kończymy na udrożnieniu, czy trzeba sięgnąć po WUKO lub kamerę.",
  },
  {
    icon: Waves,
    title: "Studzienka lub deszczówka nie odbiera wody",
    desc: "Przy opadach i osadach często wychodzi problem z wpustami, studniami lub przewodem deszczowym. To typowy temat dla czyszczenia odcinka, studni i sprawdzenia, czy układ jest dalej drożny.",
  },
];

const coverageAreas = [
  "Krzyki i okolice zabudowy mieszkaniowej",
  "Fabryczna i obiekty magazynowe lub handlowe",
  "Śródmieście, kamienice i starsze piony",
  "Psie Pole oraz domy jednorodzinne",
  "Stare Miasto, Nadodrze i lokale usługowe",
  "Bielany Wrocławskie, Siechnice, Długołęka i okolice",
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(homeFaqSchema)}
      />
      <Hero />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
                ZIEBUD Expert
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Usługi kanalizacyjne we Wrocławiu dla obiektów wymagających szybkiej i odpowiedzialnej reakcji
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-navy-700">
                ZIEBUD Expert obsługuje Wrocław i okolice w zakresie WUKO,
                udrażniania rur, inspekcji TV, separatorów i przepompowni.
                Pracujemy dla wspólnot mieszkaniowych, firm, domów
                jednorodzinnych, deweloperów i obiektów technicznych, które
                oczekują sprawnej diagnozy, właściwego doboru sprzętu i
                rzetelnej obsługi.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <TrustStat value="Od 1991" label="wieloletnia praktyka na rynku wrocławskim" />
                <TrustStat value="WUKO + TV" label="nowoczesne pojazdy i diagnostyka kamerowa" />
                <TrustStat value="Faktura VAT" label="pełna dokumentacja na każdą usługę" />
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <PhotoFrame
                photo={getPhoto("ziebudWukoSerwis")}
                aspectRatio="5 / 4"
                className="rounded-[30px] ring-0"
                priority
              />
              <div className="absolute -bottom-5 left-5 rounded-2xl border border-white/70 bg-white/95 px-4 py-4 shadow-[0_20px_40px_-24px_rgba(10,22,40,0.28)] backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-700">
                  W praktyce
                </p>
                <p className="mt-1 text-sm font-semibold text-navy-900">
                  Serwis dla budynków, firm i obiektów technicznych
                </p>
              </div>
              <div className="absolute -right-3 top-5 rounded-2xl border border-navy-900/10 bg-navy-900 px-4 py-4 text-white shadow-[0_20px_40px_-24px_rgba(10,22,40,0.4)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-300">
                  Najczęściej
                </p>
                <p className="mt-1 text-sm font-semibold">
                  WUKO, kamera, zatory, separatory
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ServicesGrid />

      <section className="bg-muted py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
                Dla kogo pracujemy
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Dla kogo pracujemy we Wrocławiu
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-700">
                Pracujemy dla wspólnot mieszkaniowych i spółdzielni, firm,
                obiektów gastronomicznych, domów jednorodzinnych, deweloperów,
                inwestorów oraz instytucji i przemysłu. Każdy z tych segmentów
                ma inny rytm pracy i inne ryzyka, dlatego inaczej prowadzimy
                zgłoszenia i serwis.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton
                  href="/dla-wspolnot-i-firm"
                  className="bg-navy-900 text-white hover:bg-navy-800"
                >
                  Oferta dla wspólnot i firm
                  <ArrowRight className="h-4 w-4" />
                </LinkButton>
                <LinkButton
                  href="/umowy-serwisowe"
                  variant="outline"
                  className="border-navy-200 bg-white text-navy-900 hover:bg-navy-50"
                >
                  Umowy serwisowe
                </LinkButton>
                <LinkButton
                  href="/zapytanie"
                  variant="outline"
                  className="border-navy-200 bg-white text-navy-900 hover:bg-navy-50"
                >
                  Zgłoś temat
                </LinkButton>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {segments.map((segment) => (
                <SegmentCard key={segment.title} {...segment} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ProcessSteps />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
                Najczęstsze sytuacje
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Z takimi tematami klienci dzwonią do nas najczęściej
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-700">
                Nie każdy problem kanalizacyjny wygląda tak samo. Czasem chodzi
                o prosty zator, a czasem o objaw większej usterki w pionie,
                przyłączu albo odwodnieniu terenu. Dlatego patrzymy najpierw na
                objaw, a dopiero potem dobieramy właściwą usługę i sprzęt.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton
                  href="/pogotowie-kanalizacyjne"
                  className="bg-navy-900 text-white hover:bg-navy-800"
                >
                  Zobacz stronę awaryjną
                  <ArrowRight className="h-4 w-4" />
                </LinkButton>
                <LinkButton
                  href="/cennik"
                  variant="outline"
                  className="border-navy-200 bg-white text-navy-900 hover:bg-navy-50"
                >
                  Sprawdź orientacyjne koszty
                </LinkButton>
              </div>
            </div>

            <div className="grid gap-4">
              {commonSituations.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-border bg-muted p-6 shadow-soft"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-aqua-400">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-700">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
                Co nas odróżnia
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Przewaga, którą widać w sposobie pracy
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-700">
                Stawiamy na połączenie doświadczenia, właściwego sprzętu i
                dokumentacji po wykonanych pracach. Dzięki temu klient wie nie
                tylko, że problem został usunięty, ale też jak wyglądał zakres
                serwisu i co warto zrobić dalej, żeby ograniczyć ryzyko powrotu.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-border bg-muted p-6 shadow-soft"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-aqua-400">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-700">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="overflow-hidden rounded-[30px]">
              <PhotoFrame
                photo={getPhoto("ziebudInspekcjaKanalu")}
                aspectRatio="16 / 10"
                className="ring-0"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
                Technicznie i sprzedażowo
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900">
                Usługi kanalizacyjne Wrocław i okolice
              </h3>
              <p className="mt-5 text-base leading-relaxed text-navy-700">
                Obsługujemy Krzyki, Fabryczną, Śródmieście, Psie Pole, Stare
                Miasto, Nadodrze oraz okolice Wrocławia. Specjalizujemy się w
                usługach takich jak WUKO Wrocław, czyszczenie kanalizacji,
                udrażnianie rur, inspekcja TV kanalizacji, serwis separatorów i
                przepompowni.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton
                  href="/sprzet"
                  className="bg-navy-900 text-white hover:bg-navy-800"
                >
                  Zobacz sprzęt i zaplecze
                  <ArrowRight className="h-4 w-4" />
                </LinkButton>
                <LinkButton
                  href="/uslugi/inspekcja-tv-kanalizacji"
                  variant="outline"
                  className="border-navy-200 bg-white text-navy-900 hover:bg-navy-50"
                >
                  Inspekcja TV kanalizacji
                </LinkButton>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-10 rounded-[32px] border border-border bg-muted p-8 shadow-soft lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
                Lokalnie pod Wrocław
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Wrocław i okolice to dla nas codzienny teren pracy
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-700">
                Pracujemy przy budynkach mieszkalnych, lokalach usługowych,
                gastronomii, obiektach technicznych i nieruchomościach
                zarządzanych przez wspólnoty. Różne dzielnice i typy zabudowy
                oznaczają różne problemy: stare piony, osady, korzenie,
                przeciążone odpływy albo tematy deszczowe przy obiektach.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-700">
                Dlatego lokalny serwis nie polega u nas na jednym haśle
                marketingowym, tylko na znajomości typowych scenariuszy pracy
                we Wrocławiu i umiejętności szybkiego przejścia od objawu do
                właściwej usługi.
              </p>
            </div>

            <div className="rounded-[28px] border border-white bg-white p-6 shadow-soft">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-700">
                Obszar działania
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-navy-700">
                {coverageAreas.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-1 text-aqua-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <HomeFaq />
      <CtaPanel />
    </>
  );
}

function TrustStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-soft">
      <p className="font-display text-3xl font-semibold text-navy-900">
        {value}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-navy-700">{label}</p>
    </div>
  );
}

function SegmentCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: typeof Building2;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-[28px] border border-border bg-white p-6 shadow-soft">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-aqua-400">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-navy-700">{desc}</p>
    </div>
  );
}

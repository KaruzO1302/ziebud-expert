import type { Metadata } from "next";
import Link from "next/link";
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
import { homeFaqSchema, jsonLdBreadcrumb, jsonLdScript } from "@/lib/jsonld";
import { getPhoto } from "@/lib/photos";
import { SITE_URL } from "@/lib/site";

type PhotoKey = Parameters<typeof getPhoto>[0];

export const metadata: Metadata = {
  title: {
    absolute: "Pogotowie kanalizacyjne Wrocław 24/7 — dojazd 60 min | ZIĘBUD",
  },
  description:
    "Pogotowie kanalizacyjne Wrocław 24/7. Udrażnianie rur, WUKO, inspekcja TV kamerą, separatory i przepompownie. Szybki dojazd, wycena przez telefon. Od 1991 r. Zadzwoń: 602 481 688.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pogotowie kanalizacyjne Wrocław | ZIĘBUD Expert",
    description:
      "Usługi kanalizacyjne we Wrocławiu. WUKO, udrażnianie rur, inspekcja TV, separatory i przepompownie. Doświadczenie od 1991 roku. Zadzwoń: 602 481 688.",
    type: "website",
    locale: "pl_PL",
    url: "https://pogotowie-kanalizacyjne-wroclaw.com",
    images: [
      "https://pogotowie-kanalizacyjne-wroclaw.com/opengraph-image",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pogotowie kanalizacyjne Wrocław | ZIĘBUD Expert",
    description:
      "Usługi kanalizacyjne we Wrocławiu. WUKO, udrażnianie rur, inspekcja TV, separatory i przepompownie. Doświadczenie od 1991 roku. Zadzwoń: 602 481 688.",
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
    title: "Raport dla zarządcy i właściciela",
    desc: "Po pracy zostaje jasny zakres wykonanych czynności, zalecenia techniczne i dokument, który można przekazać wspólnocie lub ubezpieczycielowi.",
  },
];

const commonSituations: {
  icon: typeof Wrench;
  title: string;
  desc: string;
  href: string;
  badge: string;
  photoKey: PhotoKey;
}[] = [
  {
    icon: Wrench,
    title: "Zalana piwnica lub lokal techniczny",
    desc: "Najpierw zabezpieczamy miejsce, rozpoznajemy źródło wody i dobieramy sprzęt: pompa, WUKO, kamera albo serwis instalacji.",
    href: "/pogotowie-kanalizacyjne",
    badge: "Awaria",
    photoKey: "realAwariaKanalizacji",
  },
  {
    icon: TriangleAlert,
    title: "Cofka kanalizacji i wybicie z WC",
    desc: "To nie jest zwykły zator. Sprawdzamy pion, poziom, przyłącze i decydujemy, czy wystarczy udrożnienie, czy potrzebne jest WUKO.",
    href: "/uslugi/usuwanie-zatorow-kanalizacyjnych-wroclaw",
    badge: "Pilne",
    photoKey: "realPrzepompownieSerwis",
  },
  {
    icon: Waves,
    title: "Niedrożna kanalizacja deszczowa",
    desc: "Po intensywnych opadach wychodzą problemy z wpustami, studniami i przewodami deszczowymi. Czyścimy i sprawdzamy odpływ.",
    href: "/uslugi/czyszczenie-kanalizacji-deszczowej-wroclaw",
    badge: "Deszczówka",
    photoKey: "realAwariaWodociagu",
  },
  {
    icon: Camera,
    title: "Zapchany pion lub problem w studni",
    desc: "Przy wspólnotach i budynkach wielorodzinnych lokalizujemy problem, czyścimy odcinek i zostawiamy jasną informację dla zarządcy.",
    href: "/uslugi/czyszczenie-studzienek-wroclaw",
    badge: "Wspólnoty",
    photoKey: "realKanalizacjaSeparatory",
  },
  {
    icon: Factory,
    title: "Przepełniony separator lub zbiornik",
    desc: "Gastronomia, zakłady i obiekty techniczne potrzebują szybkiej obsługi, dokumentacji i pracy bez zatrzymania całego obiektu.",
    href: "/uslugi/separatory-tluszczu",
    badge: "B2B",
    photoKey: "realCzyszczenieZbiornikow",
  },
];

const recentWorks: {
  title: string;
  eyebrow: string;
  desc: string;
  photoKey: PhotoKey;
  href: string;
}[] = [
  {
    eyebrow: "Awaria w budynku",
    title: "Zalana piwnica techniczna",
    desc: "Rozpoznanie źródła zalania, wypompowanie wody i wskazanie dalszego zakresu prac dla zarządcy.",
    photoKey: "realAwariaKanalizacji",
    href: "/pogotowie-kanalizacyjne",
  },
  {
    eyebrow: "Diagnostyka TV",
    title: "Kamera i robot w samochodzie serwisowym",
    desc: "Mobilne zaplecze do inspekcji przewodów, raportowania i decyzji, czy potrzebna jest naprawa docelowa.",
    photoKey: "realInspekcjaTvVan",
    href: "/uslugi/inspekcja-tv-kanalizacji",
  },
  {
    eyebrow: "Przepompownie i studnie",
    title: "Serwis komory na terenie obiektu",
    desc: "Prace przy studni, wężach ssących i armaturze, gdzie liczy się bezpieczeństwo oraz szybkie przywrócenie pracy układu.",
    photoKey: "realPrzepompownieSerwis",
    href: "/uslugi/serwis-przepompowni",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          jsonLdBreadcrumb([{ name: "Strona główna", url: SITE_URL }]),
        )}
      />
      <Hero />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                Typowe awarie
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Klient dzwoni, gdy już czuć wodę, zapach albo ryzyko zalania
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-700">
                Dlatego pokazujemy objawy, nie tylko nazwy usług. Zgłoszenie
                zaczyna się od tego, co widać na obiekcie: cofka, pełna
                studnia, mokra piwnica, zapach z kanalizacji albo separator,
                który przestał przyjmować ścieki.
              </p>
            </div>
            <LinkButton
              href="/pogotowie-kanalizacyjne"
              className="bg-navy-900 text-white hover:bg-navy-800"
            >
              Zgłoś awarię 24/7
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {commonSituations.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex min-h-full flex-col overflow-hidden rounded-[28px] border border-border bg-white shadow-soft transition hover:-translate-y-0.5 hover:border-aqua-300 hover:shadow-[0_26px_60px_-30px_rgba(10,22,40,0.24)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <PhotoFrame
                    photo={getPhoto(item.photoKey)}
                    aspectRatio="4 / 3"
                    className="h-full rounded-none ring-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/12 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/92 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-navy-900 shadow-sm">
                    {item.badge}
                  </span>
                  <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-aqua-500 text-navy-950 shadow-soft">
                    <item.icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold leading-tight text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700">
                    {item.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-900 transition group-hover:text-aqua-700">
                    Co robimy w takiej sytuacji
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                ZIĘBUD Expert
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Usługi kanalizacyjne we Wrocławiu dla obiektów wymagających szybkiej i odpowiedzialnej reakcji
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-navy-700">
                ZIĘBUD Expert obsługuje Wrocław i okolice w zakresie WUKO,
                udrażniania rur, inspekcji TV, separatorów i przepompowni.
                Pracujemy dla wspólnot mieszkaniowych, firm, domów
                jednorodzinnych, deweloperów i obiektów technicznych, które
                oczekują sprawnej diagnozy, właściwego doboru sprzętu i
                rzetelnej obsługi.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <TrustStat value="Od 1991" label="wieloletnia praktyka na rynku wrocławskim" />
                <TrustStat value="WUKO + TV" label="nowoczesne pojazdy i diagnostyka kamerowa" />
                <TrustStat value="Raport" label="zakres prac, zalecenia i dokumentacja dla zarządcy" />
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

      <section className="bg-muted py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                Ostatnie realizacje
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Zdjęcia z terenu zamiast pustych obietnic
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-700">
                Wysoko pokazujemy realne sceny z pracy: zalania, sprzęt do
                inspekcji TV, studnie i komory techniczne. To buduje zaufanie
                szybciej niż kolejny akapit o doświadczeniu.
              </p>
            </div>
            <LinkButton
              href="/realizacje"
              variant="outline"
              className="border-navy-200 bg-white text-navy-900 hover:bg-navy-50"
            >
              Zobacz wszystkie realizacje
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {recentWorks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-[30px] border border-border bg-white shadow-soft transition hover:-translate-y-0.5 hover:border-aqua-300 hover:shadow-[0_26px_60px_-30px_rgba(10,22,40,0.24)]"
              >
                <PhotoFrame
                  photo={getPhoto(item.photoKey)}
                  aspectRatio="16 / 10"
                  className="rounded-none ring-0"
                />
                <div className="p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-700">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-tight text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-700">
                    {item.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-900 transition group-hover:text-aqua-700">
                    Zobacz powiązaną usługę
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ServicesGrid />

      <section className="bg-muted py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
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
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
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
                photo={getPhoto("realInspekcjaTvVan")}
                aspectRatio="16 / 10"
                className="ring-0"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                Sprzęt i diagnostyka
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
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
                    <span className="mt-1 text-aqua-700">•</span>
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

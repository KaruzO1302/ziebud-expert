import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  Camera,
  Phone,
  TriangleAlert,
  Waves,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/site/container";
import { HeroPhoto } from "@/components/site/hero-photo";
import { LinkButton } from "@/components/site/link-button";
import { SlaBadge } from "@/components/site/sla-badge";
import { CtaPanel } from "@/components/site/sections/cta-panel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pogotowie kanalizacyjne Wrocław 24h — szybki dojazd",
  description:
    "Profesjonalna pomoc w awariach kanalizacji we Wrocławiu. Metoda WUKO, inspekcja TV, serwis separatorów i udrażnianie rur dla budynków, firm oraz wspólnot.",
  alternates: { canonical: "/pogotowie-kanalizacyjne" },
  openGraph: {
    title:
      "Pogotowie kanalizacyjne Wrocław 24h — szybki dojazd | ZIĘBUD Expert",
    description:
      "Profesjonalna pomoc w awariach kanalizacji we Wrocławiu. Metoda WUKO, inspekcja TV, serwis separatorów i udrażnianie rur dla budynków, firm oraz wspólnot.",
    url: `${SITE_URL}/pogotowie-kanalizacyjne`,
    type: "website",
    images: [`${SITE_URL}/pogotowie-kanalizacyjne/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pogotowie kanalizacyjne Wrocław 24h — szybki dojazd | ZIĘBUD Expert",
    description:
      "Profesjonalna pomoc w awariach kanalizacji we Wrocławiu. Metoda WUKO, inspekcja TV, serwis separatorów i udrażnianie rur dla budynków, firm oraz wspólnot.",
    images: [`${SITE_URL}/pogotowie-kanalizacyjne/opengraph-image`],
  },
};

const services = [
  {
    icon: Waves,
    title: "Hydrodynamiczne czyszczenie kanalizacji",
    text: "Hydrodynamiczne czyszczenie kanalizacji wodą pod ciśnieniem. Skutecznie usuwamy tłuszcz, korzenie, piasek i osady z przewodów wymagających mocniejszej interwencji.",
  },
  {
    icon: Wrench,
    title: "Czyszczenie kanalizacji Wrocław",
    text: "Obsługujemy piony i poziomy w budynkach mieszkalnych i komercyjnych, kanalizację sanitarną i deszczową, separatory tłuszczu i ropopochodnych oraz przepompownie ścieków.",
  },
  {
    icon: ArrowRight,
    title: "Udrażnianie rur",
    text: "Łączymy metodę mechaniczną i czyszczenie WUKO w zależności od rodzaju zatoru, średnicy przewodu i skali problemu na obiekcie.",
  },
  {
    icon: Camera,
    title: "Dodatkowe usługi",
    text: "Inspekcja kamerą TV z raportem, lokalizacja problemów, przeglądy techniczne oraz serwis separatorów i przepompowni jako uzupełnienie interwencji awaryjnej.",
  },
];

const serviceLinks = [
  { label: "Usługi kanalizacyjne", href: "/uslugi/uslugi-kanalizacyjne" },
  { label: "Hydrodynamiczne czyszczenie kanalizacji", href: "/uslugi/wuko-wroclaw" },
  { label: "Udrażnianie rur", href: "/uslugi/udraznianie-rur" },
  { label: "Naprawa sieci wodociągowych 24h", href: "/uslugi/naprawa-sieci-wodociagowych" },
  { label: "Inspekcja TV kanalizacji", href: "/uslugi/inspekcja-tv-kanalizacji" },
];

const alarmSituations = [
  "woda cofa się z WC, kratki lub odpływu podłogowego",
  "piwnica, zaplecze lub lokal zaczyna być zalewany ściekami",
  "cały pion albo kilka punktów w budynku przestaje odbierać",
  "studzienka rewizyjna stoi pełna i nie odbiera po opadach lub zrzucie",
  "separator albo przepompownia zgłasza alarm i obiekt nie może normalnie pracować",
];

const businessCases = [
  "wspólnoty i spółdzielnie, które potrzebują reakcji przy pionach, poziomach i studzienkach",
  "lokale gastronomiczne, gdzie liczy się szybkie przywrócenie drożności i praca separatora",
  "firmy, magazyny i obiekty techniczne z odpływami, odwodnieniem lub przepompownią",
  "domy jednorodzinne i zabudowa lokalna z problemem na przyłączu albo studni",
];

export default function PogotowieKanalizacyjnePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <HeroPhoto
          photo={{
            src: "/photos/banery/pogotowie-zespol-przepompownia.webp",
            alt: "Zespół ZIĘBUD Expert przy przepompowni ścieków — pogotowie kanalizacyjne 24h we Wrocławiu",
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
            Pogotowie kanalizacyjne
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
            Pogotowie kanalizacyjne Wrocław 24h
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-100">
            Szybka pomoc w awariach kanalizacji we Wrocławiu. Udrażnianie rur,
            czyszczenie kanalizacji metodą WUKO i diagnostyka kamerą TV dla
            budynków mieszkalnych, firm oraz wspólnot.
          </p>
          <div className="mt-6">
            <SlaBadge variant="hero" />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton
              href="tel:+48602481688"
              size="lg"
              className="group bg-aqua-500 text-navy-900 hover:bg-aqua-400"
            >
              <Phone className="h-4 w-4" />
              Zadzwoń: 602 481 688
            </LinkButton>
            <LinkButton
              href="/zapytanie"
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              Zgłoś awarię
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </LinkButton>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
              Szybka pomoc na miejscu
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Dobieramy metodę do problemu, nie odwrotnie
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              Nie każdy temat wymaga tego samego sprzętu. Dlatego przy
              pogotowiu kanalizacyjnym rozpoznajemy, czy potrzebne będzie WUKO,
              udrażnianie mechaniczne, kamera, serwis separatora albo wsparcie
              przy przepompowni.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map((item) => (
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
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-muted py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                Zadzwoń i opisz problem
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Pogotowie kanalizacyjne we Wrocławiu dla budynków, firm i wspólnot
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-700">
                Pracujemy przy awariach związanych z pionami, poziomami,
                kanalizacją sanitarną i deszczową, separatorami oraz
                przepompowniami. Po rozpoznaniu problemu dobieramy właściwy
                zakres usługi i przechodzimy do działania.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton
                  href="tel:+48602481688"
                  className="bg-navy-900 text-white hover:bg-navy-800"
                >
                  Zadzwoń: 602 481 688
                </LinkButton>
                <LinkButton
                  href="/zapytanie"
                  variant="outline"
                  className="border-navy-200 bg-white text-navy-900 hover:bg-navy-50"
                >
                  Zgłoś awarię online
                </LinkButton>
              </div>
            </div>

            <div className="rounded-[30px] border border-border bg-white p-7 shadow-soft">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-700">
                Najczęstsze tematy
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-navy-700">
                <li>• zatkana kanalizacja w mieszkaniu, lokalu lub budynku</li>
                <li>• cofka ścieków z pionu albo głównego przewodu</li>
                <li>• niedrożne piony kanalizacyjne w blokach i kamienicach</li>
                <li>• problemy z kanalizacją sanitarną i deszczową</li>
                <li>• separator lub przepompownia wymagające szybkiej interwencji</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                Kiedy dzwonić
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Są sytuacje, w których nie warto czekać do jutra
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-700">
                Nie każda niedrożność oznacza awarię krytyczną, ale są objawy,
                które zwykle szybko przechodzą w większy problem dla lokalu,
                wspólnoty albo całego obiektu. W takich przypadkach ważniejsze
                od samego hasła “pogotowie” jest to, żeby od razu zebrać objaw,
                lokalizację i wejść z właściwą usługą.
              </p>
            </div>

            <div className="rounded-[30px] border border-border bg-muted p-7 shadow-soft">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-700">
                Typowe alarmowe zgłoszenia
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-navy-700">
                {alarmSituations.map((item) => (
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

      <section className="bg-muted py-20">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <ScenarioCard
              icon={TriangleAlert}
              title="Najpierw objaw"
              text="Pytamy, co dzieje się na obiekcie i czy problem dotyczy jednego punktu, pionu, studni czy całego odcinka."
            />
            <ScenarioCard
              icon={Wrench}
              title="Potem metoda"
              text="Dobieramy udrażnianie, WUKO, kamerę albo szerszy serwis dopiero po rozpoznaniu, a nie z automatu."
            />
            <ScenarioCard
              icon={Camera}
              title="Jeśli trzeba, kamera"
              text="Gdy zator wraca albo objaw nie pasuje do prostego udrożnienia, potwierdzamy przyczynę inspekcją TV."
            />
            <ScenarioCard
              icon={ArrowRight}
              title="Wniosek po pracy"
              text="Po interwencji klient ma wiedzieć, czy temat jest zamknięty, czy wymaga kolejnego ruchu technicznego."
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
            Najkrótsza droga do rozwiązania
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Dobieramy usługę do objawu, nie odwrotnie
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {serviceLinks.map((link) => (
              <LinkButton
                key={link.href}
                href={link.href}
                variant="outline"
                className="border-navy-200 bg-white text-navy-900 hover:bg-navy-50"
              >
                {link.label}
              </LinkButton>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                Dla wspólnot, firm i lokali
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Awaria kanalizacji rzadko dotyczy tylko jednego typu obiektu
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-700">
                Inaczej pracuje się przy mieszkaniu, inaczej przy pionie w
                bloku, a inaczej przy lokalu gastronomicznym czy przepompowni.
                Dlatego na stronie pogotowia pokazujemy kierunek awaryjny,
                ale samą usługę dobieramy już do typu obiektu i skali problemu.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton
                  href="/dla-wspolnot-i-firm"
                  className="bg-navy-900 text-white hover:bg-navy-800"
                >
                  Dla wspólnot i firm
                  <ArrowRight className="h-4 w-4" />
                </LinkButton>
                <LinkButton
                  href="/umowy-serwisowe"
                  variant="outline"
                  className="border-navy-200 bg-white text-navy-900 hover:bg-navy-50"
                >
                  Umowy serwisowe
                </LinkButton>
              </div>
            </div>

            <div className="rounded-[30px] border border-border bg-muted p-7 shadow-soft">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-700">
                Najczęstsze scenariusze obiektowe
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-navy-700">
                {businessCases.map((item) => (
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

      <CtaPanel />
    </>
  );
}

function ScenarioCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Building2;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[28px] border border-border bg-white p-6 shadow-soft">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-aqua-400">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-navy-700">{text}</p>
    </div>
  );
}

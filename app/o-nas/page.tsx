import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Calendar,
  Camera,
  ClipboardList,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Container } from "@/components/site/container";
import { LinkButton } from "@/components/site/link-button";
import { founderSchema, jsonLdScript } from "@/lib/jsonld";
import { FOUNDER_LINKEDIN_URL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "O nas — ZIĘBUD Expert Wrocław | WUKO i kanalizacja od 1991 roku",
  },
  description:
    "ZIĘBUD Expert działa od 1991 roku. Łączymy wieloletnie doświadczenie branżowe z nowoczesną obsługą WUKO, kanalizacji, separatorów i przepompowni we Wrocławiu.",
  alternates: { canonical: "/o-nas" },
  openGraph: {
    title: "O nas — ZIĘBUD Expert Wrocław | WUKO i kanalizacja od 1991 roku",
    description:
      "ZIĘBUD Expert działa od 1991 roku. Łączymy wieloletnie doświadczenie branżowe z nowoczesną obsługą WUKO, kanalizacji, separatorów i przepompowni we Wrocławiu.",
    type: "website",
    locale: "pl_PL",
    url: `${SITE_URL}/o-nas`,
    images: [`${SITE_URL}/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title: "O nas — ZIĘBUD Expert Wrocław | WUKO i kanalizacja od 1991 roku",
    description:
      "ZIĘBUD Expert działa od 1991 roku. Łączymy wieloletnie doświadczenie branżowe z nowoczesną obsługą WUKO, kanalizacji, separatorów i przepompowni we Wrocławiu.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const workflow = [
  {
    title: "Najpierw objaw i dostęp",
    text:
      "Zaczynamy od konkretu: co się dzieje, gdzie jest problem i jaki jest dostęp do instalacji, rewizji albo studni.",
    icon: ClipboardList,
  },
  {
    title: "Potem dobór metody",
    text:
      "Nie wciskamy jednej usługi do wszystkiego. Jeśli wystarczy udrożnienie punktowe, robimy to. Jeśli potrzeba WUKO albo kamery, mówimy o tym od razu.",
    icon: Camera,
  },
  {
    title: "Na końcu jasny wniosek",
    text:
      "Po pracy klient ma wiedzieć, czy problem został zamknięty, czy trzeba zaplanować kolejny krok: czyszczenie, diagnostykę albo szerszy serwis.",
    icon: ShieldCheck,
  },
];

const clientGroups = [
  "wspólnoty i zarządców budynków, gdzie liczy się porządek działań i przewidywalny serwis",
  "lokale gastronomiczne, zaplecza kuchenne i obiekty z separatorami tłuszczu",
  "firmy, parkingi, warsztaty i obiekty techniczne z przepompowniami lub odwodnieniem",
  "domy jednorodzinne, kamienice i lokale z powracającymi zatorami albo problemem na przyłączu",
];

const loyaltyReasons = [
  {
    title: "Rozmawiamy konkretnie",
    text:
      "Klient nie musi znać technicznych nazw. Wystarczy opis objawu, a my przekładamy go na sensowny plan działania.",
  },
  {
    title: "Pokazujemy, co było przyczyną",
    text:
      "Przy zatorach powracających nie kończymy na samym przebiciu rury. Szukamy powodu, żeby ograniczyć kolejne awarie.",
  },
  {
    title: "Pracujemy i interwencyjnie, i planowo",
    text:
      "Jedni potrzebują szybkiego przyjazdu, inni harmonogramu dla wspólnoty albo lokalu. Potrafimy pracować w obu modelach.",
  },
];

export default function ONasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(founderSchema)}
      />

      <section className="bg-navy-900 text-white">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-200">
                O firmie
              </span>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                ZIĘBUD Expert — doświadczenie od 1991 roku, dziś ustawione pod nowoczesny serwis lokalny
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-navy-100">
                Firma została założona przez Leszka Ziębę 8 maja 1991 roku.
                Wieloletnie zaplecze branżowe wykorzystujemy dziś w lokalnej,
                nowoczesnej obsłudze kanalizacji, WUKO, separatorów i
                przepompowni dla Wrocławia oraz okolic.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <Stat icon={<Calendar className="h-5 w-5 text-aqua-400" />} value="1991" label="Rok założenia" />
                <Stat icon={<MapPin className="h-5 w-5 text-aqua-400" />} value="Wrocław" label="Główny rynek pracy" />
                <Stat icon={<Users className="h-5 w-5 text-aqua-400" />} value="35 lat" label="Doświadczenia" />
              </div>
            </div>
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
                <Image
                  src="/photos/leszek.webp"
                  alt="Leszek Zięba — założyciel ZIĘBUD Expert"
                  width={400}
                  height={500}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <p className="mt-4 text-center text-sm text-navy-300">
                Leszek Zięba — założyciel i właściciel
              </p>
              <div className="mt-4 flex justify-center">
                <a
                  href={FOUNDER_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-aqua-200 transition hover:border-aqua-300/40 hover:bg-white/10 hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  Profil zawodowy na LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Z doświadczenia infrastrukturalnego do nowoczesnej obsługi lokalnej
              </h2>
              <div className="mt-6 space-y-4 text-navy-700">
                <p>
                  ZIĘBUD wyrósł na solidnym fundamencie prac sanitarnych i
                  wykonawczych. Dzięki temu w codziennej obsłudze lokalnej nie
                  jesteśmy przypadkowym numerem telefonu, tylko firmą, która
                  rozumie kanalizację, obiekt i skutki źle zamkniętej awarii.
                </p>
                <p>
                  Dziś ten kierunek rozwijamy jako lokalny serwis dla Wrocławia:
                  WUKO, udrażnianie rur, inspekcja TV, separatory,
                  przepompownie oraz planowy model obsługi dla wspólnot,
                  gastronomii, firm i obiektów technicznych.
                </p>
                <p>
                  Zależy nam na tym, żeby klient po kontakcie wiedział nie tylko,
                  że przyjedziemy, ale też co było przyczyną problemu i jaki jest
                  sensowny kolejny krok.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <GalleryTile
                src="/photos/nagroda-25lat.jpg"
                alt="Wyróżnienie za długoletnią działalność firmy ZIĘBUD"
                caption="Lata doświadczenia i ciągłość działania"
              />
              <GalleryTile
                src="/photos/siedziba.webp"
                alt="Siedziba ZIĘBUD Expert"
                caption="Zaplecze firmy i lokalna obecność"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                Jak pracujemy
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Zgłoszenie ma kończyć się diagnozą, a nie tylko szybkim ruchem
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-700">
                W usługach kanalizacyjnych łatwo obiecać szybki przyjazd.
                Trudniej zrobić to tak, żeby klient wiedział, co naprawdę było
                problemem. Dlatego porządkujemy zgłoszenie, dobieramy metodę i
                zostawiamy po sobie jasny wniosek, a nie tylko chwilową ulgę.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton
                  href="/pogotowie-kanalizacyjne"
                  className="bg-navy-900 text-white hover:bg-navy-800"
                >
                  Zobacz stronę pogotowia
                  <ArrowRight className="h-4 w-4" />
                </LinkButton>
                <LinkButton
                  href="/dla-wspolnot-i-firm"
                  variant="outline"
                  className="border-navy-200 bg-white text-navy-900 hover:bg-navy-50"
                >
                  <Building2 className="h-4 w-4" />
                  Obsługa wspólnot i firm
                </LinkButton>
              </div>
            </div>

            <div className="grid gap-4">
              {workflow.map((item) => (
                <WorkflowCard
                  key={item.title}
                  icon={<item.icon className="h-5 w-5 text-aqua-500" />}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <Container>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Zespół, sprzęt i realne kadry z pracy
          </h2>
          <p className="mt-4 max-w-2xl text-navy-700">
            Największą przewagą tej marki mają być nie obietnice, tylko
            konkret: własne zdjęcia, auta, zakres prac i widoczny porządek
            działania na obiekcie.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <PhotoCard
              src="/photos/ziebud-wuko-hero.jpg"
              alt="Samochód WUKO ZIĘBUD Expert"
              title="Sprzęt do obsługi kanalizacji"
              subtitle="WUKO i serwis terenowy"
            />
            <PhotoCard
              src="/photos/ziebud-wuko-serwis.webp"
              alt="Samochody serwisowe ZIĘBUD Expert"
              title="Obsługa obiektów i wspólnot"
              subtitle="Rzeczywista, nie stockowa warstwa zaufania"
            />
            <PhotoCard
              src="/photos/ziebud-inspekcja-kanalu.jpg"
              alt="Wnętrze kanału podczas inspekcji"
              title="Inspekcja i diagnoza"
              subtitle="Pokazujemy przyczynę, nie tylko objaw"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                Dla kogo pracujemy
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Jeden zespół, różne typy obiektów i różny rytm pracy
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-700">
                Inaczej wygląda interwencja w mieszkaniu, inaczej awaria w
                gastronomii, a jeszcze inaczej stała opieka nad wspólnotą albo
                obiektem technicznym. ZIĘBUD Expert pracuje w tych światach
                równolegle, dlatego potrafimy dobrać nie tylko usługę, ale też
                model współpracy.
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-navy-700">
                {clientGroups.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4">
              {loyaltyReasons.map((item) => (
                <ValueCard key={item.title} title={item.title} text={item.text} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-20 sm:pb-28">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
            Co buduje zaufanie
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Marka ma być rozpoznawalna nie z obietnic, tylko z konkretu
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              title="WUKO i czyszczenie kanalizacji"
              text="Szybkie interwencje, czyszczenie planowe i obsługa budynków."
            />
            <ValueCard
              title="Udrażnianie i kamera"
              text="Punktowe usuwanie zatorów oraz potwierdzenie przyczyny problemu."
            />
            <ValueCard
              title="Separatory i przepompownie"
              text="Usługi pod gastronomię, parkingi, warsztaty i obiekty techniczne."
            />
            <ValueCard
              title="Wspólnoty i firmy"
              text="Model współpracy, który ma zamieniać awarie w regularny serwis."
            />
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-16 text-white">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Porozmawiajmy o Twoim obiekcie albo zgłoszeniu
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-navy-200">
              Wyślij opis problemu, zdjęcia albo po prostu zadzwoń. Ustalimy,
              czy wchodzi szybka interwencja, kamera czy plan stałej obsługi.
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
                <Phone className="h-4 w-4" />
                602 481 688
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div>
      {icon}
      <p className="mt-2 font-display text-2xl font-semibold">{value}</p>
      <p className="mt-1 text-xs text-navy-300">{label}</p>
    </div>
  );
}

function GalleryTile({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={350}
        className="h-full w-full object-cover"
      />
      <div className="bg-muted px-4 py-3 text-sm text-navy-700">{caption}</div>
    </div>
  );
}

function PhotoCard({
  src,
  alt,
  title,
  subtitle,
}: {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl shadow-soft">
      <Image
        src={src}
        alt={alt}
        width={700}
        height={500}
        className="h-56 w-full object-cover"
      />
      <div className="bg-white p-4">
        <p className="text-sm font-semibold text-navy-900">{title}</p>
        <p className="mt-1 text-xs text-navy-600">{subtitle}</p>
      </div>
    </div>
  );
}

function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[28px] border border-border bg-muted p-6 shadow-soft">
      <h3 className="font-display text-lg font-semibold text-navy-900">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-navy-700">{text}</p>
    </div>
  );
}

function WorkflowCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[28px] border border-border bg-muted p-6 shadow-soft">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aqua-50">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-navy-700">{text}</p>
    </div>
  );
}

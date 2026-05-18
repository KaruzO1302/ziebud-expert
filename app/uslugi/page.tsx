import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { HeroPhoto } from "@/components/site/hero-photo";
import { CtaPanel } from "@/components/site/sections/cta-panel";
import {
  type LocalService,
  localServices,
} from "@/lib/local-services-data";
import { getServicePhoto, photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Usługi — usługi kanalizacyjne, WUKO, udrażnianie rur i awarie wodociągowe Wrocław",
  description:
    "Zakres usług ZIEBUD Expert we Wrocławiu: usługi kanalizacyjne, WUKO, udrażnianie rur, naprawa sieci wodociągowych, inspekcja TV, separatory, przepompownie i diagnostyka kanalizacji.",
  alternates: { canonical: "/uslugi" },
};

export default function UslugiIndexPage() {
  const awarie = localServices.filter((service) =>
    [
      "uslugi-kanalizacyjne",
      "wuko-wroclaw",
      "udraznianie-rur",
      "naprawa-sieci-wodociagowych",
      "inspekcja-tv-kanalizacji",
      "lokalizacja-nieszczelnosci",
      "bezwykopowe-naprawy-kanalizacji",
      "frezowanie-kanalizacji",
      "regulacja-studzienek-i-wlazow",
      "odwodnienia-budynkow",
    ].includes(service.slug),
  );

  const obiekty = localServices.filter((service) =>
    [
      "separatory-tluszczu",
      "separatory-ropopochodne",
      "serwis-przepompowni",
      "przydomowe-oczyszczalnie-sciekow",
      "montaz-separatorow",
      "montaz-przepompowni-sciekow",
    ].includes(service.slug),
  );

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <HeroPhoto photo={photos.ziebudWukoBlok} priority overlay="navy-soft" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,rgba(0,212,255,0.18),transparent_70%)]"
        />
        <Container className="relative py-20 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-200">
            Zakres usług
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
            Usługi kanalizacyjne, WUKO, udrażnianie i awarie wodociągowe we Wrocławiu
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
            Pokazujemy pełny zakres usług ZIEBUD Expert we Wrocławiu: szeroki
            serwis kanalizacji, awarie, zatory, wycieki, inspekcję TV,
            separatory i przepompownie dla wspólnot, firm, gastronomii i
            klientów indywidualnych.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
                Najczęściej wybierane
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Interwencje, WUKO i diagnostyka
              </h2>
            </div>
          </div>
          <ServiceGrid items={awarie} />
        </Container>
      </section>

      <section className="bg-muted py-20">
        <Container>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
              Obsługa obiektów
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Separatory, przepompownie i usługi pod B2B
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-700">
              To zakres dla wspólnot, gastronomii, parkingów, warsztatów i
              obiektów technicznych, które potrzebują planowego serwisu,
              regularnych przeglądów i sprawnej obsługi eksploatacyjnej.
            </p>
          </div>
          <ServiceGrid items={obiekty} />
        </Container>
      </section>

      <CtaPanel />
    </>
  );
}

function ServiceGrid({ items }: { items: LocalService[] }) {
  return (
    <ul role="list" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service) => {
        const Icon = service.icon;
        const photo = getServicePhoto(service.slug);

        return (
          <li key={service.slug}>
            <Link
              href={`/uslugi/${service.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-border bg-white transition hover:border-aqua-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-24px_rgba(10,22,40,0.24)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1280px) 24rem, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,22,40,0.08),rgba(10,22,40,0.62))]" />
                <span className="absolute right-4 top-4 inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-navy-900 shadow-sm">
                  {service.eyebrow}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-900 ring-1 ring-inset ring-navy-100 transition group-hover:bg-navy-900 group-hover:text-aqua-400 group-hover:ring-navy-900">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-aqua-700">
                    Zakres usługi
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-700 line-clamp-3">
                  {service.tagline}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-navy-900 transition group-hover:text-aqua-600">
                  Zobacz szczegóły
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

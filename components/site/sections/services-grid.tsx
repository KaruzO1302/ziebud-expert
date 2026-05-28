import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { LinkButton } from "@/components/site/link-button";
import {
  type LocalService,
  localServices,
} from "@/lib/local-services-data";
import { getServicePhoto } from "@/lib/photos";

const responseSlugs = [
  "uslugi-kanalizacyjne",
  "wuko-wroclaw",
  "udraznianie-rur",
  "naprawa-sieci-wodociagowych",
  "inspekcja-tv-kanalizacji",
  "lokalizacja-nieszczelnosci",
];

const b2bSlugs = [
  "separatory-tluszczu",
  "separatory-ropopochodne",
  "serwis-przepompowni",
];

const responseServices = responseSlugs
  .map((slug) => localServices.find((service) => service.slug === slug))
  .filter((service): service is LocalService => Boolean(service));

const b2bServices = b2bSlugs
  .map((slug) => localServices.find((service) => service.slug === slug))
  .filter((service): service is LocalService => Boolean(service));

export function ServicesGrid() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
              Zakres usług
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Oferta ustawiona pod lokalne zgłoszenia i obiekty do stałej obsługi
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-700">
                          Obsługujemy zgłoszenia awaryjne i planowy serwis obiektów we Wrocławiu i okolicach.
                              Pracujemy dla wspólnot, firm, gastronomii i klientów indywidualnych.
            </p>
          </div>
          <LinkButton
            href="/uslugi"
            variant="outline"
            className="border-navy-200 bg-white text-navy-900 hover:bg-navy-50"
          >
            Zobacz pełną ofertę
            <ArrowRight className="h-4 w-4" />
          </LinkButton>
        </div>

        <ServiceGroup
          eyebrow="Interwencje i diagnostyka"
          title="Od tych tematów zaczyna się większość telefonów"
          intro="Tu łapiemy wysoką intencję zakupową: szeroki serwis kanalizacji, zatory, wybicia ścieków, potrzebę czyszczenia, kamerę i szybkie rozpoznanie problemu."
          items={responseServices}
        />

        <ServiceGroup
          eyebrow="Obsługa obiektów"
          title="Usługi, które najlepiej pracują w modelu B2B"
          intro="Separatory i przepompownie budują powtarzalny biznes, bo klient wraca nie tylko po awarii, ale też po planowy serwis i regularną opiekę nad obiektem."
          items={b2bServices}
        />
      </Container>
    </section>
  );
}

function ServiceGroup({
  eyebrow,
  title,
  intro,
  items,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  items: LocalService[];
}) {
  return (
    <div className="mt-14 first:mt-12">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
        {eyebrow}
      </p>
      <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-navy-700">{intro}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((service) => {
          const Icon = service.icon;
          const photo = getServicePhoto(service.slug);
          const highlights = service.variants
            .slice(0, 2)
            .map((variant) => variant.name);

          return (
            <Link
              key={service.slug}
              href={`/uslugi/${service.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-border bg-white shadow-soft transition hover:-translate-y-0.5 hover:border-aqua-300 hover:shadow-[0_26px_60px_-30px_rgba(10,22,40,0.24)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1280px) 24rem, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,22,40,0.02),rgba(10,22,40,0.44))]" />
                <span className="absolute right-4 top-4 rounded-full bg-white/92 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy-900 shadow-sm">
                  {service.eyebrow}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-aqua-50 text-aqua-800 ring-1 ring-inset ring-aqua-100 transition group-hover:bg-aqua-500 group-hover:text-navy-950 group-hover:ring-aqua-500">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-aqua-700">
                    Zakres usługi
                  </span>
                </div>

                <h4 className="mt-5 font-display text-xl font-semibold leading-tight text-navy-900">
                  {service.title}
                </h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700 line-clamp-3">
                  {service.tagline}
                </p>

                {highlights.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-border bg-muted px-3 py-1 text-[11px] font-medium text-navy-700"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                ) : null}

                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy-900 transition group-hover:text-aqua-600">
                  Zobacz stronę usługi
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

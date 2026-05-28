import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/site/container";
import { HeroPhoto } from "@/components/site/hero-photo";
import { LinkButton } from "@/components/site/link-button";
import { SlaBadge } from "@/components/site/sla-badge";
import {
  type LocalService,
  localServices,
} from "@/lib/local-services-data";
import { jsonLdFAQ, jsonLdService } from "@/lib/jsonld";
import { getServicePhoto } from "@/lib/photos";
import { SITE_URL } from "@/lib/site";

export function ServicePage({ service }: { service: LocalService }) {
  const Icon = service.icon;
  const heroPhoto = getServicePhoto(service.slug);
  const related = service.related
    .map((slug) => localServices.find((candidate) => candidate.slug === slug))
    .filter((candidate): candidate is LocalService => Boolean(candidate));

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <HeroPhoto photo={heroPhoto} priority overlay="navy-soft" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_10%_-10%,rgba(0,212,255,0.18),transparent_70%)]"
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
            <span className="text-white">{service.title}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-200">
                {service.eyebrow}
              </span>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
                {service.heroTitle ?? service.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-100">
                {service.tagline}
              </p>

              <div className="mt-6">
                <SlaBadge variant="hero" />
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton
                  href="/zapytanie"
                  size="lg"
                  className="group bg-aqua-500 text-navy-900 hover:bg-aqua-400"
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

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-500/15 text-aqua-300">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-aqua-200">
                    Zakres usługi
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-white">
                    {service.eyebrow}
                  </p>
                </div>
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-5 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-navy-200">
                    Tryb obsługi
                  </dt>
                  <dd className="mt-1 font-display text-base font-semibold text-white">
                    Awaryjny + planowy
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-navy-200">
                    Obszar
                  </dt>
                  <dd className="mt-1 font-display text-base font-semibold text-white">
                    Wrocław i okolice
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-navy-200">
                    Po usłudze
                  </dt>
                  <dd className="mt-1 font-display text-base font-semibold text-white">
                    Wnioski i rekomendacje
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-navy-200">
                    Obsługa
                  </dt>
                  <dd className="mt-1 font-display text-base font-semibold text-white">
                    Wspólnoty · firmy · klienci
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                Na czym polega usługa
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Zakres i logika działania
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-navy-800">
                {service.overview.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="rounded-2xl border border-border bg-muted p-7">
              <h3 className="font-display text-lg font-semibold text-navy-900">
                Kiedy wybrać tę usługę
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-navy-800">
                {service.whenToUse.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aqua-500/15 text-aqua-700">
                      <Check className="h-3 w-3" aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-muted py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
              Warianty i zakres
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Dobieramy usługę do typu obiektu i problemu
            </h2>
          </div>

          <ul role="list" className="mt-12 grid gap-4 sm:grid-cols-2">
            {service.variants.map((variant) => (
              <li
                key={variant.name}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <h3 className="font-display text-lg font-semibold text-navy-900">
                  {variant.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700">
                  {variant.desc}
                </p>
                {variant.specs ? (
                  <p className="mt-4 inline-flex rounded-full bg-navy-50 px-3 py-1 text-[11px] font-semibold text-navy-700">
                    {variant.specs}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                Widełki cenowe
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Orientacyjne koszty
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-700">
                Poniżej przybliżone widełki cenowe dla typowych zgłoszeń i
                obiektów. Ostateczna cena zależy od dostępu, długości odcinka,
                ilości osadu, typu obiektu i tego, czy potrzebna jest kamera.
              </p>
              {service.costNote ? (
                <p className="mt-4 rounded-lg border border-aqua-200/60 bg-aqua-50/60 px-4 py-3 text-sm text-navy-800">
                  {service.costNote}
                </p>
              ) : null}
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-white">
              <table className="w-full text-sm">
                <thead className="bg-muted text-left">
                  <tr>
                    <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-navy-700">
                      Zakres
                    </th>
                    <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-navy-700">
                      Cena
                    </th>
                    <th className="hidden px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-navy-700 md:table-cell">
                      Uwagi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {service.costs.map((row) => (
                    <tr key={row.scope}>
                      <td className="px-5 py-4 font-medium text-navy-900">
                        {row.scope}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4 tabular-nums font-semibold text-navy-900">
                        {row.range}
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
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
              Przebieg
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Jak wygląda usługa krok po kroku
            </h2>
          </div>

          <ol role="list" className="mt-12 grid gap-4 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <span className="font-display text-xs font-bold tracking-wider text-aqua-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold leading-tight text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                FAQ
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Pytania, które słyszymy najczęściej
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-700">
                Odpowiedzi, które pomagają klientowi zorientować się, czy
                potrzebuje szybkiej interwencji, kamery czy stałej obsługi.
              </p>
            </div>

            <div>
              <Accordion className="w-full">
                {service.faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.q}
                    value={`faq-${index}`}
                    className="rounded-none border-b border-border/60 px-1 transition data-[state=open]:rounded-lg data-[state=open]:bg-muted data-[state=open]:px-4 data-[state=open]:shadow-sm"
                  >
                    <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-navy-900 hover:text-aqua-700">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm leading-relaxed text-navy-700">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="bg-muted py-20">
          <Container>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                  Powiązane usługi
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                  Może zainteresuje Cię również
                </h2>
              </div>
              <Link
                href="/uslugi"
                className="hidden items-center gap-1 text-sm font-semibold text-navy-900 hover:text-aqua-700 sm:inline-flex"
              >
                Wszystkie usługi
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <ul role="list" className="mt-10 grid gap-4 sm:grid-cols-3">
              {related.map((item) => {
                const RelatedIcon = item.icon;

                return (
                  <li key={item.slug}>
                    <Link
                      href={`/uslugi/${item.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition hover:border-aqua-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(10,22,40,0.2)]"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-900 ring-1 ring-inset ring-navy-100 transition group-hover:bg-navy-900 group-hover:text-aqua-400 group-hover:ring-navy-900">
                        <RelatedIcon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="mt-5 font-display text-base font-semibold text-navy-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy-700 line-clamp-3">
                        {item.tagline}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>
      ) : null}

      {service.trustLinks?.length ? (
        <section className="bg-white py-20">
          <Container>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                Marki i zaplecze
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Zobacz, jakie urządzenia i marki obsługujemy
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {service.trustLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl border border-border bg-muted p-5 text-sm font-semibold text-navy-900 transition hover:border-aqua-300 hover:bg-white"
                >
                  {item.label}
                  <ArrowRight className="mt-4 h-4 w-4 text-aqua-700 transition group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}

export function buildServiceJsonLd(service: LocalService) {
  return [
    jsonLdService({
      name: service.title,
      description: service.metaDescription,
      url: `${SITE_URL}/uslugi/${service.slug}`,
      serviceType: service.schemaServiceType ?? service.title,
    }),
    jsonLdFAQ(service.faqs),
  ];
}

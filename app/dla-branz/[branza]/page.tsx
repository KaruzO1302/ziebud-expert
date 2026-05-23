import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Container } from "@/components/site/container";
import { CtaPanel } from "@/components/site/sections/cta-panel";
import { branzePages, getBranzaPage } from "@/lib/branze-data";
import {
  jsonLdBreadcrumb,
  jsonLdFAQ,
  jsonLdScript,
  jsonLdService,
} from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";

type Params = Promise<{ branza: string }>;

export function generateStaticParams() {
  return branzePages.map((page) => ({ branza: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { branza } = await params;
  const page = getBranzaPage(branza);
  if (!page) return {};

  return {
    title: { absolute: page.meta_title },
    description: page.meta_description,
    alternates: { canonical: `/dla-branz/${page.slug}` },
    openGraph: {
      title: page.meta_title,
      description: page.meta_description,
      type: "website",
      locale: "pl_PL",
      url: `${SITE_URL}/dla-branz/${page.slug}`,
      images: [`${SITE_URL}${page.image.src}`],
    },
  };
}

function buildIndustryJsonLd(page: NonNullable<ReturnType<typeof getBranzaPage>>) {
  return [
    jsonLdService({
      name: page.h1,
      description: page.meta_description,
      serviceType: page.serviceType,
      url: `${SITE_URL}/dla-branz/${page.slug}`,
    }),
    jsonLdFAQ(page.faq),
    jsonLdBreadcrumb([
      { name: "Strona główna", url: SITE_URL },
      { name: "Dla branż", url: `${SITE_URL}/dla-branz` },
      { name: page.branza_name, url: `${SITE_URL}/dla-branz/${page.slug}` },
    ]),
  ];
}

export default async function BranzaPage({
  params,
}: {
  params: Params;
}) {
  const { branza } = await params;
  const page = getBranzaPage(branza);
  if (!page) notFound();
  const schemas = buildIndustryJsonLd(page);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(schema)}
        />
      ))}
      <main className="bg-white">
        <section className="relative min-h-[560px] overflow-hidden bg-navy-950 text-white">
          <Image
            src={page.image.src}
            alt={page.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-900/45"
          />
          <Container className="relative flex min-h-[560px] flex-col justify-end py-14">
            <nav className="mb-8 flex flex-wrap gap-2 text-sm text-white/75">
              <Link href="/" className="hover:text-white">Strona główna</Link>
              <span>/</span>
              <Link href="/dla-branz" className="hover:text-white">Dla branż</Link>
              <span>/</span>
              <span>{page.branza_name}</span>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-200">
              ZIĘBUD Expert · Wrocław · B2B
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {page.h1}
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+48602481688"
                className="inline-flex items-center gap-2 rounded-full bg-aqua-400 px-5 py-3 text-sm font-semibold text-navy-950 transition hover:bg-aqua-300"
              >
                <Phone className="h-4 w-4" />
                {page.cta_telefon}
              </a>
              <Link
                href="/zapytanie"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                {page.cta_text}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-5 text-lg leading-relaxed text-navy-700">
                {page.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {page.liczby.map((item) => (
                  <div
                    key={item.wartosc}
                    className="rounded-2xl border border-border bg-muted p-5"
                  >
                    <p className="font-display text-3xl font-semibold text-navy-900">
                      {item.wartosc}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-navy-700">
                      {item.etykieta}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-muted py-16">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                Typowe problemy
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900">
                Co najczęściej blokuje pracę obiektu
              </h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {page.problemy.map((problem) => (
                <div key={problem} className="rounded-2xl border border-border bg-white p-5">
                  <CheckCircle2 className="h-5 w-5 text-aqua-700" />
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-navy-900">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                Co robimy
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900">
                Usługi dobrane do branży
              </h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {page.uslugi.map((service) => (
                <Link
                  key={service.tytul}
                  href={service.link}
                  className="group rounded-[24px] border border-border bg-muted p-6 transition hover:border-aqua-300 hover:bg-white"
                >
                  <h3 className="font-display text-xl font-semibold text-navy-900">
                    {service.tytul}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-700">
                    {service.opis}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900">
                    Przejdź do usługi
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-muted py-16">
          <Container>
            <h2 className="font-display text-3xl font-semibold text-navy-900">
              Najczęstsze pytania
            </h2>
            <div className="mt-8 divide-y divide-border rounded-[24px] border border-border bg-white">
              {page.faq.map((faq) => (
                <div key={faq.q} className="p-6">
                  <h3 className="font-semibold text-navy-900">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <CtaPanel />
    </>
  );
}

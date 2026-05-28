import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cog,
  Droplet,
  ExternalLink,
  Factory,
  Gauge,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/site/container";
import { LinkButton } from "@/components/site/link-button";
import type { TrustPage } from "@/lib/trust-pages-data";

const brandIcons = [Droplet, Gauge, Cog, Factory, ShieldCheck] as const;

const brandGradients = [
  "from-aqua-50 via-white to-navy-50",
  "from-navy-50 via-white to-aqua-50",
  "from-white via-aqua-50 to-muted",
  "from-muted via-white to-navy-50",
  "from-aqua-50 via-muted to-white",
];

export function TrustBrandPage({ page }: { page: TrustPage }) {
  const Icon = page.icon;

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
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
          className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-900/55"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_15%_-10%,rgba(0,212,255,0.18),transparent_70%)]"
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
            <span className="text-white">{page.eyebrow}</span>
          </nav>

          <div className="mt-8 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-200">
              <Icon className="h-3.5 w-3.5" aria-hidden />
              {page.eyebrow}
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-100">
              {page.lead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton
                href="/zapytanie"
                size="lg"
                className="group bg-aqua-500 text-navy-900 hover:bg-aqua-400"
              >
                Zapytaj o serwis
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </LinkButton>
              <LinkButton
                href="/sprzet"
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                Zobacz sprzęt
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
              Lista marek
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Marki, które najczęściej spotykamy w obiektach
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-700">
              Linki prowadzą do oficjalnych stron producentów. Parametry i
              dobór urządzeń zawsze potwierdzamy po rozpoznaniu instalacji.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {page.brands.map((brand, index) => {
              const BrandIcon = brandIcons[index % brandIcons.length];

              return (
              <article
                key={brand.name}
                className={`rounded-[26px] border border-border bg-gradient-to-br ${brandGradients[index % brandGradients.length]} p-6 shadow-soft`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-aqua-400">
                      <BrandIcon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-700">
                      Producent
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-semibold text-navy-900">
                      {brand.name}
                    </h2>
                    </div>
                  </div>
                  <a
                    href={brand.url}
                    rel="external nofollow noopener"
                    target="_blank"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-navy-900 transition hover:border-aqua-300 hover:text-aqua-700"
                  >
                    Oficjalna strona
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-navy-700">
                  {brand.summary}
                </p>
                <p className="mt-4 rounded-2xl bg-white px-4 py-3 text-sm leading-relaxed text-navy-800">
                  {brand.fit}
                </p>
              </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-muted py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                Zakres obsługi
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                {page.scopeTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-700">
                Przy markach liczy się nie tylko logo na urządzeniu, ale stan
                instalacji, dostęp, historia serwisu i realne obciążenie
                obiektu.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {page.scope.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-border bg-white p-5 shadow-soft"
                >
                  <CheckCircle2 className="h-5 w-5 text-aqua-700" />
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-navy-900">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
              Powiązane usługi
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Przejdź do konkretnego zakresu prac
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-border bg-muted p-5 text-sm font-semibold text-navy-900 transition hover:border-aqua-300 hover:bg-white"
              >
                <span>{item.label}</span>
                <ArrowRight className="mt-4 h-4 w-4 text-aqua-700 transition group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

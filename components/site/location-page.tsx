import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import type { Article } from "@/lib/articles-data";
import type { CaseStudy } from "@/lib/case-studies-data";
import type { LocationPage as LocationPageData } from "@/lib/locations-data";
import { Container } from "@/components/site/container";
import { LinkButton } from "@/components/site/link-button";
import { HeroPhoto } from "@/components/site/hero-photo";
import { getPhoto } from "@/lib/photos";
import { ArticleCard, CaseStudyCard } from "@/components/site/content-cards";
import { getLocalService } from "@/lib/local-services-data";

type Props = {
  location: LocationPageData;
  articles: Article[];
  caseStudies: CaseStudy[];
};

export function LocationPage({ location, articles, caseStudies }: Props) {
  const heroPhoto: Parameters<typeof getPhoto>[0] =
    caseStudies[0]?.photoKey ??
    (location.type === "city" ? "robotyZiemne" : "ekipaPlany");

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <HeroPhoto photo={getPhoto(heroPhoto)} priority overlay="navy-soft" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_10%_-10%,rgba(0,212,255,0.18),transparent_70%)]"
        />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-200">
              {location.eyebrow}
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
              {location.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-100">
              {location.lead}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <LinkButton
                href="/zapytanie"
                size="lg"
                className="group bg-aqua-500 text-navy-900 hover:bg-aqua-400"
              >
                Prześlij dokumentację
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </LinkButton>
              <LinkButton
                href="/kontakt"
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                Porozmawiaj o inwestycji
              </LinkButton>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {location.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-aqua-200">
                  {stat.label}
                </p>
                <p className="mt-3 font-display text-xl font-semibold text-white">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
                Lokalny kontekst
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Jak podchodzimy do projektów {location.areaLabel}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-700">
                {location.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="rounded-3xl border border-border bg-muted p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
                Co liczy się najczęściej
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-navy-800">
                {location.localDrivers.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aqua-500/15 text-aqua-700">
                      <Check className="h-3 w-3" />
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
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
              Zakres prac
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Najczęściej obsługiwane usługi
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {location.serviceSlugs.map((slug) => {
              const service = getLocalService(slug);
              if (!service) return null;

              return (
                <Link
                  key={slug}
                  href={`/uslugi/${slug}`}
                  className="rounded-2xl border border-border bg-white p-5 shadow-soft transition hover:border-aqua-300"
                >
                  <p className="font-display text-lg font-semibold text-navy-900">
                    {service.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700">
                    {service.tagline}
                  </p>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
                Dlaczego my
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Co wnosi ZIĘBUD Expert
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {location.differentiators.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border bg-white p-5 shadow-soft"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 rounded-full bg-aqua-50 p-2 text-aqua-700">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <p className="text-sm leading-relaxed text-navy-800">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {caseStudies.length > 0 && (
        <section className="bg-muted py-20">
          <Container>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
                  Realizacje
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                  Powiązane studia przypadków
                </h2>
              </div>
              <Link
                href="/realizacje"
                className="hidden text-sm font-semibold text-navy-900 hover:text-aqua-600 sm:inline-flex"
              >
                Wszystkie realizacje
              </Link>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {articles.length > 0 && (
        <section className="bg-white py-20">
          <Container>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
                  Wiedza
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                  Artykuły pomocne dla inwestora
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden text-sm font-semibold text-navy-900 hover:text-aqua-600 sm:inline-flex"
              >
                Zobacz wiedzę
              </Link>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-navy-900 py-16 text-white">
        <Container>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] px-8 py-10">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Masz projekt {location.areaLabel}? Prześlij brief i dokumentację.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy-100">
              Zbieramy kluczowe dane o inwestycji, a po formularzu przeprowadzamy
              Cię do kolejnego kroku przekazania większych paczek PDF i DWG.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton
                href="/zapytanie"
                size="lg"
                className="bg-aqua-500 text-navy-900 hover:bg-aqua-400"
              >
                Prześlij dokumentację
              </LinkButton>
              <LinkButton
                href="/kontakt"
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                Kontakt z zespołem
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/site/content-cards";
import { Container } from "@/components/site/container";
import { HeroPhoto } from "@/components/site/hero-photo";
import { articles } from "@/lib/articles-data";
import { caseStudies, getCaseStudy } from "@/lib/case-studies-data";
import { breadcrumbSchema, caseStudySchema, jsonLdScript } from "@/lib/jsonld";
import { getPhoto } from "@/lib/photos";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return {};

  return {
    title: caseStudy.metaTitle,
    description: caseStudy.metaDescription,
    alternates: { canonical: `/realizacje/${caseStudy.slug}` },
    robots: { index: false, follow: false },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) notFound();

  const relatedArticles = articles.filter((article) =>
    caseStudy.articleSlugs.includes(article.slug),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(caseStudySchema(caseStudy))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Strona główna", path: "/" },
            { name: "Realizacje", path: "/realizacje" },
            { name: caseStudy.title, path: `/realizacje/${caseStudy.slug}` },
          ]),
        )}
      />

      <section className="relative overflow-hidden bg-navy-900 text-white">
        <HeroPhoto
          photo={getPhoto(caseStudy.photoKey)}
          priority
          overlay="navy-soft"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_10%_-10%,rgba(0,212,255,0.18),transparent_70%)]"
        />
        <Container className="relative py-20 sm:py-28">
          <nav className="text-sm text-navy-200">
            <Link href="/" className="hover:text-aqua-300">
              Strona główna
            </Link>{" "}
            /{" "}
            <Link href="/realizacje" className="hover:text-aqua-300">
              Realizacje
            </Link>
          </nav>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-200">
            {caseStudy.city} · {caseStudy.voivodeship}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
            {caseStudy.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-100">
            {caseStudy.summary}
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {caseStudy.stats.map((stat) => (
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                Kontekst inwestycji
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Co było najważniejsze w tym projekcie
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy-700">
                {caseStudy.challenge}
              </p>
            </div>

            <aside className="rounded-3xl border border-border bg-muted p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                Efekt dla inwestora
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-navy-800">
                {caseStudy.outcome.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-muted py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-white p-7 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                Zakres prac
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-navy-800">
                {caseStudy.scope.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-white p-7 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
                Podsumowanie
              </p>
              <p className="mt-5 text-sm leading-relaxed text-navy-700">
                Pokazujemy tę realizację jako przykład pracy na dokumencie, zakresie
                i ryzykach wykonawczych. To właśnie taki model współpracy
                budujemy również dla nowych zapytań ze strony.
              </p>
              <Link
                href="/zapytanie"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy-900 hover:text-aqua-700"
              >
                Prześlij dokumentację
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {relatedArticles.length > 0 && (
        <section className="bg-white py-20">
          <Container>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Powiązane artykuły
            </h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {relatedArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

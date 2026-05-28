import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import { ArticleCard } from "@/components/site/content-cards";
import { Container } from "@/components/site/container";
import { HeroPhoto } from "@/components/site/hero-photo";
import { LinkButton } from "@/components/site/link-button";
import { articles, getArticle } from "@/lib/articles-data";
import { articleSchema, breadcrumbSchema, jsonLdScript } from "@/lib/jsonld";
import {
  type LocalService,
  getLocalService,
} from "@/lib/local-services-data";
import { getPhoto } from "@/lib/photos";
import { SITE_URL } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      url: `${SITE_URL}/blog/${article.slug}`,
      images: [`${SITE_URL}/blog/${article.slug}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [`${SITE_URL}/blog/${article.slug}/opengraph-image`],
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  const relatedArticles = articles
    .filter((item) => item.slug !== article.slug)
    .filter((item) =>
      item.serviceSlugs.some((serviceSlug) =>
        article.serviceSlugs.includes(serviceSlug),
      ),
    )
    .slice(0, 3);

  const relatedServices = article.serviceSlugs
    .map((slug) => getLocalService(slug))
    .filter((service): service is LocalService => Boolean(service))
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(articleSchema(article))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Strona główna", path: "/" },
            { name: "Wiedza", path: "/blog" },
            { name: article.title, path: `/blog/${article.slug}` },
          ]),
        )}
      />

      <section className="relative overflow-hidden bg-navy-900 text-white">
        <HeroPhoto photo={getPhoto(article.photoKey)} priority overlay="navy-soft" />
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
            <Link href="/blog" className="hover:text-aqua-300">
              Wiedza
            </Link>
          </nav>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-200">
            {article.category} · {article.readTime}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
            {article.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-100">
            {article.lead}
          </p>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
            <article className="min-w-0 space-y-10">
              {article.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-900">
                    {section.title}
                  </h2>
                  {section.paragraphs && section.paragraphs.length > 0 && (
                    <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-700">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-5 space-y-3 text-base leading-relaxed text-navy-700">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-aqua-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.table && (
                    <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-white shadow-soft">
                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[640px] text-sm">
                          <thead className="bg-muted text-left">
                            <tr>
                              {section.table.headers.map((header) => (
                                <th
                                  key={header}
                                  className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wider text-navy-700"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border">
                            {section.table.rows.map((row) => (
                              <tr key={row.join("|")}>
                                {row.map((cell, index) => (
                                  <td
                                    key={`${cell}-${index}`}
                                    className="px-5 py-4 align-top text-navy-700 first:font-semibold first:text-navy-900"
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {section.afterTableParagraphs &&
                    section.afterTableParagraphs.length > 0 && (
                      <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-700">
                        {section.afterTableParagraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    )}

                  {section.inlineCta && (
                    <div className="mt-6 rounded-[26px] border border-aqua-100 bg-aqua-50/70 p-6 shadow-soft">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-700">
                        Szybki kontakt
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-navy-900">
                        {section.inlineCta.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-navy-700">
                        {section.inlineCta.text}
                      </p>
                      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                        <LinkButton
                          href={section.inlineCta.primaryHref}
                          className="bg-navy-900 text-white hover:bg-navy-800"
                        >
                          <Phone className="h-4 w-4" />
                          {section.inlineCta.primaryLabel}
                        </LinkButton>
                        {section.inlineCta.secondaryLabel &&
                          section.inlineCta.secondaryHref && (
                            <LinkButton
                              href={section.inlineCta.secondaryHref}
                              variant="outline"
                              className="border-navy-200 bg-white text-navy-900 hover:bg-navy-50"
                            >
                              {section.inlineCta.secondaryLabel}
                              <ArrowRight className="h-4 w-4" />
                            </LinkButton>
                          )}
                      </div>
                    </div>
                  )}
                </section>
              ))}

              <section className="rounded-[30px] border border-aqua-100 bg-aqua-50/70 p-7 shadow-soft">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-700">
                  Kontakt
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900">
                  {article.cta.title}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy-700">
                  {article.cta.text}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <LinkButton
                    href={article.cta.primaryHref}
                    className="bg-navy-900 text-white hover:bg-navy-800"
                  >
                    <Phone className="h-4 w-4" />
                    {article.cta.primaryLabel}
                  </LinkButton>
                  {article.cta.secondaryLabel && article.cta.secondaryHref && (
                    <LinkButton
                      href={article.cta.secondaryHref}
                      variant="outline"
                      className="border-navy-200 bg-white text-navy-900 hover:bg-navy-50"
                    >
                      {article.cta.secondaryLabel}
                      <ArrowRight className="h-4 w-4" />
                    </LinkButton>
                  )}
                </div>
              </section>

              {relatedServices.length > 0 && (
                <section className="rounded-[30px] border border-border bg-white p-7 shadow-soft">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-700">
                    Powiązane usługi
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900">
                    Przejdź z artykułu do konkretnej usługi
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy-700">
                    Jeśli ten temat dotyczy Twojej instalacji, poniżej masz
                    najsensowniejsze usługi powiązane z tym problemem. To
                    najszybsza droga od wiedzy do realnego zgłoszenia.
                  </p>
                  <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {relatedServices.map((service) => {
                      const Icon = service.icon;

                      return (
                        <Link
                          key={service.slug}
                          href={`/uslugi/${service.slug}`}
                          className="group rounded-[24px] border border-border bg-muted/70 p-5 transition hover:-translate-y-0.5 hover:border-aqua-300 hover:bg-white hover:shadow-soft"
                        >
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-navy-900 ring-1 ring-inset ring-border transition group-hover:bg-navy-900 group-hover:text-aqua-400 group-hover:ring-navy-900">
                            <Icon className="h-5 w-5" aria-hidden />
                          </span>
                          <h3 className="mt-4 font-display text-xl font-semibold leading-tight text-navy-900">
                            {service.heroTitle ?? service.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-navy-700 line-clamp-4">
                            {service.tagline}
                          </p>
                          <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-900 transition group-hover:text-aqua-700">
                            Zobacz usługę
                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </section>
              )}
            </article>

            <aside className="min-w-0 h-fit rounded-3xl border border-border bg-muted p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-700">
                Dla kogo
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy-700">
                Ten materiał jest pisany pod klientów, wspólnoty, zarządców i
                firmy, które chcą lepiej rozumieć problemy kanalizacyjne,
                wybrać właściwą usługę i szybciej podjąć dobrą decyzję.
              </p>
              <Link
                href="/zapytanie"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy-900 hover:text-aqua-700"
              >
                Zgłoś temat
              </Link>
            </aside>
          </div>
        </Container>
      </section>

      {relatedArticles.length > 0 && (
        <section className="bg-muted py-20">
          <Container>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Powiązane artykuły
            </h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {relatedArticles.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

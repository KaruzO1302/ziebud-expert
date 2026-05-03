import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { HeroPhoto } from "@/components/site/hero-photo";
import { ArticleCard } from "@/components/site/content-cards";
import { articles } from "@/lib/articles-data";
import {
  blogListingSchema,
  breadcrumbSchema,
  itemListSchema,
  jsonLdScript,
} from "@/lib/jsonld";
import { getPagePhoto } from "@/lib/photos";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — WUKO, kanalizacja i serwis Wrocław",
  description:
    "Praktyczne artykuły o WUKO, udrażnianiu rur, inspekcji TV i serwisie kanalizacji we Wrocławiu.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — WUKO, kanalizacja i serwis Wrocław",
    description:
      "Praktyczne artykuły o WUKO, udrażnianiu rur, inspekcji TV i serwisie kanalizacji we Wrocławiu.",
    url: `${SITE_URL}/blog`,
    type: "website",
    images: [`${SITE_URL}/blog/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — WUKO, kanalizacja i serwis Wrocław",
    description:
      "Praktyczne artykuły o WUKO, udrażnianiu rur, inspekcji TV i serwisie kanalizacji we Wrocławiu.",
    images: [`${SITE_URL}/blog/opengraph-image`],
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(blogListingSchema(articles))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          itemListSchema(
            articles.map((article) => ({
              name: article.title,
              path: `/blog/${article.slug}`,
              description: article.metaDescription,
            })),
          ),
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Strona główna", path: "/" },
            { name: "Wiedza", path: "/blog" },
          ]),
        )}
      />

      <section className="relative overflow-hidden bg-navy-900 text-white">
        <HeroPhoto photo={getPagePhoto("blog")} priority overlay="navy-soft" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_10%_-10%,rgba(0,212,255,0.18),transparent_70%)]"
        />
        <Container className="relative py-20 sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-200">
            Wiedza branżowa
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
            Blog o WUKO, kanalizacji i serwisie technicznym we Wrocławiu
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-100">
            Piszemy o tym, co naprawdę pomaga klientom, wspólnotom i firmom:
            WUKO, udrażnianie rur, inspekcja TV, separatory i dobre praktyki
            eksploatacyjne dla kanalizacji.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Najnowsze artykuły o WUKO, kanalizacji i diagnostyce
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-700">
              Zebraliśmy tutaj materiały, które pomagają klientom, wspólnotom i
              firmom szybciej rozpoznać problem, porównać usługi i wybrać
              właściwą interwencję we Wrocławiu.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

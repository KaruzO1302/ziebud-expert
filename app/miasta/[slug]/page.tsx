import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPage } from "@/components/site/location-page";
import { articles } from "@/lib/articles-data";
import { caseStudies } from "@/lib/case-studies-data";
import {
  breadcrumbSchema,
  jsonLdScript,
  locationSchema,
} from "@/lib/jsonld";
import { cityPages, getCityPage } from "@/lib/locations-data";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return cityPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getCityPage(slug);
  if (!location) return {};

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: `/miasta/${location.slug}` },
    robots: { index: false, follow: false },
  };
}

export default async function CityPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const location = getCityPage(slug);

  if (!location) notFound();

  const relatedArticles = articles.filter((article) =>
    location.articleSlugs.includes(article.slug),
  );
  const relatedCaseStudies = caseStudies.filter((caseStudy) =>
    location.caseStudySlugs.includes(caseStudy.slug),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(locationSchema(location))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Strona główna", path: "/" },
            { name: "Miasta", path: "/miasta" },
            { name: location.name, path: `/miasta/${location.slug}` },
          ]),
        )}
      />
      <LocationPage
        location={location}
        articles={relatedArticles}
        caseStudies={relatedCaseStudies}
      />
    </>
  );
}

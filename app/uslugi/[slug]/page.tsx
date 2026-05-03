import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage, buildServiceJsonLd } from "@/components/site/service-page";
import { CtaPanel } from "@/components/site/sections/cta-panel";
import { getLocalService, localServices } from "@/lib/local-services-data";
import { SITE_URL } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return localServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getLocalService(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/uslugi/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: "website",
      locale: "pl_PL",
      url: `${SITE_URL}/uslugi/${service.slug}`,
      images: [`${SITE_URL}/uslugi/${service.slug}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [`${SITE_URL}/uslugi/${service.slug}/opengraph-image`],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const service = getLocalService(slug);
  if (!service) notFound();

  const jsonLd = buildServiceJsonLd(service);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage service={service} />
      <CtaPanel />
    </>
  );
}

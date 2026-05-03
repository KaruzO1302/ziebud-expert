import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage, buildServiceJsonLd } from "@/components/site/service-page";
import { CtaPanel } from "@/components/site/sections/cta-panel";
import { services, getService } from "@/lib/services-data";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
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
      url: `https://wodociagi-kanalizacja.com/uslugi/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const service = getService(slug);
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

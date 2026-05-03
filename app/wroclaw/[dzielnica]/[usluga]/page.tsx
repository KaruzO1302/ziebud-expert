import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DistrictServicePage, buildDistrictServiceJsonLd } from "@/components/site/district-service-page";
import { CtaPanel } from "@/components/site/sections/cta-panel";
import { districtServices, getDistrictService } from "@/lib/district-services-data";
import { SITE_URL } from "@/lib/site";

type Params = Promise<{ dzielnica: string; usluga: string }>;

export function generateStaticParams() {
  return districtServices.map((s) => ({
    dzielnica: s.districtSlug,
    usluga: s.serviceSlug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { dzielnica, usluga } = await params;
  const service = getDistrictService(dzielnica, usluga);
  if (!service) return {};

  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: {
      canonical: `/wroclaw/${service.districtSlug}/${service.serviceSlug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: "website",
      locale: "pl_PL",
      url: `${SITE_URL}/wroclaw/${service.districtSlug}/${service.serviceSlug}`,
    },
  };
}

export default async function DistrictServiceRoute({
  params,
}: {
  params: Params;
}) {
  const { dzielnica, usluga } = await params;
  const service = getDistrictService(dzielnica, usluga);
  if (!service) notFound();

  const jsonLd = buildDistrictServiceJsonLd(service);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DistrictServicePage service={service} />
      <CtaPanel />
    </>
  );
}

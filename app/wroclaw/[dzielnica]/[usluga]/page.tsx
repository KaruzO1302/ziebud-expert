import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DistrictServicePage, buildDistrictServiceJsonLd } from "@/components/site/district-service-page";
import { CtaPanel } from "@/components/site/sections/cta-panel";
import { districtServices, getDistrictService } from "@/lib/district-services-data";
import { jsonLdScript } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";

type Params = Promise<{ dzielnica: string; usluga: string }>;

const HERO_MAP: Record<string, { src: string; alt: string }> = {
  krzyki: {
    src: "/images/task04/dzielnica-krzyki.webp",
    alt: "Pogotowie kanalizacyjne Wrocław Krzyki — blokowiska i osiedla Borek, ekipa ZIEBUD Expert",
  },
  fabryczna: {
    src: "/images/task04/dzielnica-fabryczna.webp",
    alt: "Udrażnianie kanalizacji Wrocław Fabryczna — Park Biznesu i strefy magazynowe, serwis B2B",
  },
  "psie-pole": {
    src: "/images/task04/dzielnica-psie-pole.webp",
    alt: "WUKO Wrocław Psie Pole — domy jednorodzinne, szybki dojazd ZIEBUD Expert",
  },
  srodmiescie: {
    src: "/images/task04/dzielnica-srodmiescie.webp",
    alt: "Inspekcja TV kanalizacji Wrocław Śródmieście — apartamenty nad Odrą, dyskretny serwis 24h",
  },
  "stare-miasto": {
    src: "/images/task04/dzielnica-stare-miasto.webp",
    alt: "Pogotowie kanalizacyjne Wrocław Stare Miasto — Rynek, kamienice, serwis bez utrudnień",
  },
};

const FALLBACK_HERO = {
  src: "/images/task04/wroclaw-master.webp",
  alt: "Pogotowie kanalizacyjne Wrocław 24/7 — most Grunwaldzki i katedra, zasięg całe miasto",
};

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

  const hero = HERO_MAP[dzielnica] ?? FALLBACK_HERO;
  const jsonLd = buildDistrictServiceJsonLd(service);

  return (
    <>
      {jsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(schema)}
        />
      ))}
      <DistrictServicePage service={service} hero={hero} />
      <CtaPanel />
    </>
  );
}

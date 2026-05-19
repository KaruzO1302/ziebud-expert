import type { Metadata } from "next";
import { TrustBrandPage } from "@/components/site/trust-brand-page";
import {
  buildTrustPageJsonLd,
  getTrustPage,
} from "@/lib/trust-pages-data";
import { SITE_URL } from "@/lib/site";

const page = getTrustPage("marki-oczyszczalni");

export const metadata: Metadata = {
  title: { absolute: page?.title ?? "Marki oczyszczalni | ZIEBUD Expert" },
  description: page?.description,
  alternates: { canonical: "/marki-oczyszczalni" },
  openGraph: {
    title: page?.title,
    description: page?.description,
    type: "website",
    locale: "pl_PL",
    url: `${SITE_URL}/marki-oczyszczalni`,
  },
};

export default function MarkiOczyszczalniPage() {
  if (!page) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildTrustPageJsonLd(page)),
        }}
      />
      <TrustBrandPage page={page} />
    </>
  );
}

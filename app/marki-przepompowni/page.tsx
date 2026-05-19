import type { Metadata } from "next";
import { TrustBrandPage } from "@/components/site/trust-brand-page";
import {
  buildTrustPageJsonLd,
  getTrustPage,
} from "@/lib/trust-pages-data";
import { SITE_URL } from "@/lib/site";

const page = getTrustPage("marki-przepompowni");

export const metadata: Metadata = {
  title: { absolute: page?.title ?? "Marki przepompowni | ZIEBUD Expert" },
  description: page?.description,
  alternates: { canonical: "/marki-przepompowni" },
  openGraph: {
    title: page?.title,
    description: page?.description,
    type: "website",
    locale: "pl_PL",
    url: `${SITE_URL}/marki-przepompowni`,
  },
};

export default function MarkiPrzepompowniPage() {
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

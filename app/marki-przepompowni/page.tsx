import type { Metadata } from "next";
import { TrustBrandPage } from "@/components/site/trust-brand-page";
import { getTrustPage } from "@/lib/trust-pages-data";
import {
  jsonLdBreadcrumb,
  jsonLdScript,
  trustCollectionPageSchema,
} from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";

const page = getTrustPage("marki-przepompowni");

export async function generateMetadata(): Promise<Metadata> {
  return {
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
}

export default function MarkiPrzepompowniPage() {
  if (!page) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(trustCollectionPageSchema(page))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          jsonLdBreadcrumb([
            { name: "Strona główna", url: SITE_URL },
            { name: "Marki", url: `${SITE_URL}/marki-przepompowni` },
            { name: page.eyebrow, url: `${SITE_URL}/marki-przepompowni` },
          ]),
        )}
      />
      <TrustBrandPage page={page} />
    </>
  );
}

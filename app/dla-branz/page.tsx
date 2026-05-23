import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { branzePages } from "@/lib/branze-data";
import { jsonLdBreadcrumb, jsonLdScript } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "Serwis kanalizacji dla branż Wrocław | ZIĘBUD Expert",
  },
  description:
    "Pogotowie kanalizacyjne, WUKO, separatory i inspekcja TV dla gastronomii, hoteli, deweloperów, magazynów, szkół, szpitali i fabryk.",
  alternates: { canonical: "/dla-branz" },
  openGraph: {
    title: "Serwis kanalizacji dla branż Wrocław | ZIĘBUD Expert",
    description:
      "ZIĘBUD Expert obsługuje kanalizację w obiektach B2B: gastronomia, hotele, magazyny, szkoły, szpitale, fabryki i galerie.",
    type: "website",
    locale: "pl_PL",
    url: `${SITE_URL}/dla-branz`,
  },
};

export default function DlaBranzPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          jsonLdBreadcrumb([
            { name: "Strona główna", url: SITE_URL },
            { name: "Dla branż", url: `${SITE_URL}/dla-branz` },
          ]),
        )}
      />
      <section className="bg-navy-950 py-20 text-white">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-200">
            Dla branż
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Serwis kanalizacji dopasowany do rytmu pracy obiektu
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-navy-100">
            Inaczej obsługuje się restaurację w weekend, inaczej halę z ruchem
            TIR, a jeszcze inaczej szpital lub szkołę. Wybierz branżę i zobacz,
            jaki zakres prac ma sens dla Twojego obiektu.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {branzePages.map((page) => (
              <Link
                key={page.slug}
                href={`/dla-branz/${page.slug}`}
                className="group overflow-hidden rounded-[24px] border border-border bg-muted shadow-soft transition hover:-translate-y-0.5 hover:border-aqua-300"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={page.image.src}
                    alt={page.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-aqua-700">
                    Branża
                  </p>
                  <h2 className="mt-2 font-display text-xl font-semibold text-navy-900">
                    {page.branza_name}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-navy-700">
                    {page.meta_description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900">
                    Zobacz zakres
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

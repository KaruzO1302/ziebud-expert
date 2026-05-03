import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { LocationCard } from "@/components/site/content-cards";
import { cityPages } from "@/lib/locations-data";

export const metadata: Metadata = {
  title: "Miasta — sieci zewnętrzne w kluczowych lokalizacjach",
  description:
    "Strony lokalne ZIEBUD Expert dla kluczowych miast w Polsce: wodociągi, kanalizacja, retencja, przepompownie i projekty sieci zewnętrznych.",
  alternates: { canonical: "/miasta" },
  robots: { index: false, follow: false },
};

export default function CitiesIndexPage() {
  return (
    <section className="bg-white py-20">
      <Container>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
          Miasta
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-navy-700">
          Zobacz lokalne strony usługowe przygotowane dla największych i
          najważniejszych rynków inwestycyjnych w Polsce.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cityPages.map((location) => (
            <LocationCard key={location.slug} location={location} />
          ))}
        </div>
      </Container>
    </section>
  );
}

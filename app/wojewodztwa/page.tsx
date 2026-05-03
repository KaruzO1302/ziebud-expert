import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { LocationCard } from "@/components/site/content-cards";
import { voivodeshipPages } from "@/lib/locations-data";

export const metadata: Metadata = {
  title: "Województwa — ogólnopolska obsługa inwestycji wod-kan",
  description:
    "Strony regionalne ZIEBUD Expert dla wszystkich województw: sieci wodociągowe, kanalizacja, retencja, przepompownie i infrastruktura towarzysząca.",
  alternates: { canonical: "/wojewodztwa" },
  robots: { index: false, follow: false },
};

export default function RegionsIndexPage() {
  return (
    <section className="bg-white py-20">
      <Container>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
          Województwa
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-navy-700">
          Ogólnopolska siatka stron regionalnych przygotowana pod inwestycje
          wodociągowe, kanalizacyjne, retencyjne i obiekty techniczne.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {voivodeshipPages.map((location) => (
            <LocationCard key={location.slug} location={location} />
          ))}
        </div>
      </Container>
    </section>
  );
}

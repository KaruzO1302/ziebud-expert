import { Container } from "@/components/site/container";

export function TrenchlessSpotlight() {
  return (
    <section className="bg-navy-900 py-20 text-white sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Obsługujemy inwestycje w całej Polsce
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-200">
            Pracujemy dla deweloperów, firm przemysłowych, inwestorów
            prywatnych, generalnych wykonawców oraz podmiotów komunalnych.
            Model współpracy opieramy na konkretach: dokumentacji, zakresie
            robót, terminie i sprawnej komunikacji.
          </p>
        </div>
      </Container>
    </section>
  );
}

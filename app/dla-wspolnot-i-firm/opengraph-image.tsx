import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "Stała obsługa",
    title: "Obsługa kanalizacji dla wspólnot i firm we Wrocławiu",
    description:
      "Planowy serwis, WUKO, inspekcja TV, separatory i przepompownie dla wspólnot, gastronomii, firm i obiektów technicznych.",
    highlights: [
      "Wspólnoty i zarządcy nieruchomości",
      "Gastronomia i retail",
      "Separatory i przepompownie",
    ],
  });
}

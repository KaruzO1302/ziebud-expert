import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "Awaria i interwencja",
    title: "Pogotowie kanalizacyjne Wrocław",
    description:
      "Szybka pomoc przy zatorach, cofce ścieków, WUKO, udrażnianiu rur i diagnostyce kamerą TV dla budynków, firm i wspólnot.",
    highlights: [
      "WUKO i hydrodynamiczne czyszczenie",
      "Udrażnianie rur i pionów",
      "Inspekcja TV kanalizacji",
    ],
  });
}

import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "Pogotowie kanalizacyjne",
    title: "WUKO, udrażnianie rur i serwis kanalizacji we Wrocławiu",
    description:
      "ZIĘBUD Expert obsługuje Wrocław i okolice: awarie kanalizacji, czyszczenie WUKO, inspekcję TV, separatory i przepompownie.",
    highlights: [
      "WUKO i czyszczenie kanalizacji",
      "Inspekcja TV i diagnostyka",
      "Wspólnoty, firmy i obiekty techniczne",
    ],
  });
}

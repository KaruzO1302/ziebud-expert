import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "Blog i wiedza",
    title: "WUKO, kanalizacja i serwis techniczny we Wrocławiu",
    description:
      "Praktyczne artykuły o WUKO, udrażnianiu rur, inspekcji TV, separatorach i obsłudze obiektów we Wrocławiu.",
    highlights: [
      "Artykuły zakupowe i lokalne SEO",
      "WUKO, kamera TV, separatory",
      "Wiedza dla wspólnot i firm",
    ],
  });
}

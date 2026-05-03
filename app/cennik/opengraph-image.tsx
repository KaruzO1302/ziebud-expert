import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "Orientacyjne koszty",
    title: "Cennik WUKO i usług kanalizacyjnych we Wrocławiu",
    description:
      "Sprawdź orientacyjne widełki dla WUKO, udrażniania rur, inspekcji TV, separatorów i przepompowni oraz dowiedz się, co wpływa na cenę usługi.",
    highlights: [
      "WUKO i czyszczenie kanalizacji",
      "Inspekcja TV i diagnostyka",
      "Separatory i przepompownie",
    ],
  });
}

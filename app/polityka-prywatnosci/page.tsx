import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/site/placeholder-page";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Polityka prywatności serwisu pogotowie-kanalizacyjne-wroclaw.com — informacje o przetwarzaniu danych osobowych zgodnie z RODO.",
  alternates: { canonical: "/polityka-prywatnosci" },
};

export default function PolitykaPrywatnosciPage() {
  return (
    <PlaceholderPage
      eyebrow="Informacje prawne"
      title="Polityka prywatności"
      description="Dokument opisujący zasady przetwarzania danych osobowych zgodnie z RODO oraz polityką cookies serwisu pogotowie-kanalizacyjne-wroclaw.com."
      note="Pełna treść polityki zostanie opublikowana po rejestracji firmy i ustaleniu administratora danych. Do tego czasu dane z formularzy przetwarzamy wyłącznie w celu odpowiedzi na zapytanie."
      primaryCta={{ label: "Napisz do nas", href: "/kontakt" }}
    />
  );
}

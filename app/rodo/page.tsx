import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/site/placeholder-page";

export const metadata: Metadata = {
  title: "Informacja RODO",
  description:
    "Klauzula informacyjna o przetwarzaniu danych osobowych zgodnie z Rozporządzeniem UE 2016/679 (RODO).",
  alternates: { canonical: "/rodo" },
};

export default function RodoPage() {
  return (
    <PlaceholderPage
      eyebrow="Informacje prawne"
      title="Klauzula informacyjna RODO"
      description="Informacje o administratorze danych, celach i podstawach prawnych przetwarzania oraz prawach osób, których dane dotyczą."
      note="Pełna klauzula RODO zostanie opublikowana po rejestracji firmy i wpisaniu administratora. Do tego czasu dane z formularzy przetwarzamy wyłącznie w celu odpowiedzi na zapytanie i usuwamy po 90 dniach bezaktywności."
      primaryCta={{ label: "Napisz do nas", href: "/kontakt" }}
    />
  );
}

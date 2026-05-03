import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/site/placeholder-page";

export const metadata: Metadata = {
  title: "Polityka cookies",
  description:
    "Informacje o plikach cookies używanych w serwisie pogotowie-kanalizacyjne-wroclaw.com.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <PlaceholderPage
      eyebrow="Informacje prawne"
      title="Polityka cookies"
      description="Informacje o rodzajach plików cookies używanych w serwisie oraz sposobach zarządzania zgodami."
      note="Pełna polityka cookies wraz z mechanizmem consent management zostanie opublikowana wraz z uruchomieniem narzędzi analitycznych."
      primaryCta={{ label: "Napisz do nas", href: "/kontakt" }}
    />
  );
}

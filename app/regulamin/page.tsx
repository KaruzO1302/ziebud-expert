import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/site/placeholder-page";

export const metadata: Metadata = {
  title: "Regulamin serwisu",
  description:
    "Regulamin świadczenia usług drogą elektroniczną przez serwis pogotowie-kanalizacyjne-wroclaw.com.",
  alternates: { canonical: "/regulamin" },
};

export default function RegulaminPage() {
  return (
    <PlaceholderPage
      eyebrow="Informacje prawne"
      title="Regulamin serwisu"
      description="Zasady korzystania z serwisu pogotowie-kanalizacyjne-wroclaw.com, formularzy kontaktowych, chatbota oraz innych narzędzi online."
      note="Regulamin zostanie opublikowany w pełnej wersji po uruchomieniu kalkulatora i formularzy transakcyjnych."
      primaryCta={{ label: "Napisz do nas", href: "/kontakt" }}
    />
  );
}

import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/site/placeholder-page";
import { CtaPanel } from "@/components/site/sections/cta-panel";
import { COMPANY_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kariera",
  description:
    "Szukamy osób do pracy terenowej, serwisowej i technicznej. Zobacz aktualny status rekrutacji w ZIEBUD Expert.",
  alternates: { canonical: "/kariera" },
  robots: { index: false, follow: false },
};

export default function KarieraPage() {
  return (
    <>
      <PlaceholderPage
        photoKey="workshopTeam"
        eyebrow="Kariera"
        title="Dołącz do zespołu"
        description="Szukamy osób do pracy serwisowej, terenowej i technicznej przy obsłudze kanalizacji, separatorów i obiektów na rynku lokalnym."
        note={`Aktualne oferty pracy publikujemy niebawem. Jeśli interesuje Cię praca u nas — prześlij CV na ${COMPANY_EMAIL}.`}
        primaryCta={{ label: "Wyślij CV", href: `mailto:${COMPANY_EMAIL}` }}
      />
      <CtaPanel />
    </>
  );
}

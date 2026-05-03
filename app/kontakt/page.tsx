import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/site/container";
import { HeroPhoto } from "@/components/site/hero-photo";
import { LeadForm } from "@/components/site/lead-form";
import { getPagePhoto } from "@/lib/photos";
import { generalContractorSchema, jsonLdScript } from "@/lib/jsonld";
import {
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_KRS,
  COMPANY_NIP,
  COMPANY_PHONE_DISPLAY,
  COMPANY_REGON,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt — pogotowie kanalizacyjne Wrocław",
  description:
    "Kontakt do ZIEBUD Expert we Wrocławiu w sprawie WUKO, udrażniania rur, inspekcji TV, separatorów i przepompowni.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt — pogotowie kanalizacyjne Wrocław",
    description:
      "Kontakt do ZIEBUD Expert we Wrocławiu w sprawie WUKO, udrażniania rur, inspekcji TV, separatorów i przepompowni.",
    url: `${SITE_URL}/kontakt`,
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt — pogotowie kanalizacyjne Wrocław",
    description:
      "Kontakt do ZIEBUD Expert we Wrocławiu w sprawie WUKO, udrażniania rur, inspekcji TV, separatorów i przepompowni.",
    images: ["/og-image.png"],
  },
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(generalContractorSchema)}
      />

      <section className="relative overflow-hidden bg-navy-900 text-white">
        <HeroPhoto photo={getPagePhoto("kontakt")} priority overlay="navy-soft" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_10%_-10%,rgba(0,212,255,0.18),transparent_70%)]"
        />
        <Container className="relative py-20 sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-200">
            Kontakt
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
            Kontakt do ZIEBUD Expert i aktywne zgłoszenie serwisowe
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-100">
            Jeśli wolisz, możesz od razu wysłać zgłoszenie. Jeśli chcesz
            najpierw porozmawiać, poniżej masz bezpośredni kontakt i formularz
            pod Wrocław oraz okolice.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.2fr] lg:items-start">
            <div className="space-y-5">
              <ContactCard
                icon={<Phone className="h-5 w-5" />}
                title="Telefon"
                value={COMPANY_PHONE_DISPLAY}
                sub="Dla pilnych tematów i szybkiego kontaktu serwisowego"
                href={`tel:+48${COMPANY_PHONE_DISPLAY.replace(/\s/g, "")}`}
              />
              <ContactCard
                icon={<Mail className="h-5 w-5" />}
                title="E-mail"
                value={COMPANY_EMAIL}
                sub="Dla zgłoszeń, wycen i tematów do omówienia"
                href={`mailto:${COMPANY_EMAIL}`}
              />
              <ContactCard
                icon={<MapPin className="h-5 w-5" />}
                title="Biuro"
                value={COMPANY_ADDRESS}
                sub="Wrocław i okolice jako główny obszar codziennej obsługi"
              />
              <ContactCard
                icon={<Clock className="h-5 w-5" />}
                title="Godziny pracy"
                value="Pon–Pt 7:00–18:00"
                sub="W sprawach pilnych najlepiej dzwonić od razu"
              />
              <ContactCard
                icon={<MapPin className="h-5 w-5" />}
                title="Dane rejestrowe"
                value={`NIP ${COMPANY_NIP}`}
                sub={`REGON ${COMPANY_REGON} · KRS ${COMPANY_KRS}`}
              />
            </div>

            <LeadForm
              source="kontakt"
              title="Napisz do nas i opisz temat"
              description="Ten formularz działa. Po wysłaniu wrócimy z kontaktem, zakresem usługi albo pytaniami doprecyzowującymi."
              submitLabel="Wyślij wiadomość"
            />
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  title,
  value,
  sub,
  href,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  sub: string;
  href?: string;
}) {
  const content = (
    <div className="rounded-3xl border border-border bg-muted p-7">
      <div className="inline-flex rounded-2xl bg-aqua-50 p-3 text-aqua-700">
        {icon}
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-700">
        {title}
      </p>
      <p className="mt-2 font-display text-xl font-semibold text-navy-900">
        {value}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-navy-700">{sub}</p>
    </div>
  );

  if (!href) return content;

  return (
    <a href={href} className="block transition hover:opacity-90">
      {content}
    </a>
  );
}

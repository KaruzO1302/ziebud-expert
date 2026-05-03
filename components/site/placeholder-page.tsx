import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/site/container";
import { LinkButton } from "@/components/site/link-button";
import { HeroPhoto } from "@/components/site/hero-photo";
import { photos, type PhotoKey } from "@/lib/photos";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  note?: string;
  primaryCta?: { label: string; href: string };
  photoKey?: PhotoKey;
};

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  note,
  primaryCta = { label: "Wyceń online", href: "/wycena" },
  photoKey = "workersTeam",
}: PlaceholderPageProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <HeroPhoto photo={photos[photoKey]} priority overlay="navy-deep" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,rgba(0,212,255,0.18),transparent_70%)]"
      />
      <Container className="relative py-24 sm:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-200">
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
          {description}
        </p>
        {note && (
          <p className="mt-4 max-w-2xl rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-navy-100">
            {note}
          </p>
        )}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <LinkButton
            href={primaryCta.href}
            size="lg"
            className="group bg-aqua-500 text-navy-900 hover:bg-aqua-400"
          >
            {primaryCta.label}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </LinkButton>
          <LinkButton
            href="/kontakt"
            size="lg"
            variant="outline"
            className="border-white/20 bg-white/5 text-white hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" />
            Napisz do nas
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}

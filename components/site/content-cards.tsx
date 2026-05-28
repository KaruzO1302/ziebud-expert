import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { getPhoto } from "@/lib/photos";
import type { Article } from "@/lib/articles-data";
import type { CaseStudy } from "@/lib/case-studies-data";
import type { LocationPage } from "@/lib/locations-data";
import { PhotoFrame } from "@/components/site/hero-photo";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-soft">
      <div className="mb-5 overflow-hidden rounded-xl">
        <PhotoFrame
          photo={getPhoto(article.photoKey)}
          aspectRatio="16 / 9"
          className="ring-0"
        />
      </div>
      <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-aqua-700">
        <span>{article.category}</span>
        <span className="text-navy-300">·</span>
        <span>{article.readTime}</span>
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">
        {article.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700">
        {article.excerpt}
      </p>
      <Link
        href={`/blog/${article.slug}`}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-900 transition hover:text-aqua-700"
      >
        Czytaj artykuł
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-soft">
      <div className="mb-5 overflow-hidden rounded-xl">
        <PhotoFrame
          photo={getPhoto(caseStudy.photoKey)}
          aspectRatio="16 / 9"
          className="ring-0"
        />
      </div>
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-aqua-700">
        <MapPin className="h-3.5 w-3.5" />
        <span>
          {caseStudy.city} · {caseStudy.voivodeship}
        </span>
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">
        {caseStudy.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700">
        {caseStudy.excerpt}
      </p>
      <Link
        href={`/realizacje/${caseStudy.slug}`}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-900 transition hover:text-aqua-700"
      >
        Zobacz realizację
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

export function LocationCard({ location }: { location: LocationPage }) {
  const href =
    location.type === "city"
      ? `/miasta/${location.slug}`
      : `/wojewodztwa/${location.slug}`;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-soft">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-aqua-700">
        {location.type === "city" ? "Miasto" : "Województwo"}
      </p>
      <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">
        {location.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700">
        {location.localDrivers[0] ?? location.lead}
      </p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-900 transition hover:text-aqua-700"
      >
        Zobacz stronę lokalną
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

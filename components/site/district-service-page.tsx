import Image from "next/image";
import Link from "next/link";
import { DistrictService } from "@/lib/district-services-data";
import { jsonLdBreadcrumb, jsonLdFAQ, jsonLdService } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";

interface Props {
  service: DistrictService;
  hero: {
    src: string;
    alt: string;
  };
}

export function buildDistrictServiceJsonLd(service: DistrictService) {
  return [
    jsonLdService({
      name: `${service.serviceName} ${service.districtName} Wrocław`,
      description: service.metaDescription,
      serviceType: service.serviceType,
      areaName: service.areaServed,
      url: `${SITE_URL}/wroclaw/${service.districtSlug}/${service.serviceSlug}`,
    }),
    jsonLdFAQ(service.faqs),
    jsonLdBreadcrumb([
      { name: "Strona główna", url: SITE_URL },
      { name: "Wrocław", url: `${SITE_URL}/wroclaw` },
      { name: service.districtName, url: `${SITE_URL}/wroclaw/${service.districtSlug}` },
      {
        name: service.serviceName,
        url: `${SITE_URL}/wroclaw/${service.districtSlug}/${service.serviceSlug}`,
      },
    ]),
  ];
}

export function DistrictServicePage({ service, hero }: Props) {
  return (
    <main className="pb-16">
      <section className="relative min-h-[520px] overflow-hidden bg-navy-950 text-white">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-900/50"
        />
        <div className="relative mx-auto flex min-h-[520px] max-w-5xl flex-col justify-end px-4 py-14">
          <nav className="mb-8 flex flex-wrap gap-2 text-sm text-white/75">
            <Link href="/" className="hover:text-white">Strona główna</Link>
            <span>/</span>
            <Link href="/wroclaw" className="hover:text-white">Wrocław</Link>
            <span>/</span>
            <span>{service.districtName}</span>
            <span>/</span>
            <span>{service.serviceName}</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-aqua-200">
            ZIĘBUD Expert · Wrocław · {service.districtName}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            {service.h1}
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+48602481688"
              className="inline-flex items-center gap-2 rounded-full bg-aqua-400 px-5 py-3 text-sm font-semibold text-navy-950 transition hover:bg-aqua-300"
            >
              Zadzwoń: 602 481 688
            </a>
            <Link
              href="/zapytanie"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Zgłoś awarię →
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 pt-14">
        {/* Breadcrumb */}
        <div className="mb-12 space-y-5 text-lg leading-relaxed text-gray-700">
          {service.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {/* Lokalny kontekt — unikalna treść per dzielnica × usługa */}
        {service.localContext.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-5 text-xl font-semibold">
              {service.serviceName} {service.districtName} — jak to wygląda w praktyce
            </h2>
            <div className="space-y-5 leading-relaxed text-gray-700">
              {service.localContext.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        )}

        {/* Sections */}
        <section className="mb-12 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-5 text-xl font-semibold">
            Co zyskujesz przy tej usłudze
          </h2>
          <ul className="space-y-3">
            {service.zalety.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-700">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Najczęstsze pytania</h2>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-4">
                <p className="font-medium mb-1">{faq.q}</p>
                <p className="text-gray-700 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Powiązane usługi</h2>
          <div className="flex flex-col gap-3">
            <Link
              href={`/uslugi/${service.mainServiceSlug}`}
              className="text-sm font-medium underline underline-offset-2 hover:text-gray-600"
            >
              {service.mainServiceLabel}
            </Link>
            {service.relatedLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-sm underline underline-offset-2 hover:text-gray-600"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-xl bg-gray-50 p-6 text-center">
          <p className="font-semibold text-lg mb-2">Masz pytanie lub chcesz umówić usługę?</p>
          <p className="text-gray-600 text-sm mb-4">{service.cta}</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="tel:+48602481688"
              className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition"
            >
              Zadzwoń: 602 481 688
            </a>
            <Link
              href="/zapytanie"
              className="inline-flex items-center gap-2 border border-black text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition"
            >
              Zgłoś temat →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

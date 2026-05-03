import Link from "next/link";
import { DistrictService } from "@/lib/district-services-data";
import { SITE_URL } from "@/lib/site";

interface Props {
  service: DistrictService;
}

export function buildDistrictServiceJsonLd(service: DistrictService) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.serviceType,
    name: `${service.serviceName} ${service.districtName} Wrocław`,
    description: service.metaDescription,
    url: `${SITE_URL}/wroclaw/${service.districtSlug}/${service.serviceSlug}`,
    provider: {
      "@type": "LocalBusiness",
      name: "ZIEBUD Expert Sp. z o.o.",
      url: SITE_URL,
      telephone: "+48 602 481 688",
    },
    areaServed: {
      "@type": "Place",
      name: service.areaServed,
      containedInPlace: {
        "@type": "City",
        name: "Wrocław",
      },
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "PLN",
      lowPrice: service.priceLow,
      highPrice: service.priceHigh,
    },
  };
}

export function DistrictServicePage({ service }: Props) {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex gap-2 flex-wrap">
          <Link href="/" className="hover:underline">Strona główna</Link>
          <span>/</span>
          <Link href="/wroclaw" className="hover:underline">Wrocław</Link>
          <span>/</span>
          <span className="capitalize">{service.districtName}</span>
          <span>/</span>
          <span>{service.serviceName}</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-2">
            ZIEBUD Expert · Wrocław · {service.districtName}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.h1}</h1>
          <p className="text-lg text-gray-700 mb-6">{service.lead}</p>
          <div className="flex gap-3 flex-wrap">
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
              Zgłoś awarię →
            </Link>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-10 mb-12">
          {service.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-semibold mb-3">{section.h2}</h2>
              <p className="text-gray-700 leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

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
        <div className="bg-gray-50 rounded-xl p-6 text-center">
          <p className="font-semibold text-lg mb-2">Masz pytanie lub chcesz umówić usługę?</p>
          <p className="text-gray-600 text-sm mb-4">Oddzwaniamy w 15 minut. Dojazd do 120 min na terenie Wrocławia.</p>
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

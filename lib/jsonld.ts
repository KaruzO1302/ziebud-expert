import type { Article } from "@/lib/articles-data";
import type { CaseStudy } from "@/lib/case-studies-data";
import { homeFaqs } from "@/lib/home-faqs";
import type { LocationPage } from "@/lib/locations-data";
import type { TrustPage } from "@/lib/trust-pages-data";
import {
  COMPANY_AREAS_SERVED,
  COMPANY_COUNTRY_CODE,
  COMPANY_EMAIL,
  COMPANY_FEATURED_REVIEWS,
  COMPANY_FOUNDING_DATE,
  COMPANY_KRS,
  COMPANY_LATITUDE,
  COMPANY_LOCALITY,
  COMPANY_LONGITUDE,
  COMPANY_NIP,
  COMPANY_POSTAL_CODE,
  COMPANY_PRICE_RANGE,
  COMPANY_RATING,
  COMPANY_REGION,
  COMPANY_REGON,
  COMPANY_PHONE,
  COMPANY_SAME_AS_URLS,
  COMPANY_SERVICE_RADIUS_METERS,
  COMPANY_STREET_ADDRESS,
  COMPANY_VAT_ID,
  FOUNDER_LINKEDIN_URL,
  FOUNDER_NAME,
  ORG_ALTERNATE_NAMES,
  ORG_NAME,
  ORG_SHORT_NAME,
  SERVICE_AREA_CENTER_LATITUDE,
  SERVICE_AREA_CENTER_LONGITUDE,
  SITE_URL,
} from "@/lib/site";

// Lista usług z cenami startowymi (PLN brutto) — używana w hasOfferCatalog
const coreServices: Array<{
  name: string;
  description: string;
  startingPrice?: number;
  priceUnit?: string;
}> = [
  {
    name: "Pogotowie kanalizacyjne 24/7",
    description:
      "Awaryjne udrażnianie kanalizacji 24h. Dojazd 45 min. Bez dopłat za nocne i weekendowe interwencje.",
    startingPrice: 300,
  },
  {
    name: "WUKO – hydrodynamiczne czyszczenie kanalizacji",
    description:
      "Ciśnieniowe czyszczenie kanalizacji wodą pod ciśnieniem 200 bar. Pionów, poziomów, przyłączy.",
    startingPrice: 350,
  },
  {
    name: "Udrażnianie rur kanalizacyjnych",
    description:
      "Mechaniczne i hydrodynamiczne udrażnianie spiralą i WUKO. Mieszkania, wspólnoty, firmy.",
    startingPrice: 200,
  },
  {
    name: "Inspekcja TV kanalizacji",
    description:
      "Diagnostyka kamerą HD z lokalizatorem GPS. Raport wideo + PDF.",
    startingPrice: 300,
  },
  {
    name: "Czyszczenie separatorów tłuszczu",
    description:
      "Czyszczenie separatorów tłuszczu w gastronomii. Faktura VAT, protokół.",
    startingPrice: 500,
  },
  {
    name: "Czyszczenie separatorów ropopochodnych",
    description:
      "Czyszczenie separatorów substancji ropopochodnych. Pełen protokół utylizacji odpadów.",
    startingPrice: 600,
  },
  {
    name: "Serwis przepompowni ścieków",
    description:
      "Konserwacja i serwis przepompowni ścieków. Umowy serwisowe dla wspólnot i firm.",
    startingPrice: 400,
  },
  {
    name: "Naprawa sieci wodociągowych",
    description:
      "Awaryjna naprawa wycieków, rozszczelnień i uszkodzeń przewodów wodociągowych.",
    startingPrice: 500,
  },
];

const coreServiceNames = coreServices.map((s) => s.name);

const ORG_BASE = {
  "@type": "Plumber",
  "@id": `${SITE_URL}/#organization`,
  name: ORG_NAME,
  alternateName: [...ORG_ALTERNATE_NAMES],
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  email: COMPANY_EMAIL,
  telephone: COMPANY_PHONE,
  taxID: COMPANY_NIP,
  vatID: COMPANY_VAT_ID,
  foundingDate: COMPANY_FOUNDING_DATE,
  identifier: [
    {
      "@type": "PropertyValue",
      propertyID: "NIP",
      value: COMPANY_NIP,
    },
    {
      "@type": "PropertyValue",
      propertyID: "KRS",
      value: COMPANY_KRS,
    },
    {
      "@type": "PropertyValue",
      propertyID: "REGON",
      value: COMPANY_REGON,
    },
  ],
  description:
    "Pogotowie kanalizacyjne, WUKO, inspekcja TV, separatory i serwis przepompowni dla Wrocławia, Dolnego Śląska i pobliskich miejscowości. Działamy od 1991 r. — ponad 12 000 zleceń, 35 lat doświadczenia.",
  address: {
    "@type": "PostalAddress",
    addressCountry: COMPANY_COUNTRY_CODE,
    addressLocality: COMPANY_LOCALITY,
    addressRegion: COMPANY_REGION,
    postalCode: COMPANY_POSTAL_CODE,
    streetAddress: COMPANY_STREET_ADDRESS,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: COMPANY_LATITUDE,
    longitude: COMPANY_LONGITUDE,
  },
  areaServed: [...COMPANY_AREAS_SERVED],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: SERVICE_AREA_CENTER_LATITUDE,
      longitude: SERVICE_AREA_CENTER_LONGITUDE,
    },
    geoRadius: COMPANY_SERVICE_RADIUS_METERS,
  },
  knowsAbout: coreServiceNames,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  priceRange: COMPANY_PRICE_RANGE,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: COMPANY_PHONE,
      contactType: "customer service",
      availableLanguage: ["Polish"],
      areaServed: ["Wrocław", "Dolny Śląsk"],
    },
    {
      "@type": "ContactPoint",
      telephone: COMPANY_PHONE,
      contactType: "emergency",
      availableLanguage: ["Polish"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
  ],
  founder: {
    "@type": "Person",
    name: FOUNDER_NAME,
    sameAs: [FOUNDER_LINKEDIN_URL],
  },
  makesOffer: coreServices.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.name,
      description: service.description,
      areaServed: [...COMPANY_AREAS_SERVED],
    },
    ...(service.startingPrice
      ? {
          priceSpecification: {
            "@type": "PriceSpecification",
            price: service.startingPrice,
            priceCurrency: "PLN",
            minPrice: service.startingPrice,
            valueAddedTaxIncluded: false,
          },
        }
      : {}),
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usługi kanalizacyjne i wodno-kanalizacyjne",
    itemListElement: coreServices.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
      },
      ...(service.startingPrice
        ? {
            priceSpecification: {
              "@type": "PriceSpecification",
              price: service.startingPrice,
              priceCurrency: "PLN",
              minPrice: service.startingPrice,
            },
          }
        : {}),
    })),
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: COMPANY_RATING.value,
    reviewCount: COMPANY_RATING.count,
    bestRating: COMPANY_RATING.best,
    worstRating: COMPANY_RATING.worst,
  },
  review: COMPANY_FEATURED_REVIEWS.map((r) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: COMPANY_RATING.best,
    },
    author: {
      "@type": "Person",
      name: r.author,
    },
    reviewBody: r.text,
  })),
  ...(COMPANY_SAME_AS_URLS.length ? { sameAs: COMPANY_SAME_AS_URLS } : {}),
};

export function jsonLdOrganization() {
  return { "@context": "https://schema.org", ...ORG_BASE };
}

export function jsonLdWebSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "ZIĘBUD Expert — Pogotowie Kanalizacyjne Wrocław 24/7",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "pl-PL",
  };
}

export function jsonLdBreadcrumb(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function jsonLdService({
  name,
  description,
  serviceType,
  areaName,
  url,
}: {
  name: string;
  description: string;
  serviceType: string;
  areaName?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "City", name: areaName ?? "Wrocław" },
    url,
  };
}

export function jsonLdFAQ(faq: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export const organizationSchema = jsonLdOrganization();

export const websiteSchema = jsonLdWebSite();

export const localBusinessSchema = {
  "@context": "https://schema.org",
  ...ORG_BASE,
};

export const generalContractorSchema = {
  ...localBusinessSchema,
  "@type": "GeneralContractor",
};

export const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/o-nas#founder`,
  name: FOUNDER_NAME,
  url: `${SITE_URL}/o-nas`,
  jobTitle: "Założyciel",
  worksFor: {
    "@id": `${SITE_URL}/#organization`,
  },
  sameAs: [FOUNDER_LINKEDIN_URL],
};

export const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export function jsonLdScript(data: object) {
  return {
    __html: JSON.stringify(data),
  };
}

export function trustCollectionPageSchema(page: TrustPage) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: page.h1,
    description: page.description,
    url: `${SITE_URL}/${page.slug}`,
    image: `${SITE_URL}${page.image.src}`,
    about: {
      "@type": "LocalBusiness",
      name: ORG_NAME,
      telephone: COMPANY_PHONE,
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: page.brands.map((brand, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Brand",
          name: brand.name,
          url: brand.url,
          description: brand.summary,
        },
      })),
    },
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return jsonLdBreadcrumb(
    items.map((item) => ({ name: item.name, url: `${SITE_URL}${item.path}` })),
  );
}

export function articleSchema(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    name: article.title,
    description: article.metaDescription,
    inLanguage: "pl-PL",
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    articleSection: article.category,
    keywords: [
      article.category,
      ...article.serviceSlugs,
      ...article.citySlugs,
    ].join(", "),
    image: `${SITE_URL}/blog/${article.slug}/opengraph-image`,
    author: {
      "@type": "Organization",
      name: ORG_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/photos/logo-ziebud.jpg`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${article.slug}`,
  };
}

export function blogListingSchema(articles: Article[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "Blog ZIĘBUD Expert",
    description:
      "Praktyczne artykuły o WUKO, udrażnianiu rur, inspekcji TV i serwisie kanalizacji we Wrocławiu.",
    url: `${SITE_URL}/blog`,
    inLanguage: "pl-PL",
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/photos/logo-ziebud.jpg`,
      },
    },
    blogPost: articles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.metaDescription,
      datePublished: article.publishedAt,
      dateModified: article.publishedAt,
      url: `${SITE_URL}/blog/${article.slug}`,
      image: `${SITE_URL}/blog/${article.slug}/opengraph-image`,
      author: {
        "@type": "Organization",
        name: ORG_NAME,
      },
    })),
  };
}

export function itemListSchema(
  items: Array<{ name: string; path: string; description?: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${SITE_URL}${item.path}`,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

export function caseStudySchema(caseStudy: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.metaDescription,
    about: caseStudy.serviceSlugs,
    author: {
      "@type": "Organization",
      name: ORG_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/photos/logo-ziebud.jpg`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/realizacje/${caseStudy.slug}`,
    contentLocation: {
      "@type": "Place",
      name: `${caseStudy.city}, ${caseStudy.voivodeship}`,
      address: {
        "@type": "PostalAddress",
        addressCountry: "PL",
        addressRegion: caseStudy.voivodeship,
        addressLocality: caseStudy.city,
      },
    },
  };
}

export function locationSchema(location: LocationPage) {
  const path =
    location.type === "city"
      ? `/miasta/${location.slug}`
      : `/wojewodztwa/${location.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: location.title,
    name: location.title,
    description: location.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: ORG_SHORT_NAME,
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY_STREET_ADDRESS,
        postalCode: COMPANY_POSTAL_CODE,
        addressLocality: COMPANY_LOCALITY,
        addressCountry: COMPANY_COUNTRY_CODE,
      },
      email: COMPANY_EMAIL,
      telephone: COMPANY_PHONE,
    },
    areaServed: {
      "@type": "Place",
      name: location.name,
    },
    url: `${SITE_URL}${path}`,
  };
}

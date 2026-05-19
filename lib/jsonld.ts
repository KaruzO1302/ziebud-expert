import type { Article } from "@/lib/articles-data";
import type { CaseStudy } from "@/lib/case-studies-data";
import { homeFaqs } from "@/lib/home-faqs";
import type { LocationPage } from "@/lib/locations-data";
import type { TrustPage } from "@/lib/trust-pages-data";
import {
  COMPANY_AREAS_SERVED,
  COMPANY_COUNTRY_CODE,
  COMPANY_EMAIL,
  COMPANY_KRS,
  COMPANY_LOCALITY,
  COMPANY_NIP,
  COMPANY_POSTAL_CODE,
  COMPANY_REGON,
  COMPANY_PHONE,
  COMPANY_SAME_AS_URLS,
  COMPANY_STREET_ADDRESS,
  COMPANY_VAT_ID,
  FOUNDER_LINKEDIN_URL,
  FOUNDER_NAME,
  ORG_NAME,
  ORG_SHORT_NAME,
  SITE_URL,
} from "@/lib/site";

const coreServiceNames = [
  "Pogotowie kanalizacyjne",
  "WUKO",
  "Udrażnianie rur",
  "Inspekcja TV kanalizacji",
  "Czyszczenie separatorów tłuszczu",
  "Czyszczenie separatorów ropopochodnych",
  "Serwis przepompowni ścieków",
  "Naprawa sieci wodociągowych",
];

const ORG_BASE = {
  "@type": "Plumber",
  "@id": `${SITE_URL}/#organization`,
  name: ORG_NAME,
  alternateName: "ZIEBUD Expert — Pogotowie Kanalizacyjne Wrocław",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  email: COMPANY_EMAIL,
  telephone: COMPANY_PHONE,
  taxID: COMPANY_NIP,
  vatID: COMPANY_VAT_ID,
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
    "Pogotowie kanalizacyjne, WUKO, inspekcja TV, separatory i serwis przepompowni dla Wrocławia, Dolnego Śląska i pobliskich miejscowości.",
  address: {
    "@type": "PostalAddress",
    addressCountry: COMPANY_COUNTRY_CODE,
    addressLocality: "Wrocław",
    addressRegion: "Dolnośląskie",
    postalCode: COMPANY_POSTAL_CODE,
    streetAddress: COMPANY_STREET_ADDRESS,
  },
  areaServed: [
    { "@type": "City", name: "Wrocław" },
    { "@type": "AdministrativeArea", name: "województwo dolnośląskie" },
  ],
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
  priceRange: "PLN",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: COMPANY_PHONE,
      contactType: "customer service",
      availableLanguage: ["Polish"],
      areaServed: ["Wrocław", "Dolny Śląsk"],
    },
  ],
  founder: {
    "@type": "Person",
    name: FOUNDER_NAME,
    sameAs: [FOUNDER_LINKEDIN_URL],
  },
  makesOffer: coreServiceNames.map((name) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name,
      areaServed: COMPANY_AREAS_SERVED,
    },
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
    name: "ZIEBUD Expert — Pogotowie Kanalizacyjne Wrocław 24/7",
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
  serviceArea: COMPANY_AREAS_SERVED,
  foundingDate: "1991",
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

import type { Article } from "@/lib/articles-data";
import type { CaseStudy } from "@/lib/case-studies-data";
import { homeFaqs } from "@/lib/home-faqs";
import type { LocationPage } from "@/lib/locations-data";
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

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: ORG_NAME,
  alternateName: ORG_SHORT_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/photos/logo-ziebud.jpg`,
  email: COMPANY_EMAIL,
  telephone: COMPANY_PHONE,
  taxID: COMPANY_NIP,
  vatID: COMPANY_VAT_ID,
  identifier: [
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
  areaServed: COMPANY_AREAS_SERVED,
  knowsAbout: coreServiceNames,
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

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: ORG_NAME,
  url: SITE_URL,
  inLanguage: "pl-PL",
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: ORG_NAME,
  alternateName: ORG_SHORT_NAME,
  url: SITE_URL,
  telephone: COMPANY_PHONE,
  email: COMPANY_EMAIL,
  taxID: COMPANY_NIP,
  vatID: COMPANY_VAT_ID,
  image: `${SITE_URL}/og-image.png`,
  logo: `${SITE_URL}/photos/logo-ziebud.jpg`,
  description:
    "WUKO, pogotowie kanalizacyjne, udrażnianie rur, inspekcja TV, separatory tłuszczu i ropopochodne oraz serwis przepompowni. Wrocław i Dolny Śląsk.",
  address: {
    "@type": "PostalAddress",
    addressCountry: COMPANY_COUNTRY_CODE,
    addressLocality: COMPANY_LOCALITY,
    addressRegion: "dolnośląskie",
    postalCode: COMPANY_POSTAL_CODE,
    streetAddress: COMPANY_STREET_ADDRESS,
  },
  areaServed: COMPANY_AREAS_SERVED,
  serviceArea: COMPANY_AREAS_SERVED,
  knowsAbout: coreServiceNames,
  foundingDate: "1991",
  identifier: [
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  makesOffer: coreServiceNames.map((name) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name,
      areaServed: COMPANY_AREAS_SERVED,
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  })),
  ...(COMPANY_SAME_AS_URLS.length ? { sameAs: COMPANY_SAME_AS_URLS } : {}),
  priceRange: "$$",
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

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
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

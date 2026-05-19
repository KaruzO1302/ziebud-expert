import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles-data";
import { branzePages } from "@/lib/branze-data";
import { caseStudies } from "@/lib/case-studies-data";
import { districtServices } from "@/lib/district-services-data";
import { localServices } from "@/lib/local-services-data";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const seoLastModified = new Date("2026-05-19");

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/uslugi`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/pogotowie-kanalizacyjne`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${SITE_URL}/cennik`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${SITE_URL}/wycena`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/dla-wspolnot-i-firm`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${SITE_URL}/dla-branz`,
      lastModified: seoLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/umowy-serwisowe`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.83,
    },
    {
      url: `${SITE_URL}/sprzet`,
      lastModified: seoLastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/marki-separatorow`,
      lastModified: seoLastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/marki-przepompowni`,
      lastModified: seoLastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/marki-oczyszczalni`,
      lastModified: seoLastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/kontakt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/o-nas`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/zapytanie`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.86,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.76,
    },
    {
      url: `${SITE_URL}/polityka-prywatnosci`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/regulamin`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/cookies`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/rodo`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = localServices.map((service) => ({
    url: `${SITE_URL}/uslugi/${service.slug}`,
    lastModified: seoLastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.68,
  }));

  const districtServiceRoutes: MetadataRoute.Sitemap = districtServices.map(
    (service) => ({
      url: `${SITE_URL}/wroclaw/${service.districtSlug}/${service.serviceSlug}`,
      lastModified: seoLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  const industryRoutes: MetadataRoute.Sitemap = branzePages.map((page) => ({
    url: `${SITE_URL}/dla-branz/${page.slug}`,
    lastModified: seoLastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((caseStudy) => ({
    url: `${SITE_URL}/realizacje/${caseStudy.slug}`,
    lastModified: seoLastModified,
    changeFrequency: "monthly",
    priority: 0.56,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...districtServiceRoutes,
    ...industryRoutes,
    ...caseStudyRoutes,
    ...articleRoutes,
  ];
}

import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles-data";
import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

type Params = Promise<{ slug: string }>;

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function Image({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return createOgImage({
    eyebrow: article.category,
    title: article.title,
    description: article.metaDescription,
    badge: article.readTime,
    highlights: [
      article.category,
      `Publikacja: ${article.publishedAt}`,
      "ZIĘBUD Expert · Blog",
    ],
  });
}

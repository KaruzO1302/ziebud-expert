import { notFound } from "next/navigation";
import { getLocalService, localServices } from "@/lib/local-services-data";
import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

type Params = Promise<{ slug: string }>;

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return localServices.map((service) => ({ slug: service.slug }));
}

export default async function Image({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const service = getLocalService(slug);
  if (!service) notFound();

  return createOgImage({
    eyebrow: service.eyebrow,
    title: service.heroTitle || service.metaTitle,
    description: service.metaDescription,
    highlights: [
      service.variants[0]?.name || service.title,
      service.variants[1]?.name || service.tagline,
      "Wrocław i okolice",
    ],
  });
}

import type { Metadata } from "next";
import { locations } from "@/lib/data";
import { LocalBusinessJsonLd } from "@/components/seo/json-ld";
import { LocationDetailClient } from "./location-detail-client";

export function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) return {};

  return {
    title: `จอ LED ${location.name} เชียงใหม่`,
    description: `${location.description} ขนาดจอ ${location.screenSize} มองเห็นได้ ${location.visibility} Impressions ${location.dailyImpressions}/วัน`,
    alternates: {
      canonical: `https://anajakmedia.com/locations/${location.slug}`,
    },
    openGraph: {
      title: `จอ LED ${location.name} — Anajak Media`,
      description: location.description,
      images: [{ url: location.heroImage }],
    },
  };
}

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  return (
    <>
      {location && <LocalBusinessJsonLd location={location} />}
      <LocationDetailClient />
    </>
  );
}

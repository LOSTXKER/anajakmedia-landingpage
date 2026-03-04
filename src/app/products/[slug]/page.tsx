import type { Metadata } from "next";
import { locations } from "@/lib/data";
import { LocalBusinessJsonLd } from "@/components/seo/json-ld";
import { ProductDetailClient } from "./product-detail-client";

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
    title: `จอ LED ${location.name} เชียงใหม่ — สเปก ราคา ทำเล`,
    description: `ลงโฆษณาจอ LED ${location.name} เชียงใหม่ ขนาดจอ ${location.screenSize} มองเห็นได้ ${location.visibility} ${location.dailyImpressions} Impressions/วัน ลงโฆษณาตรง ไม่ผ่านเอเจนซี่`,
    alternates: {
      canonical: `https://anajakmedia.com/products/${location.slug}`,
    },
    openGraph: {
      title: `จอ LED ${location.name} — Anajak Media`,
      description: location.description,
      images: [{ url: location.heroImage }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  return (
    <>
      {location && <LocalBusinessJsonLd location={location} />}
      <ProductDetailClient />
    </>
  );
}

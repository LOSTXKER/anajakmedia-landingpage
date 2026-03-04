import type { Metadata } from "next";
import { campaigns } from "@/lib/data";
import { CaseStudyClient } from "./case-study-client";

export function generateStaticParams() {
  return campaigns.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const campaign = campaigns.find((c) => c.slug === slug);
  if (!campaign) return {};

  return {
    title: `${campaign.title} — ${campaign.brand}`,
    description: `แคมเปญ ${campaign.title} โดย ${campaign.brand} บนจอ LED ${campaign.location} เชียงใหม่ ระยะเวลา ${campaign.duration}`,
    alternates: {
      canonical: `https://anajakmedia.com/showcase/${campaign.slug}`,
    },
    openGraph: {
      title: `${campaign.title} — ${campaign.brand} | Anajak Media`,
      description: `แคมเปญโฆษณาจอ LED ${campaign.location}`,
      images: [{ url: campaign.image }],
    },
  };
}

export default function CaseStudyPage() {
  return <CaseStudyClient />;
}

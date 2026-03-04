import { WebSiteJsonLd } from "@/components/seo/json-ld";
import { Hero } from "@/components/home/hero";
import { SolutionsPreview } from "@/components/home/solutions-preview";
import { NetworkLocations } from "@/components/home/network-locations";
import { PricingPreview } from "@/components/home/pricing-preview";
import { HowItWorks } from "@/components/home/how-it-works";
import { ShowcaseReel } from "@/components/home/showcase-reel";
import { Testimonials } from "@/components/home/testimonials";
import { CommunityScreenTeaser } from "@/components/home/community-screen-teaser";
import { CtaSection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <WebSiteJsonLd />
      <Hero />
      <SolutionsPreview />
      <NetworkLocations />
      <PricingPreview />
      <HowItWorks />
      <ShowcaseReel />
      <Testimonials />
      <CommunityScreenTeaser />
      <CtaSection />
    </>
  );
}

import { SiteNav } from "@/components/wellness/SiteNav";
import { HomeHero } from "@/components/landing/HomeHero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { CareSection } from "@/components/landing/CareSection";
import { WhyAvelionSection } from "@/components/landing/WhyAvelionSection";
import { WellnessSection } from "@/components/landing/WellnessSection";
import { HomeFooter } from "@/components/landing/HomeFooter";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Avelion Care & Wellness",
  description:
    "The future of longevity — physician-guided healthcare and premium research products under one uncompromising standard.",
  path: "/",
  keywords: [
    "Avelion Care",
    "Avelion Wellness",
    "longevity",
    "physician-guided care",
    "premium healthcare",
    "research peptides",
  ],
});

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <SiteNav variant="landing" />

      <main className="flex-1">
        <HomeHero />
        <TrustStrip />
        <CareSection />
        <WhyAvelionSection />
        <WellnessSection />
      </main>

      <HomeFooter />
    </div>
  );
}

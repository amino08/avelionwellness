import { SiteNav } from "@/components/wellness/SiteNav";
import { StoreFooter } from "@/components/wellness/StoreFooter";
import { StoreHero } from "@/components/wellness/StoreHero";
import { ProductGrid } from "@/components/wellness/ProductGrid";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Research Products",
  description:
    "Premium research peptides and research-use products developed with scientific precision and elevated standards. Laboratory research use only. Not for human consumption.",
  path: "/wellness-store",
  keywords: [
    "Avelion Wellness",
    "research peptides",
    "research products",
    "laboratory research",
    "GLP research",
    "longevity research",
  ],
});

export default function WellnessStorePage() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <SiteNav variant="store" />
      <main className="flex-1">
        <StoreHero />
        <div className="bg-light-bg">
          <ProductGrid />
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}

import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SiteNav } from "@/components/wellness/SiteNav";
import { StoreFooter } from "@/components/wellness/StoreFooter";
import { HomeHero } from "@/components/landing/HomeHero";
import { CARE } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Avelion Care",
  description:
    "Physician-guided care with elevated standards, modern technology, and a premium clinical experience. Explore Avelion Wellness research products.",
  path: "/",
  keywords: [
    "Avelion Care",
    "physician-guided care",
    "longevity",
    "Avelion Wellness",
    "AgeWell",
  ],
});

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <SiteNav variant="landing" />

      <main className="flex-1">
        <HomeHero />

        <section className="border-t border-[var(--border-soft)] bg-surface-1">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-24 sm:flex-row sm:justify-between sm:py-28">
            <div className="max-w-lg text-center sm:text-left">
              <Eyebrow>Avelion Wellness</Eyebrow>
              <h2 className="type-section">Premium research products</h2>
              <p className="type-body mt-4">
                A separate research catalog with clean presentation and
                pharmaceutical-grade standards. Laboratory research use only.
              </p>
            </div>
            <Link href="/wellness-store" className="btn-secondary shrink-0">
              View Wellness Store
            </Link>
          </div>
        </section>

        <section className="border-t border-[var(--border-soft)] bg-white">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-24 sm:flex-row sm:justify-between sm:py-28">
            <div className="max-w-lg text-center sm:text-left">
              <Eyebrow>{CARE.name}</Eyebrow>
              <h2 className="type-section">Physician-guided healthcare</h2>
              <p className="type-body mt-4">
                Elevated clinical care with modern technology and a premium
                patient experience. Visit the Avelion Care site to get started.
              </p>
            </div>
            <a href={CARE.url} className="btn-primary shrink-0">
              Visit Avelion Care
            </a>
          </div>
        </section>
      </main>

      <StoreFooter />
    </div>
  );
}

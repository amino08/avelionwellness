import Link from "next/link";
import { SiteNav } from "@/components/wellness/SiteNav";
import { StoreFooter } from "@/components/wellness/StoreFooter";
import { HomeHero } from "@/components/landing/HomeHero";
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

        <section className="border-t border-platinum bg-light-bg">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-20 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="max-w-lg space-y-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-silver">
                Avelion Wellness
              </p>
              <h2 className="text-2xl font-semibold text-navy sm:text-3xl">
                Premium research products
              </h2>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                A separate research catalog with clean presentation and
                pharmaceutical-grade standards. Laboratory research use only.
              </p>
            </div>
            <Link href="/wellness-store" className="btn-secondary shrink-0">
              View Wellness Store
            </Link>
          </div>
        </section>
      </main>

      <StoreFooter />
    </div>
  );
}

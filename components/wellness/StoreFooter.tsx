import { Eyebrow } from "@/components/ui/Eyebrow";
import Link from "next/link";
import { CARE, SITE } from "@/lib/constants";
import { AvelionLogo } from "./AvelionLogo";

export function StoreFooter() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-surface-1">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <div className="flex items-center gap-3">
              <AvelionLogo size={22} />
              <span className="font-serif text-sm font-semibold tracking-[0.12em] text-navy">
                AVELION
              </span>
            </div>
            <p className="type-caption text-center sm:text-left">
              Premium biotechnology research products
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-start">
            <Eyebrow>Explore</Eyebrow>
            <nav className="flex flex-col items-center gap-3 sm:items-start">
              <Link
                href="/wellness-store"
                className="type-body font-medium text-navy transition-colors hover:text-clinical"
              >
                {SITE.name}
              </Link>
              <span className="type-caption">Research peptide catalog</span>
              <a
                href={CARE.url}
                className="type-body mt-2 font-medium text-navy transition-colors hover:text-clinical"
              >
                {CARE.name}
              </a>
              <span className="type-caption">Physician-guided healthcare</span>
            </nav>
          </div>

          <div className="flex flex-col items-center sm:col-span-2 sm:items-start lg:col-span-1 lg:items-end lg:text-right">
            <Eyebrow>Research Use</Eyebrow>
            <div className="compliance-panel max-w-md lg:ml-auto">
              <p className="type-compliance">
                All Avelion Wellness products are intended for laboratory
                research use only. Not for human consumption. Statements on this
                website have not been evaluated by the FDA and are not intended
                to diagnose, treat, cure, or prevent any disease.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-[var(--border-soft)] pt-8 sm:flex-row sm:justify-between">
          <p className="type-caption-sm">
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <p className="type-caption-sm">
            Powered by {SITE.parentBrand}
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { CARE, SITE } from "@/lib/constants";
import { AvelionLogo } from "@/components/wellness/AvelionLogo";

export function HomeFooter() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-white px-5 py-12 sm:px-7 sm:py-16">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:gap-12 md:text-left">
          <div className="flex max-w-sm flex-col items-center gap-4 md:items-start">
            <div className="flex items-center gap-3">
              <AvelionLogo size={22} />
              <span className="font-serif text-sm font-medium tracking-[0.12em] text-navy">
                AVELION
              </span>
            </div>
            <p className="type-body text-balance">
              Premium healthcare and biotechnology — connecting physician-guided
              care with research-grade wellness products.
            </p>
          </div>

          <nav
            className="flex w-full max-w-xs flex-col gap-3 sm:items-center md:items-end"
            aria-label="Footer navigation"
          >
            <a
              href={CARE.url}
              className="text-sm font-medium text-navy transition-colors hover:text-clinical"
            >
              {CARE.name}
            </a>
            <Link
              href="/wellness-store"
              className="text-sm font-medium text-navy transition-colors hover:text-clinical"
            >
              {SITE.name}
            </Link>
          </nav>
        </div>

        <p className="type-caption mx-auto mt-10 max-w-2xl border-t border-[var(--border-soft)] pt-8 text-center leading-relaxed">
          Avelion Wellness products are for laboratory research use only. Not for
          human consumption. Not evaluated by the FDA.
        </p>

        <p className="type-caption-sm mt-6 text-center" suppressHydrationWarning>
          © {new Date().getFullYear()} Avelion. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

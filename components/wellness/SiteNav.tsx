import Link from "next/link";
import { AvelionLogo } from "./AvelionLogo";

interface SiteNavProps {
  variant?: "landing" | "store";
}

export function SiteNav({ variant = "landing" }: SiteNavProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-platinum/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <AvelionLogo size={24} />
          <div className="flex flex-col">
            <span className="font-serif text-sm font-semibold tracking-[0.14em] text-navy">
              AVELION
            </span>
            {variant === "store" && (
              <span className="text-[10px] tracking-wide text-silver">
                Wellness
              </span>
            )}
          </div>
        </Link>

        <nav className="flex items-center gap-6">
          {variant === "landing" ? (
            <>
              <span className="hidden text-sm font-medium text-navy sm:inline">
                Care
              </span>
              <Link
                href="/wellness-store"
                className="text-sm text-[var(--text-muted)] transition-colors hover:text-clinical"
              >
                Wellness
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/"
                className="text-sm text-[var(--text-muted)] transition-colors hover:text-clinical"
              >
                Care
              </Link>
              <span className="text-sm font-medium text-navy">Wellness</span>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

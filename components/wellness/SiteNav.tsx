"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { CARE } from "@/lib/constants";
import { navReveal } from "@/lib/motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AvelionLogo } from "./AvelionLogo";
import { CartNavButton } from "./CartNavButton";

interface SiteNavProps {
  variant?: "landing" | "store";
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`type-nav relative px-3 py-1.5 transition-colors duration-200 sm:px-3.5 ${
        active
          ? "text-navy"
          : "text-[var(--text-muted)] hover:text-navy"
      }`}
    >
      {label}
      <motion.span
        className="nav-link-active-bar"
        initial={false}
        animate={{
          scaleX: active ? 1 : 0,
          opacity: active ? 1 : 0,
        }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      />
    </Link>
  );
}

function CareNavLink({ active }: { active?: boolean }) {
  return (
    <a
      href={CARE.url}
      className={`type-nav relative px-3 py-1.5 transition-colors duration-200 sm:px-3.5 ${
        active
          ? "text-navy"
          : "text-[var(--text-muted)] hover:text-navy"
      }`}
    >
      Care
      {active && (
        <span className="nav-link-active-bar scale-x-100 opacity-100" />
      )}
    </a>
  );
}

function CareConciergeLink() {
  return (
    <a
      href={CARE.url}
      className="concierge-float"
      aria-label="Visit Avelion Care — physician-guided care"
    >
      <span className="concierge-float-icon">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <path
            d="M12 3C9.5 3 7.5 5 7.5 7.5c0 2.2 1.4 4.1 3.4 4.8L9 21h6l-1.9-8.7c2-0.7 3.4-2.6 3.4-4.8C16.5 5 14.5 3 12 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M10 11h4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="hidden min-w-0 flex-col sm:flex">
        <span className="concierge-float-label">Avelion Care</span>
        <span className="concierge-float-sub">Physician-guided care</span>
      </span>
      <span className="concierge-float-label sm:hidden">Avelion Care</span>
    </a>
  );
}

export function SiteNav({ variant = "landing" }: SiteNavProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const isStore =
    variant === "store" ||
    pathname.startsWith("/wellness-store") ||
    pathname.startsWith("/checkout");
  const isCareLanding = pathname === "/";

  const header = (
    <header className="glass-nav pointer-events-auto w-full max-w-5xl rounded-xl">
      <div className="flex items-center justify-between gap-3 px-3.5 py-2 sm:gap-4 sm:px-5 sm:py-2.5">
        <Link href="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
          <AvelionLogo size={24} />
          <div className="flex min-w-0 flex-col">
            <span className="font-serif text-[0.8125rem] font-semibold tracking-[0.14em] text-navy sm:text-sm">
              AVELION
            </span>
            {isStore && (
              <Eyebrow as="span" noMargin className="!text-[0.5625rem] !tracking-[0.16em]">
                Wellness
              </Eyebrow>
            )}
          </div>
        </Link>

        <nav className="flex shrink-0 items-center gap-0.5 sm:gap-1">
          {isStore ? (
            <>
              <CareNavLink />
              <NavLink
                href="/wellness-store"
                label="Wellness"
                active={pathname.startsWith("/wellness-store")}
              />
              <div className="ml-1 flex items-center border-l border-[var(--border-soft)] pl-1.5 sm:ml-2 sm:pl-2.5">
                <CartNavButton />
              </div>
            </>
          ) : (
            <>
              <CareNavLink active={isCareLanding} />
              <NavLink
                href="/wellness-store"
                label="Wellness"
                active={pathname.startsWith("/wellness-store")}
              />
            </>
          )}
        </nav>
      </div>
    </header>
  );

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3.5 pt-3 sm:px-5 sm:pt-3.5">
        {prefersReducedMotion ? (
          header
        ) : (
          <motion.div
            className="pointer-events-auto w-full max-w-5xl"
            initial="hidden"
            animate="visible"
            variants={navReveal}
          >
            {header}
          </motion.div>
        )}
      </div>
      {isStore && <CareConciergeLink />}
    </>
  );
}

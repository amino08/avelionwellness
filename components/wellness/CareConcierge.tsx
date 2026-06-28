"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { CARE } from "@/lib/constants";
import { motionSpring } from "@/lib/motion";
import { useMounted } from "@/lib/use-mounted";

function ConciergeMark({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      width={compact ? 14 : 18}
      height={compact ? 20 : 26}
      viewBox="0 0 18 26"
      fill="none"
      aria-hidden
      className="concierge-widget-mark shrink-0"
    >
      <path
        d="M9 1.5v23"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle
        cx="9"
        cy="7.5"
        r="2.25"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M5.5 7.5h7"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M9 12v9"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

function ConciergeBody() {
  return (
    <>
      <ConciergeMark />
      <span className="concierge-widget-copy">
        <span className="concierge-widget-eyebrow">Clinical Concierge</span>
        <span className="concierge-widget-title">Physician-Guided Care</span>
      </span>
      <span className="concierge-widget-cta" aria-hidden>
        Visit <span className="concierge-widget-arrow">→</span>
      </span>
    </>
  );
}

const slideTransition: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 26,
};

const floatTransition: Transition = {
  duration: 3.6,
  repeat: Infinity,
  ease: "easeInOut",
  repeatDelay: 2.4,
};

export function CareConcierge() {
  const pathname = usePathname();
  const mounted = useMounted();
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const showOnPage =
    pathname.startsWith("/wellness-store") ||
    pathname.startsWith("/checkout");

  useEffect(() => {
    if (!mounted || !showOnPage) return;

    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const threshold =
        scrollable > 0 ? scrollable * 0.2 : window.innerHeight * 0.2;
      setVisible(window.scrollY >= threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted, showOnPage]);

  if (!mounted || !showOnPage) {
    return null;
  }

  const slideInitial = prefersReducedMotion
    ? false
    : { opacity: 0, x: 40, y: 16 };

  const slideOut = prefersReducedMotion
    ? undefined
    : { opacity: 0, x: 28, y: 10 };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="care-concierge"
          className="concierge-widget-portal"
          initial={slideInitial}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={slideOut}
          transition={prefersReducedMotion ? { duration: 0 } : slideTransition}
        >
          <motion.div
            className="concierge-widget-desktop-wrap"
            animate={
              prefersReducedMotion ? undefined : { y: [0, -3, 0] }
            }
            transition={prefersReducedMotion ? undefined : floatTransition}
          >
            <motion.a
              href={CARE.url}
              className="concierge-widget concierge-widget-desktop"
              aria-label="Visit Avelion Care — Clinical Concierge, Physician-Guided Care"
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { scale: 1.02, transition: motionSpring }
              }
              whileTap={prefersReducedMotion ? undefined : { scale: 0.995 }}
            >
              <ConciergeBody />
            </motion.a>
          </motion.div>

          <div className="concierge-widget-mobile">
            <AnimatePresence mode="wait" initial={false}>
              {mobileExpanded ? (
                <motion.a
                  key="expanded"
                  href={CARE.url}
                  className="concierge-widget concierge-widget-expanded"
                  aria-label="Visit Avelion Care — Clinical Concierge, Physician-Guided Care"
                  initial={
                    prefersReducedMotion
                      ? false
                      : { opacity: 0, scale: 0.94, y: 8 }
                  }
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={
                    prefersReducedMotion
                      ? undefined
                      : { opacity: 0, scale: 0.96, y: 6 }
                  }
                  transition={slideTransition}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                >
                  <ConciergeBody />
                </motion.a>
              ) : (
                <motion.button
                  key="collapsed"
                  type="button"
                  className="concierge-widget concierge-widget-collapsed"
                  aria-label="Open Clinical Concierge"
                  aria-expanded={false}
                  onClick={() => setMobileExpanded(true)}
                  initial={
                    prefersReducedMotion
                      ? false
                      : { opacity: 0, scale: 0.92 }
                  }
                  animate={{ opacity: 1, scale: 1 }}
                  exit={
                    prefersReducedMotion
                      ? undefined
                      : { opacity: 0, scale: 0.94 }
                  }
                  transition={slideTransition}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                >
                  <ConciergeMark compact />
                  <span className="concierge-widget-collapsed-label">
                    Clinical Concierge
                  </span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

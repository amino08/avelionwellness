"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CARE } from "@/lib/constants";
import { motionTransition } from "@/lib/motion";

function ConciergeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0"
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
  );
}

export function CareConcierge() {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 320);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
          transition={motionTransition}
          className="fixed bottom-5 right-4 z-40 sm:bottom-6 sm:right-6"
        >
          {/* Mobile — compact button */}
          <a
            href={CARE.url}
            className="concierge-pill concierge-pill-compact flex h-12 w-12 items-center justify-center rounded-full sm:hidden"
            aria-label="Visit Avelion Care — physician-guided care"
          >
            <ConciergeIcon />
          </a>

          {/* Desktop — expandable pill */}
          <a
            href={CARE.url}
            className="concierge-pill group hidden items-center overflow-hidden rounded-full sm:flex"
            aria-label="Visit Avelion Care — physician-guided care"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center text-white">
              <ConciergeIcon />
            </span>
            <span className="concierge-pill-content flex max-w-0 flex-col overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-out group-hover:max-w-[240px] group-hover:pr-5 group-hover:opacity-100">
              <span className="type-caption-sm !text-white/70">
                Need Physician-Guided Care?
              </span>
              <span className="text-sm font-medium text-white">
                Visit Avelion Care
              </span>
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

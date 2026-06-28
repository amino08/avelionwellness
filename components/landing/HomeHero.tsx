"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CARE } from "@/lib/constants";
import { MotionButtonWrap } from "@/components/motion/MotionButton";
import { MotionEyebrow } from "@/components/ui/Eyebrow";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function HomeHero() {
  const prefersReducedMotion = useReducedMotion();

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden" as const,
        animate: "visible" as const,
        variants: staggerContainer,
      };

  return (
    <section className="relative overflow-hidden bg-surface-1 pt-28 sm:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(47,111,228,0.06)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(245,248,252,0.85)_0%,transparent_45%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--border-soft)] to-transparent" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-8 text-center sm:pb-32 lg:items-start lg:pb-36 lg:text-left">
        <motion.div
          {...motionProps}
          className="flex w-full flex-col items-center lg:items-start"
        >
          <MotionEyebrow variants={fadeUp}>Physician-Guided Care</MotionEyebrow>
          <motion.h1
            variants={fadeUp}
            className="type-hero max-w-3xl"
          >
            {CARE.name}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="type-body-lg mt-8 max-w-xl"
          >
            Physician-guided care with elevated standards, modern technology,
            and a premium clinical experience.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-12 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <MotionButtonWrap className="w-full sm:w-auto">
              <a href={CARE.url} className="btn-primary w-full sm:w-auto">
                Get Started
              </a>
            </MotionButtonWrap>
            <MotionButtonWrap className="w-full sm:w-auto">
              <Link href="/wellness-store" className="btn-secondary w-full sm:w-auto">
                Explore Wellness
              </Link>
            </MotionButtonWrap>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

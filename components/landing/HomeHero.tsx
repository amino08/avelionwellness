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
    <section className="relative overflow-hidden bg-white pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_0%,rgba(47,111,228,0.04)_0%,transparent_52%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--border-soft)] to-transparent" />

      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-7">
        <motion.div
          {...motionProps}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <MotionEyebrow variants={fadeUp}>Premium Healthcare</MotionEyebrow>

          <motion.h1 variants={fadeUp} className="type-hero max-w-2xl">
            The Future of Longevity.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="type-body-lg mt-6 max-w-xl sm:mt-8"
          >
            Physician-guided healthcare. Premium research products. Built under
            one uncompromising standard.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex w-full max-w-md flex-col gap-3 sm:mt-12 sm:max-w-none sm:flex-row sm:justify-center"
          >
            <MotionButtonWrap className="w-full sm:w-auto">
              <a href={CARE.url} className="btn-primary w-full sm:w-auto">
                Visit Avelion Care
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

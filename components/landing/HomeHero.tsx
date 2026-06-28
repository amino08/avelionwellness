"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CARE } from "@/lib/constants";
import { MotionButtonWrap } from "@/components/motion/MotionButton";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useMounted } from "@/lib/use-mounted";

export function HomeHero() {
  const mounted = useMounted();
  const prefersReducedMotion = useReducedMotion();
  const animate = mounted && !prefersReducedMotion;

  const motionProps = animate
    ? {
        initial: "hidden" as const,
        animate: "visible" as const,
        variants: staggerContainer,
      }
    : {};

  const content = (
    <>
      {animate ? (
        <motion.p variants={fadeUp} className="type-eyebrow">
          Premium Healthcare
        </motion.p>
      ) : (
        <p className="type-eyebrow">Premium Healthcare</p>
      )}

      {animate ? (
        <motion.h1 variants={fadeUp} className="type-hero max-w-2xl">
          The Future of Longevity.
        </motion.h1>
      ) : (
        <h1 className="type-hero max-w-2xl">The Future of Longevity.</h1>
      )}

      {animate ? (
        <motion.p
          variants={fadeUp}
          className="type-body-lg mt-6 max-w-xl sm:mt-8"
        >
          Physician-guided healthcare. Premium research products. Built under
          one uncompromising standard.
        </motion.p>
      ) : (
        <p className="type-body-lg mt-6 max-w-xl sm:mt-8">
          Physician-guided healthcare. Premium research products. Built under
          one uncompromising standard.
        </p>
      )}

      {animate ? (
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
      ) : (
        <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:mt-12 sm:max-w-none sm:flex-row sm:justify-center">
          <a href={CARE.url} className="btn-primary w-full sm:w-auto">
            Visit Avelion Care
          </a>
          <Link href="/wellness-store" className="btn-secondary w-full sm:w-auto">
            Explore Wellness
          </Link>
        </div>
      )}
    </>
  );

  return (
    <section className="relative overflow-hidden bg-white pb-14 pt-24 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_0%,rgba(47,111,228,0.04)_0%,transparent_52%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--border-soft)] to-transparent" />

      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-7">
        {animate ? (
          <motion.div
            {...motionProps}
            className="mx-auto flex max-w-3xl flex-col items-center text-center"
          >
            {content}
          </motion.div>
        ) : (
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            {content}
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CARE } from "@/lib/constants";
import { MotionButtonWrap } from "@/components/motion/MotionButton";
import { fadeUp, motionEase, staggerContainer } from "@/lib/motion";
import { useMounted } from "@/lib/use-mounted";

export function StoreHero() {
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

  const imageMotion = animate
    ? {
        initial: { scale: 1.06 },
        animate: { scale: 1 },
        transition: { duration: 1.4, ease: motionEase },
      }
    : {};

  const ImageWrapper = animate ? motion.div : "div";

  return (
    <section className="relative flex min-h-[82vh] w-full items-center overflow-hidden lg:min-h-[88vh]">
      <ImageWrapper
        className="absolute inset-0"
        aria-hidden
        {...(animate ? imageMotion : {})}
      >
        <Image
          src="/images/avelion-hero.png"
          alt="Avelion premium research product hero image"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center] lg:object-[72%_30%]"
        />
      </ImageWrapper>

      <div aria-hidden className="hero-overlay-left absolute inset-0" />
      <div
        aria-hidden
        className="hero-overlay-bottom absolute inset-x-0 bottom-0 h-40"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
        {animate ? (
          <motion.div
            {...motionProps}
            className="mx-auto flex w-full max-w-[680px] flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left"
          >
            <motion.p variants={fadeUp} className="type-eyebrow-hero">
              Premium Biotechnology
            </motion.p>
            <motion.h1 variants={fadeUp} className="type-hero-store">
              AVELION WELLNESS
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="type-body-hero mx-auto mt-5 sm:mt-6 lg:mx-0"
            >
              Premium research peptides developed with uncompromising quality,
              scientific precision, and elevated standards.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="type-caption-hero mx-auto mt-5 sm:mt-6 lg:mx-0"
            >
              For laboratory research use only. Not for human consumption.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-8 flex w-full flex-col gap-3 sm:mt-10 lg:w-auto lg:flex-row lg:items-center"
            >
              <MotionButtonWrap className="w-full lg:w-auto">
                <Link href="#products" className="btn-hero-primary w-full lg:w-auto">
                  Explore Research Catalog
                </Link>
              </MotionButtonWrap>
              <MotionButtonWrap className="w-full lg:w-auto">
                <a href={CARE.url} className="btn-hero-glass w-full lg:w-auto">
                  Visit Avelion Care
                </a>
              </MotionButtonWrap>
            </motion.div>
          </motion.div>
        ) : (
          <div className="mx-auto flex w-full max-w-[680px] flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
            <p className="type-eyebrow-hero">Premium Biotechnology</p>
            <h1 className="type-hero-store">AVELION WELLNESS</h1>
            <p className="type-body-hero mx-auto mt-5 sm:mt-6 lg:mx-0">
              Premium research peptides developed with uncompromising quality,
              scientific precision, and elevated standards.
            </p>
            <p className="type-caption-hero mx-auto mt-5 sm:mt-6 lg:mx-0">
              For laboratory research use only. Not for human consumption.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 lg:w-auto lg:flex-row lg:items-center">
              <Link href="#products" className="btn-hero-primary w-full lg:w-auto">
                Explore Research Catalog
              </Link>
              <a href={CARE.url} className="btn-hero-glass w-full lg:w-auto">
                Visit Avelion Care
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

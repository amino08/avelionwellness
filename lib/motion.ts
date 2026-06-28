import type { Transition, Variants } from "framer-motion";

export const motionEase = [0.16, 1, 0.3, 1] as const;

export const motionTransition: Transition = {
  duration: 0.45,
  ease: motionEase,
};

export const motionTransitionFast: Transition = {
  duration: 0.25,
  ease: motionEase,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: motionTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: motionTransition,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: motionTransition,
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: motionTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

export const navReveal: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: motionEase },
  },
};

export const cardHover = {
  y: -4,
  transition: motionTransitionFast,
};

export const buttonTap = { scale: 0.98 };
export const buttonHover = { y: -1, transition: motionTransitionFast };

"use client";

import { motion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";

export const EYEBROW_CLASS = "type-eyebrow";

interface EyebrowProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  noMargin?: boolean;
}

export function Eyebrow({
  children,
  as: Component = "p",
  className,
  noMargin = false,
}: EyebrowProps) {
  return (
    <Component
      className={[EYEBROW_CLASS, noMargin ? "!mb-0" : "", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}

interface MotionEyebrowProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
}

export function MotionEyebrow({
  children,
  variants,
  className,
}: MotionEyebrowProps) {
  return (
    <motion.p
      variants={variants}
      className={[EYEBROW_CLASS, className].filter(Boolean).join(" ")}
    >
      {children}
    </motion.p>
  );
}

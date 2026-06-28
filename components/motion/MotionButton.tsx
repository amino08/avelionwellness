"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { buttonHover, buttonTap, motionTransitionFast } from "@/lib/motion";

interface MotionButtonProps {
  children: ReactNode;
  className?: string;
}

export function MotionButtonWrap({ children, className }: MotionButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={buttonHover}
      whileTap={buttonTap}
      transition={motionTransitionFast}
    >
      {children}
    </motion.div>
  );
}

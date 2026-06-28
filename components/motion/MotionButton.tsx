"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useMounted } from "@/lib/use-mounted";
import { buttonHover, buttonTap, motionTransitionFast } from "@/lib/motion";

interface MotionButtonProps {
  children: ReactNode;
  className?: string;
}

export function MotionButtonWrap({ children, className }: MotionButtonProps) {
  const mounted = useMounted();
  const prefersReducedMotion = useReducedMotion();

  if (!mounted || prefersReducedMotion) {
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

"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
  once?: boolean;
  as?: "div" | "section" | "li" | "span" | "p";
};

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  blur = true,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();

  // Note: no filter/blur animation here — animating `filter: blur()` is a
  // major jank source. Opacity + translateY is GPU-composited and smooth.
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: reduce ? 0 : y,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      style={{ willChange: "transform, opacity" }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px 0px -12% 0px" }}
    >
      {children}
    </motion.div>
  );
}

"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  download?: string;
  ariaLabel?: string;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  download,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });
  // Inner content trails slightly for depth
  const innerX = useTransform(sx, (v) => v * 0.4);
  const innerY = useTransform(sy, (v) => v * 0.4);

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[0.95rem] font-medium tracking-tight transition-colors duration-300 will-change-transform";

  const styles =
    variant === "primary"
      ? "bg-accent text-ink hover:bg-accent-soft"
      : "border border-line bg-paper/[0.02] text-paper backdrop-blur-sm hover:border-paper/30 hover:bg-paper/[0.05]";

  const inner = (
    <motion.span
      className="pointer-events-none inline-flex items-center gap-2.5"
      style={{ x: reduce ? 0 : innerX, y: reduce ? 0 : innerY }}
    >
      {children}
    </motion.span>
  );

  const style = { x: reduce ? 0 : sx, y: reduce ? 0 : sy };
  const cls = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        download={download}
        aria-label={ariaLabel}
        data-cursor="hover"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={cls}
        style={style}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      aria-label={ariaLabel}
      data-cursor="hover"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cls}
      style={style}
    >
      {inner}
    </motion.button>
  );
}

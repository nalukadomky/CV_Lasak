"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import { HERO } from "@/lib/content";
import TypeName from "./TypeName";
import MagneticButton from "./MagneticButton";
import Portrait from "./Portrait";
import { Icon } from "./Icons";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-28 pb-16 md:px-10"
    >
      {/* Animated gradient light background */}
      <motion.div
        aria-hidden
        style={{ y: reduce ? 0 : bgY }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-ink" />
        {/* Static atmosphere baked into a single gradient layer — cheap to
            paint once, no per-frame repaint of huge blurred surfaces. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(45vw 45vw at 18% 12%, rgba(255,106,69,0.22), transparent 60%), radial-gradient(42vw 42vw at 92% 34%, rgba(90,120,255,0.12), transparent 60%), radial-gradient(38vw 38vw at 52% 96%, rgba(255,138,99,0.12), transparent 60%)",
          }}
        />
        {/* one slow, opacity-only pulse — no layout/scale repaints */}
        <motion.div
          className="absolute left-[10%] top-[8%] h-[42vw] w-[42vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,106,69,0.10), transparent 62%)",
          }}
          animate={reduce ? {} : { opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(244,241,234,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(244,241,234,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent 75%)",
          }}
        />
      </motion.div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-8">
        {/* Left: text */}
        <motion.div
          style={{ y: reduce ? 0 : contentY, opacity: reduce ? 1 : contentOpacity }}
          className="md:col-span-7"
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-paper/[0.03] px-4 py-1.5 text-[0.78rem] text-paper-dim backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Otevřen nové výzvě
          </motion.div>

          <h1 className="font-display text-[clamp(3rem,9vw,7rem)] font-light leading-[0.95] tracking-[-0.03em]">
            <TypeName text={HERO.name} startDelay={0.5} className="inline-flex items-baseline" />
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 1.9, ease }}
            className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[clamp(1.05rem,2.4vw,1.5rem)] text-paper-dim"
          >
            <span className="text-paper">{HERO.role}</span>
            <span className="h-1 w-1 rounded-full bg-paper-dim/50" />
            <span>{HERO.age}</span>
            <span className="h-1 w-1 rounded-full bg-paper-dim/50" />
            <span>{HERO.location}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.1, ease }}
            className="mt-5 max-w-md text-[0.95rem] uppercase tracking-[0.22em] text-paper-dim/70"
          >
            {HERO.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.3, ease }}
            className="mt-10 flex flex-wrap items-center gap-3.5"
          >
            <MagneticButton href="#kontakt" variant="primary">
              Spojme se
              <Icon name="arrowUpRight" className="h-[18px] w-[18px]" />
            </MagneticButton>
            <MagneticButton
              href="/cv-lukas-lasak.pdf"
              download="CV-Lukas-Lasak.pdf"
              variant="ghost"
            >
              Stáhnout PDF CV
              <Icon name="arrowDown" className="h-[18px] w-[18px]" />
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Right: photo */}
        <motion.div
          style={{ y: reduce ? 0 : photoY }}
          className="md:col-span-5"
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.04, filter: "blur(16px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.2, ease }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-b from-accent/25 to-transparent blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] border border-line bg-ink-2 shadow-2xl shadow-black/60">
              <Portrait />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-paper/10" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#kdo-jsem"
        data-cursor="hover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.6 }}
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-paper-dim"
        aria-label="Scrolluj dolů"
      >
        <span className="text-[0.68rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-[22px] items-start justify-center rounded-full border border-line p-1.5">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-accent"
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}

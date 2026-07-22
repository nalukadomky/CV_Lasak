"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WHY_ME } from "@/lib/content";
import Reveal from "./Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

export default function WhyMe() {
  const reduce = useReducedMotion();
  const words = WHY_ME.headline.split(" ");

  return (
    <section
      id="proc-ja"
      className="relative overflow-hidden px-6 py-32 md:px-10 md:py-48"
    >
      {/* ambient accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[50vw] w-[50vw] -translate-x-1/2 rounded-full opacity-60 blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(255,106,69,0.12), transparent 65%)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <p className="mb-12 text-center font-mono text-xs text-accent md:mb-16">
          01 — Proč já
        </p>

        <h2 className="mx-auto max-w-4xl text-center font-display text-[clamp(2.4rem,7vw,5.5rem)] font-light leading-[1.02] tracking-[-0.03em] text-balance">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -12% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.07, ease }}
              className="mr-[0.28em] inline-block will-change-transform"
            >
              {w === "důvěře." ? (
                <span className="italic text-accent">{w}</span>
              ) : (
                w
              )}
            </motion.span>
          ))}
        </h2>

        <div className="mt-20 flex flex-wrap justify-center gap-4 md:mt-28">
          {WHY_ME.cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease }}
              whileHover={reduce ? {} : { y: -8 }}
              data-cursor="hover"
              className="group relative w-full overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-paper/[0.04] to-paper/[0.01] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-accent/30 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
            >
              <span className="font-mono text-sm text-accent/60">{c.index}</span>
              <h3 className="mt-6 font-display text-[1.7rem] font-light leading-tight tracking-tight text-paper">
                {c.title}
              </h3>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-paper-dim">
                {c.body}
              </p>
              <div className="mt-8 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

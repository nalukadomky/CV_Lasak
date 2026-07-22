"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ABOUT_PARAGRAPHS, ABOUT_CLOSER } from "@/lib/content";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="kdo-jsem" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-3xl">
        <SectionLabel index="02">Kdo jsem</SectionLabel>

        <div className="space-y-8 md:space-y-10">
          {ABOUT_PARAGRAPHS.map((p, i) => (
            <Reveal
              key={i}
              delay={i === 0 ? 0 : 0.04}
              y={30}
              className={
                i === 0
                  ? "font-display text-[clamp(1.5rem,3.4vw,2.35rem)] font-light leading-[1.25] tracking-[-0.01em] text-paper"
                  : "text-[clamp(1.05rem,2vw,1.28rem)] leading-relaxed text-paper-dim"
              }
            >
              {p}
            </Reveal>
          ))}
        </div>

        <Reveal y={30} className="mt-16 border-l-2 border-accent pl-6 md:mt-20">
          <p className="text-[clamp(1.15rem,2.4vw,1.6rem)] leading-snug text-paper-dim">
            {ABOUT_CLOSER.lead}
          </p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 font-display text-[clamp(1.6rem,4vw,2.6rem)] font-light leading-tight tracking-[-0.02em] text-paper"
          >
            {ABOUT_CLOSER.emphasis}
          </motion.p>
        </Reveal>
      </div>
    </section>
  );
}

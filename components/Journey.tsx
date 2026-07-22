"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { JOURNEY } from "@/lib/content";
import SectionLabel from "./SectionLabel";

const ease = [0.16, 1, 0.3, 1] as const;

function JourneyRow({
  item,
  i,
}: {
  item: (typeof JOURNEY)[number];
  i: number;
}) {
  const fromLeft = i % 2 === 0;
  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-16">
      {/* Node on the axis */}
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease }}
        className="absolute left-0 top-2 z-10 flex h-3.5 w-3.5 -translate-x-[6.5px] items-center justify-center md:left-1/2 md:-translate-x-1/2"
      >
        <span className="h-3.5 w-3.5 rounded-full border-2 border-accent bg-ink" />
        <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-accent/40" />
      </motion.span>

      <motion.div
        initial={{ opacity: 0, x: fromLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "0px 0px -18% 0px" }}
        transition={{ duration: 0.8, ease }}
        className={`pl-8 md:pl-0 ${
          fromLeft
            ? "md:col-start-1 md:pr-4 md:text-right"
            : "md:col-start-2 md:pl-4"
        }`}
      >
        <span className="font-mono text-sm text-accent">{item.year}</span>
        <h3 className="mt-2 font-display text-[clamp(1.6rem,3vw,2.3rem)] font-light leading-tight tracking-[-0.01em] text-paper">
          {item.company}
        </h3>
        <p className="mt-2 text-[1.05rem] text-paper-dim">{item.role}</p>
        <ul
          className={`mt-4 flex flex-wrap gap-2 ${
            fromLeft ? "md:justify-end" : ""
          }`}
        >
          {item.meta.map((m) => (
            <li
              key={m}
              className="rounded-full border border-line bg-paper/[0.03] px-3 py-1 text-[0.78rem] text-paper-dim"
            >
              {m}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="cesta" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-5xl">
        <SectionLabel index="03">Moje cesta</SectionLabel>

        <div ref={ref} className="relative mt-4">
          {/* Vertical axis */}
          <div className="absolute left-0 top-0 h-full w-px bg-line md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-accent via-accent to-accent/0 md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-20 md:space-y-28">
            {JOURNEY.map((item, i) => (
              <JourneyRow key={item.company} item={item} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

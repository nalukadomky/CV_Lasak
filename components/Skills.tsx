"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SKILLS } from "@/lib/content";
import { Icon } from "./Icons";
import SectionLabel from "./SectionLabel";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="umim" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-5xl">
        <SectionLabel index="03">Co umím</SectionLabel>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.06, ease }}
              whileHover={reduce ? {} : { y: -6 }}
              data-cursor="hover"
              className="group relative overflow-hidden rounded-2xl border border-line bg-paper/[0.02] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-paper/20"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, rgba(255,106,69,0.4), transparent 70%)" }}
              />
              <div className="relative flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-ink text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon name={s.icon} className="h-[22px] w-[22px]" />
                </span>
                <h3 className="text-[1.05rem] font-medium tracking-tight text-paper">
                  {s.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

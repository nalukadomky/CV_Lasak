"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LANGUAGES, HOBBIES } from "@/lib/content";
import { Icon } from "./Icons";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

const HOBBY_ICONS: Record<string, string> = {
  Fotografování: "camera",
  Fotbal: "ball",
  Sport: "dumbbell",
  Cestování: "plane",
  AI: "spark",
  "Nové technologie": "chip",
};

export default function AboutMe() {
  const reduce = useReducedMotion();

  return (
    <section id="o-mne" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-5xl">
        <SectionLabel index="05">O mně</SectionLabel>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Languages */}
          <Reveal y={28} className="md:col-span-1">
            <div className="h-full rounded-3xl border border-line bg-paper/[0.02] p-7 backdrop-blur-sm">
              <div className="mb-6 flex items-center gap-2.5 text-paper-dim">
                <Icon name="globe" className="h-[18px] w-[18px] text-accent" />
                <span className="text-[0.72rem] uppercase tracking-[0.24em]">
                  Jazyky
                </span>
              </div>
              <div className="space-y-4">
                {LANGUAGES.map((l) => (
                  <div
                    key={l.name}
                    className="flex items-center justify-between"
                  >
                    <span className="flex items-center gap-3 text-[1.15rem] text-paper">
                      <span className="text-2xl">{l.flag}</span>
                      {l.name}
                    </span>
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-sm font-medium text-accent">
                      {l.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Hobbies */}
          <Reveal y={28} delay={0.08} className="md:col-span-2">
            <div className="h-full rounded-3xl border border-line bg-paper/[0.02] p-7 backdrop-blur-sm">
              <div className="mb-6 flex items-center gap-2.5 text-paper-dim">
                <Icon name="heart" className="h-[18px] w-[18px] text-accent" />
                <span className="text-[0.72rem] uppercase tracking-[0.24em]">
                  Koníčky
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {HOBBIES.map((h, i) => (
                  <motion.span
                    key={h}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease }}
                    whileHover={reduce ? {} : { y: -4 }}
                    data-cursor="hover"
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-ink px-4 py-2.5 text-[0.98rem] text-paper transition-colors duration-300 hover:border-accent/40 hover:text-accent"
                  >
                    <Icon
                      name={HOBBY_ICONS[h] ?? "spark"}
                      className="h-[17px] w-[17px]"
                    />
                    {h}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

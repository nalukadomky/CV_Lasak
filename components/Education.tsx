"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "@/lib/content";
import SectionLabel from "./SectionLabel";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Education() {
  return (
    <section id="studium" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-3xl">
        <SectionLabel index="05">Studium</SectionLabel>

        <div className="relative pl-8">
          <div className="absolute left-[3px] top-2 h-[calc(100%-1rem)] w-px bg-line" />
          <div className="space-y-12">
            {EDUCATION.map((e, i) => (
              <motion.div
                key={e.school}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -12% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                className="relative"
              >
                <span className="absolute -left-8 top-2.5 h-2 w-2 rounded-full bg-accent ring-4 ring-ink" />
                <h3 className="font-display text-[clamp(1.3rem,2.6vw,1.9rem)] font-light leading-tight tracking-[-0.01em] text-paper">
                  {e.school}
                </h3>
                {e.detail && (
                  <p className="mt-1.5 text-[0.82rem] uppercase tracking-[0.2em] text-accent/90">
                    {e.detail}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

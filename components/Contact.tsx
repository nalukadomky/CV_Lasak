"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/lib/content";
import MagneticButton from "./MagneticButton";
import { Icon } from "./Icons";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 py-28 md:px-10"
    >
      {/* Static gradient atmosphere — cheap to paint, no heavy background image */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60vw 40vw at 50% 100%, rgba(255,106,69,0.16), transparent 65%), linear-gradient(to top, #060607, #0a0a0c 60%, #060607)",
        }}
      />

      <div className="relative mx-auto w-full max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="font-display text-[clamp(2.6rem,8vw,6rem)] font-light leading-[1.02] tracking-[-0.03em]"
        >
          {CONTACT.lead}
          <br />
          <span className="italic text-accent">{CONTACT.emphasis}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="mt-12 flex flex-col items-center gap-5"
        >
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <MagneticButton href={`mailto:${CONTACT.email}`} variant="primary">
              Pojďme se potkat
              <Icon name="arrowUpRight" className="h-[18px] w-[18px]" />
            </MagneticButton>
            <MagneticButton
              href="/cv-lukas-lasak.pdf"
              download="CV-Lukas-Lasak.pdf"
              variant="ghost"
            >
              Stáhnout PDF životopis
              <Icon name="arrowDown" className="h-[18px] w-[18px]" />
            </MagneticButton>
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[0.95rem] text-paper-dim">
            <a
              href={`mailto:${CONTACT.email}`}
              data-cursor="hover"
              className="underline-offset-4 transition-colors hover:text-paper hover:underline"
            >
              {CONTACT.email}
            </a>
            <span className="h-1 w-1 rounded-full bg-paper-dim/50" />
            <a
              href={`tel:${CONTACT.phoneHref}`}
              data-cursor="hover"
              className="underline-offset-4 transition-colors hover:text-paper hover:underline"
            >
              {CONTACT.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

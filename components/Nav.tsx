"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const LINKS = [
  { href: "#proc-ja", label: "Úvod" },
  { href: "#cesta", label: "Cesta" },
  { href: "#umim", label: "Co umím" },
  { href: "#kdo-jsem", label: "Kdo jsem" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
  });

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full px-3 py-2 pl-5 transition-all duration-500 ${
          scrolled
            ? "border border-line bg-ink/70 backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-paper"
          data-cursor="hover"
        >
          LL<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-cursor="hover"
              className="rounded-full px-3.5 py-1.5 text-[0.82rem] text-paper-dim transition-colors hover:text-paper"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#kontakt"
          data-cursor="hover"
          className="rounded-full bg-paper px-4 py-2 text-[0.82rem] font-medium text-ink transition-transform duration-300 hover:scale-[1.03]"
        >
          Spojme se
        </a>
      </nav>
    </motion.header>
  );
}

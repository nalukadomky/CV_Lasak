"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TypeName({
  text,
  startDelay = 0.6,
  className = "",
}: {
  text: string;
  startDelay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(reduce ? text.length : 0);
  const [done, setDone] = useState(reduce);

  useEffect(() => {
    if (reduce) return;
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 78);
    }, startDelay * 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, startDelay, reduce]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden>{text.slice(0, count)}</span>
      <motion.span
        aria-hidden
        className="inline-block w-[0.06em] translate-y-[0.06em] self-stretch"
        animate={{ opacity: done ? [1, 0] : 1 }}
        transition={
          done
            ? { duration: 0.8, repeat: Infinity, repeatType: "reverse" }
            : { duration: 0 }
        }
        style={{
          background: "var(--color-accent)",
          height: "0.9em",
          marginLeft: "0.04em",
        }}
      />
    </span>
  );
}

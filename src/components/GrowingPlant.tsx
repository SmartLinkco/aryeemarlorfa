"use client";

import { useId, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const stem = "M100 232 C 96 188, 118 164, 98 128 C 82 96, 112 68, 96 28";

const leaves: { d: string; delay: number }[] = [
  { delay: 0.28, d: "M98 198 C 48 184, 18 148, 32 108 C 62 132, 84 168, 100 196 Z" },
  { delay: 0.42, d: "M102 176 C 154 160, 186 122, 162 82 C 134 108, 116 146, 100 174 Z" },
  { delay: 0.56, d: "M94 136 C 46 118, 24 78, 48 46 C 70 72, 86 108, 96 134 Z" },
  { delay: 0.7, d: "M100 112 C 146 94, 172 56, 148 28 C 126 52, 110 84, 98 110 Z" },
  { delay: 0.84, d: "M94 72 C 62 52, 54 24, 82 12 C 88 34, 92 52, 96 70 Z" },
  { delay: 0.96, d: "M98 48 C 128 28, 136 8, 110 4 C 104 22, 98 36, 98 48 Z" },
];

export function GrowingPlant({ className = "h-64 w-48" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const still = reduce === true;
  const grow = still || inView;
  const clipId = useId().replace(/:/g, "");

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 280"
      className={`${className} text-moss`}
      role="img"
      aria-label={still ? "A fully grown plant" : "A plant growing"}
    >
      <defs>
        <clipPath id={clipId}>
          <motion.rect
            x="0"
            width="200"
            initial={{ attrY: still ? 0 : 236, height: still ? 236 : 0 }}
            animate={{ attrY: grow ? 0 : 236, height: grow ? 236 : 0 }}
            transition={{ duration: still ? 0 : 1.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </clipPath>
      </defs>

      <path d="M62 236 H138 L128 268 H72 Z" fill="currentColor" opacity="0.9" />
      <ellipse cx="100" cy="236" rx="42" ry="8" fill="currentColor" />
      <ellipse cx="100" cy="268" rx="30" ry="6" fill="currentColor" opacity="0.35" />

      <g clipPath={`url(#${clipId})`}>
        <motion.path
          d={stem}
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          initial={{ pathLength: still ? 1 : 0 }}
          animate={{ pathLength: grow ? 1 : 0 }}
          transition={{ duration: still ? 0 : 1.35, ease: [0.22, 1, 0.36, 1] }}
        />
        {leaves.map((leaf) => (
          <motion.path
            key={leaf.d}
            d={leaf.d}
            fill="currentColor"
            initial={{ opacity: still ? 1 : 0 }}
            animate={{ opacity: grow ? 1 : 0 }}
            transition={{ delay: still ? 0 : leaf.delay, duration: still ? 0 : 0.45 }}
          />
        ))}
      </g>
    </svg>
  );
}

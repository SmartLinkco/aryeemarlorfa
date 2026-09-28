"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

function Leaf({
  d,
  progress,
  range,
  rotateTo = 0,
}: {
  d: string;
  progress: MotionValue<number>;
  range: [number, number];
  rotateTo?: number;
}) {
  const opacity = useTransform(progress, range, [0, 1]);
  const rotate = useTransform(progress, range, [rotateTo - 14, rotateTo]);
  return (
    <motion.g className="scroll-leaf" style={{ opacity, rotate }}>
      <path d={d} fill="currentColor" />
    </motion.g>
  );
}

export function GrowingPlant({
  progress,
  className = "h-full w-full",
}: {
  progress: MotionValue<number>;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 140 520" className={`${className} text-moss`} aria-hidden>
      <path
        pathLength={1}
        className="stem-draw"
        d="M78 508 C 74 440, 96 400, 80 346 C 62 286, 98 246, 82 190 C 66 136, 94 96, 80 42"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M80 430 C 46 416, 24 384, 30 352 C 52 372, 70 400, 80 428"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M78 360 C 112 346, 132 314, 124 284 C 104 304, 90 332, 78 358"
        fill="currentColor"
        opacity="0.85"
      />
      <Leaf
        progress={progress}
        range={[0.1, 0.32]}
        rotateTo={-6}
        d="M82 292 C 40 276, 16 236, 28 200 C 54 224, 72 258, 84 290 Z"
      />
      <Leaf
        progress={progress}
        range={[0.28, 0.5]}
        rotateTo={8}
        d="M78 214 C 118 198, 140 156, 126 124 C 102 148, 88 182, 76 212 Z"
      />
      <Leaf
        progress={progress}
        range={[0.46, 0.7]}
        rotateTo={-4}
        d="M80 132 C 48 112, 36 74, 54 46 C 66 74, 74 100, 82 128 Z"
      />
      <Leaf
        progress={progress}
        range={[0.62, 0.86]}
        rotateTo={0}
        d="M80 64 C 96 40, 92 18, 78 12 C 74 32, 74 48, 80 64 Z"
      />
    </svg>
  );
}

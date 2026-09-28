"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DualIdentity } from "@/components/DualIdentity";
import { GrowingPlant } from "@/components/GrowingPlant";
import { LeafMark } from "@/components/LeafMark";

const facts = [
  ["Advisory", "Risk & insurance"],
  ["Plants", "Glasshouse notes"],
  ["Travel", "Solo field notes"],
  ["Books", "Three titles"],
] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -28]);

  return (
    <section ref={ref} className="relative overflow-x-clip md:h-[150vh]">
      <div className="md:sticky md:top-16 md:flex md:h-[calc(100svh-4rem)] md:items-center">
        <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-6 px-5 py-8 md:grid-cols-12 md:gap-10 md:px-10 md:py-8">
          <div className="pointer-events-none absolute bottom-6 left-0 hidden h-[78%] w-28 text-moss lg:block" aria-hidden>
            <GrowingPlant progress={scrollYProgress} />
          </div>

          <div className="relative z-10 min-w-0 md:col-span-6 lg:pl-24">
            <div className="flex items-end justify-between gap-3">
              <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-leaf sm:text-[11px] sm:tracking-[0.28em]">
                <LeafMark className="h-4 w-4 shrink-0" />
                <span className="sm:hidden">Risk, roots, route, page</span>
                <span className="hidden sm:inline">Risk · roots · route · page</span>
              </p>
              <div className="h-20 w-10 shrink-0 lg:hidden" aria-hidden>
                <GrowingPlant progress={scrollYProgress} className="h-full w-auto" />
              </div>
            </div>
            <h1 className="mt-3 font-serif text-[2.45rem] leading-[0.96] tracking-[-0.03em] text-ink sm:mt-5 sm:text-6xl lg:text-[4.6rem]">
              Risk, tended
              <span className="block italic text-moss">like a living</span>
              thing.
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink/80 sm:mt-6 sm:text-lg">
              Ava Reed advises on corporate risk and insurance conversations, keeps a serious plant practice,
              travels alone, and writes books about the overlap.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact?topic=consulting"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm text-cream transition hover:bg-moss"
              >
                Begin a conversation
                <LeafMark className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/20 px-5 text-sm transition hover:border-ink"
              >
                Explore the practice
              </Link>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-line pt-5 sm:grid-cols-4">
              {facts.map(([label, value]) => (
                <div key={label} className="min-w-0">
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-leaf">{label}</dt>
                  <dd className="mt-1 text-[13px] leading-snug text-ink/80">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <motion.div style={{ y }} className="parallax-panel relative z-10 min-w-0 md:col-span-6">
            <DualIdentity />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

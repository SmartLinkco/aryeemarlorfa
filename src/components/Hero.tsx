"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DualIdentity } from "@/components/DualIdentity";
import { GrowingPlant } from "@/components/GrowingPlant";
import { LeafMark } from "@/components/LeafMark";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -28]);

  return (
    <section ref={ref} className="relative md:h-[150vh]">
      <div className="md:sticky md:top-16 md:flex md:h-[calc(100svh-4rem)] md:items-center">
        <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-10 px-6 py-14 md:grid-cols-12 md:px-10 md:py-8">
          <div className="pointer-events-none absolute bottom-6 left-0 hidden h-[78%] w-28 text-moss lg:block" aria-hidden>
            <GrowingPlant progress={scrollYProgress} />
          </div>

          <div className="relative z-10 md:col-span-6 lg:pl-24">
            <div className="mb-6 h-40 w-24 lg:hidden" aria-hidden>
              <GrowingPlant progress={scrollYProgress} />
            </div>
            <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-leaf">
              <LeafMark className="h-4 w-4" />
              Risk · roots · route · page
            </p>
            <h1 className="mt-5 font-serif text-[3.1rem] leading-[0.92] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.6rem]">
              Risk, tended
              <span className="block italic text-moss">like a living</span>
              thing.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/80 sm:text-lg">
              Ava Reed advises on corporate risk and insurance conversations, keeps a serious plant practice,
              travels alone, and writes books about the overlap.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?topic=consulting"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-cream transition hover:bg-moss"
              >
                Begin a conversation
                <LeafMark className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-ink/20 px-5 py-3 text-sm transition hover:border-ink"
              >
                Explore the practice
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-line pt-5 text-sm sm:grid-cols-4">
              {[
                ["Advisory", "Risk & insurance"],
                ["Plants", "Glasshouse notes"],
                ["Travel", "Solo field notes"],
                ["Books", "Three titles"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-leaf">{label}</dt>
                  <dd className="mt-1 text-ink/80">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <motion.div style={{ y }} className="parallax-panel relative z-10 md:col-span-6">
            <DualIdentity />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

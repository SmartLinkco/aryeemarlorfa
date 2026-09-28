"use client";

import Link from "next/link";
import { DualIdentity } from "@/components/DualIdentity";
import { GrowingPlant } from "@/components/GrowingPlant";
import { LeafMark } from "@/components/LeafMark";

export function Hero() {
  return (
    <section className="overflow-x-clip border-b border-line">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-6 px-5 py-8 md:grid-cols-12 md:gap-10 md:px-10 md:py-14">
        <div className="min-w-0 md:col-span-6">
          <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-leaf sm:text-[11px] sm:tracking-[0.22em]">
            <LeafMark className="h-4 w-4 shrink-0" />
            Risk · roots · route · page
          </p>
          <h1 className="mt-3 font-serif text-[2.35rem] leading-[0.96] tracking-[-0.03em] text-ink sm:mt-5 sm:text-6xl lg:text-[4.4rem]">
            Risk, tended
            <span className="block italic text-moss">like a living</span>
            thing.
          </h1>
          <div className="my-5 flex justify-center md:my-6 md:justify-start">
            <GrowingPlant className="h-56 w-44 sm:h-64 sm:w-48" />
          </div>
          <p className="max-w-md text-base leading-relaxed text-ink/80 sm:text-lg">
            Malorfa advises on corporate risk and insurance, keeps a plant-tropist practice, travels alone, and writes books about the overlap.
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
        </div>

        <div className="min-w-0 md:col-span-6">
          <DualIdentity />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { plantTips, tipIndex } from "@/lib/content";
import { LeafMark } from "@/components/LeafMark";

const formatter = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
});

export function PlantTip() {
  const [ready, setReady] = useState(false);
  const [index, setIndex] = useState(0);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const today = new Date();
    setIndex(tipIndex(today));
    setLabel(formatter.format(today));
    setReady(true);
  }, []);

  const tip = plantTips[index];

  return (
    <aside className="border border-line bg-mist/70 p-6 sm:p-8" aria-labelledby="plant-tip-title" aria-live="polite">
      <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-leaf">
        <LeafMark className="h-4 w-4" />
        Today’s plant tip
      </p>
      <h2 id="plant-tip-title" className="mt-4 font-serif text-3xl tracking-tight">
        {ready ? tip.title : "A note from the glasshouse"}
      </h2>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/80">
        {ready
          ? tip.body
          : "The daily note is chosen from the date so the same tip holds for the day, wherever you open the page."}
      </p>
      <p className="mt-5 text-xs uppercase tracking-[0.16em] text-ink/50">
        {ready ? `${label} · tip ${index + 1} of ${plantTips.length}` : "Selecting today’s tip"}
      </p>
    </aside>
  );
}

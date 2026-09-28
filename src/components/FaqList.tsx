"use client";

import { useState } from "react";

export function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => {
        const expanded = open === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-6 py-5 text-left font-serif text-xl tracking-tight"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : index)}
              >
                {item.q}
                <span aria-hidden className="text-brass">
                  {expanded ? "–" : "+"}
                </span>
              </button>
            </h3>
            {expanded && (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="pb-5 pr-8 text-sm leading-relaxed text-ink/80">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

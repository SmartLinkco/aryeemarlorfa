"use client";

import { useEffect, useState } from "react";

const VIDEO_SRC = "/media/dual-identity.mp4";

export function DualIdentity() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(VIDEO_SRC, { method: "HEAD" })
      .then((response) => {
        if (!cancelled && response.ok) setShowVideo(true);
      })
      .catch(() => {
        /* Poster remains the experience until a file is added. */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <figure className="relative overflow-hidden border border-ink/10 bg-ink">
      <div className={`grid min-h-[240px] grid-cols-2 sm:min-h-[520px] ${showVideo ? "invisible" : ""}`}>
        <div className="relative overflow-hidden bg-[#1c2822] text-cream">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute left-[18%] top-0 h-full w-px bg-cream/30" />
            <div className="absolute left-[32%] top-0 h-full w-px bg-cream/20" />
            <div className="absolute left-[46%] top-0 h-full w-px bg-cream/15" />
          </div>
          <div className="lamp-pulse absolute left-1/2 top-[18%] h-28 w-28 -translate-x-1/2 rounded-full bg-[#e7d7b8] blur-2xl" />
          <div className="absolute inset-x-[12%] bottom-[18%] h-16 origin-bottom -skew-x-6 border border-brass-soft/40 bg-cream/5" />
          <div className="absolute inset-x-[18%] bottom-[14%] h-3 bg-brass/30" />
          <figcaption className="absolute left-3 top-3 text-[9px] uppercase tracking-[0.14em] text-cream/80 sm:left-5 sm:top-5 sm:text-[10px] sm:tracking-[0.24em]">
            01 — Boardroom
          </figcaption>
        </div>
        <div className="relative overflow-hidden bg-[#d7e6d6] text-moss">
          <div className="ray-drift absolute -left-10 top-0 h-full w-1/2 bg-gradient-to-b from-paper/70 to-transparent" />
          <div className="absolute right-[18%] top-[16%] h-16 w-16 rounded-full bg-[#f4efe4]" />
          <svg viewBox="0 0 200 320" className="absolute inset-x-0 bottom-0 h-[78%] w-full text-moss" aria-hidden>
            <g className="sway">
              <path d="M100 300 C 96 230, 110 190, 100 130 C 92 80, 104 40, 100 16" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <path d="M100 210 C 60 190, 36 150, 48 112 C 72 140, 90 176, 100 208" fill="currentColor" fillOpacity="0.85" />
            </g>
            <g className="sway-slow">
              <path d="M104 180 C 146 160, 168 120, 154 84 C 132 112, 116 148, 104 178" fill="currentColor" fillOpacity="0.75" />
              <path d="M98 120 C 70 96, 64 60, 86 40 C 90 68, 96 92, 100 116" fill="currentColor" fillOpacity="0.8" />
            </g>
            <g className="sway-fast">
              <path d="M40 300 C 48 250, 70 240, 78 200" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <path d="M70 230 C 40 220, 28 196, 40 176 C 58 194, 70 210, 74 228" fill="currentColor" />
            </g>
          </svg>
          <figcaption className="absolute right-3 top-3 text-[9px] uppercase tracking-[0.14em] sm:right-5 sm:top-5 sm:text-[10px] sm:tracking-[0.24em]">
            02 — Glasshouse
          </figcaption>
        </div>
      </div>

      {showVideo && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          poster="/media/dual-identity-poster.svg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setShowVideo(false)}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      )}

      <figcaption className="sr-only">
        Two rooms of the same practice: a quiet boardroom and a glasshouse. A silent looping film can replace this
        illustrated poster when public/media/dual-identity.mp4 is added. The film never plays with sound.
      </figcaption>
      <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-3 py-2.5 text-xs leading-snug text-cream sm:px-5 sm:py-4 sm:text-sm">
        Two rooms. One practice of attention.
      </p>
    </figure>
  );
}

export type PlantVariant = "fig" | "monstera" | "olive" | "fern" | "palm" | "vine";
export type SceneVariant = "coast" | "rail" | "court";

export function Botanical({
  variant,
  className = "",
}: {
  variant: PlantVariant;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 160 200" className={className} aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {variant === "fig" && (
          <>
            <path d="M80 188 V78" />
            <path d="M80 150 C 50 140, 28 110, 36 78 C 58 92, 74 120, 80 148" fill="currentColor" fillOpacity="0.12" />
            <path d="M80 128 C 108 116, 132 86, 122 54 C 100 70, 88 100, 80 126" fill="currentColor" fillOpacity="0.12" />
            <path d="M80 96 C 58 78, 48 48, 70 28 C 74 52, 80 72, 80 94" fill="currentColor" fillOpacity="0.18" />
          </>
        )}
        {variant === "monstera" && (
          <>
            <path d="M78 190 V70" />
            <path
              d="M78 150 C 40 140, 22 100, 36 62 C 48 78, 58 96, 70 108 C 62 90, 66 70, 84 58 C 92 86, 100 110, 118 96 C 132 84, 138 60, 128 48 C 140 90, 120 140, 78 152 Z"
              fill="currentColor"
              fillOpacity="0.14"
            />
            <path d="M70 108 L62 96 M100 112 L112 98" />
          </>
        )}
        {variant === "olive" && (
          <>
            <path d="M80 190 C 76 150, 70 120, 80 86" />
            <path d="M80 130 C 48 120, 30 90, 46 64 C 60 84, 74 104, 80 128" fill="currentColor" fillOpacity="0.12" />
            <path d="M80 112 C 112 100, 132 74, 116 48 C 104 68, 92 90, 80 110" fill="currentColor" fillOpacity="0.12" />
            <circle cx="58" cy="78" r="3" fill="currentColor" />
            <circle cx="108" cy="66" r="3" fill="currentColor" />
            <circle cx="92" cy="96" r="2.4" fill="currentColor" />
          </>
        )}
        {variant === "fern" && (
          <>
            <path d="M80 190 C 80 140, 78 100, 80 40" />
            {([150, 132, 114, 96, 78, 62] as const).map((y, i) => (
              <path
                key={y}
                d={`M80 ${y} C ${i % 2 ? 110 : 50} ${y - 8}, ${i % 2 ? 124 : 36} ${y - 18}, ${i % 2 ? 118 : 42} ${y - 28}`}
              />
            ))}
          </>
        )}
        {variant === "palm" && (
          <>
            <path d="M80 190 V92" />
            <path d="M80 100 C 40 90, 20 60, 28 36" />
            <path d="M80 100 C 120 90, 142 58, 132 32" />
            <path d="M80 96 C 56 60, 60 30, 80 22" />
            <path d="M80 96 C 104 58, 100 28, 82 20" />
            <path d="M80 98 C 70 70, 86 48, 92 40" />
          </>
        )}
        {variant === "vine" && (
          <>
            <path d="M40 30 C 48 70, 70 80, 78 120 C 86 156, 110 160, 124 188" />
            <path d="M70 78 C 48 70, 36 52, 42 40 C 58 50, 68 64, 72 78" fill="currentColor" fillOpacity="0.15" />
            <path d="M92 140 C 112 128, 130 132, 136 150 C 116 150, 100 150, 90 140" fill="currentColor" fillOpacity="0.15" />
            <path d="M60 112 C 40 118, 28 136, 34 150 C 50 142, 60 128, 64 114" fill="currentColor" fillOpacity="0.12" />
          </>
        )}
      </g>
    </svg>
  );
}

export function Scene({ variant, className = "" }: { variant: SceneVariant; className?: string }) {
  return (
    <svg viewBox="0 0 640 400" className={`block max-w-full overflow-hidden ${className}`} aria-hidden preserveAspectRatio="xMidYMid slice">
      {variant === "coast" && (
        <>
          <rect width="640" height="400" fill="#d5e0d6" />
          <path d="M0 250 C 120 230, 200 280, 320 250 C 460 214, 520 240, 640 220 V400 H0 Z" fill="#24382e" />
          <path d="M0 290 C 160 270, 240 310, 400 286 C 500 270, 580 290, 640 278 V400 H0 Z" fill="#1b2420" fillOpacity="0.85" />
          <circle cx="470" cy="92" r="36" fill="#f3eee6" />
          <path d="M80 250 C 86 200, 110 180, 108 140" stroke="#24382e" strokeWidth="2" fill="none" />
          <path d="M108 168 C 80 150, 70 130, 86 112" fill="#3d5a48" />
        </>
      )}
      {variant === "rail" && (
        <>
          <rect width="640" height="400" fill="#1b2420" />
          <rect x="70" y="48" width="500" height="250" rx="4" fill="#24382e" />
          <path d="M70 180 H570" stroke="#c4a574" strokeOpacity="0.7" />
          <path d="M90 300 C 180 250, 260 270, 360 230 C 460 190, 520 210, 570 180 V298 H90 Z" fill="#3d5a48" />
          <circle cx="140" cy="120" r="18" fill="#f3eee6" fillOpacity="0.85" />
          <path d="M430 210 C 450 160, 470 150, 468 120" stroke="#c5d4c8" fill="none" />
          <path d="M468 150 C 490 140, 506 150, 500 168 C 484 160, 472 158, 468 150" fill="#c5d4c8" />
        </>
      )}
      {variant === "court" && (
        <>
          <rect width="640" height="400" fill="#e7eee8" />
          <rect x="40" y="40" width="560" height="320" fill="none" stroke="#24382e" strokeOpacity="0.35" />
          <rect x="250" y="70" width="140" height="230" fill="#24382e" />
          <circle cx="320" cy="250" r="46" fill="#f3eee6" />
          <path d="M40 300 H600" stroke="#8d7044" strokeOpacity="0.6" />
          <path d="M120 300 C 120 230, 150 200, 150 160" stroke="#a15d45" strokeWidth="2" fill="none" />
          <circle cx="150" cy="150" r="16" fill="#a15d45" fillOpacity="0.8" />
          <path d="M490 300 C 500 220, 530 200, 540 150" stroke="#3d5a48" strokeWidth="2" fill="none" />
          <path d="M540 190 C 516 180, 508 160, 522 148 C 534 162, 540 176, 540 190" fill="#3d5a48" />
        </>
      )}
    </svg>
  );
}

const tones = {
  moss: "bg-moss text-cream",
  clay: "bg-clay text-cream",
  ink: "bg-ink text-cream",
} as const;

export function BookCover({
  title,
  kind,
  year,
  tone,
  className = "",
}: {
  title: string;
  kind: string;
  year: string;
  tone: keyof typeof tones;
  className?: string;
}) {
  return (
    <div className={`relative flex aspect-[3/4] flex-col justify-between overflow-hidden p-5 ${tones[tone]} ${className}`}>
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-cream/80">
        <span>{kind}</span>
        <span>{year}</span>
      </div>
      <div>
        <p className="font-serif text-[1.65rem] leading-none tracking-tight text-balance md:text-4xl">{title}</p>
        <div className="mt-4 h-px w-12 bg-brass-soft" />
      </div>
      <p className="text-[10px] uppercase tracking-[0.22em] text-cream/70">Placeholder Press</p>
      <svg viewBox="0 0 80 80" className="absolute -right-2 -top-2 h-24 w-24 text-cream/15" aria-hidden>
        <path d="M10 70C24 40 40 16 74 10C66 40 48 58 10 70Z" fill="currentColor" />
      </svg>
    </div>
  );
}

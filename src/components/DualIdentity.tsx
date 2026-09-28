import Image from "next/image";

export function DualIdentity() {
  return (
    <figure className="relative overflow-hidden border border-ink/10 bg-ink">
      <div className="grid min-h-[280px] grid-cols-2 sm:min-h-[420px]">
        <div className="relative min-h-[280px] overflow-hidden sm:min-h-[420px]">
          <Image
            src="/media/malorfa-boardroom.png"
            alt="Malorfa in the boardroom"
            fill
            sizes="(min-width: 768px) 320px, 50vw"
            className="object-cover object-[72%_center]"
          />
          <figcaption className="absolute left-2 top-2 bg-ink/55 px-2 py-1 text-[9px] uppercase tracking-[0.14em] text-cream sm:left-4 sm:top-4 sm:text-[10px] sm:tracking-[0.2em]">
            Boardroom
          </figcaption>
        </div>
        <div className="relative min-h-[280px] overflow-hidden sm:min-h-[420px]">
          <Image
            src="/media/malorfa-glasshouse.png"
            alt="Malorfa in the glasshouse"
            fill
            sizes="(min-width: 768px) 320px, 50vw"
            className="object-cover object-[68%_center]"
          />
          <figcaption className="absolute right-2 top-2 bg-ink/45 px-2 py-1 text-[9px] uppercase tracking-[0.14em] text-cream sm:right-4 sm:top-4 sm:text-[10px] sm:tracking-[0.2em]">
            Glasshouse
          </figcaption>
        </div>
      </div>
      <p className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent px-3 py-3 text-xs leading-snug text-cream sm:px-5 sm:py-4 sm:text-sm">
        Two rooms. One practice of attention.
      </p>
    </figure>
  );
}

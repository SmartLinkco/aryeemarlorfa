import Image from "next/image";

export function DualIdentity() {
  return (
    <figure className="overflow-hidden border border-ink/10 bg-ink">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-[440px]">
          <Image
            src="/media/malorfa-boardroom.png"
            alt="Malorfa in the boardroom"
            fill
            sizes="(min-width: 640px) 40vw, 100vw"
            className="object-cover object-[62%_center]"
          />
          <figcaption className="absolute left-3 top-3 bg-ink/55 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-cream">
            Boardroom
          </figcaption>
        </div>
        <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-[440px]">
          <Image
            src="/media/malorfa-glasshouse.png"
            alt="Malorfa in the glasshouse"
            fill
            sizes="(min-width: 640px) 40vw, 100vw"
            className="object-cover object-[58%_center]"
          />
          <figcaption className="absolute right-3 top-3 bg-ink/45 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-cream">
            Glasshouse
          </figcaption>
        </div>
      </div>
      <p className="px-4 py-3 text-sm leading-snug text-cream">Two rooms. One practice of attention.</p>
    </figure>
  );
}

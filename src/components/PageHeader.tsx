import { LeafMark } from "@/components/LeafMark";

export function PageHeader({
  plate,
  kicker,
  title,
  dek,
}: {
  plate: string;
  kicker: string;
  title: string;
  dek: string;
}) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-[1200px] px-5 py-10 md:px-10 md:py-20">
        <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-leaf sm:text-[11px] sm:tracking-[0.24em]">
          <LeafMark className="h-4 w-4 shrink-0" />
          Plate {plate} · {kicker}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-[2.15rem] leading-[1.05] tracking-tight sm:text-5xl md:mt-4 md:text-6xl md:leading-[0.95]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/75 md:mt-6 md:text-lg">{dek}</p>
      </div>
    </header>
  );
}

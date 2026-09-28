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
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-20">
        <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-leaf">
          <LeafMark className="h-4 w-4" />
          Plate {plate} · {kicker}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.95] tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">{dek}</p>
      </div>
    </header>
  );
}

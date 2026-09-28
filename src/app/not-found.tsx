import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[720px] px-6 py-24 md:px-10">
      <p className="text-[11px] uppercase tracking-[0.22em] text-leaf">Plate — · Missing</p>
      <h1 className="mt-4 font-serif text-5xl tracking-tight">This page is not in the collection.</h1>
      <p className="mt-4 text-ink/70">The path may have been renamed. The four rooms are still where they were.</p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-ink px-5 py-3 text-sm text-cream hover:bg-moss">
        Return home
      </Link>
    </section>
  );
}

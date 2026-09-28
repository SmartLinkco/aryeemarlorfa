import { LeafMark } from "@/components/LeafMark";

export function Testimonials({
  items,
  title = "In other words",
}: {
  items: readonly { quote: string; name: string; context: string; id: string }[];
  title?: string;
}) {
  return (
    <section className="bg-ink text-cream" aria-labelledby="quotes-title">
      <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-10 md:py-20">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-brass-soft">
          <LeafMark className="h-4 w-4" />
          <h2 id="quotes-title">{title}</h2>
        </div>
        <ul className="mt-10 grid gap-10 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.id} className="border-t border-cream/15 pt-6">
              <blockquote>
                <p className="font-serif text-xl leading-snug tracking-tight sm:text-2xl">“{item.quote}”</p>
                <footer className="mt-6 text-sm text-sage">
                  <p>{item.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-sage/70">{item.context}</p>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

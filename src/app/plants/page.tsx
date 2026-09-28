import Link from "next/link";
import { Botanical } from "@/components/Art";
import { LeafMark } from "@/components/LeafMark";
import { PageHeader } from "@/components/PageHeader";
import { PlantTip } from "@/components/PlantTip";
import { cuttings, plants } from "@/lib/content";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Plants",
  description:
    "Malorfa’s fictional plant collection, everyday care notes, and a light partner-nursery inquiry list — a plant-tropist’s room, not a shop or a charity.",
  path: "/plants",
});

const careNotes = [
  { title: "Light first", text: "Place the plant where it can live, then adjust water. The other order produces stories you will not enjoy." },
  { title: "One change", text: "If something looks wrong, alter a single condition and wait. Simultaneous rescues hide the cause." },
  { title: "Tools stay few", text: "A watering can, a cloth, scissors, and a saucer you actually empty. Gadgets are optional; noticing is not." },
  { title: "Share cuttings, not lectures", text: "A rooted sprig is a better gift than advice. The nursery block below is an inquiry list, not a checkout." },
];

export default function PlantsPage() {
  return (
    <>
      <PageHeader
        plate="03"
        kicker="Plants"
        title="Oriented toward the light."
        dek="A plant-tropist keeps a collection the way other people keep a practice: named, observed, occasionally forgiven. This gallery is a placeholder shelf."
      />

      <section className="mx-auto max-w-[1200px] px-5 py-10 md:px-10 md:py-14" aria-labelledby="gallery-title">
        <h2 id="gallery-title" className="sr-only">
          Collection
        </h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {plants.map((plant, index) => (
            <li key={plant.name} className={index === 0 ? "md:col-span-2" : ""}>
              <article className="group flex h-full flex-col border border-line bg-foam p-5">
                <Botanical variant={plant.variant} className={`w-full text-moss ${index === 0 ? "h-56" : "h-40"}`} />
                <div className="mt-4 flex items-start justify-between gap-3">
                  <h3 className="inline-flex items-center gap-2 font-serif text-2xl tracking-tight">
                    {plant.name}
                    <LeafMark className="h-4 w-4 text-leaf" />
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-ink/45">{plant.room}</p>
                </div>
                <p className="text-xs italic text-ink/50">{plant.latin}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{plant.note}</p>
                <p className="mt-4 border-t border-line pt-3 text-sm text-moss">{plant.care}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line bg-cream" aria-labelledby="care-title">
        <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-10 md:py-16">
          <h2 id="care-title" className="font-serif text-[1.75rem] leading-[1.15] tracking-tight md:text-4xl">
            Care, kept short
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-4">
            {careNotes.map((note) => (
              <li key={note.title} className="border border-line bg-paper p-5">
                <h3 className="font-serif text-xl">{note.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{note.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <PlantTip />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-12 md:px-10 md:py-16" aria-labelledby="nursery-title">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-leaf">Partner nursery</p>
            <h2 id="nursery-title" className="mt-3 font-serif text-[1.75rem] leading-[1.15] tracking-tight md:text-4xl">
              Lumen & Leaf
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/75">
              A fictional nursery used as a light shop pattern: a seasonal list and an inquiry, not a cart. No prices, no checkout, no shipping.
            </p>
            <Link
              href="/contact?topic=plants"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink px-5 text-sm text-cream hover:bg-moss sm:w-auto"
            >
              Inquire about the list
            </Link>
          </div>
          <ul className="divide-y divide-line border-y border-line md:col-span-8">
            {cuttings.map((item) => (
              <li key={item.name} className="grid gap-2 py-5 sm:grid-cols-12 sm:items-baseline">
                <h3 className="font-serif text-2xl sm:col-span-4">{item.name}</h3>
                <p className="text-[11px] uppercase tracking-[0.16em] text-brass sm:col-span-3">{item.season}</p>
                <p className="text-sm text-ink/75 sm:col-span-5">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

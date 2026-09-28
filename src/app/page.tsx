import Link from "next/link";
import { BookCover, Botanical, Scene } from "@/components/Art";
import { Hero } from "@/components/Hero";
import { LeafMark } from "@/components/LeafMark";
import { PlantTip } from "@/components/PlantTip";
import { Testimonials } from "@/components/Testimonials";
import { books, pillars, plants, stories, testimonials } from "@/lib/content";

export default function HomePage() {
  const book = books[0];
  const story = stories[0];
  const featuredPlants = plants.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-[1200px] px-6 py-20 md:px-10" aria-labelledby="pillars-title">
        <h2 id="pillars-title" className="font-serif text-4xl tracking-tight">
          Four rooms, one practice
        </h2>
        <p className="mt-3 max-w-xl text-ink/70">
          The work, the glasshouse, the road, and the page are not side projects of each other. They are how attention gets practiced.
        </p>
        <ol className="mt-10">
          {pillars.map((pillar) => (
            <li key={pillar.href} className="group border-t border-line">
              <Link href={pillar.href} className="grid gap-3 py-7 md:grid-cols-12 md:items-center">
                <span className="font-serif text-2xl text-brass md:col-span-2">{pillar.num}</span>
                <span className="inline-flex items-center gap-2 font-serif text-3xl tracking-tight md:col-span-3">
                  {pillar.title}
                  <LeafMark className="h-5 w-5 text-moss" />
                </span>
                <span className="text-sm leading-relaxed text-ink/75 md:col-span-5">{pillar.text}</span>
                <span className="text-sm text-leaf md:col-span-2 md:text-right">Enter</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-line bg-cream" aria-labelledby="featured-title">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 md:grid-cols-2 md:px-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-leaf">Featured book</p>
            <h2 id="featured-title" className="mt-3 font-serif text-4xl tracking-tight">
              {book.title}
            </h2>
            <p className="mt-4 max-w-md text-ink/75">{book.dek}</p>
            <blockquote className="mt-6 border-l border-brass pl-4 font-serif text-xl leading-snug text-moss">
              {book.excerpt}
            </blockquote>
            <Link href={`/books/${book.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm underline decoration-ink/30 underline-offset-4">
              Read the plate
              <LeafMark className="h-4 w-4" />
            </Link>
          </div>
          <Link href={`/books/${book.slug}`} className="card-lift block max-w-sm border border-line">
            <BookCover title={book.title} kind={book.kind} year={book.year} tone={book.tone} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-20 md:px-10" aria-labelledby="journal-title">
        <div className="flex items-end justify-between gap-4">
          <h2 id="journal-title" className="font-serif text-4xl tracking-tight">
            From the journal
          </h2>
          <Link href="/travel" className="text-sm underline decoration-ink/30 underline-offset-4">
            All journeys
          </Link>
        </div>
        <Link href={`/travel/${story.slug}`} className="card-lift mt-8 grid overflow-hidden border border-line md:grid-cols-2">
          <Scene variant={story.scene} className="h-64 w-full md:h-full" />
          <div className="flex flex-col justify-center p-6 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.2em] text-leaf">
              {story.place} · {story.season}
            </p>
            <h3 className="mt-3 font-serif text-3xl tracking-tight">{story.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">{story.excerpt}</p>
          </div>
        </Link>
      </section>

      <section className="border-t border-line" aria-labelledby="collection-title">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
          <div className="flex items-end justify-between gap-4">
            <h2 id="collection-title" className="font-serif text-4xl tracking-tight">
              In the collection
            </h2>
            <Link href="/plants" className="text-sm underline decoration-ink/30 underline-offset-4">
              All plants
            </Link>
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {featuredPlants.map((plant) => (
              <li key={plant.name}>
                <Link href="/plants" className="card-lift group block border border-line bg-foam p-5">
                  <Botanical variant={plant.variant} className="h-36 w-full text-moss" />
                  <h3 className="mt-4 inline-flex items-center gap-2 font-serif text-2xl">
                    {plant.name}
                    <LeafMark className="h-4 w-4 text-leaf" />
                  </h3>
                  <p className="text-xs uppercase tracking-[0.16em] text-ink/50">{plant.latin}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">{plant.note}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <PlantTip />
          </div>
        </div>
      </section>

      <Testimonials items={testimonials} />

      <section className="mx-auto flex max-w-[1200px] flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <h2 className="font-serif text-4xl tracking-tight">If the rooms overlap, write.</h2>
          <p className="mt-3 max-w-lg text-ink/70">
            Consulting, speaking, plants, or media — the form sorts the note. It does not send it anywhere yet.
          </p>
        </div>
        <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-cream hover:bg-moss">
          Contact
          <LeafMark className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}

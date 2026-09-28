import Link from "next/link";
import { Scene } from "@/components/Art";
import { LeafMark } from "@/components/LeafMark";
import { PageHeader } from "@/components/PageHeader";
import { stories } from "@/lib/content";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Travel",
  description:
    "Solo travel essays by Ava Reed — a magazine-style journal of fictional field notes, with plants that appear along the road.",
  path: "/travel",
});

export default function TravelPage() {
  const [lead, ...rest] = stories;

  return (
    <>
      <PageHeader
        plate="04"
        kicker="Travel"
        title="Field notes for one."
        dek="A journal of solo trips. The places are real; the essays are fiction written for this brand, ready to be swapped for true dispatches."
      />

      <section className="mx-auto max-w-[1200px] px-5 py-10 md:px-10 md:py-14">
        <Link href={`/travel/${lead.slug}`} className="card-lift group grid overflow-hidden border border-line md:grid-cols-12">
          <div className="md:col-span-7">
            <Scene variant={lead.scene} className="h-72 w-full md:h-full" />
          </div>
          <div className="flex flex-col justify-center p-6 md:col-span-5 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.2em] text-leaf">Featured · {lead.place}</p>
            <h2 className="mt-3 font-serif text-[1.75rem] leading-[1.15] tracking-tight md:text-4xl">{lead.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/75">{lead.excerpt}</p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm">
              Read the story
              <LeafMark className="h-4 w-4 text-moss" />
            </p>
          </div>
        </Link>

        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {rest.map((story) => (
            <li key={story.slug}>
              <Link href={`/travel/${story.slug}`} className="card-lift group block overflow-hidden border border-line bg-foam">
                <Scene variant={story.scene} className="h-52 w-full" />
                <div className="p-5">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-leaf">
                    {story.place} · {story.season} · {story.minutes} min
                  </p>
                  <h2 className="mt-2 inline-flex items-center gap-2 font-serif text-2xl tracking-tight sm:text-3xl">
                    {story.title}
                    <LeafMark className="h-4 w-4 text-moss" />
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">{story.excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line bg-mist/50" aria-labelledby="road-plants-title">
        <div className="mx-auto grid max-w-[1200px] gap-6 px-5 py-12 md:grid-cols-12 md:px-10 md:py-16">
          <div className="md:col-span-4">
            <h2 id="road-plants-title" className="font-serif text-[1.75rem] leading-[1.15] tracking-tight md:text-4xl">
              Plants on the road
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg leading-relaxed text-ink/80">
              The journal keeps a side column for whatever is growing where the traveler happens to be: a station fern, a courtyard citrus, a market bunch of herbs. It is not a guide to collecting. Live plants and borders have rules this prototype does not pretend to waive.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink/75">
              {stories.map((story) => (
                <li key={story.slug}>
                  <Link href={`/travel/${story.slug}`} className="underline decoration-ink/20 underline-offset-4">
                    {story.place}
                  </Link>
                  <span> — {story.plantsOnTheRoad}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { timeline } from "@/lib/content";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "About",
  description:
    "The story of Malorfa, a fictional advisor, plant-tropist, solo traveler, and author — one practice of attention across four rooms.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        plate="01"
        kicker="About"
        title="A life arranged as four rooms."
        dek="Corporate risk work, a plant practice, solo travel, and books. None of them is the hobby of the others. This page is the hallway between them."
      />
      <article className="mx-auto grid max-w-[1200px] gap-8 px-5 py-10 md:grid-cols-12 md:gap-12 md:px-10 md:py-16">
        <div className="prose-reed md:col-span-7">
          <p>
            Malorfa is a placeholder name for a real kind of person: someone whose days include board papers and watering cans, departure boards and manuscripts. The brand is built so those facts can share a typeface.
          </p>
          <p>
            The advisory work is corporate risk and insurance — not as a product shelf, but as a conversation about what an organization is willing to carry. The practice is fictional. It does not hold a license, a carrier appointment, or a client list.
          </p>
          <p>
            Plants came in through the side door and refused to remain decorative. To be a plant-tropist, in the sense used here, is to be oriented toward living green things: to notice lean, thirst, and recovery. It is a private practice. It is not a charity, a fund, or a volunteer program.
          </p>
          <p>
            Travel is solitary on purpose. The essays are the souvenir. They are not an offer to guide anyone else, and they are not a performance of fearlessness. They are notes from someone who likes an empty seat and a well-chosen neighborhood.
          </p>
          <p>
            The books hold the rest still long enough to be reread. Placeholder Press, the imprint named on the covers, is part of the fiction — a shelf waiting for the owner of this site to replace it with the true one.
          </p>
        </div>
        <aside className="min-w-0 md:col-span-4 md:col-start-9">
          <p className="text-[11px] uppercase tracking-[0.2em] text-leaf">Two rooms</p>
          <figure className="mt-4 overflow-hidden border border-line">
            <Image
              src="/media/malorfa-boardroom.png"
              alt="Malorfa in the boardroom"
              width={1280}
              height={720}
              className="aspect-[4/5] w-full object-cover object-[70%_center]"
            />
            <figcaption className="px-4 py-3 text-xs leading-relaxed text-ink/60">
              The advisory room. The glasshouse is the other half of the same practice — plants, not philanthropy.
            </figcaption>
          </figure>
        </aside>
      </article>

      <section className="border-t border-line" aria-labelledby="timeline-title">
        <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-10 md:py-16">
          <h2 id="timeline-title" className="font-serif text-[1.75rem] leading-[1.15] tracking-tight md:text-4xl">
            How the rooms were furnished
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-2">
            {timeline.map((item) => (
              <li key={item.label} className="border-t border-line pt-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-brass">{item.label}</p>
                <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{item.text}</p>
              </li>
            ))}
          </ol>
          <Link href="/services" className="mt-10 inline-flex text-sm underline decoration-ink/30 underline-offset-4">
            See the advisory practice
          </Link>
        </div>
      </section>
    </>
  );
}

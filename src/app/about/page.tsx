import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { timeline } from "@/lib/content";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "About",
  description:
    "The story of Ava Reed, a fictional advisor, plant-tropist, solo traveler, and author — one practice of attention across four rooms.",
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
      <article className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 md:grid-cols-12 md:px-10">
        <div className="prose-reed md:col-span-7">
          <p>
            Ava Reed is a placeholder name for a real kind of person: someone whose days include board papers and watering cans, departure boards and manuscripts. The brand is built so those facts can share a typeface.
          </p>
          <p>
            The advisory work is corporate risk and insurance — not as a product shelf, but as a conversation about what an organization is willing to carry. In this prototype that practice is called Reed Advisory. It is fictional. It does not hold a license, a carrier appointment, or a client list.
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
        <aside className="md:col-span-4 md:col-start-9">
          <p className="text-[11px] uppercase tracking-[0.2em] text-leaf">Replace with a portrait</p>
          <div className="mt-4 aspect-[3/4] border border-line bg-mist">
            <svg viewBox="0 0 300 400" className="h-full w-full text-moss" aria-hidden>
              <rect width="300" height="400" fill="#e7eee8" />
              <circle cx="150" cy="150" r="54" fill="#f7f4ee" />
              <path d="M78 330 C 90 250, 120 230, 150 230 C 180 230, 210 250, 222 330" fill="#24382e" />
              <path d="M150 230 C 120 180, 130 120, 150 108 C 176 122, 178 180, 150 230" fill="#c4a574" fillOpacity="0.7" />
              <path d="M40 360 C 70 300, 90 280, 110 300" fill="none" stroke="#3d5a48" strokeWidth="2" />
              <path d="M100 320 C 70 300, 60 270, 78 250 C 96 280, 104 300, 102 318" fill="#3d5a48" />
            </svg>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-ink/60">
            Illustrated stand-in. Swap in a photograph when the brand belongs to a real person. Do not imply this drawing is a likeness of someone specific.
          </p>
        </aside>
      </article>

      <section className="border-t border-line" aria-labelledby="timeline-title">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10">
          <h2 id="timeline-title" className="font-serif text-4xl tracking-tight">
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

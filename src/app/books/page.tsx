import Link from "next/link";
import { BookCover } from "@/components/Art";
import { LeafMark } from "@/components/LeafMark";
import { PageHeader } from "@/components/PageHeader";
import { books, press, talks, testimonials } from "@/lib/content";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Books",
  description:
    "Published works by Ava Reed — fictional titles, excerpts, speaking topics, and press placeholders from Placeholder Press.",
  path: "/books",
});

export default function BooksPage() {
  const reader = testimonials.find((item) => item.id === "reader");

  return (
    <>
      <PageHeader
        plate="05"
        kicker="Books"
        title="Sentences, after the other work."
        dek="Three titles from a fictional imprint. Covers, excerpts, and a small press shelf — ready for real books to take their places."
      />

      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10" aria-labelledby="works-title">
        <h2 id="works-title" className="sr-only">
          Published works
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <li key={book.slug}>
              <Link href={`/books/${book.slug}`} className="card-lift group block">
                <BookCover title={book.title} kind={book.kind} year={book.year} tone={book.tone} className="border border-line" />
                <h3 className="mt-4 inline-flex items-center gap-2 font-serif text-2xl">
                  {book.title}
                  <LeafMark className="h-4 w-4 text-moss" />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{book.dek}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {reader && (
        <section className="border-y border-line bg-cream">
          <blockquote className="mx-auto max-w-[800px] px-6 py-14 md:px-10">
            <p className="font-serif text-3xl leading-snug tracking-tight">“{reader.quote}”</p>
            <footer className="mt-4 text-xs uppercase tracking-[0.16em] text-ink/50">{reader.context}</footer>
          </blockquote>
        </section>
      )}

      <section className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 md:grid-cols-2 md:px-10">
        <div>
          <h2 className="font-serif text-4xl tracking-tight">Speaking</h2>
          <p className="mt-3 text-sm text-ink/70">Conversations and briefings. Not a tour, and not a course catalog.</p>
          <ul className="mt-6 space-y-5">
            {talks.map((talk) => (
              <li key={talk.title} className="border-t border-line pt-4">
                <h3 className="font-serif text-2xl">{talk.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{talk.detail}</p>
              </li>
            ))}
          </ul>
          <Link href="/contact?topic=speaking" className="mt-6 inline-flex text-sm underline decoration-ink/30 underline-offset-4">
            Request a speaking note
          </Link>
        </div>
        <div>
          <h2 className="font-serif text-4xl tracking-tight">Press</h2>
          <p className="mt-3 text-sm text-ink/70">Clippings are labeled as fiction so the shelf can exist before the coverage does.</p>
          <ul className="mt-6 space-y-5">
            {press.map((item) => (
              <li key={item.outlet} className="border-t border-line pt-4">
                <h3 className="font-serif text-2xl">{item.outlet}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{item.note}</p>
              </li>
            ))}
          </ul>
          <Link href="/contact?topic=media" className="mt-6 inline-flex text-sm underline decoration-ink/30 underline-offset-4">
            Media inquiries
          </Link>
        </div>
      </section>
    </>
  );
}

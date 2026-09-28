import Link from "next/link";
import { notFound } from "next/navigation";
import { BookCover } from "@/components/Art";
import { books, getBook } from "@/lib/content";
import { pageMeta } from "@/lib/site";

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) return {};
  return pageMeta({
    title: book.title,
    description: book.dek,
    path: `/books/${book.slug}`,
  });
}

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) notFound();
  const others = books.filter((item) => item.slug !== book.slug);

  return (
    <article className="mx-auto max-w-[1200px] px-5 py-10 md:px-10 md:py-14">
      <p className="text-[11px] uppercase tracking-[0.22em] text-leaf">
        <Link href="/books" className="inline-flex min-h-11 items-center underline decoration-leaf/40 underline-offset-4">
          Books
        </Link>{" "}
        · {book.kind} · {book.year}
      </p>
      <div className="mt-8 grid items-start gap-10 md:grid-cols-12">
        <div className="mx-auto w-full max-w-[240px] md:col-span-5 md:mx-0 md:max-w-none">
          <BookCover title={book.title} kind={book.kind} year={book.year} tone={book.tone} className="border border-line" />
        </div>
        <div className="md:col-span-7">
          <h1 className="font-serif text-[2.15rem] leading-[1.05] tracking-tight sm:text-5xl">{book.title}</h1>
          <p className="mt-4 text-lg text-ink/75">{book.dek}</p>
          <p className="mt-6 text-sm leading-relaxed text-ink/80">{book.synopsis}</p>
          <blockquote className="mt-8 border border-line bg-cream p-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-leaf">Excerpt</p>
            <p className="mt-3 font-serif text-2xl leading-snug">{book.excerpt}</p>
          </blockquote>
          <div className="mt-8">
            <h2 className="font-serif text-2xl">Where to find it</h2>
            <ul className="mt-3 space-y-2 text-sm text-ink/75">
              {book.stockists.map((place) => (
                <li key={place}>{place}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-ink/50">Retail links are placeholders. No store is connected.</p>
          </div>
          <Link
            href="/contact?topic=media"
            className="mt-8 inline-flex rounded-full border border-ink/20 px-5 py-2.5 text-sm hover:border-ink"
          >
            Press or rights note
          </Link>
        </div>
      </div>
      <section className="mt-16 border-t border-line pt-8" aria-label="Other books">
        <h2 className="font-serif text-2xl">Also on the shelf</h2>
        <ul className="mt-4 flex flex-col gap-2 text-sm">
          {others.map((item) => (
            <li key={item.slug}>
              <Link href={`/books/${item.slug}`} className="underline decoration-ink/20 underline-offset-4">
                {item.title}
              </Link>
              <span className="text-ink/50"> — {item.kind}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

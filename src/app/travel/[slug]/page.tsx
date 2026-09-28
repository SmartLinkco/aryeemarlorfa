import Link from "next/link";
import { notFound } from "next/navigation";
import { Scene } from "@/components/Art";
import { getStory, stories } from "@/lib/content";
import { pageMeta } from "@/lib/site";

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};
  return pageMeta({
    title: story.title,
    description: story.excerpt,
    path: `/travel/${story.slug}`,
  });
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();
  const more = stories.filter((item) => item.slug !== story.slug);

  return (
    <article>
      <header className="border-b border-line">
        <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-leaf">
            <Link href="/travel" className="underline decoration-leaf/40 underline-offset-4">
              Travel
            </Link>{" "}
            · {story.place} · {story.season} · {story.minutes} min read
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.95] tracking-tight md:text-6xl">{story.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/75">{story.excerpt}</p>
        </div>
        <Scene variant={story.scene} className="h-72 w-full md:h-96" />
      </header>
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-14 md:grid-cols-12 md:px-10">
        <div className="prose-reed md:col-span-7">
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <aside className="h-fit border border-line bg-mist/60 p-6 md:col-span-4 md:col-start-9">
          <p className="text-[11px] uppercase tracking-[0.18em] text-leaf">Plants on the road</p>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">{story.plantsOnTheRoad}</p>
          <Link href="/plants" className="mt-5 inline-flex text-sm underline decoration-ink/30 underline-offset-4">
            Visit the collection
          </Link>
        </aside>
      </div>
      <section className="border-t border-line" aria-label="More stories">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 py-10 md:px-10">
          <h2 className="font-serif text-2xl">Continue</h2>
          <ul className="flex flex-col gap-2 text-sm">
            {more.map((item) => (
              <li key={item.slug}>
                <Link href={`/travel/${item.slug}`} className="underline decoration-ink/20 underline-offset-4">
                  {item.title}
                </Link>
                <span className="text-ink/50"> — {item.place}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}

import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { PageHeader } from "@/components/PageHeader";
import { Testimonials } from "@/components/Testimonials";
import { offerings, process, scenarios, serviceFaqs, testimonials } from "@/lib/content";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Advisory",
  description:
    "Fictional risk and insurance advisory offerings, a four-step process, illustrative scenarios, and questions — Reed Advisory is not a licensed practice.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        plate="02"
        kicker="Advisory"
        title="Clearer risk conversations."
        dek="Reed Advisory is the consulting room of this brand: corporate risk and insurance, discussed in language a leadership team can reuse. The practice below is a prototype, not a solicitation."
      />

      <div className="mx-auto max-w-[1200px] px-5 py-5 md:px-10">
        <p className="border border-brass/40 bg-cream px-4 py-3 text-sm leading-relaxed text-ink/80">
          Illustrative only. These pages are not insurance advice, a quote, a policy comparison, or evidence of licensure. Replace them when a real practice, with its real permissions, exists.
        </p>
      </div>

      <section className="mx-auto max-w-[1200px] px-5 py-10 md:px-10 md:py-12" aria-labelledby="offerings-title">
        <h2 id="offerings-title" className="font-serif text-[1.75rem] leading-[1.15] tracking-tight md:text-4xl">
          Ways to work
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {offerings.map((item) => (
            <li key={item.num} className="card-lift group border border-line bg-foam p-6">
              <p className="font-serif text-2xl text-brass">{item.num}</p>
              <h3 className="mt-4 font-serif text-2xl tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line bg-cream" aria-labelledby="process-title">
        <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-10 md:py-16">
          <h2 id="process-title" className="font-serif text-[1.75rem] leading-[1.15] tracking-tight md:text-4xl">
            How an engagement moves
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {process.map((step) => (
              <li key={step.num} className="border-t border-ink/15 pt-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-leaf">{step.num}</p>
                <h3 className="mt-2 font-serif text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-12 md:px-10 md:py-16" aria-labelledby="scenarios-title">
        <h2 id="scenarios-title" className="font-serif text-[1.75rem] leading-[1.15] tracking-tight md:text-4xl">
          Illustrative scenarios
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-ink/70">
          Composite situations, invented for the pattern of a case note. They are not client stories and they do not report results.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {scenarios.map((scene) => (
            <article key={scene.title} className="border border-line p-6">
              <h3 className="font-serif text-2xl">{scene.title}</h3>
              <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-leaf">The question</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">{scene.question}</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-leaf">The frame</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">{scene.frame}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[800px] px-5 pb-10 md:px-10" aria-labelledby="faq-title">
        <h2 id="faq-title" className="font-serif text-[1.75rem] leading-[1.15] tracking-tight md:text-4xl">
          Questions worth asking first
        </h2>
        <div className="mt-8">
          <FaqList items={serviceFaqs} />
        </div>
        <Link
          href="/contact?topic=consulting"
          className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink px-5 text-sm text-cream hover:bg-moss sm:w-auto"
        >
          Begin a conversation
        </Link>
      </section>

      <Testimonials items={testimonials.filter((item) => item.id !== "reader")} title="From the rooms, imagined" />
    </>
  );
}

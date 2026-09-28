import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { site, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Write Malorfa about consulting, speaking, plants, or media. The form is a browser-only demonstration, with an email and calendar placeholder.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        plate="06"
        kicker="Contact"
        title="A note is enough to begin."
        dek="Choose a topic so the request arrives sorted. Consulting, speaking, plants, media, or something that does not fit the list yet."
      />
      <section className="mx-auto max-w-[1200px] px-5 py-10 md:px-10 md:py-14">
        <p className="mb-8 max-w-2xl text-sm text-ink/70">
          Messages stay on this page. For a real address, use{" "}
          <a className="inline-flex min-h-11 items-center underline decoration-ink/30 underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          . {site.disclaimer}
        </p>
        <Suspense fallback={<p className="text-sm text-ink/60">Opening the form…</p>}>
          <ContactForm />
        </Suspense>
      </section>
    </>
  );
}

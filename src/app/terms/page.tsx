import { PageHeader } from "@/components/PageHeader";
import { pageMeta, site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Terms",
  description: "Placeholder terms for the Malorfa website. The brand, books, and advisory practice are fictional.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader
        plate="08"
        kicker="Terms"
        title="How to read this site."
        dek="A stub, written so nobody mistakes the prototype for a regulated offer."
      />
      <div className="prose-reed mx-auto max-w-[760px] px-5 py-10 md:px-10 md:py-14">
        <p>
          {site.disclaimer} Book titles, the imprint Placeholder Press, the nursery Lumen & Leaf, testimonials, and travel essays are original fiction for the design.
        </p>
        <p>
          Nothing on the advisory pages is an offer to sell insurance, a recommendation of a product, or a professional engagement. Do not rely on it for a business decision.
        </p>
        <p>
          Plant notes are general household habits, not a diagnosis of a specific plant. Travel notes are not an invitation to move live plants across borders.
        </p>
        <p>
          When a real person adopts this design, replace these terms with counsel that matches the actual business.
        </p>
      </div>
    </>
  );
}

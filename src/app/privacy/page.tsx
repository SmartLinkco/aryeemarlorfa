import { PageHeader } from "@/components/PageHeader";
import { pageMeta, site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Privacy",
  description: "Placeholder privacy note for the Ava Reed website prototype. The forms do not transmit personal data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        plate="07"
        kicker="Privacy"
        title="What this prototype keeps."
        dek="A short legal stub. Replace it with a real notice before collecting anyone’s information."
      />
      <div className="prose-reed mx-auto max-w-[760px] px-5 py-10 md:px-10 md:py-14">
        <p>
          The contact form and the newsletter field run only in your browser. They do not send email, do not call an API, and do not write to a database. Refreshing the page clears what you typed.
        </p>
        <p>
          The optional rain sound is generated on your device. It is off until you turn it on, and it is not recorded.
        </p>
        <p>
          Placeholder social links point at example.com. They are not profiles. If you later add analytics, embeds, or a real mailing list, this page should name them, say why, and explain how someone opts out.
        </p>
        <p>
          Questions about the prototype can be addressed to {site.email}, which is also a placeholder inbox.
        </p>
      </div>
    </>
  );
}

import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { nav, site } from "@/lib/site";

const socials = [
  { label: "LinkedIn", href: "https://example.com/linkedin" },
  { label: "Instagram", href: "https://example.com/instagram" },
  { label: "Reading list", href: "https://example.com/reading" },
];

export function SiteFooter() {
  return (
    <footer className="bg-moss text-cream">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="font-serif text-3xl tracking-tight">Ava Reed</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-sage">
            Notes on risk, travel, books & plants. A private letter, occasionally, from the same desk as the advisory work.
          </p>
          <div className="mt-6">
            <NewsletterForm />
          </div>
          <p className="mt-3 text-xs leading-relaxed text-sage/80">
            Signup is a demonstration. It does not send email or store an address on a server.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm md:col-span-7 md:grid-cols-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brass-soft">Visit</p>
            <ul className="mt-3 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-cream/90 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-cream/90 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brass-soft">Social</p>
            <ul className="mt-3 space-y-2">
              {socials.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-cream/90 hover:text-white" rel="noreferrer">
                    {item.label}
                    <span className="sr-only"> (placeholder)</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-sage/80">Profiles are placeholders.</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brass-soft">Legal</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/privacy" className="text-cream/90 hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-cream/90 hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-sage/80">
              <a href={`mailto:${site.email}`} className="underline decoration-cream/30 underline-offset-2">
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-[1200px] px-6 py-5 text-xs leading-relaxed text-sage/80 md:px-10">
          {site.disclaimer}
        </p>
      </div>
    </footer>
  );
}

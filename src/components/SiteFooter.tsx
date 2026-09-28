import Image from "next/image";
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
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-12 md:grid-cols-12 md:px-10 md:py-16">
        <div className="md:col-span-5">
          <Image
            src="/brand/malorfa-logo.png"
            alt="Malorfa"
            width={559}
            height={136}
            className="h-9 w-auto bg-paper px-2 py-1"
          />
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
        <div className="grid gap-8 text-sm sm:grid-cols-3 md:col-span-7">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brass-soft">Visit</p>
            <ul className="mt-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-11 items-center text-cream/90 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="inline-flex min-h-11 items-center text-cream/90 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brass-soft">Social</p>
            <ul className="mt-2">
              {socials.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="inline-flex min-h-11 items-center text-cream/90 hover:text-white" rel="noreferrer">
                    {item.label}
                    <span className="sr-only"> (placeholder)</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-sage/80">Profiles are placeholders.</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brass-soft">Legal</p>
            <ul className="mt-2">
              <li>
                <Link href="/privacy" className="inline-flex min-h-11 items-center text-cream/90 hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="inline-flex min-h-11 items-center text-cream/90 hover:text-white">
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
        <p className="mx-auto max-w-[1200px] px-5 py-5 text-xs leading-relaxed text-sage/80 md:px-10">
          {site.disclaimer}
        </p>
      </div>
    </footer>
  );
}

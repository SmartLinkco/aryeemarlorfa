"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LeafMark } from "@/components/LeafMark";
import { SoundToggle } from "@/components/SoundToggle";
import { nav } from "@/lib/site";

function active(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-3 px-4 md:px-10">
        <Link href="/" className="inline-flex min-h-11 items-center">
          <Image
            src="/brand/malorfa-logo.png"
            alt="Malorfa"
            width={559}
            height={136}
            priority
            className="h-7 w-auto max-w-[46vw] sm:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active(pathname, item.href) ? "page" : undefined}
              className={`transition hover:text-moss ${active(pathname, item.href) ? "text-moss" : "text-ink/80"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <SoundToggle />
          <Link
            href="/contact"
            className="hidden min-h-11 items-center rounded-full bg-ink px-4 text-sm text-cream hover:bg-moss sm:inline-flex"
          >
            Contact
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="relative block h-3 w-4">
              <span className={`absolute left-0 h-px w-4 bg-ink transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-px w-4 bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-px w-4 bg-ink transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      </header>
      {open && (
        <nav
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-16 z-30 overflow-y-auto bg-paper px-5 pb-8 pt-2 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active(pathname, item.href) ? "page" : undefined}
                  className="flex min-h-14 items-center justify-between border-b border-line font-serif text-[1.75rem] tracking-tight"
                >
                  {item.label}
                  <LeafMark className="h-4 w-4 text-moss" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-8 flex min-h-12 items-center justify-center rounded-full bg-ink text-sm text-cream"
          >
            Contact
          </Link>
        </nav>
      )}
    </>
  );
}

"use client";

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
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-6 md:px-10">
        <Link href="/" className="group inline-flex items-center gap-2 font-serif text-xl tracking-tight">
          <LeafMark className="h-4 w-4 text-moss" />
          Ava Reed
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
            className="hidden rounded-full bg-ink px-4 py-2 text-sm text-cream hover:bg-moss sm:inline-flex"
          >
            Contact
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="flex w-4 flex-col gap-1">
              <span className={`h-px bg-ink transition ${open ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`h-px bg-ink transition ${open ? "-translate-y-[2px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-line bg-paper px-6 py-4 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active(pathname, item.href) ? "page" : undefined}
                  className="flex items-center justify-between border-b border-line py-3 font-serif text-2xl"
                >
                  {item.label}
                  <LeafMark className="h-4 w-4 text-moss" />
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="flex py-3 font-serif text-2xl">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

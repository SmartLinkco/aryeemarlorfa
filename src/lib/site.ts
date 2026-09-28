import type { Metadata } from "next";

export const site = {
  name: "Ava Reed",
  practice: "Reed Advisory",
  url: "https://avareed.example",
  email: "hello@avareed.example",
  description:
    "Personal brand of Ava Reed — a fictional advisor in corporate risk and insurance, plant-tropist, solo travel writer, and published author.",
  disclaimer:
    "Ava Reed and Reed Advisory are fictional placeholders for this website prototype. Nothing here is insurance advice, a solicitation, or a claim of licensure.",
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Advisory" },
  { href: "/plants", label: "Plants" },
  { href: "/travel", label: "Travel" },
  { href: "/books", label: "Books" },
] as const;

export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} · ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

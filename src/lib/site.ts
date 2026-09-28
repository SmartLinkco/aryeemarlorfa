import type { Metadata } from "next";

export const site = {
  name: "Malorfa",
  practice: "Malorfa",
  url: "https://malorfa.example",
  email: "hello@malorfa.example",
  description:
    "Malorfa — corporate risk and insurance advisory, a plant-tropist practice, solo travel, and books, in one brand.",
  disclaimer:
    "Malorfa is a brand site for advisory conversations, plants, travel, and books. Nothing here is insurance advice, a solicitation, or a claim of licensure.",
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

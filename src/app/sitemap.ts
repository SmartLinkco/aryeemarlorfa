import type { MetadataRoute } from "next";
import { books, stories } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about",
    "/services",
    "/plants",
    "/travel",
    "/books",
    "/contact",
    "/privacy",
    "/terms",
    ...stories.map((story) => `/travel/${story.slug}`),
    ...books.map((book) => `/books/${book.slug}`),
  ];
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-09-28"),
  }));
}

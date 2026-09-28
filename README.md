# aryeemarlorfa

Personal brand and commercial website for **Malorfa**, a fictional placeholder persona. The site is a production-ready Next.js prototype: one elegant brand that holds corporate risk and insurance advisory, a plant-tropist practice, solo travel writing, and published books in the same voice.

Malorfa, Placeholder Press, and the nursery Lumen & Leaf are invented. Nothing on the site is insurance advice, a solicitation, or a claim of licensure. There is no philanthropy, donation, or volunteer flow — the lifestyle room is plants.

## Setup

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

`npm run build` compiles the App Router project and is the check that the site is ready. Forms and the newsletter are browser-only stubs. They validate input and confirm on the page; they do not send email.

Replace copy, the portrait illustration, travel scenes, and book covers when a real owner takes the brand over. Keep the fictional labels until those claims are true.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4, with design tokens in `src/app/globals.css`
- Framer Motion for the in-view plant that grows on phones and desktops
- Shared chrome in `src/components` and copy in `src/lib/content.ts`

## Pages

| Path | Role |
| --- | --- |
| `/` | Dual-identity hero, four pillars, featured book, journal, plants, daily tip, quotes |
| `/about` | Story across advisory, plants, travel, and authorship |
| `/services` | Offerings, process, illustrative scenarios, FAQ, quotes |
| `/plants` | Collection, care notes, daily tip, partner-nursery inquiry list |
| `/travel` | Magazine listing, plus a story at `/travel/[slug]` |
| `/books` | Works, excerpts via `/books/[slug]`, speaking and press |
| `/contact` | Form with topic (consulting, speaking, plants, media, other), email, calendar stub |
| `/privacy`, `/terms` | Legal stubs |

Global nav, footer quick links, placeholder socials, and a newsletter (“notes on risk, travel, books & plants”) are on every page. Each route sets a title, meta description, and Open Graph fields. A generated share image lives at `src/app/opengraph-image.tsx`.

## Figma-inspired influences

Visual language only. Layouts, assets, and copy were not taken from the templates. The system — cream paper, moss ink, brass rules, Fraunces plus Outfit, botanical plates — is original.

1. **Emily** — Warm editorial hero and about voice: a large serif headline, a human dek, and a story that reads as a person rather than a services brochure.
2. **Expert X** — Consultant trust on `/services`: numbered offerings, a visible process, scenario notes, and proof-style quotes marked as fictional composites.
3. **Insighter** — Strategist structure: plate numbers, a four-step engagement, and FAQ answers that define the work before they sell it.
4. **Grace** — Portfolio polish in the showcase rhythm: featured book and journal bands, generous type, and project-like cards that still feel personal.
5. **Author Website Landing Pages** — Books as a catalog: cover, kind, year, synopsis, excerpt, and a small rights/press shelf.
6. **Travel Blog or Magazine** — Journal listing with a lead story, supporting pieces, place metadata, and a longform detail page.
7. **PlantLover** — Botanical warmth on `/plants`: collection cards, short care notes, and a partner-nursery list that inquires instead of checking out.
8. **Natasha** — Personal-portfolio finish: sticky navigation, a quiet footer, and one name carrying every room so the site never splits into microsites.

## Wow-factor add-on

Added after the pages and tokens were in place. Motion honors `prefers-reduced-motion` (static plant, still panels, no page-rise, no hover lift).

1. **Interactive hero.** An SVG plant grows into view on phones and desktops: a stem draws upward out of its pot and leaves appear as the clip rises. `prefers-reduced-motion` shows the full plant immediately, with no draw. The hero is normal document flow — no tall sticky stage — so the growth is visible without a blank scroll gap.
2. **Hero dual-identity stills.** The hero figure is a side-by-side pair of photographs: `public/media/malorfa-boardroom.png` and `public/media/malorfa-glasshouse.png`. The wordmark is `public/brand/malorfa-logo.png`. The page does not request `dual-identity.mp4`, so a missing film does not 404.
3. **Micro-interactions.** Leaf marks rustle on hover of their parent link, card, or button. “Today’s plant tip” on the home page and `/plants` picks one of fourteen notes from the local calendar day, announces it in a polite live region, and shows the date plus index.
4. **Signature detail — sound toggle.** A Rain control in the header synthesizes soft rain-on-leaves with the Web Audio API. It is off on every load, starts only from a click or keypress, and can be stopped again. It does not autoplay and it does not use an audio file. On a phone the control is a 44px icon in the header, not a hover effect.
5. **Extra moment — page-load reveal.** Each route template fades and rises once on entry (CSS, about 0.75s). It is the single added memorable moment, separate from the hero growth.

## Replacing placeholders

- Persona and practice names: `src/lib/site.ts`
- Page copy, books, trips, plants, quotes: `src/lib/content.ts`
- Portraits: `public/media/malorfa-boardroom.png` and `public/media/malorfa-glasshouse.png`
- Wordmark: `public/brand/malorfa-logo.png`
- Wire the contact and newsletter forms only when a real endpoint exists, and replace `/privacy` and `/terms` at the same time

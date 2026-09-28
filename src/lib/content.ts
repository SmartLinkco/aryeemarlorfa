export type Topic = "consulting" | "speaking" | "plants" | "media" | "other";

export const topics: { value: Topic; label: string }[] = [
  { value: "consulting", label: "Consulting" },
  { value: "speaking", label: "Speaking" },
  { value: "plants", label: "Plants" },
  { value: "media", label: "Media" },
  { value: "other", label: "Other" },
];

export const pillars = [
  {
    num: "01",
    kicker: "Advisory",
    title: "Risk & insurance",
    href: "/services",
    text: "Corporate risk and insurance conversations for leadership teams who want clearer choices, not louder alarms.",
  },
  {
    num: "02",
    kicker: "Plants",
    title: "Plant-tropist",
    href: "/plants",
    text: "A private practice of living plants — collection, care, and the lean toward light. A plant lover’s room, not a charity or volunteer program.",
  },
  {
    num: "03",
    kicker: "Travel",
    title: "Solo travel",
    href: "/travel",
    text: "Journeys taken alone, written as field notes: cities, trains, and the plants that appear along the road.",
  },
  {
    num: "04",
    kicker: "Books",
    title: "Author",
    href: "/books",
    text: "Published essays and journals on attention, risk, glasshouses, and moving through the world alone.",
  },
] as const;

export const offerings = [
  {
    num: "01",
    title: "Risk landscape conversations",
    text: "A structured listening session that names exposures in plain language — operational, people, reputation, and the insurance that sits beside them.",
  },
  {
    num: "02",
    title: "Program design workshops",
    text: "Working sessions that sketch how a protection program could be shaped. Illustrative only: not a placement, quote, or product recommendation.",
  },
  {
    num: "03",
    title: "Continuity briefings",
    text: "Short, board-ready narratives about what must keep going, who decides, and which assumptions deserve a second look.",
  },
  {
    num: "04",
    title: "Executive briefings",
    text: "A calm readout for leaders who need the story of risk without a stack of appendices. Written to be read once, then used.",
  },
] as const;

export const process = [
  {
    num: "01",
    title: "Listen",
    text: "A first conversation about the business, the worries already in the room, and what a useful outcome would feel like.",
  },
  {
    num: "02",
    title: "Map",
    text: "We sort what is known, what is assumed, and what is simply unexamined. No theater, no invented precision.",
  },
  {
    num: "03",
    title: "Frame",
    text: "Options are written as choices with tradeoffs. Insurance sits in the frame as one tool among others.",
  },
  {
    num: "04",
    title: "Stay alongside",
    text: "A follow-through note, a second briefing, or a clean handoff. The engagement ends when the story is usable.",
  },
] as const;

export const scenarios = [
  {
    title: "A growing goods company",
    question: "Leadership feels covered, but nobody can explain the program without opening a binder.",
    frame:
      "The illustrative work is a one-page map: what the program is trying to protect, where language has drifted, and which three questions the next renewal conversation should actually answer.",
  },
  {
    title: "A professional firm before a board day",
    question: "The board wants reassurance. The operators want fewer surprises.",
    frame:
      "The illustrative work is a briefing that separates appetite, incident habits, and insurance mechanics — so the room can talk about decisions instead of documents.",
  },
] as const;

export const serviceFaqs = [
  {
    q: "Is this insurance advice or a solicitation?",
    a: "No. Malorfa is a fictional brand built for this prototype. The pages describe a way of working. They are not advice, a quote, a policy, or a claim that anyone is licensed.",
  },
  {
    q: "Who are the conversations for?",
    a: "In the world of this brand, they are for founders and leadership teams who want risk discussed in full sentences. If you are replacing the placeholders, write the industries you actually serve.",
  },
  {
    q: "Do engagements include placing coverage?",
    a: "Not in this prototype, and the copy does not pretend otherwise. The pattern is advisory conversation and written framing. Placement, if it ever belongs, would be described only when it is true.",
  },
  {
    q: "Can the same person speak, or talk about plants and books?",
    a: "Yes. Speaking, media, and plant notes are separate doors on the contact form so a request arrives already sorted. The voice stays one voice.",
  },
  {
    q: "How does a fictional engagement begin?",
    a: "With a note: context, timing, and the decision you are near. The form on this site does not send email; it confirms in the browser so the interaction can be tried.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "She made the risk conversation feel like a room we could stay in. Fewer slogans, more sentences we recognized as our own.",
    name: "Composite, operations lead",
    context: "Illustrative client voice — fictional",
    id: "client",
  },
  {
    quote:
      "The essays read the way a good greenhouse smells: specific, a little damp, and unwilling to rush.",
    name: "Composite, reader",
    context: "Illustrative reader voice — fictional",
    id: "reader",
  },
  {
    quote:
      "I booked the talk expecting insurance. I left thinking about attention, which turned out to be the more useful briefing.",
    name: "Composite, host",
    context: "Illustrative speaking voice — fictional",
    id: "host",
  },
] as const;

export const plantTips = [
  {
    title: "Water the soil, not your anxiety",
    body: "For most tropical houseplants, wait until the top inch of mix is dry. A schedule on the calendar is less honest than a finger in the pot.",
  },
  {
    title: "Turn the pot",
    body: "A quarter turn each week keeps growth from leaning into a permanent bow. Plants are tropists; they will always choose the light.",
  },
  {
    title: "Bright, not punished",
    body: "Indirect light suits the majority of foliage plants. If leaves bleach, step them back. If they reach and thin, step them closer.",
  },
  {
    title: "Dust is a tax on light",
    body: "Wipe broad leaves with a damp cloth when you water. Clean surfaces catch more of the day.",
  },
  {
    title: "Empty the saucer",
    body: "Roots left standing in water often fail quietly. Let the pot drain, then discard what remains.",
  },
  {
    title: "Share the humidity",
    body: "Grouping plants helps them lend moisture to one another, especially in heated rooms. Leave enough air between them to notice pests early.",
  },
  {
    title: "Size the next pot modestly",
    body: "When roots circle tightly, move up only a little. A vast new pot stays wet long after the plant has finished drinking.",
  },
  {
    title: "Read a yellow leaf slowly",
    body: "An older lower leaf yellowing is often age or a water rhythm, not a verdict. Change one thing, then watch.",
  },
  {
    title: "A pebble tray, not a fog machine",
    body: "A tray of stones and water beneath a pot softens dry indoor air. Keep the pot base above the waterline.",
  },
  {
    title: "One plant at a time",
    body: "Learn a single species until its weight, color, and thirst are familiar. A crowded windowsill is not the same as a practice.",
  },
  {
    title: "Winter is a slower verb",
    body: "Growth eases when light drops. Ease feeding with it. Resume when new leaves ask.",
  },
  {
    title: "Look underneath",
    body: "When you water, glance at the undersides of leaves. Early notice is the whole of most pest care.",
  },
  {
    title: "Pots have climates",
    body: "Terracotta dries faster than glazed ceramic. Adjust the rhythm to the vessel. The plant is not being difficult.",
  },
  {
    title: "Before a trip",
    body: "A thorough watering the morning you leave often outlasts a worried soak the night before. Ask a neighbor to look, not to love the plant for you.",
  },
] as const;

export function tipIndex(date = new Date()) {
  const start = new Date(date.getFullYear(), 0, 0).getTime();
  const day = Math.floor((date.getTime() - start) / 86_400_000);
  return ((day % plantTips.length) + plantTips.length) % plantTips.length;
}

export const plants = [
  {
    name: "Study fig",
    latin: "Ficus lyrata",
    room: "North study",
    note: "A broad fiddle-leaf kept slightly root-bound. It sulks if moved, and rewards staying put.",
    care: "Bright indirect light. Water when the top two inches dry. Wipe the violin leaves.",
    variant: "fig" as const,
    featured: true,
  },
  {
    name: "Split-leaf",
    latin: "Monstera deliciosa",
    room: "Glasshouse corner",
    note: "Fenestrations arrived late and then all at once, which is also how some insights show up.",
    care: "Medium to bright light. A moss pole when the stems ask to climb.",
    variant: "monstera" as const,
  },
  {
    name: "Olive in a clay pot",
    latin: "Olea europaea",
    room: "South sill",
    note: "Bought after a winter trip. It wants more sun than the apartment honestly has.",
    care: "Fullest light you can give. Let the mix dry well between waterings.",
    variant: "olive" as const,
  },
  {
    name: "Maidenhair",
    latin: "Adiantum",
    room: "Bath ledge",
    note: "The drama queen of the collection, and the most honest about humidity.",
    care: "Even moisture, no harsh sun, grouped with other drinkers.",
    variant: "fern" as const,
  },
  {
    name: "Parlor palm",
    latin: "Chamaedorea elegans",
    room: "Reading chair",
    note: "A quiet vertical. Useful when a room needs height without spectacle.",
    care: "Low to medium light. Water lightly; never let it sit wet.",
    variant: "palm" as const,
  },
  {
    name: "Trail of pothos",
    latin: "Epipremnum aureum",
    room: "Kitchen shelf",
    note: "Cuttings travel well. This one began as a sprig in a hotel glass.",
    care: "Tolerant. Trim long vines and root them in water if you like more plants than pots.",
    variant: "vine" as const,
  },
] as const;

export const cuttings = [
  {
    name: "Fig cutting",
    season: "Spring list",
    detail: "A single node from the study fig, when the plant is in active growth.",
  },
  {
    name: "Pothos sprig",
    season: "Most months",
    detail: "The easiest share. Rooted in water, then potted when the roots are a small beard.",
  },
  {
    name: "Olive note",
    season: "Inquire",
    detail: "Not a cutting — a recommendation of the nursery’s young standards, written by hand.",
  },
] as const;

export const stories = [
  {
    slug: "lisbon-in-winter-light",
    title: "Lisbon in winter light",
    place: "Lisbon",
    season: "January",
    minutes: 6,
    scene: "coast" as const,
    excerpt:
      "A solo week of hills, tiled stairwells, and a side-street glasshouse that corrected my idea of a productive morning.",
    plantsOnTheRoad:
      "A courtyard fern, misted by someone I never met, did more for my attention than the viewpoint I had circled on a map.",
    paragraphs: [
      "I arrived with a list and abandoned it by the second tram. January Lisbon is wet stone and laundry and a light that feels borrowed from April. Traveling alone means the list was only ever a suggestion I made to impress my future self.",
      "On Rua de São Bento I found a glasshouse the size of a shop. It was not famous. The door stuck. Inside, someone had arranged citrus in terracotta as if the fruit were a board paper: each pot a point, the aisle an argument. I stayed forty minutes and did not buy anything. Acquisition was not the errand. Looking was.",
      "Risk work has a version of this room. People ask for a tour of everything that could fail, and what they need is a smaller glasshouse: a few specimens, named, with enough space between them to walk. I wrote that sentence in a café and then distrusted it for being too neat. I kept it anyway.",
      "In the evening I walked to the river without headphones. A city is louder when you are responsible for your own pace. I slept early. The next morning I went back to the glasshouse and it was closed, which felt like the correct lesson. Some rooms are not on retainer.",
    ],
  },
  {
    slug: "night-train-fern",
    title: "The night train and the fern",
    place: "Kyoto",
    season: "March",
    minutes: 7,
    scene: "rail" as const,
    excerpt:
      "A long ride, a station shop, and a fern in a plastic sleeve that became a companion I was not prepared to be sentimental about.",
    plantsOnTheRoad:
      "The fern rode in the overhead rack, then on a windowsill of a rented room, then — carefully — home, declared at the border of the story if not the country. Treat this as fiction: moving live plants across borders is a real-world matter of agricultural rules, not a souvenir plot.",
    paragraphs: [
      "Night trains make a flattering portrait of solitude. You are both the passenger and the person who chose the passenger’s life. I took a late departure with a paper novel and no intention of acquiring a plant.",
      "The station shop sold bottled tea, batteries, and a row of ferns sleeved like umbrellas. I chose the smallest. It was an impractical object for a berth, which is why it felt like the right one. I named it nothing. Naming a travel plant is how sentiment gets out of hand.",
      "Somewhere after midnight the carriage lights dimmed and the fern tapped the window when the track curved. I thought about insurance wordings, of all things: how we sleeve certain risks in plastic and call them handled. The fern was not a metaphor I invited. It became one because the hour was late and the tea was gone.",
      "Kyoto in March was cold at the temples and warm in the noodle shops. I walked alone and did not pretend the walk was research, though later it became pages. The fern dried at the tips. I trimmed them with nail scissors. Care, on the road, is mostly editing.",
    ],
  },
  {
    slug: "oaxaca-courtyards",
    title: "Courtyards, and getting lost on purpose",
    place: "Oaxaca",
    season: "November",
    minutes: 8,
    scene: "court" as const,
    excerpt:
      "A week of color, shade, and the discipline of not filling every hour. Also: bougainvillea, which refuses to be a minor character.",
    plantsOnTheRoad:
      "Bougainvillea over a doorway, a potted citrus in a hotel stair, and a market bunch of herbs that perfumed the room until Thursday.",
    paragraphs: [
      "I came to Oaxaca without a guide and with a paper map that went soft in my pocket. Solo travel, done kindly, is not a test of bravery. It is a practice of choosing the next right corner and then sitting down.",
      "The courtyards do the structural work of the city. You pass a plain door and the day opens into shade, tile, and a tree that has been paying rent longer than the café. I ordered coffee I did not need so I could watch how people used the space: laptops, arguments, a child counting petals.",
      "Bougainvillea is a plant-tropist’s temptation and a traveler’s cliché. I include it because ignoring it would be a different kind of dishonesty. The bracts were doing what the brand of this website also attempts: a strong color held by a serious structure.",
      "On the last afternoon I missed a museum on purpose. The unused ticket is still in the notebook, next to a sketch of a stairwell citrus. The essay is better for the hour I did not optimize. Attention is not the same thing as coverage.",
    ],
  },
] as const;

export type Story = (typeof stories)[number];

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export const books = [
  {
    slug: "the-quiet-ledger",
    title: "The Quiet Ledger",
    kind: "Essays",
    year: "2024",
    tone: "moss" as const,
    dek: "On naming risk without inflaming it, and on the private ledger every careful person already keeps.",
    synopsis:
      "A short book of essays about how organizations — and people — account for what might go wrong. The ledger in the title is not only financial. It is the list we do not show guests: dependencies, favors, fears, and the plants we forgot to water.",
    excerpt:
      "A risk register is a honest document until it becomes a performance. The useful ones are slightly embarrassing. They include the vendor everyone likes and nobody has replaced, the key that lives under a particular pot, the sentence the board has agreed not to finish. I am interested in that sentence.",
    stockists: ["Placeholder Press", "Independent shelves — forthcoming", "Library desk copy"],
  },
  {
    slug: "glasshouse-hours",
    title: "Glasshouse Hours",
    kind: "Journal",
    year: "2023",
    tone: "clay" as const,
    dek: "A year of plant notes that refused to stay only about plants.",
    synopsis:
      "Seasonal entries from a rented glasshouse corner and a city apartment. Watering, winter light, cuttings given to friends, and the way care becomes visible when you write down the days you skipped it.",
    excerpt:
      "Thursday. The maidenhair crisped at the edges because I gave it a heroic soak and then a week of neglect, which is not a schedule, it is a mood. I cut the worst fronds and did not apologize out loud. The plant is not keeping score. I am. That is the useful part.",
    stockists: ["Placeholder Press", "Garden-counter edition — fictional", "Audio, not yet"],
  },
  {
    slug: "one-ticket",
    title: "One Ticket",
    kind: "Travel essays",
    year: "2022",
    tone: "ink" as const,
    dek: "Solo journeys written without turning solitude into a slogan.",
    synopsis:
      "Essays from trains, markets, and rented rooms. The book argues, gently, that traveling alone is a craft of logistics and attention, not a personality. Several chapters include the plants that intruded on the itinerary.",
    excerpt:
      "Buy the ticket for the hour you can actually use. Heroic itineraries are how a trip becomes a job. I prefer one neighborhood understood well enough that a wrong turn still feels like reading.",
    stockists: ["Placeholder Press", "Paperback with a plain cover", "Rights inquiries via the contact form"],
  },
] as const;

export type Book = (typeof books)[number];

export function getBook(slug: string) {
  return books.find((book) => book.slug === slug);
}

export const talks = [
  {
    title: "Risk in full sentences",
    detail: "A briefing for leadership teams on how to talk about exposure without a fog of jargon.",
  },
  {
    title: "The glasshouse habit",
    detail: "What a plant practice lends to writing, travel, and any job that requires you to notice early.",
  },
  {
    title: "One ticket, unpacked",
    detail: "Solo travel as logistics and attention — a talk, not a tour and not an invitation to be coached through a bucket list.",
  },
] as const;

export const press = [
  {
    outlet: "Placeholder Review",
    note: "A forthcoming conversation about essays, insurance language, and houseplants. Fictional clipping.",
  },
  {
    outlet: "Field & Ledger (imagined)",
    note: "A short Q&A on writing about work without sanding off the work. Not a real publication.",
  },
  {
    outlet: "Studio guest chair",
    note: "Speaking inquiries are open through the contact form under the topic Speaking.",
  },
] as const;

export const timeline = [
  {
    label: "The practice",
    title: "Learning to name exposure",
    text: "The advisory path in this prototype is corporate risk and insurance — conversations, wordings, and the calm required when a room wants certainty it cannot have. No employer, license, or credential is claimed here.",
  },
  {
    label: "The glasshouse",
    title: "Becoming a plant-tropist",
    text: "Plants arrived as a counterweight and stayed as a discipline. A plant-tropist, in Malorfa’s usage, is simply a person oriented toward living green things: their lean, their thirst, their refusal to perform on a human calendar. It is not philanthropy.",
  },
  {
    label: "The road",
    title: "Going alone, on purpose",
    text: "Solo travel became the third room. Not escape, and not a service offered to others. A way of practicing logistics, nerve, and the pleasure of an unshared afternoon.",
  },
  {
    label: "The page",
    title: "Writing it down",
    text: "The books gather the other three. Essays, a plant journal, and travel pieces — published in the world of this brand by Placeholder Press, which is also fictional.",
  },
] as const;

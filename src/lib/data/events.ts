import concert from "@/assets/event-concert.jpg";
import dance from "@/assets/event-dance.jpg";
import cultural from "@/assets/event-cultural.jpg";
import conference from "@/assets/event-conference.jpg";
import gala from "@/assets/event-gala.jpg";
import film from "@/assets/event-film.jpg";

export type TicketProvider = "eventbrite" | "showpass" | "tickettailor" | "internal" | "none";

export type EventStatus = "upcoming" | "featured" | "past" | "sold-out";

export type SiteEvent = {
  id: string;
  slug: string;
  title: string;
  organizer: string;
  typeSlug: string;
  date: string; // ISO
  doorsOpen?: string;
  status: EventStatus;
  ticketProvider: TicketProvider;
  ticketUrl?: string;
  image: string;
  shortDescription: string;
  pricingFrom?: number;
};

// Placeholder content. When Lovable Cloud is wired up, swap this for a query.
export const events: SiteEvent[] = [
  {
    id: "evt-001",
    slug: "richmond-symphony-winter-gala",
    title: "Richmond Symphony Winter Gala",
    organizer: "Richmond Symphony Orchestra",
    typeSlug: "concerts",
    date: "2026-12-12T19:30:00-08:00",
    doorsOpen: "18:30",
    status: "featured",
    ticketProvider: "eventbrite",
    ticketUrl: "#",
    image: concert,
    shortDescription: "A black-tie evening of cinematic film scores performed by a 60-piece orchestra.",
    pricingFrom: 89,
  },
  {
    id: "evt-002",
    slug: "pacific-coast-dance-championships",
    title: "Pacific Coast Dance Championships",
    organizer: "PCDC Federation",
    typeSlug: "dance-competitions",
    date: "2026-07-18T09:00:00-07:00",
    status: "upcoming",
    ticketProvider: "showpass",
    ticketUrl: "#",
    image: dance,
    shortDescription: "Three days of elite competition across contemporary, ballet, hip hop, and jazz.",
    pricingFrom: 35,
  },
  {
    id: "evt-003",
    slug: "lunar-new-year-cultural-night",
    title: "Lunar New Year Cultural Night",
    organizer: "Richmond Cultural Alliance",
    typeSlug: "cultural-events",
    date: "2027-02-06T18:00:00-08:00",
    status: "upcoming",
    ticketProvider: "tickettailor",
    ticketUrl: "#",
    image: cultural,
    shortDescription: "A community celebration with traditional performance, food, and family programming.",
    pricingFrom: 25,
  },
  {
    id: "evt-004",
    slug: "ai-frontiers-2026",
    title: "AI Frontiers 2026",
    organizer: "Westcoast Tech Forum",
    typeSlug: "conferences",
    date: "2026-10-22T08:30:00-07:00",
    status: "upcoming",
    ticketProvider: "eventbrite",
    ticketUrl: "#",
    image: conference,
    shortDescription: "Two-day conference with keynotes, fireside chats, and live product demos.",
    pricingFrom: 349,
  },
  {
    id: "evt-005",
    slug: "hope-foundation-charity-gala",
    title: "Hope Foundation Charity Gala",
    organizer: "Hope Foundation",
    typeSlug: "fundraisers",
    date: "2025-11-08T18:00:00-08:00",
    status: "past",
    ticketProvider: "internal",
    image: gala,
    shortDescription: "A sold-out gala that raised over $1.2M for paediatric care.",
  },
  {
    id: "evt-006",
    slug: "richmond-international-film-night",
    title: "Richmond International Film Night",
    organizer: "RIFF Society",
    typeSlug: "film-screenings",
    date: "2025-09-14T19:00:00-07:00",
    status: "past",
    ticketProvider: "tickettailor",
    image: film,
    shortDescription: "Premiere screenings from five award-winning independent directors.",
  },
];

export const upcomingEvents = () =>
  events
    .filter((e) => e.status === "upcoming" || e.status === "featured")
    .sort((a, b) => a.date.localeCompare(b.date));

export const pastEvents = () =>
  events.filter((e) => e.status === "past").sort((a, b) => b.date.localeCompare(a.date));

export const featuredEvent = () => events.find((e) => e.status === "featured") ?? events[0];
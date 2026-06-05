export type EventType = {
  slug: string;
  name: string;
  blurb: string;
  image: string;
};

import gala from "@/assets/event-gala.jpg";
import conference from "@/assets/event-conference.jpg";
import concert from "@/assets/event-concert.jpg";
import dance from "@/assets/event-dance.jpg";
import cultural from "@/assets/event-cultural.jpg";
import graduation from "@/assets/event-graduation.jpg";
import community from "@/assets/event-community.jpg";
import film from "@/assets/event-film.jpg";

export const eventTypes: EventType[] = [
  { slug: "corporate-events", name: "Corporate Events", blurb: "Brand launches, town halls, and executive offsites with full A/V production.", image: gala },
  { slug: "conferences", name: "Conferences", blurb: "Multi-day programming with breakout-ready configurations and tiered seating.", image: conference },
  { slug: "concerts", name: "Concerts", blurb: "Tour-grade stage, line array sound, and a room engineered for live music.", image: concert },
  { slug: "cultural-events", name: "Cultural Events", blurb: "A flexible stage that honours tradition with broadcast-quality presentation.", image: cultural },
  { slug: "dance-competitions", name: "Dance Competitions", blurb: "Sprung stage area, dedicated dressing rooms, and crisp followspot work.", image: dance },
  { slug: "graduations", name: "Graduations", blurb: "A ceremonial centre stage that turns the moment into a memory.", image: graduation },
  { slug: "film-screenings", name: "Film Screenings", blurb: "4K projection, premium sound, and a cinematic auditorium feel.", image: film },
  { slug: "community-events", name: "Community Events", blurb: "A welcoming home for the gatherings that bring Richmond together.", image: community },
  { slug: "fundraisers", name: "Fundraisers & Galas", blurb: "Elegant lobby for receptions plus a main hall built to convert attention into giving.", image: gala },
  { slug: "product-launches", name: "Product Launches", blurb: "An LED-ready backdrop and theatrical lighting to spotlight what's next.", image: conference },
];
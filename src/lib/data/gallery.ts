import stage from "@/assets/venue-stage.jpg";
import lobby from "@/assets/venue-lobby.jpg";
import exterior from "@/assets/venue-exterior.jpg";
const hero = "/images/firebird-hero.webp";
import concert from "@/assets/event-concert.jpg";
import dance from "@/assets/event-dance.jpg";
import gala from "@/assets/event-gala.jpg";
import conference from "@/assets/event-conference.jpg";
import cultural from "@/assets/event-cultural.jpg";
import graduation from "@/assets/event-graduation.jpg";
import community from "@/assets/event-community.jpg";
import film from "@/assets/event-film.jpg";

export type GalleryCategory = "venue" | "events" | "stage" | "lobby" | "audience" | "backstage";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  src: string;
  alt: string;
  aspect?: "tall" | "wide" | "square";
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", category: "stage", src: stage, alt: "Main stage with curtain", aspect: "wide" },
  { id: "g2", category: "lobby", src: lobby, alt: "Premium theatre lobby", aspect: "wide" },
  { id: "g3", category: "venue", src: exterior, alt: "Theatre marquee at twilight", aspect: "wide" },
  { id: "g4", category: "audience", src: hero, alt: "Audience watching the main stage", aspect: "wide" },
  { id: "g5", category: "events", src: concert, alt: "Concert moment", aspect: "tall" },
  { id: "g6", category: "events", src: dance, alt: "Dance competition", aspect: "wide" },
  { id: "g7", category: "events", src: gala, alt: "Gala dinner setup", aspect: "wide" },
  { id: "g8", category: "events", src: conference, alt: "Conference with LED backdrop", aspect: "wide" },
  { id: "g9", category: "events", src: cultural, alt: "Cultural performance", aspect: "tall" },
  { id: "g10", category: "events", src: graduation, alt: "Graduation ceremony", aspect: "wide" },
  { id: "g11", category: "audience", src: community, alt: "Engaged community audience", aspect: "wide" },
  { id: "g12", category: "events", src: film, alt: "Cinema screening", aspect: "wide" },
  { id: "g13", category: "backstage", src: stage, alt: "Backstage view", aspect: "tall" },
];
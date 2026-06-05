import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { galleryItems, type GalleryCategory } from "@/lib/data/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Firebird Entertainment Theatre" },
      { name: "description", content: "Photos of Firebird Entertainment Theatre's venue, stage, lobby, audience, and the events that have called it home." },
      { property: "og:title", content: "Gallery — Firebird Entertainment Theatre" },
      { property: "og:description", content: "A visual tour of the room and the events." },
    ],
  }),
  component: Gallery,
});

const filters: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "venue", label: "Venue" },
  { id: "events", label: "Events" },
  { id: "stage", label: "Stage" },
  { id: "lobby", label: "Lobby" },
  { id: "audience", label: "Audience" },
  { id: "backstage", label: "Backstage" },
];

function Gallery() {
  const [active, setActive] = useState<GalleryCategory | "all">("all");
  const visible = active === "all" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <>
      <PageHero eyebrow="Gallery" title="Inside the room." subtitle="A visual walk through Firebird — the space, the people, and the events." />

      <section className="container-page pb-24 md:pb-32">
        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                active === f.id
                  ? "bg-ember text-primary-foreground"
                  : "ring-hairline text-foreground hover:bg-surface"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {visible.map((item) => (
            <figure key={item.id} className="break-inside-avoid overflow-hidden rounded-xl ring-hairline">
              <img src={item.src} alt={item.alt} loading="lazy" className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105" />
            </figure>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
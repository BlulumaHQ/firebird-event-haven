import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { pastEvents } from "@/lib/data/events";

export const Route = createFileRoute("/past-events")({
  head: () => ({
    meta: [
      { title: "Past Events — Firebird Entertainment Theatre" },
      { name: "description", content: "A look back at events held at Firebird Entertainment Theatre — concerts, conferences, galas, and more." },
      { property: "og:title", content: "Past Events at Firebird" },
      { property: "og:description", content: "Highlights from past events at Richmond's premier event venue." },
    ],
  }),
  component: Past,
});

function Past() {
  const events = pastEvents();
  return (
    <>
      <PageHero
        eyebrow="Archive"
        title="Events that lived here."
        subtitle="A small sample of the productions that have called Firebird home."
      />

      <section className="container-page pb-24 md:pb-32">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <li key={e.id} className="group overflow-hidden rounded-2xl ring-hairline">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={e.image} alt={e.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="bg-surface p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{formatDate(e.date)}</p>
                <h2 className="mt-3 font-display text-2xl">{e.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{e.organizer}</p>
                <p className="mt-3 text-sm text-foreground/80">{e.shortDescription}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-CA", { month: "long", day: "numeric", year: "numeric" });
  } catch {
    return iso;
  }
}
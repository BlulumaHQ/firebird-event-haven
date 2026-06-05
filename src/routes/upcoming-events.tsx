import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { upcomingEvents } from "@/lib/data/events";
import { Calendar, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/upcoming-events")({
  head: () => ({
    meta: [
      { title: "Upcoming Events — Firebird Entertainment Theatre" },
      { name: "description", content: "Browse upcoming events at Firebird Entertainment Theatre: concerts, conferences, cultural events, dance competitions, and more." },
      { property: "og:title", content: "Upcoming Events at Firebird" },
      { property: "og:description", content: "What's on next at Richmond's premier event venue." },
    ],
  }),
  component: Upcoming,
});

function Upcoming() {
  const events = upcomingEvents();
  return (
    <>
      <PageHero
        eyebrow="What's on"
        title="Upcoming Events"
        subtitle="A live calendar of what's coming to Firebird. Ticketing partners include Eventbrite, Showpass, and TicketTailor — and we're adding more."
      >
        <div className="rounded-xl ring-hairline bg-surface/60 px-5 py-4 text-sm text-muted-foreground">
          A full live calendar with filtering will appear here when our ticketing integrations go live.
          In the meantime, here are the events organizers have publicly announced.
        </div>
      </PageHero>

      <section className="container-page pb-24 md:pb-32">
        <ul className="divide-y divide-border/60 border-y border-border/60">
          {events.map((e) => (
            <li key={e.id} className="group grid items-center gap-6 py-8 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-3">
                <div className="aspect-[4/3] overflow-hidden rounded-xl ring-hairline">
                  <img src={e.image} alt={e.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" /> {formatDate(e.date)}
                </div>
                <h2 className="mt-3 font-display text-2xl md:text-3xl">{e.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">Presented by {e.organizer}</p>
                <p className="mt-3 max-w-2xl text-pretty text-foreground/80">{e.shortDescription}</p>
              </div>
              <div className="md:col-span-3 flex flex-col items-start gap-3 md:items-end">
                {e.pricingFrom && (
                  <p className="text-sm text-muted-foreground">From <span className="text-foreground font-medium">${e.pricingFrom} CAD</span></p>
                )}
                {e.ticketUrl ? (
                  <a href={e.ticketUrl} className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:shadow-ember">
                    Get tickets <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground">Tickets coming soon</span>
                )}
                <span className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">{e.ticketProvider}</span>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-muted-foreground">
          Organizing an event? <Link to="/request-availability" className="text-ember hover:underline">Request availability →</Link>
        </p>
      </section>

      <CtaBand />
    </>
  );
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-CA", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
  } catch {
    return iso;
  }
}
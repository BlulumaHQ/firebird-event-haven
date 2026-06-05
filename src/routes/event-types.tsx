import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { eventTypes } from "@/lib/data/event-types";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/event-types")({
  head: () => ({
    meta: [
      { title: "Event Types — Firebird Entertainment Theatre" },
      { name: "description", content: "Concerts, conferences, cultural events, dance competitions, graduations, film screenings, fundraisers, product launches, and more — all at home at Firebird." },
      { property: "og:title", content: "Event Types at Firebird" },
      { property: "og:description", content: "Ten event formats, one room engineered for all of them." },
    ],
  }),
  component: EventTypesPage,
});

function EventTypesPage() {
  return (
    <>
      <PageHero
        eyebrow="Event Types"
        title="Ten formats. One extraordinary room."
        subtitle="Firebird's hall is designed to host the widest range of events in Richmond — and to make every one of them feel like the only thing happening in the city that night."
      />

      <section className="container-page pb-24 md:pb-32">
        <ul className="space-y-px overflow-hidden rounded-2xl bg-border/60">
          {eventTypes.map((t, idx) => (
            <li id={t.slug} key={t.slug} className="group bg-background">
              <div className="container-page max-w-none grid items-stretch gap-0 md:grid-cols-12">
                <div className={`md:col-span-5 ${idx % 2 ? "md:order-2" : ""}`}>
                  <div className="aspect-[4/3] overflow-hidden md:h-full">
                    <img src={t.image} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
                <div className="md:col-span-7 flex flex-col justify-center p-8 md:p-14">
                  <p className="text-xs uppercase tracking-[0.3em] text-ember">0{idx + 1} {idx + 1 === 10 ? "" : "/ 10"}</p>
                  <h2 className="mt-4 font-display text-3xl md:text-5xl">{t.name}</h2>
                  <p className="mt-5 max-w-xl text-muted-foreground">{t.blurb}</p>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Link to="/request-availability" className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:shadow-ember">
                      Request availability <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link to="/venue-rental" className="inline-flex items-center gap-2 rounded-full ring-hairline px-5 py-2.5 text-sm text-foreground hover:bg-surface">
                      Rental info
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
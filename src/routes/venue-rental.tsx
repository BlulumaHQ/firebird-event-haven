import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Check } from "lucide-react";
import stage from "@/assets/venue-stage.jpg";

export const Route = createFileRoute("/venue-rental")({
  head: () => ({
    meta: [
      { title: "Venue Rental — Firebird Entertainment Theatre" },
      { name: "description", content: "Rent Richmond's premier multi-purpose event venue. Flexible packages for concerts, conferences, cultural events, galas, and more." },
      { property: "og:title", content: "Venue Rental — Firebird Entertainment Theatre" },
      { property: "og:description", content: "Flexible rental packages for every kind of event." },
    ],
  }),
  component: VenueRental,
});

const tiers = [
  {
    name: "Half Day",
    desc: "Up to 5 hours of venue use. Ideal for screenings, lectures, and intimate ceremonies.",
    bullets: ["Main hall access", "Basic house lighting & sound", "Lobby reception space", "Standard staffing"],
  },
  {
    name: "Full Day",
    desc: "Up to 12 hours including set-up and tear-down. Built for conferences, galas, and competitions.",
    bullets: ["Main hall + lobby + backstage", "Full production rig", "Dressing rooms & green room", "Dedicated event manager"],
    featured: true,
  },
  {
    name: "Multi-Day",
    desc: "Custom packages for multi-day events, festivals, and tour productions.",
    bullets: ["24/7 secure access", "Storage between event days", "Custom production design", "Full technical team"],
  },
];

const inclusions = [
  "Theatre-style seating up to 1,200",
  "Reconfigurable banquet, classroom, cabaret layouts",
  "Tour-grade audio system",
  "Full lighting rig with house engineer",
  "4K projection & screens",
  "Spacious lobby for receptions",
  "Multiple dressing rooms & green room",
  "Dedicated load-in dock",
  "On-site event manager",
  "Coat check & box office",
  "500+ complimentary parking stalls",
  "Step-free accessibility throughout",
];

function VenueRental() {
  return (
    <>
      <PageHero
        eyebrow="Venue Rental"
        title="Rent the room. Get the team."
        subtitle="Firebird rentals are turnkey. Pick the package that fits your event and our team will handle the production, the configuration, and the details that keep your day running."
        image={stage}
      />

      <section className="container-page py-24 md:py-28">
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`relative flex flex-col rounded-2xl p-8 ${
                t.featured ? "bg-ember/10 ring-1 ring-ember/40" : "bg-surface ring-hairline"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-ember px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-3xl">{t.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 text-ember" />
                    <span className="text-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>
              <Link to="/request-availability" className="mt-8 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background hover:bg-foreground/90">
                Request a quote
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-cream border-y border-border/60">
        <div className="container-page grid gap-12 py-24 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-ember">What's included</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-5xl">
              Everything your event needs — already in the room.
            </h2>
            <p className="mt-6 text-muted-foreground">
              No surprise add-ons. Every Firebird rental includes the core production, staffing, and
              guest amenities you'd expect from a top-tier event venue.
            </p>
          </div>
          <ul className="md:col-span-7 grid gap-4 sm:grid-cols-2">
            {inclusions.map((i) => (
              <li key={i} className="flex items-start gap-3 rounded-lg bg-background p-4 ring-hairline">
                <Check className="mt-0.5 h-4 w-4 text-ember" />
                <span className="text-sm text-foreground/90">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
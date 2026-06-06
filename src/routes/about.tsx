import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import lobby from "@/assets/venue-lobby.jpg";
import exterior from "@/assets/venue-exterior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Firebird Entertainment Theatre" },
      { name: "description", content: "Firebird Entertainment Theatre is Richmond's premier multi-purpose event venue, designed for organizers who want a room that performs." },
      { property: "og:title", content: "About Firebird Entertainment Theatre" },
      { property: "og:description", content: "Richmond's premier multi-purpose event venue, designed for organizers." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Firebird"
        title="A room that rises to the moment."
        subtitle="We built Firebird Entertainment Theatre to be Richmond's most flexible, most professional, most production-ready event venue — a single space engineered to host the widest range of events the city throws at it."
        image={lobby}
      />

      <section className="container-page py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-ember">Our purpose</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-5xl">
              Designed for organizers. Loved by audiences.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-pretty text-muted-foreground leading-relaxed">
            <p>
              Firebird isn't a traditional theatre. It's an event venue with the soul of a
              performing arts centre — built for conferences and concerts, galas and graduations,
              cultural celebrations and product launches, dance championships and film premieres.
            </p>
            <p>
              Our resident technical team, flexible configurations, and central Richmond location
              mean organizers can focus on what their event is about, not what their venue can't do.
            </p>
            <p>
              From the moment your guests pull into our lot, everything is engineered to make your
              event feel inevitable — like it could only have happened here.
            </p>
          </div>
        </div>
      </section>

      <section className="section-cream border-y border-border/60">
        <div className="container-page grid items-center gap-12 py-20 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl ring-hairline">
            <img src={exterior} alt="Firebird exterior" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <h3 className="font-display text-3xl md:text-4xl">Richmond's flagship event destination.</h3>
            <p className="mt-5 text-muted-foreground">
              Steps from Skytrain, ten minutes from YVR, and 25 from downtown Vancouver — with 500+
              free parking stalls on-site. Firebird is one of the easiest large venues to get to in
              Metro Vancouver.
            </p>
            <Link to="/venue-specifications" className="mt-8 inline-flex items-center gap-2 rounded-full ring-hairline px-5 py-3 text-sm text-foreground hover:bg-surface">
              See full specifications →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
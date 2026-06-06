import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Users, Mic, Volume2, Lightbulb, Armchair, Accessibility, DoorOpen, Ruler } from "lucide-react";
import stage from "@/assets/venue-stage.jpg";

export const Route = createFileRoute("/venue-specifications")({
  head: () => ({
    meta: [
      { title: "Venue Specifications — Firebird Entertainment Theatre" },
      { name: "description", content: "Full technical specifications for Firebird Entertainment Theatre: capacity, stage, audio, lighting, seating, accessibility, and backstage." },
      { property: "og:title", content: "Venue Specifications — Firebird" },
      { property: "og:description", content: "Capacity, stage, audio, lighting, seating, accessibility, and backstage details." },
    ],
  }),
  component: Specs,
});

const specs = [
  {
    icon: Users,
    title: "Capacity",
    rows: [
      ["Theatre style", "Up to 1,200"],
      ["Banquet (rounds of 10)", "Up to 600"],
      ["Classroom", "Up to 450"],
      ["Reception / Standing", "Up to 1,500"],
      ["Cabaret", "Up to 500"],
    ],
  },
  {
    icon: Mic,
    title: "Stage",
    rows: [
      ["Stage dimensions", "40' wide × 28' deep"],
      ["Proscenium opening", "36' wide × 18' high"],
      ["Wing space (each side)", "12'"],
      ["Stage floor", "Sprung sub-floor with marley overlay"],
      ["Rigging", "Full counterweight fly system"],
    ],
  },
  {
    icon: Volume2,
    title: "Audio",
    rows: [
      ["Main PA", "L-Acoustics Kara II line-array"],
      ["Subwoofers", "Dual SB18 per side"],
      ["FOH console", "DiGiCo SD12"],
      ["Monitors", "12-mix wedge & IEM world"],
      ["Wireless", "Shure Axient digital, 16 channels"],
    ],
  },
  {
    icon: Lightbulb,
    title: "Lighting",
    rows: [
      ["Console", "ETC Ion XE"],
      ["Moving heads", "Martin MAC Quantum × 24"],
      ["Conventional", "ETC Source Four LED Series 3 × 60"],
      ["Followspots", "2 × Robert Juliat Korrigan"],
      ["Hazers / Atmosphere", "Look Solutions Unique 2"],
    ],
  },
  {
    icon: Armchair,
    title: "Seating",
    rows: [
      ["Configuration", "Continental, tiered"],
      ["Sightlines", "Unobstructed from every seat"],
      ["Aisle access", "ADA-compliant aisles & rails"],
      ["VIP / Box seats", "12 boxes, 4 seats each"],
    ],
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    rows: [
      ["Mobility", "Step-free access throughout"],
      ["Seating", "Wheelchair-accessible positions in multiple rows"],
      ["Washrooms", "Accessible washrooms on every level"],
      ["Hearing", "Assistive listening system included"],
      ["Parking", "Accessible stalls nearest to lobby"],
    ],
  },
  {
    icon: DoorOpen,
    title: "Backstage",
    rows: [
      ["Dressing rooms", "4 (2 star, 2 chorus)"],
      ["Green room", "Yes, with kitchenette"],
      ["Load-in dock", "Ground-level, 14' wide door"],
      ["Production office", "Yes, hardwired internet"],
    ],
  },
  {
    icon: Ruler,
    title: "Lobby & Front of House",
    rows: [
      ["Lobby footprint", "4,500 sq ft"],
      ["Box office", "Two windows + digital ticket scanners"],
      ["Coat check", "Staffed during events"],
      ["Concessions", "Full bar & catering kitchen adjacency"],
    ],
  },
];

function Specs() {
  return (
    <>
      <PageHero
        eyebrow="Venue Specifications"
        title="The room, in detail."
        subtitle="Production teams, riders, and event planners: everything you need to design around our space."
        image={stage}
      />

      <section className="section-cream">
      <div className="container-page pb-24 pt-24 md:pb-32 md:pt-32">
        <div className="grid gap-px overflow-hidden rounded-2xl bg-border/60 md:grid-cols-2">
          {specs.map(({ icon: Icon, title, rows }) => (
            <div key={title} className="bg-surface p-8">
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-ember" />
                <h2 className="font-display text-2xl">{title}</h2>
              </div>
              <dl className="mt-6 divide-y divide-border/60">
                {rows.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-5 gap-4 py-3 text-sm">
                    <dt className="col-span-2 text-muted-foreground">{k}</dt>
                    <dd className="col-span-3 text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
      </section>

      <CtaBand />
    </>
  );
}
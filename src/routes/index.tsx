import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MapPin, Car, Sparkles, LayoutGrid, ArrowUpRight, Calendar, Mic, Users,
  Lightbulb, Volume2, Armchair, Accessibility, DoorOpen, ChevronRight,
  Megaphone, Star, Newspaper, Share2, ChevronLeft,
} from "lucide-react";
import heroImg from "@/assets/hero-venue.jpg";
import exteriorImg from "@/assets/venue-exterior.jpg";
import { eventTypes } from "@/lib/data/event-types";
import { upcomingEvents, featuredEvent } from "@/lib/data/events";
import { testimonials } from "@/lib/data/testimonials";
import { faqs } from "@/lib/data/faq";
import { galleryItems } from "@/lib/data/gallery";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Firebird Entertainment Theatre — One Venue. Unlimited Possibilities." },
      {
        name: "description",
        content:
          "Firebird Entertainment Theatre is Richmond's premier multi-purpose event venue. Concerts, conferences, cultural events, dance, graduations, and more.",
      },
      { property: "og:title", content: "Firebird Entertainment Theatre — One Venue. Unlimited Possibilities." },
      {
        property: "og:description",
        content:
          "Richmond's premier multi-purpose event venue, with professional production, flexible configurations, and ample parking.",
      },
      { property: "og:image", content: "/__og/firebird-home.jpg" },
    ],
  }),
  component: Home,
});

const rotators = [
  "Tonight: a sold-out concert.",
  "Tomorrow: a global conference.",
  "Next weekend: a championship.",
  "Every month: a cultural celebration.",
];

function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <WhyFirebird />
      <EventTypesGrid />
      <FeaturedEventsBand />
      <PromoteSection />
      <VenueOverview />
      <GalleryPreview />
      <LocationParking />
      <Testimonials />
      <FaqPreview />
      <CtaBand />
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % rotators.length), 3200);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/*
        Background image acts as the cinematic plate. When a real hero video
        becomes available, drop a <video src="..." poster={heroImg} autoPlay muted loop playsInline />
        above the <img> and the rest of the section keeps working unchanged.
      */}
      <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/55 to-background" />
      <div className="absolute inset-0 gradient-radial-ember opacity-50" />

      <div className="container-page relative flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-ember">
          <span className="h-px w-10 bg-ember/60" />
          <span>Richmond, British Columbia</span>
        </div>

        <h1 className="mt-8 max-w-5xl font-display text-balance text-[clamp(2.75rem,7.5vw,6.5rem)] leading-[0.98] text-foreground">
          One Venue. <span className="text-gradient-gold italic">Unlimited Possibilities.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-pretty text-base text-foreground/80 md:text-lg">
          From concerts and conferences to cultural celebrations and community events, Firebird
          Entertainment Theatre provides a flexible event venue in the heart of Richmond — with
          professional production capabilities, convenient access, and ample parking.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            to="/request-availability"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ember px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-ember"
          >
            Request Availability <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            to="/book-a-tour"
            className="inline-flex items-center justify-center gap-2 rounded-full ring-hairline bg-background/40 backdrop-blur px-6 py-3.5 text-sm font-medium text-foreground hover:bg-surface"
          >
            Book a Venue Tour
          </Link>
        </div>

        <div className="mt-14 flex items-center gap-3 text-sm">
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-ember" />
          <span className="text-muted-foreground">
            <span className="text-foreground/90">{rotators[i]}</span>{" "}
            <span className="ml-2 text-muted-foreground/70">Hosted at Firebird.</span>
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Firebird ---------- */
function WhyFirebird() {
  const items = [
    { icon: MapPin, title: "Prime Richmond Location", body: "Minutes from YVR, Skytrain, and the Highway 99 corridor. A regional hub by design." },
    { icon: Car, title: "Ample On-Site Parking", body: "Over 500 complimentary stalls steps from the lobby. No surge fees. No hunting for spots." },
    { icon: Sparkles, title: "Professional Stage & Production", body: "Tour-grade audio, line array sound, full lighting rig, and a resident technical team." },
    { icon: LayoutGrid, title: "Flexible Event Configurations", body: "Theatre, banquet, classroom, cabaret, reception — reconfigure the room around your event." },
  ];
  return (
    <section className="section-cream">
    <div className="container-page py-24 md:py-32">
      <div className="grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-ember">Why Firebird</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-6xl">
            Built for the event that hasn't happened yet.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Most venues are designed for one thing. Firebird is engineered to host any of them — and
            to make organizers look brilliant doing it.
          </p>
        </div>
        <div className="md:col-span-7">
          <ul className="grid gap-px overflow-hidden rounded-2xl bg-border/60 sm:grid-cols-2">
            {items.map(({ icon: Icon, title, body }) => (
              <li key={title} className="group relative bg-surface p-7 transition-colors hover:bg-surface-elevated">
                <Icon className="h-6 w-6 text-ember" />
                <h3 className="mt-5 font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
}

/* ---------- Event Types Grid ---------- */
function EventTypesGrid() {
  return (
    <section className="relative border-y border-border/60 bg-surface/30">
      <div className="container-page py-24 md:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ember">Designed for every kind of event</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-6xl">
              Ten formats. <span className="italic text-foreground/70">One room.</span>
            </h2>
          </div>
          <Link to="/event-types" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-ember">
            Explore all event types <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {eventTypes.map((t) => (
            <Link
              key={t.slug}
              to="/event-types"
              hash={t.slug}
              className="group relative overflow-hidden rounded-xl ring-hairline"
            >
              <div className="aspect-[3/4]">
                <img src={t.image} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-xl leading-tight text-foreground">{t.name}</h3>
                <span className="mt-2 inline-flex items-center gap-1 text-xs text-ember">
                  Learn more <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Featured Events ---------- */
function FeaturedEventsBand() {
  const upcoming = upcomingEvents().slice(0, 3);
  const featured = featuredEvent();
  return (
    <section className="container-page py-24 md:py-32">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-ember">What's on at Firebird</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-6xl">Featured Events</h2>
        </div>
        <Link to="/upcoming-events" className="hidden text-sm text-foreground hover:text-ember md:inline-flex items-center gap-2">
          See all upcoming <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {/* Featured spotlight card */}
        <article className="group relative lg:row-span-2 overflow-hidden rounded-2xl ring-hairline">
          <img src={featured.image} alt={featured.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="relative flex h-full min-h-[28rem] flex-col justify-end p-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-ember/15 px-3 py-1 text-[0.7rem] uppercase tracking-[0.2em] text-ember">
              <Star className="h-3 w-3" /> Featured
            </span>
            <h3 className="mt-6 font-display text-3xl text-foreground md:text-5xl">{featured.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">Presented by {featured.organizer}</p>
            <p className="mt-4 max-w-md text-pretty text-foreground/80">{featured.shortDescription}</p>
            <div className="mt-6 flex items-center gap-3">
              <Link to="/upcoming-events" className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:shadow-ember">
                View Event <ArrowUpRight className="h-4 w-4" />
              </Link>
              <span className="text-xs text-muted-foreground">{formatDate(featured.date)}</span>
            </div>
          </div>
        </article>

        {upcoming.slice(0, 2).map((e) => (
          <article key={e.id} className="group flex flex-col overflow-hidden rounded-2xl ring-hairline">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={e.image} alt={e.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col bg-surface p-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" /> {formatDate(e.date)}
              </div>
              <h3 className="mt-3 font-display text-2xl">{e.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{e.organizer}</p>
              <p className="mt-3 text-sm text-foreground/80">{e.shortDescription}</p>
              <Link to="/upcoming-events" className="mt-5 inline-flex w-fit items-center gap-1 text-sm text-ember hover:underline">
                Details <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <Link to="/upcoming-events" className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-ember md:hidden">
        See all upcoming <ChevronRight className="h-4 w-4" />
      </Link>
    </section>
  );
}

/* ---------- Promote ---------- */
function PromoteSection() {
  const channels = [
    { icon: Newspaper, title: "Website Event Listings", body: "Every booking is featured on our high-traffic events calendar." },
    { icon: Star, title: "Homepage Features", body: "Selected events get prime real estate on Firebird's homepage." },
    { icon: Share2, title: "Social Media Promotion", body: "Multi-platform posts across Instagram, Facebook, and LinkedIn." },
    { icon: Megaphone, title: "Newsletter Exposure", body: "Reach an opted-in audience of Richmond event-goers." },
    { icon: Mic, title: "Event Spotlights", body: "In-depth organizer interviews and behind-the-scenes content." },
  ];
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-surface/30">
      <div className="container-page grid gap-16 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-ember">Promote your event</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-6xl">
            Book the room. <span className="italic text-foreground/70">Get the audience.</span>
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            When you host at Firebird, you don't just rent a venue — you tap into our marketing
            engine. Every event gets meaningful exposure across our owned channels at no additional
            cost.
          </p>
          <Link to="/promote-your-event" className="mt-8 inline-flex items-center gap-2 rounded-full ring-hairline bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-surface">
            See how it works <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="md:col-span-7">
          <ul className="grid gap-px overflow-hidden rounded-2xl bg-border/60 sm:grid-cols-2">
            {channels.map(({ icon: Icon, title, body }) => (
              <li key={title} className="group flex flex-col gap-3 bg-background p-7 transition-colors hover:bg-surface">
                <Icon className="h-5 w-5 text-ember" />
                <h3 className="font-display text-xl">{title}</h3>
                <p className="text-sm text-muted-foreground">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Venue Overview ---------- */
function VenueOverview() {
  const stats = [
    { value: "1,200", label: "Theatre capacity" },
    { value: "40' × 28'", label: "Performance stage" },
    { value: "500+", label: "Parking stalls" },
    { value: "12,000 ft²", label: "Total event space" },
  ];
  const capabilities = [
    { icon: Users, title: "Capacity", body: "Up to 1,200 theatre-style; flexible for banquet, classroom, cabaret, reception." },
    { icon: Mic, title: "Stage", body: "40-by-28-foot proscenium with full wing space and rigging." },
    { icon: Volume2, title: "Audio", body: "Line-array PA with subs and monitor world. Show-grade clarity." },
    { icon: Lightbulb, title: "Lighting", body: "Full conventional and moving-head rig with on-site board operator." },
    { icon: Armchair, title: "Seating", body: "Comfortable plush seating with excellent sightlines from every row." },
    { icon: Accessibility, title: "Accessibility", body: "Step-free access, accessible seating and washrooms, assistive listening." },
    { icon: DoorOpen, title: "Backstage", body: "Multiple dressing rooms, green room, and dedicated load-in dock." },
  ];
  return (
    <section className="container-page py-24 md:py-32">
      <div className="grid items-end gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] text-ember">Venue Overview</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-6xl">
            A purpose-built event hall — not a converted theatre.
          </h2>
        </div>
        <div className="md:col-span-5">
          <Link to="/venue-specifications" className="inline-flex items-center gap-2 rounded-full ring-hairline bg-background px-5 py-3 text-sm text-foreground hover:bg-surface">
            Full specifications <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border/60 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-surface p-7">
            <dt className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{s.label}</dt>
            <dd className="mt-3 font-display text-4xl text-foreground md:text-5xl">{s.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map(({ icon: Icon, title, body }) => (
          <div key={title} className="bg-surface p-6">
            <Icon className="h-5 w-5 text-ember" />
            <h3 className="mt-4 font-display text-xl">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Gallery preview ---------- */
function GalleryPreview() {
  const items = galleryItems.slice(0, 6);
  return (
    <section className="container-page py-24 md:py-32">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-ember">Inside Firebird</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-6xl">Step into the room.</h2>
        </div>
        <Link to="/gallery" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-ember">
          Open gallery <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {items.map((it, idx) => (
          <div
            key={it.id}
            className={`relative overflow-hidden rounded-xl ring-hairline ${
              idx === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/5]"
            }`}
          >
            <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Location & Parking ---------- */
function LocationParking() {
  return (
    <section className="relative border-y border-border/60 bg-surface/30">
      <div className="container-page grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-ember">Location & Parking</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-6xl">
            Right in Richmond. Easy to reach. Easy to park.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Firebird sits at 12500 Vickers Way #200, Richmond, BC — moments from YVR International
            Airport, Skytrain, and the Highway 99 corridor. With over 500 complimentary parking
            stalls on-site, your guests will never circle the block.
          </p>
          <div className="mt-6 space-y-1 text-sm text-muted-foreground">
            <p><span className="text-foreground">Phone:</span> (604) 719-7906</p>
            <p><span className="text-foreground">Hours:</span> Mon–Fri 10 a.m. – 5 p.m.</p>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border/60">
            <div className="bg-background p-5">
              <dt className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Parking</dt>
              <dd className="mt-2 font-display text-2xl">500+ free stalls</dd>
            </div>
            <div className="bg-background p-5">
              <dt className="text-xs uppercase tracking-[0.22em] text-muted-foreground">YVR</dt>
              <dd className="mt-2 font-display text-2xl">10 min drive</dd>
            </div>
            <div className="bg-background p-5">
              <dt className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Skytrain</dt>
              <dd className="mt-2 font-display text-2xl">Walking distance</dd>
            </div>
            <div className="bg-background p-5">
              <dt className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Downtown Vancouver</dt>
              <dd className="mt-2 font-display text-2xl">25 min</dd>
            </div>
          </dl>
        </div>
        <div className="relative md:col-span-7">
          <div className="overflow-hidden rounded-2xl ring-hairline">
            <img src={exteriorImg} alt="Firebird Entertainment Theatre exterior at dusk with marquee illuminated" className="h-[28rem] w-full object-cover md:h-[34rem]" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-border/60 md:left-12 md:right-12">
            <div className="bg-background p-5 text-center">
              <Car className="mx-auto h-5 w-5 text-ember" />
              <p className="mt-2 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">Free Parking</p>
            </div>
            <div className="bg-background p-5 text-center">
              <Accessibility className="mx-auto h-5 w-5 text-ember" />
              <p className="mt-2 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">Fully Accessible</p>
            </div>
            <div className="bg-background p-5 text-center">
              <MapPin className="mx-auto h-5 w-5 text-ember" />
              <p className="mt-2 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">Central Richmond</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <section className="container-page py-24 md:py-32">
      <div className="grid items-start gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] text-ember">From organizers</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-5xl">The people who fill the room.</h2>
        </div>
        <div className="md:col-span-8">
          <blockquote className="font-display text-2xl leading-snug text-foreground md:text-4xl">
            <span className="text-ember">“</span>
            {t.quote}
            <span className="text-ember">”</span>
          </blockquote>
          <div className="mt-8 flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">{t.author}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Previous testimonial"
                onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-hairline hover:bg-surface"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={() => setI((v) => (v + 1) % testimonials.length)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-hairline hover:bg-surface"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ preview ---------- */
function FaqPreview() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] text-ember">FAQ</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-5xl">Good questions, answered.</h2>
          <Link to="/faq" className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-ember">
            All FAQs <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="md:col-span-8">
          <div className="divide-y divide-border/60 border-y border-border/60">
            {faqs.slice(0, 6).map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-display text-xl text-foreground">{f.q}</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-hairline transition-transform group-open:rotate-45">
                    <span className="text-xl leading-none text-ember">+</span>
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-pretty text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-CA", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}


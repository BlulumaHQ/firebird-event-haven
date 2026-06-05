# Firebird Entertainment Theatre — Website Plan

## Positioning

Premium, cinematic, conversion-focused venue site aimed at **event organizers** (not theatre audiences). Tone: confident, elegant, modern — closer to a luxury hospitality or performing arts centre brand than a community theatre.

## Visual Direction

- **Aesthetic**: Dark luxury. Deep near-black background, warm ember/gold accent inspired by the Firebird name, off-white type.
- **Palette (proposed)**: bg `#0B0B0D`, surface `#141417`, foreground `#F5F1EA`, muted `#8A8478`, accent ember `#E8662B`, accent gold `#C9A24C`.
- **Typography**: Display serif for headlines (e.g. Instrument Serif or DM Serif Display) paired with a clean grotesk for body (Inter / Work Sans). Large tracking-tight headlines, generous whitespace.
- **Motion**: Subtle parallax, slow ken-burns on hero video, fade/slide reveals on scroll, magnetic CTAs. Tasteful — not gimmicky.
- **Imagery**: Full-bleed cinematic photography and AI-generated venue/event scenes (concerts, galas, conferences, dance, graduations). Heavy use of letterboxed video and wide hero plates.

I'll ask you to confirm/adjust the palette and type pairing before building if you'd like — otherwise I'll proceed with the above.

## Information Architecture

Routes (TanStack Start file routes under `src/routes/`):

```
/                       Home
/about                  About
/event-types            Event Types (overview + per-type detail anchors)
/venue-rental           Venue Rental (pricing tiers, packages, inclusions)
/venue-specifications   Specs (capacity, stage, audio, lighting, seating, accessibility, backstage)
/upcoming-events        Upcoming Events (calendar-ready)
/past-events            Past Events (archive grid)
/promote-your-event     Organizer marketing benefits
/gallery                Interactive gallery (filterable: venue / events / stage / lobby / audience / backstage)
/faq                    FAQ
/contact                Contact
/request-availability   Conversion form (date, event type, attendance, requirements)
/book-a-tour            Tour scheduling form
```

Global nav: Home · Event Types · Venue · Events · Promote · Gallery · Contact + persistent "Request Availability" CTA button.
Footer: address, parking note, social, newsletter signup, secondary nav, integration-ready ticketing links.

## Homepage Sections (in order)

1. **Hero** — Full-screen cinematic background (video-ready `<video>` element with poster image fallback), rotating event-type tagline ("Tonight: a sold-out concert. Tomorrow: a global conference."), H1 "One Venue. Unlimited Possibilities.", subhead, primary CTA "Request Availability", secondary CTA "Book a Venue Tour".
2. **Why Firebird** — 4 feature cards: Prime Richmond Location · Ample Parking · Professional Stage & Production · Flexible Configurations.
3. **Event Types Grid** — 10 tiles (Corporate, Conferences, Concerts, Cultural, Dance Competitions, Graduations, Film Screenings, Community, Fundraisers, Product Launches), each linking to `/event-types#slug`.
4. **Featured Events** — 3-column showcase: Upcoming · Featured · Organizer Spotlight, pulling from DB.
5. **Promote Your Event** — Editorial split section listing the 5 exposure channels (Website Listings, Homepage Features, Social Promotion, Newsletter, Spotlights) with CTA to `/promote-your-event`.
6. **Venue Overview** — Stats strip (capacity, stage dims, etc.) + 7 capability cards (Capacity, Stage, Audio, Lighting, Seating, Accessibility, Backstage).
7. **Interactive Gallery preview** — Filterable masonry teaser linking to `/gallery`.
8. **Location & Parking** — Map embed, address, transit, with strong parking emphasis (dedicated lot, free, X spaces).
9. **Testimonials** — Carousel of organizer quotes.
10. **FAQ** — Accordion (top 6, link to full FAQ).
11. **Final CTA band** — Dark hero with both CTAs repeated.

## Future-Proof Data Layer

I'll scaffold typed schemas + placeholder data files now (no backend yet) so wiring Lovable Cloud later is mechanical:

```
src/lib/data/
  events.ts          Event { id, slug, title, date, type, status, ticketProvider, ticketUrl, ... }
  event-types.ts     EventType taxonomy
  organizers.ts      Organizer profiles
  testimonials.ts
  faq.ts
  gallery.ts         GalleryItem { id, category, src, ... }
src/lib/integrations/
  ticketing.ts       Adapter interface for Eventbrite / Showpass / TicketTailor
  crm.ts             Stub for CRM submission (request-availability + book-a-tour)
```

Forms (`/request-availability`, `/book-a-tour`, `/promote-your-event` submission) will post to a single typed handler stubbed to `console.log` + success state; swapped to a `createServerFn` + Lovable Cloud insert when backend is enabled.

Nav placeholders reserved for future: Event Calendar, Organizer Dashboard, Submit Event portal (rendered as "Coming soon" items so the IA doesn't have to change later).

## Technical Notes

- TanStack Start v1, Tailwind v4 tokens defined in `src/styles.css` under `@theme` + `:root` (oklch).
- All colors via semantic tokens; no raw hex in components.
- Each route gets its own `head()` with unique title/description/og tags. og:image only at leaf routes.
- Hero video: ship with a high-quality poster image (AI-generated) and an empty `<video>` slot ready to drop in a real MP4 later.
- Imagery generated via `imagegen` (premium tier for hero, standard for section imagery) and uploaded via `lovable-assets`.
- Accessibility: semantic HTML, focus states, reduced-motion fallback for parallax/video, alt text on all imagery.
- SEO: structured data (Organization + EventVenue JSON-LD), sitemap-friendly route names, descriptive metadata per page.

## Out of Scope (this pass)

- Live ticketing integration (Eventbrite/Showpass/TicketTailor) — scaffolded only.
- Authenticated organizer dashboard — nav reserved, no implementation.
- Lovable Cloud backend — schemas designed for easy migration when enabled.
- Real photography/video — using AI-generated stand-ins; easy to swap.

## Deliverable

A fully-built 13-route site with the homepage and key conversion pages (Request Availability, Book A Tour, Venue Rental, Venue Specifications) at full fidelity, plus complete styled stubs for secondary pages. Ready to publish, ready to wire to a backend.
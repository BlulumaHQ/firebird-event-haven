import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Instagram, Facebook, Linkedin, Youtube, MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-surface/40">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Richmond's premier multi-purpose event destination. One venue, built for everything from
            global conferences to sold-out concerts and cultural celebrations.
          </p>
          <p className="mt-6 inline-flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 text-ember" />
            <span>
              Firebird Entertainment Theatre<br />
              Richmond, British Columbia, Canada
            </span>
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Venue</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/venue-rental" className="text-foreground/80 hover:text-foreground">Venue Rental</Link></li>
            <li><Link to="/venue-specifications" className="text-foreground/80 hover:text-foreground">Specifications</Link></li>
            <li><Link to="/event-types" className="text-foreground/80 hover:text-foreground">Event Types</Link></li>
            <li><Link to="/gallery" className="text-foreground/80 hover:text-foreground">Gallery</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Events</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/upcoming-events" className="text-foreground/80 hover:text-foreground">Upcoming Events</Link></li>
            <li><Link to="/past-events" className="text-foreground/80 hover:text-foreground">Past Events</Link></li>
            <li><Link to="/promote-your-event" className="text-foreground/80 hover:text-foreground">Promote Your Event</Link></li>
            <li><span className="text-muted-foreground/60">Event Calendar · Coming soon</span></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Plan an event</h4>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/request-availability"
              className="inline-flex items-center justify-center rounded-full bg-ember px-5 py-3 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-ember"
            >
              Request Availability
            </Link>
            <Link
              to="/book-a-tour"
              className="inline-flex items-center justify-center rounded-full ring-hairline px-5 py-3 text-sm font-medium text-foreground hover:bg-surface"
            >
              Book a Venue Tour
            </Link>
          </div>

          <form
            className="mt-8"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              import("@/lib/integrations/crm").then((m) =>
                m.submitLead("contact", { source: "footer_newsletter", email: fd.get("email") }),
              );
              e.currentTarget.reset();
            }}
          >
            <label className="text-xs uppercase tracking-[0.22em] text-muted-foreground" htmlFor="newsletter">
              Newsletter
            </label>
            <div className="mt-3 flex gap-2">
              <input
                id="newsletter"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-ember focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background hover:bg-foreground/90"
              >
                Subscribe
              </button>
            </div>
          </form>

          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
            <a href="#" aria-label="Instagram" className="hover:text-ember"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-ember"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-ember"><Linkedin className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-ember"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-page flex flex-col items-start justify-between gap-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {year} Firebird Entertainment Theatre. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/faq" className="hover:text-foreground">FAQ</Link>
            <Link to="/about" className="hover:text-foreground">About</Link>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
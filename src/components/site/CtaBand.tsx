import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-venue.jpg";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden">
      <img src={heroImg} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/70 to-background" />
      <div className="container-page relative py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-ember">Let's build your event</p>
          <h2 className="mt-6 font-display text-balance text-4xl leading-[1.05] text-foreground md:text-6xl">
            Your next event has a home in Richmond.
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground md:text-lg">
            Tell us your date, your audience, and your ambition. Our events team will respond within
            one business day with availability and a tailored plan.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/request-availability"
              className="inline-flex items-center justify-center rounded-full bg-ember px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-ember"
            >
              Request Availability
            </Link>
            <Link
              to="/book-a-tour"
              className="inline-flex items-center justify-center rounded-full ring-hairline bg-background/60 backdrop-blur px-6 py-3.5 text-sm font-medium text-foreground hover:bg-surface"
            >
              Book a Venue Tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
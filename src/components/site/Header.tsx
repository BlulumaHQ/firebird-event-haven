import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/event-types", label: "Event Types" },
  { to: "/venue-rental", label: "Venue Rental" },
  { to: "/upcoming-events", label: "Events" },
  { to: "/promote-your-event", label: "Promote" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between md:h-24">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.82rem] font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/book-a-tour"
            className="text-[0.82rem] font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            Book a Tour
          </Link>
          <Link
            to="/request-availability"
            className="inline-flex items-center justify-center rounded-full bg-ember px-5 py-2.5 text-[0.82rem] font-semibold tracking-wide text-primary-foreground transition-all hover:shadow-ember"
          >
            Request Availability
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-hairline text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="container-page flex flex-col gap-1 py-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base text-foreground/90 transition-colors hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Link
                to="/book-a-tour"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full ring-hairline px-4 py-3 text-sm font-medium text-foreground"
              >
                Book a Tour
              </Link>
              <Link
                to="/request-availability"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-ember px-4 py-3 text-sm font-semibold text-primary-foreground"
              >
                Request Availability
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
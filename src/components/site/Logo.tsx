import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" aria-label="Firebird Entertainment Theatre — Home" className={`group inline-flex items-center ${className}`}>
      <img
        src="/images/logo-on-dark.png"
        alt="Firebird Entertainment Theatre"
        className="h-14 w-auto md:h-16 transition-opacity group-hover:opacity-90"
      />
    </Link>
  );
}
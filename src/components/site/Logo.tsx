import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-3 ${className}`}>
      <span
        aria-hidden="true"
        className="relative inline-flex h-9 w-9 items-center justify-center rounded-full ring-hairline"
      >
        <span className="absolute inset-0 rounded-full gradient-radial-ember opacity-80 transition-opacity group-hover:opacity-100" />
        <svg viewBox="0 0 24 24" className="relative h-5 w-5 text-ember" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2c2 3 4 5 4 9a4 4 0 1 1-8 0c0-2 1-3 2-4-1 4 2 5 2 5s0-4 0-10z" fill="currentColor" fillOpacity="0.15" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] tracking-tight text-foreground">Firebird</span>
        <span className="text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">Entertainment Theatre</span>
      </span>
    </Link>
  );
}
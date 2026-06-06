import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo-on-dark.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" aria-label="Firebird Entertainment Theatre — Home" className={`group inline-flex items-center ${className}`}>
      <img
        src={logoAsset.url}
        alt="Firebird Entertainment Theatre"
        className="h-10 w-auto md:h-11 transition-opacity group-hover:opacity-90"
      />
    </Link>
  );
}
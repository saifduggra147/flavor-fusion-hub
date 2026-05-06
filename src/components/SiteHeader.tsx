import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-wide">
          <span className="text-primary">Khayyam</span>
          <span className="text-foreground"> — The Food Pavilion</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/reservations"
            className="px-5 py-2.5 text-sm uppercase tracking-widest border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
          >
            Reserve
          </Link>
        </nav>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/reservations"
              onClick={() => setOpen(false)}
              className="text-center px-5 py-2.5 text-sm uppercase tracking-widest border border-primary text-primary rounded-sm"
            >
              Reserve
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

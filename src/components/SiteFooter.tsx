import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/30 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl">
            <span className="text-primary">Khayyam</span> — The Food Pavilion
          </h3>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
            A modern fine-dining destination in Faisalabad celebrating the soul of Pakistani cuisine,
            classic continental favourites, and indulgent desserts.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-muted-foreground hover:text-primary"><Instagram size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Facebook size={20} /></a>
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-primary mb-4">Visit</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 text-primary" /> Canal Expy, Faisal Town Canal Road, Faisalabad</li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 text-primary" /> 0301 2266642</li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 text-primary" /> hello@khayyampavilion.pk</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-primary mb-4">Hours</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Mon – Thu · 12pm – 11pm</li>
            <li>Fri – Sun · 12pm – 1am</li>
          </ul>
          <Link
            to="/reservations"
            className="inline-block mt-6 text-xs uppercase tracking-widest text-primary border-b border-primary pb-1"
          >
            Reserve a table
          </Link>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Khayyam — The Food Pavilion. All rights reserved.
      </div>
    </footer>
  );
}

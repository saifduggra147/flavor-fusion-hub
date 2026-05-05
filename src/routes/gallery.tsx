import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { X } from "lucide-react";
import hero from "@/assets/hero.jpg";
import pak from "@/assets/dish-pakistani.jpg";
import cont from "@/assets/dish-continental.jpg";
import dess from "@/assets/dish-dessert.jpg";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Saffron & Spice" },
      { name: "description", content: "A glimpse into our dishes and dining room." },
      { property: "og:title", content: "Gallery — Saffron & Spice" },
      { property: "og:description", content: "Photos of our food and ambience." },
    ],
  }),
  component: GalleryPage,
});

const photos = [
  { src: hero, alt: "Pakistani feast spread", h: "row-span-2" },
  { src: pak, alt: "Chicken karahi", h: "" },
  { src: cont, alt: "Grilled steak", h: "" },
  { src: interior, alt: "Restaurant interior", h: "row-span-2" },
  { src: dess, alt: "Gulab jamun", h: "" },
  { src: pak, alt: "Pakistani dish", h: "" },
  { src: cont, alt: "Continental plate", h: "" },
  { src: dess, alt: "Dessert", h: "" },
];

function GalleryPage() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <SiteLayout>
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Gallery</p>
          <h1 className="font-display text-5xl md:text-6xl">Moments &amp; Flavours</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-3">
          {photos.map((p, i) => (
            <button
              key={i}
              onClick={() => setOpen(p.src)}
              className={`overflow-hidden rounded-sm group ${p.h}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </button>
          ))}
        </div>
      </section>
      {open && (
        <div
          className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-6"
          onClick={() => setOpen(null)}
        >
          <button className="absolute top-6 right-6 text-foreground" onClick={() => setOpen(null)}>
            <X size={28} />
          </button>
          <img src={open} alt="" className="max-w-full max-h-full object-contain rounded-sm" />
        </div>
      )}
    </SiteLayout>
  );
}

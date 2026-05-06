import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Users, Sparkles, Phone } from "lucide-react";
import grandImg from "@/assets/hall-grand.jpg";
import privateImg from "@/assets/hall-private.jpg";
import gardenImg from "@/assets/hall-garden.jpg";

export const Route = createFileRoute("/halls")({
  head: () => ({
    meta: [
      { title: "Event Halls — Khayyam, The Food Pavilion" },
      { name: "description", content: "Book our grand banquet hall, private dining room, or garden hall for weddings, corporate events and private parties in Faisalabad." },
      { property: "og:title", content: "Event Halls — Khayyam" },
      { property: "og:description", content: "Banquet, private and garden halls available for booking." },
    ],
  }),
  component: HallsPage,
});

const halls = [
  {
    name: "Grand Banquet Hall",
    img: grandImg,
    capacity: "Up to 400 guests",
    features: ["Crystal chandeliers", "Stage & sound system", "Dedicated entrance", "Full catering"],
    desc: "Our flagship hall — perfect for weddings, walimas and large celebrations with a luxurious ambience.",
  },
  {
    name: "Private Dining Room",
    img: privateImg,
    capacity: "10 – 30 guests",
    features: ["Wood-panelled interior", "Candle-lit setting", "Private server", "Custom menu"],
    desc: "An intimate room for family gatherings, business dinners and milestone celebrations.",
  },
  {
    name: "Garden Hall",
    img: gardenImg,
    capacity: "Up to 200 guests",
    features: ["Open-air ambience", "Fairy-light canopy", "Floral styling", "Perfect for engagements"],
    desc: "An enchanting outdoor venue with romantic lighting — ideal for engagements and evening receptions.",
  },
];

function HallsPage() {
  return (
    <SiteLayout>
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img src={grandImg} alt="Grand banquet hall" className="absolute inset-0 w-full h-full object-cover" width={1280} height={832} />
        <div className="absolute inset-0 bg-background/75" />
        <div className="relative text-center px-6 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Host with us</p>
          <h1 className="font-display text-5xl md:text-6xl mb-6">Event Halls</h1>
          <p className="text-muted-foreground text-lg">
            From intimate dinners to grand weddings — choose the perfect setting for your occasion.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto space-y-20">
        {halls.map((hall, i) => (
          <article
            key={hall.name}
            className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
          >
            <div className="overflow-hidden rounded-sm">
              <img src={hall.img} alt={hall.name} loading="lazy" width={1280} height={832} className="w-full h-[360px] object-cover" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-primary mb-3 flex items-center gap-2">
                <Users size={14} /> {hall.capacity}
              </p>
              <h2 className="font-display text-4xl mb-4">{hall.name}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{hall.desc}</p>
              <ul className="space-y-2 mb-8">
                {hall.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Sparkles size={14} className="text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/923012266642"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm uppercase tracking-widest border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
              >
                <Phone size={14} /> Enquire on WhatsApp
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="py-16 px-6 bg-card/30 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl mb-4">Plan your event with us</h2>
          <p className="text-muted-foreground mb-6">
            Our events team will help you choose the right hall, design the menu and tailor every detail.
          </p>
          <a
            href="tel:+923012266642"
            className="inline-block px-8 py-3 text-sm uppercase tracking-widest bg-primary text-primary-foreground hover:opacity-90 transition rounded-sm"
          >
            Call 0301 2266642
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}

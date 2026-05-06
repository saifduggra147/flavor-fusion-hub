import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Khayyam, The Food Pavilion" },
      { name: "description", content: "Our story, our chef, and our philosophy of bringing Pakistani heritage to the modern table." },
      { property: "og:title", content: "About — Khayyam, The Food Pavilion" },
      { property: "og:description", content: "Our story and philosophy." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">About us</p>
          <h1 className="font-display text-5xl md:text-6xl">A modern home for timeless flavour.</h1>
        </div>
        <img src={interior} alt="Restaurant interior" loading="lazy" className="w-full rounded-sm mb-16" />
        <div className="grid md:grid-cols-2 gap-12 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-display text-3xl text-foreground mb-4">Our story</h2>
            <p>
              Born on Faisalabad's Canal Expy, Khayyam — The Food Pavilion began as
              a love letter to the food of our grandmothers. Today we've grown into one
              of the city's most welcoming dining rooms — without ever losing the warmth
              of a family table.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-foreground mb-4">Our philosophy</h2>
            <p>
              We believe in slow food, honest ingredients, and the quiet drama of a dish
              cooked with care. Every spice is hand-selected, every cut of meat aged in-house,
              every dessert finished à la minute.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-foreground mb-4">The chef</h2>
            <p>
              Executive Chef Ayesha Khan trained in Lahore, Paris, and Istanbul. Her menu
              weaves Mughal heritage with continental technique — the kind of cooking that
              feels at once familiar and surprising.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-foreground mb-4">Find us</h2>
            <p>
              Canal Expy, Faisal Town Canal Road, Faisalabad, 38000.<br />
              Open daily for lunch and dinner. Call 0301 2266642.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero.jpg";
import pakistaniImg from "@/assets/dish-pakistani.jpg";
import continentalImg from "@/assets/dish-continental.jpg";
import dessertImg from "@/assets/dish-dessert.jpg";
import interiorImg from "@/assets/interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khayyam — The Food Pavilion · Pakistani & Continental Dining in Faisalabad" },
      { name: "description", content: "An elegant Faisalabad dining destination serving Pakistani classics, continental favourites, and indulgent desserts. Reserve your table." },
      { property: "og:title", content: "Khayyam — The Food Pavilion" },
      { property: "og:description", content: "Elegant Pakistani, continental & dessert dining on Canal Expy, Faisalabad. Reserve your table." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const cuisines = [
  { title: "Pakistani", desc: "Slow-cooked karahis, smoky kebabs, fragrant biryanis.", img: pakistaniImg },
  { title: "Continental", desc: "Hand-cut steaks, pastas, and grills with refined finesse.", img: continentalImg },
  { title: "Desserts", desc: "Gulab jamun, kheer, and pâtisserie-style indulgences.", img: dessertImg },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative -mt-20 h-[100vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Pakistani feast"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary mb-6">
            Faisalabad · Canal Expy
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
            A Symphony of <em className="text-primary not-italic">Spice</em><br />and Soul
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Authentic Pakistani heritage, continental craft, and desserts to remember —
            served in an intimate modern setting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/reservations"
              className="px-8 py-4 bg-primary text-primary-foreground uppercase tracking-widest text-sm hover:opacity-90 transition rounded-sm"
            >
              Reserve a table
            </Link>
            <Link
              to="/menu"
              className="px-8 py-4 border border-primary text-primary uppercase tracking-widest text-sm hover:bg-primary hover:text-primary-foreground transition rounded-sm"
            >
              Explore menu
            </Link>
          </div>
        </div>
      </section>

      {/* CUISINES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Three worlds. One table.</p>
          <h2 className="font-display text-4xl md:text-5xl">Our Culinary Repertoire</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cuisines.map((c) => (
            <article key={c.title} className="group">
              <div className="overflow-hidden rounded-sm aspect-[4/5] mb-6">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-2xl mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img src={interiorImg} alt="Restaurant interior" loading="lazy" className="rounded-sm w-full" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Our story</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">A decade of quiet obsession.</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Saffron &amp; Spice was born from a simple belief — that Pakistani cuisine deserves
              the same reverence as the world's great culinary traditions. Our kitchen blends
              century-old recipes with modern technique, sourcing the finest spices from the
              subcontinent and the freshest produce from local farms.
            </p>
            <Link to="/about" className="text-primary uppercase tracking-widest text-sm border-b border-primary pb-1">
              Read our story
            </Link>
          </div>
        </div>
      </section>

      {/* RESERVE STRIP */}
      <section className="py-20 px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl mb-4">Join us tonight.</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Reservations are recommended. We'd love to welcome you.
        </p>
        <Link
          to="/reservations"
          className="inline-block px-8 py-4 bg-primary text-primary-foreground uppercase tracking-widest text-sm rounded-sm hover:opacity-90"
        >
          Book a table
        </Link>
      </section>
    </SiteLayout>
  );
}

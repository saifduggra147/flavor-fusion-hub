import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero.jpg";
import dishCutout from "@/assets/hero-dish-cutout.png";
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
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 }); // -1..1

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        setMouse({ x, y });
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 10 }).map(() => ({
        left: Math.random() * 100,
        size: 4 + Math.random() * 6,
        duration: 14 + Math.random() * 12,
        delay: -Math.random() * 20,
      })),
    []
  );

  const headlineWords = ["A", "Symphony", "of", "Spice", "and", "Soul"];

  const tiltX = (-mouse.y * 4).toFixed(2);
  const tiltY = (mouse.x * 6).toFixed(2);
  const bgY = scrollY * 0.3;
  const bgMouseX = mouse.x * 12;
  const bgMouseY = mouse.y * 12;
  const dishScroll = -scrollY * 0.5;
  const dishMouseX = mouse.x * 24;
  const dishMouseY = mouse.y * 24;
  const dishOpacity = Math.max(0, 1 - scrollY / 600);

  return (
    <SiteLayout>
      {/* HERO */}
      <section
        className="relative -mt-20 h-[100vh] flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
            transformStyle: "preserve-3d",
            transition: "transform 0.2s ease-out",
          }}
        >
          {/* BACKGROUND LAYER */}
          <div
            className="absolute inset-0 overflow-hidden will-change-transform"
            style={{ transform: `translate3d(${bgMouseX}px, ${bgY + bgMouseY}px, 0)` }}
          >
            <img
              src={heroImg}
              alt="Pakistani feast"
              className="absolute inset-0 w-full h-full object-cover animate-kenburns scale-110"
              style={{ filter: "brightness(0.55) blur(2px)" }}
              width={1920}
              height={1080}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 55% 65% at 50% 50%, transparent 0%, transparent 35%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.85) 100%)",
              }}
            />
          </div>

          {/* Spice particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p, i) => (
              <span
                key={i}
                className="spice-particle"
                style={{
                  left: `${p.left}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  animationDuration: `${p.duration}s`,
                  animationDelay: `${p.delay}s`,
                }}
              />
            ))}
          </div>

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background to-transparent animate-overlay-breathe pointer-events-none" />

          {/* TEXT LAYER (z-10) */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-6 pointer-events-none">
            <div className="text-center max-w-4xl pointer-events-auto" style={{ textShadow: "0 4px 24px rgba(0,0,0,0.6)" }}>
              <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary mb-6 word-reveal" style={{ animationDelay: "0s" }}>
                Faisalabad · Canal Expy
              </p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
                {headlineWords.slice(0, 3).map((w, i) => (
                  <span key={i} className="word-reveal mr-[0.25em]" style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
                    {w}
                  </span>
                ))}
                <span className="word-reveal mr-[0.25em] text-primary" style={{ animationDelay: `${0.2 + 3 * 0.15}s` }}>
                  <em className="not-italic">Spice</em>
                </span>
                <br />
                {headlineWords.slice(4).map((w, i) => (
                  <span key={i} className="word-reveal mr-[0.25em]" style={{ animationDelay: `${0.2 + (4 + i) * 0.15}s` }}>
                    {w}
                  </span>
                ))}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 word-reveal" style={{ animationDelay: "1.4s" }}>
                Authentic Pakistani heritage, continental craft, and desserts to remember —
                served in an intimate modern setting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center word-reveal" style={{ animationDelay: "1.6s" }}>
                <Link
                  to="/reservations"
                  className="btn-shimmer px-8 py-4 bg-primary text-primary-foreground uppercase tracking-widest text-sm hover:opacity-90 transition rounded-sm"
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
          </div>

          {/* FOREGROUND DISH (z-20, bursts below hero) */}
          <div
            className="absolute left-1/2 -bottom-32 md:-bottom-40 z-20 pointer-events-none will-change-transform"
            style={{
              transform: `translate3d(calc(-50% + ${dishMouseX}px), ${dishScroll + dishMouseY}px, 0)`,
              opacity: dishOpacity,
            }}
          >
            <div className="relative">
              <div
                className="absolute left-1/2 top-1/2 animate-bloom pointer-events-none -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: "min(70vw, 720px)",
                  height: "min(70vw, 720px)",
                  background:
                    "radial-gradient(circle, rgba(212,160,60,0.35) 0%, rgba(212,160,60,0.15) 35%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
              <img
                src={dishCutout}
                alt=""
                aria-hidden="true"
                className="relative animate-dish-pop block"
                style={{ width: "min(55vw, 560px)", height: "auto", transformOrigin: "center bottom" }}
                width={1024}
                height={1024}
              />
            </div>
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
            <h2 className="font-display text-4xl md:text-5xl mb-6">A quiet obsession with flavour.</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Khayyam — The Food Pavilion was born from a simple belief: that Pakistani cuisine
              deserves the same reverence as the world's great culinary traditions. Our kitchen
              blends century-old recipes with modern technique, sourcing the finest spices from
              the subcontinent and the freshest produce from local farms.
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

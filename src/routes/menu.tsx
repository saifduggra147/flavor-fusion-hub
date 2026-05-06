import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import pakistaniImg from "@/assets/dish-pakistani.jpg";
import continentalImg from "@/assets/dish-continental.jpg";
import dessertImg from "@/assets/dish-dessert.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Khayyam, The Food Pavilion" },
      { name: "description", content: "Explore our Pakistani classics, continental dishes, and desserts." },
      { property: "og:title", content: "Menu — Khayyam" },
      { property: "og:description", content: "Pakistani, continental and dessert menu." },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc: string; price: string; tag?: string; img: string };
type Category = "Pakistani" | "Continental" | "Desserts";

const menu: Record<Category, Item[]> = {
  Pakistani: [
    { name: "Chicken Karahi", desc: "Slow-cooked in tomato, ginger and green chillies, finished with cream.", price: "Rs. 1,950", tag: "Spicy", img: pakistaniImg },
    { name: "Lahori Mutton Biryani", desc: "Aged basmati layered with saffron and tender mutton.", price: "Rs. 2,200", tag: "Chef's Pick", img: pakistaniImg },
    { name: "Seekh Kebab Platter", desc: "Charcoal-grilled minced beef skewers with mint chutney.", price: "Rs. 1,650", img: pakistaniImg },
    { name: "Nihari", desc: "Eight-hour braised beef shank in spiced gravy.", price: "Rs. 1,800", img: pakistaniImg },
    { name: "Daal Makhani", desc: "Black lentils slow-simmered with butter and cream.", price: "Rs. 1,200", tag: "Vegetarian", img: pakistaniImg },
    { name: "Chapli Kebab", desc: "Peshawari-style spiced patty with pomegranate.", price: "Rs. 1,400", img: pakistaniImg },
  ],
  Continental: [
    { name: "Grilled Ribeye", desc: "300g aged ribeye, herb butter, roasted vegetables.", price: "Rs. 4,500", tag: "Chef's Pick", img: continentalImg },
    { name: "Truffle Mushroom Risotto", desc: "Carnaroli rice, wild mushrooms, parmesan.", price: "Rs. 2,400", tag: "Vegetarian", img: continentalImg },
    { name: "Pan-Seared Salmon", desc: "Atlantic salmon, lemon beurre blanc, asparagus.", price: "Rs. 3,200", img: continentalImg },
    { name: "Spaghetti Aglio e Olio", desc: "Garlic, chilli, olive oil, parsley.", price: "Rs. 1,800", img: continentalImg },
    { name: "Caesar Salad", desc: "Cos lettuce, anchovy dressing, parmesan crisp.", price: "Rs. 1,400", img: continentalImg },
    { name: "BBQ Lamb Chops", desc: "Marinated rack of lamb, rosemary jus.", price: "Rs. 3,800", img: continentalImg },
  ],
  Desserts: [
    { name: "Gulab Jamun", desc: "Warm milk dumplings in cardamom syrup.", price: "Rs. 650", img: dessertImg },
    { name: "Shahi Tukra", desc: "Royal bread pudding with saffron rabri.", price: "Rs. 750", tag: "Chef's Pick", img: dessertImg },
    { name: "Kheer", desc: "Slow-cooked rice pudding with pistachio.", price: "Rs. 600", img: dessertImg },
    { name: "Molten Chocolate Lava", desc: "Warm dark chocolate, vanilla bean ice cream.", price: "Rs. 850", img: dessertImg },
    { name: "Tiramisu", desc: "Espresso-soaked savoiardi, mascarpone cream.", price: "Rs. 800", img: dessertImg },
    { name: "Crème Brûlée", desc: "Vanilla custard, torched sugar crust.", price: "Rs. 750", img: dessertImg },
  ],
};

function MenuPage() {
  const [active, setActive] = useState<Category>("Pakistani");
  const items = menu[active];

  return (
    <SiteLayout>
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">The menu</p>
          <h1 className="font-display text-5xl md:text-6xl">Crafted to be remembered</h1>
        </div>

        <div className="flex justify-center gap-2 md:gap-8 mb-16 border-b border-border">
          {(Object.keys(menu) as Category[]).map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`pb-4 px-2 md:px-6 text-xs md:text-sm uppercase tracking-widest transition-colors border-b-2 -mb-px ${
                active === c
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {items.map((item) => (
            <article key={item.name} className="flex gap-5 group">
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-sm flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="font-display text-xl text-foreground">{item.name}</h3>
                  <span className="text-primary font-medium whitespace-nowrap">{item.price}</span>
                </div>
                {item.tag && (
                  <span className="inline-block text-[10px] uppercase tracking-widest text-primary border border-primary/40 px-2 py-0.5 mb-2 rounded-sm">
                    {item.tag}
                  </span>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import starterImg from "@/assets/dish-starter.jpg";

export const Route = createFileRoute("/starters")({
  head: () => ({
    meta: [
      { title: "Starters — Khayyam, The Food Pavilion" },
      { name: "description", content: "Begin your meal with our signature Pakistani and continental starters at Khayyam, Faisalabad." },
      { property: "og:title", content: "Starters — Khayyam" },
      { property: "og:description", content: "Signature appetizers to start your meal." },
    ],
  }),
  component: StartersPage,
});

const starters = [
  { name: "Vegetable Samosa", desc: "Crisp pastry filled with spiced potato and peas, served with tamarind chutney.", price: "Rs. 350", tag: "Vegetarian" },
  { name: "Chicken Tikka", desc: "Boneless chicken marinated in yogurt and spices, charcoal grilled.", price: "Rs. 950", tag: "Chef's Pick" },
  { name: "Seekh Kebab", desc: "Minced beef skewers grilled over charcoal, mint chutney on the side.", price: "Rs. 850" },
  { name: "Chicken Malai Boti", desc: "Tender chicken cubes in a creamy cheese marinade.", price: "Rs. 1,050" },
  { name: "Fish Pakora", desc: "Crispy gram-flour battered fish, lemon and chaat masala.", price: "Rs. 1,150" },
  { name: "Soup of the Day", desc: "Ask your server for today's chef-curated soup.", price: "Rs. 550", tag: "Vegetarian" },
  { name: "Hummus & Pita Platter", desc: "House hummus with warm pita and olive oil drizzle.", price: "Rs. 750", tag: "Vegetarian" },
  { name: "Chicken Wings", desc: "Smoky BBQ glazed wings with blue cheese dip.", price: "Rs. 950" },
];

function StartersPage() {
  return (
    <SiteLayout>
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <img src={starterImg} alt="Pakistani starter platter" className="absolute inset-0 w-full h-full object-cover" width={1024} height={1024} />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative text-center px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Begin the journey</p>
          <h1 className="font-display text-5xl md:text-6xl">Starters</h1>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {starters.map((item) => (
            <article key={item.name} className="border-b border-border pb-6">
              <div className="flex items-baseline justify-between gap-3 mb-1">
                <h3 className="font-display text-xl">{item.name}</h3>
                <span className="text-primary font-medium whitespace-nowrap">{item.price}</span>
              </div>
              {item.tag && (
                <span className="inline-block text-[10px] uppercase tracking-widest text-primary border border-primary/40 px-2 py-0.5 mb-2 rounded-sm">
                  {item.tag}
                </span>
              )}
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/menu"
            className="inline-block px-8 py-3 text-sm uppercase tracking-widest border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
          >
            View Full Menu
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

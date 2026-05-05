import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Saffron & Spice" },
      { name: "description", content: "Visit, call, or email us. We're on MM Alam Road, Lahore." },
      { property: "og:title", content: "Contact — Saffron & Spice" },
      { property: "og:description", content: "Get in touch with our team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Contact</p>
          <h1 className="font-display text-5xl md:text-6xl">We'd love to hear from you.</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Detail icon={<MapPin />} label="Address">12 MM Alam Road, Gulberg III, Lahore</Detail>
            <Detail icon={<Phone />} label="Phone">+92 300 1234567</Detail>
            <Detail icon={<Mail />} label="Email">hello@saffronandspice.pk</Detail>
            <Detail icon={<Clock />} label="Hours">
              Monday – Thursday · 12pm – 11pm<br />
              Friday – Sunday · 12pm – 1am
            </Detail>
          </div>
          <div className="aspect-square md:aspect-auto rounded-sm overflow-hidden border border-border">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=MM+Alam+Road+Lahore&output=embed"
              className="w-full h-full min-h-[400px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Detail({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="text-primary mt-1">{icon}</div>
      <div>
        <p className="text-xs uppercase tracking-widest text-primary mb-1">{label}</p>
        <p className="text-foreground">{children}</p>
      </div>
    </div>
  );
}

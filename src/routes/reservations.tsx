import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { SiteLayout } from "@/components/SiteLayout";
import { createReservation } from "@/lib/reservations.functions";
import { Check } from "lucide-react";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — Saffron & Spice" },
      { name: "description", content: "Reserve your table at Saffron & Spice. Book online in seconds." },
      { property: "og:title", content: "Reserve a Table — Saffron & Spice" },
      { property: "og:description", content: "Book your table online." },
    ],
  }),
  component: ReservationsPage,
});

const times = ["12:00","12:30","13:00","13:30","14:00","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00"];

function ReservationsPage() {
  const reserve = useServerFn(createReservation);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const today = new Date().toISOString().split("T")[0];

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    try {
      const result = await reserve({
        data: {
          name: String(fd.get("name") || ""),
          email: String(fd.get("email") || ""),
          phone: String(fd.get("phone") || ""),
          party_size: Number(fd.get("party_size") || 0),
          reservation_date: String(fd.get("reservation_date") || ""),
          reservation_time: String(fd.get("reservation_time") || ""),
          special_requests: String(fd.get("special_requests") || ""),
        },
      });
      if (result.ok) setDone(true);
      else setError(result.error);
    } catch (err) {
      console.error(err);
      setError("Please check the form and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Reservations</p>
          <h1 className="font-display text-5xl md:text-6xl">Reserve your table</h1>
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            We'll confirm your booking via email shortly. For parties over 8, please call us directly.
          </p>
        </div>

        {done ? (
          <div className="border border-primary/40 bg-card p-10 rounded-sm text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Check className="text-primary" />
            </div>
            <h2 className="font-display text-3xl mb-3">Reservation received</h2>
            <p className="text-muted-foreground">
              Thank you. We've recorded your request and will be in touch shortly to confirm.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="bg-card border border-border p-8 md:p-10 rounded-sm space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Full name"><input name="name" required maxLength={100} className={inputCls} /></Field>
              <Field label="Phone"><input name="phone" required maxLength={30} className={inputCls} /></Field>
            </div>
            <Field label="Email"><input name="email" type="email" required maxLength={255} className={inputCls} /></Field>
            <div className="grid md:grid-cols-3 gap-6">
              <Field label="Date">
                <input name="reservation_date" type="date" required min={today} className={inputCls} />
              </Field>
              <Field label="Time">
                <select name="reservation_time" required defaultValue="" className={inputCls}>
                  <option value="" disabled>Select…</option>
                  {times.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </Field>
              <Field label="Party size">
                <input name="party_size" type="number" min={1} max={20} defaultValue={2} required className={inputCls} />
              </Field>
            </div>
            <Field label="Special requests (optional)">
              <textarea name="special_requests" maxLength={500} rows={3} className={inputCls} />
            </Field>
            {error && <p className="text-destructive text-sm">{error}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="w-full px-8 py-4 bg-primary text-primary-foreground uppercase tracking-widest text-sm rounded-sm hover:opacity-90 disabled:opacity-50"
            >
              {submitting ? "Sending…" : "Confirm reservation"}
            </button>
          </form>
        )}
      </section>
    </SiteLayout>
  );
}

const inputCls =
  "w-full bg-input border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      {children}
    </label>
  );
}


# Restaurant Website — Plan

A modern, elegant multi-page site for your Pakistani restaurant featuring Pakistani, Continental, and Dessert cuisine — plus a working table reservations system.

## Visual direction

- **Mood:** Modern & elegant — dark backgrounds, gold/warm accents, large food photography, generous whitespace.
- **Typography:** Elegant serif for headings (e.g. Playfair Display), clean sans-serif for body (Inter).
- **Palette:** Deep charcoal/near-black background, warm gold primary, ivory text, subtle saffron accents.
- **Motion:** Smooth fade/slide reveals on scroll, soft hover transitions on cards/buttons.

## Pages (each its own route, SEO-friendly)

1. **Home (`/`)** — Full-screen hero with signature dish photo, restaurant name, tagline, and CTAs ("View Menu" / "Reserve a Table"). Sections for highlights (3 cuisines), featured dishes, a short story teaser, testimonials, and a reservation strip.
2. **Menu (`/menu`)** — Tabbed/filterable menu with three categories: **Pakistani**, **Continental**, **Desserts**. Each item shows photo, name, description, price, and optional tags (spicy, vegetarian, chef's pick).
3. **Gallery (`/gallery`)** — Masonry grid of dish + ambience photos with lightbox view.
4. **About (`/about`)** — Restaurant story, chef intro, philosophy, location/hours.
5. **Reservations (`/reservations`)** — Booking form (name, phone, email, date, time, party size, special requests) with confirmation toast and saved record.
6. **Contact (`/contact`)** — Address, phone, email, hours, embedded map, contact form.

Shared **header** (logo + nav + "Reserve" CTA) and **footer** (hours, address, social links, quick links) on every page.

## Reservations (functional)

- Backend powered by **Lovable Cloud** (database + server functions).
- A `reservations` table stores each booking.
- Form validates input (name, valid email, phone, future date, party size 1–20) with Zod on both client and server.
- On submit: saves to DB, shows success toast, sends a confirmation message on screen.
- Simple **admin view** at `/admin/reservations` (protected by email/password login via Lovable Cloud auth) so you can see all bookings, sorted by date.

## What I need from you (you said you have everything)

Please share when ready — I'll wire it all in:
1. **Restaurant name + tagline + logo** (image file or text logo is fine).
2. **Menu items** — name, short description, price, category (Pakistani / Continental / Dessert), and a photo for each (or I'll use elegant stock photos as placeholders for any missing).
3. **Photos** — 8–15 images for the gallery (food + ambience).
4. **About text** — story, chef bio (optional).
5. **Contact info** — address, phone, email, opening hours, social links (Instagram/Facebook).
6. **Reference website** (optional) — share the link if you have one, I'll match the feel.

If anything is missing, I'll use tasteful placeholders that you can swap later — no blocker.

## Build approach (how I'll work)

I'll build in approved, reviewable chunks so you always see progress:

1. **Foundation** — design system (colors, fonts), shared header/footer, home page hero & sections.
2. **Menu page** — full categorized menu with filtering.
3. **Gallery + About + Contact** pages.
4. **Reservations** — database, form, validation, success flow.
5. **Admin reservations view** with login.
6. **Polish** — animations, mobile responsiveness pass, SEO metadata per page, performance check.

After each step you preview, give feedback, and we refine before moving on.

## Technical notes

- TanStack Start with file-based routing (one route file per page).
- Tailwind v4 design tokens defined in `src/styles.css` (oklch colors).
- shadcn/ui components for forms, dialogs, toasts, calendar (date picker).
- Lovable Cloud for the `reservations` table, RLS policies, and auth for the admin view.
- Reservation insert handled via a server function with Zod validation.
- Each route defines its own `head()` metadata (title, description, og tags).

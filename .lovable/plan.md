# Hosting this app from GitHub

Before I change anything, I need to flag a hard constraint: **GitHub Pages cannot host this app the way it is today**, and pretending otherwise would just give you another 404.

## Why GitHub Pages won't work

GitHub Pages only serves **static files** (HTML/CSS/JS). It cannot run any server code. This app currently needs a server for:

1. **Reservation submissions** — they go through a TanStack server function that talks to the database.
2. **Admin login + admin dashboard** — protected by server-side auth.
3. **Confirmation emails** — sent from the server.
4. **SSR / route rendering** — TanStack Start renders pages on a Cloudflare Worker runtime.

If I force a static export to GitHub Pages, the marketing pages (home, menu, contact, about) would load, but **reservations, admin, and emails would all break**. That's almost certainly not what you want for a restaurant site whose main job is taking bookings.

## Your three realistic options

**Option A — Deploy to Vercel from your GitHub repo (recommended).**
Free tier, 5 minutes of setup, everything keeps working (reservations, admin, emails). You still keep the GitHub repo as the source of truth — Vercel just auto-builds and deploys whenever you push. This is what I'd pick.

**Option B — Deploy to Cloudflare Pages from GitHub.**
Also free, also supports the server runtime this app already targets. Slightly more setup than Vercel but a natural fit because the app is already configured for Cloudflare's Worker runtime.

**Option C — Force a static export to GitHub Pages.**
Marketing pages only. Reservations form, admin panel, and email sending will stop working. I'd need to:
- Add prerendering config so each route emits an HTML file
- Add a `404.html` fallback for client-side routing
- Add a GitHub Actions workflow that builds and pushes to the `gh-pages` branch
- Disable or hide the reservation form and `/admin` route (otherwise users hit broken pages)

## What I need from you

Tell me which option you want:

- **A**: I'll write a short walkthrough for connecting the repo to Vercel (no code changes needed — it just works).
- **B**: Same thing for Cloudflare Pages.
- **C**: I'll plan the static-export changes and tell you exactly which features stop working.

My strong recommendation is **A**. You already publish through Lovable at `khayamfoodpavilion.lovable.app` which works perfectly — Vercel gives you the same thing from your GitHub repo with a custom domain, for free.

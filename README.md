# Loop Website

Landing and support site for Loop, the app that connects musicians through intelligent matching, collaborations, and weekly challenges. Built with Next.js 15, React 19, Tailwind CSS 4, and TypeScript.

## Quick start

Requirements: Node.js 20+, npm.

```bash
npm install
npm run dev              # http://localhost:3000 (Turbopack)
```

Useful scripts:

- `npm run build` – production build
- `npm start` – run the built app
- `npm run lint` – Next.js/ESLint (build is configured to ignore lint/TS errors; fix locally before shipping)

## Project overview

- `src/app` – App Router pages
  - `/` homepage: hero, intro, community features, premium teaser, newsletter signup
  - `/Support` page: about, support callout, interactive FAQ
  - `/Mentions-legales` page: legal notices
  - `api/newsletter` endpoint (POST/GET) storing emails locally
- `src/components` – UI sections (Hero, Intro, Community, Premium, Newsletter, About, Support, FAQ, Legal, Navbar/Footer)
- `public/` – static assets (logos, phone mock, backgrounds, social icons)
- `data/newsletter.json` – flat-file store for newsletter emails (dev/demo only)
- `next.config.ts` – standalone output; build ignores lint/TS errors
- `Dockerfile`, `docker-compose.yml` – container build and Traefik example routing

## Newsletter API (dev/demo)

- `POST /api/newsletter` with `{ email }` to add an email (basic `@` validation; deduped).
- `GET /api/newsletter` returns `{ emails: [...] }`.
- Persists to `data/newsletter.json`. Ensure the `data` folder is writable. Replace with a real datastore for production.
- In production containers, set `NEWSLETTER_DATA_DIR` to a writable path (default: `/data` in the Dockerfile) and mount a volume (see `docker-compose.yml`).

## Styling & UX

- Tailwind CSS 4 via `@import "tailwindcss";` in `src/app/globals.css`, plus custom `Navbar.css`.
- Global font: Poppins (declared in `globals.css`).
- The site runs in French; copy lives in the components for easy edits.

## Docker

Build and run the standalone image:

```bash
docker build -t loop-website .
docker run -p 3000:3000 loop-website
```

`docker-compose.yml` includes a Traefik v3 reverse proxy example (TLS/ACME). It expects an external Docker network `vps-mds` and the hostname `loop-app.fr`; adjust to match your infra before use.

## Deployment notes

- `output: "standalone"` is enabled for lighter production images.
- No env vars are required for local dev. Add your own if you wire a real newsletter backend or analytics.
- Replace placeholder legal/hosting info in `/Mentions-legales` before going live.

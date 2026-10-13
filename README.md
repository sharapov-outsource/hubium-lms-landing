# Hubium LMS landing

The one-page site of [Hubium LMS](https://github.com/sharapov-outsource/hubium), in Russian at `/` and English at `/en`. Built on the Hubium design system: Next.js 16, plain CSS on the system's tokens, a standalone Docker image.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build
```

## Before the first deploy

Placeholders live in `app/lib/site.ts`:

- `SITE_URL` — the public domain (canonical URLs, sitemap, Open Graph).
- `METRIKA_ID` — the Yandex Metrika counter. While it is `null`, neither the counter nor the cookie banner is shown.
- `CONTACT_EMAIL` — shows the "Write to us" button when set.

The deploy workflow (`.github/workflows/deploy.yml`) runs on every push to `main`, the same way as the CampusHub landing. It builds the image into GHCR and starts the `hubium-lms-landing` container on the server, on `127.0.0.1:3030` in the `ft-private` network. It reads `/opt/hubium-lms-landing/.env` when that file exists. It needs the `Prod` environment with `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_SSH_KEY`, `GHCR_USERNAME` and `GHCR_TOKEN` (optionally `DEPLOY_PORT`), and a reverse proxy from the domain to port 3030.

## Design system

`design-system/tokens.json` is the Hubium design system's token file. `npm run tokens` regenerates `app/tokens.css` from it (light values in `:root`, dark ones under `prefers-color-scheme: dark`, and `[data-theme]` blocks for forcing a theme). `app/globals.css` draws the system's components (button, badge, card, alert, tabs, checkbox) on those tokens. `app/lib/palette.ts` is Hubium's own accent generator, used by the brand-colour demo.

## Screenshots

`public/screens` holds real Hubium LMS screens in both languages and themes. To retake them, run a Hubium dev server seeded with `pnpm db:seed --profile demo`, then:

```bash
HUBIUM_DIR=../obrportal HUBIUM_URL=http://localhost:3000 node scripts/capture-screens.mjs
```

The script uses Playwright from the Hubium checkout. It removes leftovers of e2e runs (rows named with a random `mv…` suffix, "E2E" courses, repeated activities) from the page before each shot. For the English administration screen it switches the administrator's language in the profile and switches it back afterwards.

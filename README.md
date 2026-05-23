# luiscielak.com

Astro rebuild of the former Framer-hosted Luis Cielak portfolio.

## Commands

```bash
npm run dev      # local dev server
npm run build    # production static build
npm run preview  # preview production build
```

## Deployment target

Recommended: Cloudflare Pages.

- Build command: `npm run build`
- Output directory: `dist`
- Node version: `22`

## Content model

Main content lives in `src/data/site.ts`.
Images live in `public/assets/` and were copied from the public Framer site so the new site does not depend on Framer asset URLs at runtime.

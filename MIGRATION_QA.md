# Framer to Astro Migration QA

Checked on 2026-05-23 against the live Framer site at `https://luiscielak.com` and the local Astro preview at `http://127.0.0.1:4321`.

## Route parity

| Route | Live Framer | Astro preview | Notes |
| --- | --- | --- | --- |
| `/` | 200 | 200 | Homepage hero, nav, project links, services, about, and footer represented. |
| `/case-study-pmi-da` | 200 | 200 | Preserved title, TL;DR, audio recap, stats, overview, challenge/solution, research, decisions, outcome, reflection. |
| `/case-study-pmi-pp` | 200 | 200 | Preserved title, TL;DR, audio recap, stats, enterprise-security overview nuance, research, decisions, outcome, reflection. |
| `/case-study-mss` | 200 | 200 | Preserved title, TL;DR, audio recap, stats, overview, challenge/solution, research, decisions, outcome, reflection. |
| `/robots.txt` | n/a | 200 | Present in Astro build. |
| `/sitemap.xml` | n/a | 200 | Present in Astro build with preserved public routes. |

## Content and asset checklist

- [x] Primary navigation: Home, Projects, About, Resume.
- [x] Footer links: LinkedIn, GitHub, email, visible email address.
- [x] Homepage hero copy and about copy migrated.
- [x] Three visible case-study routes preserved.
- [x] Project/card imagery copied locally into `public/assets/`.
- [x] Case-study supporting imagery copied locally into `public/assets/`.
- [x] Case-study audio highlights copied locally into `public/audio/`.
- [x] Case-study audio durations match the Framer players: 1:57, 1:44, 1:52.
- [x] SEO basics present: titles, meta descriptions, canonical URLs, Open Graph/Twitter metadata, sitemap, robots.
- [x] Cloudflare Pages headers file present at `public/_headers`.
- [x] Local route/link scan found no broken local `src` or `href` references.
- [x] Browser inspection of representative case-study audio confirmed local MP3 playback metadata loaded.

## Verification commands

```bash
npm run build
npm run preview -- --host 127.0.0.1 --port 4321
```

`npm run build` result: passed, 4 pages generated.

Local preview route checks:

```text
/                         200 text/html
/case-study-pmi-da        200 text/html
/case-study-pmi-pp        200 text/html
/case-study-mss           200 text/html
/robots.txt               200 text/plain
/sitemap.xml              200 text/xml
/audio/pmi-da-highlights.mp3 200 audio/mpeg
/audio/pmi-pp-highlights.mp3 200 audio/mpeg
/audio/mss-highlights.mp3    200 audio/mpeg
```

Broken local references: none found.

## Intentional differences from Framer

- The Astro build uses clean semantic HTML and a simplified editorial layout rather than recreating Framer's generated DOM and animations.
- The native HTML `<audio>` control replaces the custom Framer audio widget for portability and accessibility.
- Case-study headings use clearer semantic levels (`h1` for page titles) instead of copying Framer's heading hierarchy.
- Project cards expose titles and summaries directly in the Astro version for clarity and accessibility.

## Remaining pre-launch checks

- Do a human visual review on desktop and mobile before DNS cutover.
- Push to GitHub and create a Cloudflare Pages preview.
- Verify the Cloudflare preview URL before replacing the Framer-hosted production site.

# Deployment guide

This site is a static Astro rebuild of luiscielak.com. It can be hosted anywhere that serves static files.

## Recommended path: Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare Pages, create a new project from the repository.
3. Use these build settings:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `22`
4. Add the custom domain: `luiscielak.com`.
5. Keep the Framer site live until Cloudflare Pages preview is verified.
6. Cut DNS over only after checking:
   - `https://<pages-preview-url>/`
   - `/case-study-pmi-da`
   - `/case-study-pmi-pp`
   - `/case-study-mss`
   - `/robots.txt`
   - `/sitemap.xml`

## Alternative: self-host with Caddy

Build locally:

```bash
npm ci
npm run build
```

Serve the generated `dist/` directory with Caddy:

```caddyfile
luiscielak.com {
  root * /absolute/path/to/luiscielak-site/dist
  file_server
  encode zstd gzip
}
```

If using Cloudflare Tunnel, point the tunnel to the Caddy service and keep DNS proxied through Cloudflare.

## Rollback plan

Before changing DNS, keep Framer configured. If anything fails after cutover, revert the DNS record to Framer while fixing the static build.

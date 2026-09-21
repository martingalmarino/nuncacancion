# Nunca Canción

Single-page static site for publishing personal literary writings. The working title lives in `src/config/site.ts` and can be changed there without a redesign.

## Local development

```bash
npm install
npm run dev
```

Useful scripts:

- `npm run build` — generate the static site in `dist/`
- `npm run preview` — serve the built site locally
- `npm run check` — Astro + TypeScript checks

## Edit the project name and metadata

All visitor-facing identity strings are in `src/config/site.ts`:

- `name`, `wordmark`, `wordmarkLines`
- `title` and `description` (used for the document title and Open Graph tags)
- `productionUrl` — leave empty until a real production origin exists. Canonical and absolute social URLs are emitted only when this is set, for example `https://example.com` with no trailing slash.

Then set the same origin in `astro.config.ts` automatically via that field, or keep it empty for local/preview builds.

## Add a writing

Writings are data, not markup. Duplicate an entry in `src/data/writings.ts`:

1. Give it a unique stable `id` (this becomes the page anchor, e.g. `escrito-002`).
2. Set `label`, `order`, and `published: true`.
3. Add `title` only if the piece has one.
4. Fill `movements` with stanzas, each stanza with plain-text `lines`.
5. Optionally add `emphasis` that points at an existing line by `movementIndex`, `stanzaIndex`, and `lineIndex`.
6. Rebuild.

With a single published writing, the page skips the index. From the second writing onward, a compact linked index appears automatically. Existing anchors are preserved as long as their `id` values stay the same.

Do not put HTML in the source lines. The renderer escapes text and uses semantic paragraphs plus line breaks.

## Design notes

The page is a nocturnal literary fanzine: Oswald for the wordmark, IBM Plex Mono for the writing, analog damage kept out of the reading column. “Modo lectura” (shown only when JavaScript runs) removes texture, glitch and offsets without changing the words. `prefers-reduced-motion` disables animation and smooth scrolling.

Fonts are self-hosted through Fontsource and bundled at build time. No analytics, cookies or third-party widgets.

## Deploy (GitHub + Vercel)

The build output is a static site. Do not push or publish until you intend to.

1. Create a GitHub repository and push this project.
2. Import the repository in Vercel.
3. Framework preset: Astro. Build command: `npm run build`. Output: `dist`.
4. After the production URL is known, set `productionUrl` in `src/config/site.ts` and redeploy.

GitHub Pages also works with the `dist/` output; configure the Pages source from GitHub Actions or a `gh-pages` branch after `astro build`. If the site is served from a subpath, set Astro `base` accordingly.

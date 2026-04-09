# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

## Architecture

Next.js 15 App Router, TypeScript, Tailwind CSS v4 (via `@tailwindcss/postcss`).

- `app/layout.tsx` — Root layout. Loads Cormorant Garamond (headings) and DM Sans (body) via `next/font/google`, sets `--font-heading` and `--font-body` CSS variables.
- `app/globals.css` — Global styles + `@theme` block extending Tailwind with font vars and custom letter-spacing tokens (`tracking-tightest: -0.06em`, `tracking-tight: -0.03em`). Defines `reveal` animation with `.d1`–`.d6` delay classes.
- `app/page.tsx` — Single product listing page for 561 Grand Ave, Leonia, NJ. All property data (specs, image URLs, contact) lives as constants at the top of this file. Images served from `altiurarentals.com` via Next.js `<Image>` — domain is whitelisted in `next.config.ts`.

## Design Tokens

| Class | Value |
|---|---|
| `font-heading` | Cormorant Garamond, serif |
| `font-body` | DM Sans, sans-serif |
| `tracking-tightest` | -0.06em |
| `tracking-tight` | -0.03em |

## Page Structure

Fixed header (Altiura logo, top-left) + fixed price/CTA bar (bottom on mobile, top-right on desktop) → main column (`max-w-3xl`) with: title block → hero image → specs table → description → 2-col gallery grid → map placeholder → agent contact → footer.

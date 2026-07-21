# Drippo Website

Marketing landing page for Drippo (Fashion in minutes).

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- React Router
- Framer Motion
- Lucide (fallback icons only)

## Deploy

Live: https://dkaxaytech.github.io/drippo-landing-page/

Pushes to `main` build and publish to the `gh-pages` branch.

One-time GitHub setting (if the site is blank):
1. Repo → **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. Branch: `gh-pages` / `/ (root)` → Save

## Run

```bash
cd "Drippo - Website"
npm install
npm run dev
```

## Structure

```
src/
  components/
    layout/      # Navbar, Footer
    sections/    # Hero → CTA sections
    shared/      # Container, FadeIn, SectionHeader, AssetPlaceholder
  data/landing.ts
  pages/LandingPage.tsx
  assets/ASSETS_TODO.md
```

## Assets

Image placeholders are intentional until Figma exports arrive.
See `src/assets/ASSETS_TODO.md` for the full required list.

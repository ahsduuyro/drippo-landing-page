# Drippo Website

Marketing landing page for Drippo (Fashion in minutes).

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- React Router
- Framer Motion
- Lucide (fallback icons only)

## Deploy

GitHub Pages: https://dkaxaytech.github.io/drippo-landing-page/

Pushes to `main` build and deploy automatically via GitHub Actions.

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

# Restaurant Website

A polished Next.js restaurant site for **Juniper Table** with a large India-focused food catalog, stronger visual presentation, and broader browsing paths for guests.

## AKA-81 feature overview

This deliverable documents the India menu expansion requested for **AKA-81**.

The implementation now emphasizes a richer, more specific culinary direction instead of a generic restaurant feed:

- Expanded the feed to **100+ menu items**
- Shifted the menu content toward **Indian cuisine coverage** rather than a thin placeholder set
- Added stronger support for **Indian thali**, **South Indian**, **North Indian**, and **tea** discovery
- Improved image-backed browsing so menu cards and gallery-style sections feel complete
- Preserved the core restaurant conversion flows for menu browsing, orders, reservations, and contact

## Tech stack

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS

## Setup

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## What was built for AKA-81

The ticket direction was: make the feed better, raise it to at least 100 items, use good-quality images, add more pages, and specifically create a stronger Indian food experience covering **Indian thali**, **South Indian**, **North Indian**, and **tea**.

### Content and data

- A local structured menu dataset in `data/menu.ts`
- **100+ menu entries** designed to support a fuller browsing experience
- Stronger India-first content coverage across multiple regions and dining styles
- Per-item metadata including:
  - name
  - category
  - price
  - description
  - featured flags
  - vegetarian / spicy flags
  - calories
  - prep time
  - image URL
  - region metadata where applicable

### Featured cuisine coverage

The implemented data is oriented around the ticket’s requested cuisine lanes:

- **Indian thali** collections, including regional thali variants
- **South Indian** dishes and platter coverage
- **North Indian** mains and comfort-food staples
- **Tea service** / chai-oriented browsing content

### Page coverage

- `/` — upgraded homepage with featured dishes, visual showcase, and route entry points
- `/menu` — full menu browsing experience
- `/gallery` — image-led food browsing
- `/story` — restaurant brand and positioning page
- `/events` — private events / gathering flow
- `/order` — ordering experience
- `/reservations` — booking flow
- `/contact` — contact and hours

### Experience improvements

- Featured items are surfaced directly on the homepage
- Gallery sections reuse the richer image-backed food dataset
- Navigation gives users more complete browse paths instead of a sparse single-page feel
- The larger Indian menu spread helps the site feel more intentional and marketable

## Repository notes

- Documentation for this ticket is captured in `CHANGELOG.md`
- Delivery and handoff notes live in `docs/IMPLEMENTATION_NOTES.md`
- This Scribe phase intentionally avoids source-code changes and focuses on release-ready documentation only

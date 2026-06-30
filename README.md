# Restaurant Website

A polished Next.js restaurant site for **Juniper Table** with a significantly expanded menu feed, higher-quality food imagery, and more complete browsing paths for guests.

## AKA-80 feature overview

This deliverable improves the original restaurant site by making the content feel fully stocked instead of thin:

- Expanded the menu feed to **100 total items** across starters, mains, desserts, and drinks
- Added **high-quality image coverage** across the menu dataset so gallery and menu browsing feel visual and complete
- Improved the landing page messaging to emphasize the fuller content experience
- Added supporting discovery pages such as **Gallery**, **Story**, and **Events** to reduce dead ends and give the brand more depth
- Preserved the core conversion flows for menu browsing, ordering, reservations, and contact

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

## What was built for “its good But Feed data”

The ticket asked for a better content feed with at least 100 records, stronger images, and more pages. The implemented site now includes:

### Content and data

- A local structured menu dataset in `data/menu.ts`
- **100 menu entries** total
- Per-item metadata including:
  - name
  - category
  - price
  - description
  - featured flags
  - spicy / vegetarian flags
  - calories
  - prep time
  - image URL

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
- Gallery sections reuse the richer image-backed menu dataset
- Navigation now points users into more complete browse paths instead of leaving the site feeling sparse
- Restaurant stats and occasion blocks reinforce that the menu depth and page count have been expanded intentionally

## Repository notes

- Documentation for this ticket is captured in `CHANGELOG.md`
- Delivery and handoff notes live in `docs/IMPLEMENTATION_NOTES.md`
- This Scribe phase intentionally avoids source-code changes and focuses on release-ready documentation only

# Red Lantern House

A Next.js restaurant website remodeled from an Indian-cuisine concept into a Chinese-cuisine browsing experience for **KYM-1 — Remodeling the Website For Chinese cuisine**.

## What was built

This release reshapes the site around a Chinese restaurant identity while keeping the existing static Next.js architecture.

### Highlights

- Repositioned the brand and site copy for **Red Lantern House**
- Reworked the menu experience around Chinese cuisine categories
- Added dedicated cuisine browse paths for:
  - `/dim-sum`
  - `/sichuan`
  - `/noodle-house`
  - `/tea-house`
- Preserved compatibility routes for older links such as:
  - `/north-indian`
  - `/south-indian`
- Updated homepage, story, gallery, events, and contact pages to match the Chinese-cuisine refresh
- Kept the app on a simple static data model using reusable components and local TypeScript menu data

## Tech stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Setup

Install dependencies:

```bash
npm install
```

## Run locally

Start the development server:

```bash
npm run dev
```

Open <http://localhost:3000>.

## Production build

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

## Delivered scope for KYM-1

The implementation converts the previous Indian-cuisine framing into a Chinese restaurant experience by updating:

- site branding and metadata
- homepage messaging and featured content
- menu taxonomy and category presentation
- cuisine-specific landing pages
- supporting browse/story/gallery pages

### Current Chinese-cuisine browse structure

- **Full menu** for complete browsing
- **Dim Sum** for baskets, buns, rolls, and small plates
- **Sichuan** for peppercorn-driven mains and spicy classics
- **Noodle House** for broths, fried rice, noodles, and comfort dishes
- **Tea House** for drinks, desserts, and lighter pairings

## Key project files

- `app/` — route pages
- `components/` — shared UI building blocks
- `data/menu.ts` — menu data and category definitions
- `src/site.ts` — restaurant metadata and brand-level content
- `docs/IMPLEMENTATION_NOTES.md` — release handoff summary

## Release readiness notes

Documentation has been prepared for automated PR handoff.

Recommended final checks before deployment:

- run a final visual QA across the cuisine landing pages
- verify remote image behavior in the target environment
- confirm older preserved routes still land on meaningful Chinese-cuisine content

## Ticket reference

- **KYM-1** — Remodeling the Website For Chinese cuisine from Existing Indian Cuisine

# Saffron Thali House

A polished Next.js restaurant site for **Saffron Thali House** with a significantly expanded Indian menu, stronger visual coverage, dedicated browse paths for thalis, South Indian food, North Indian dishes, and tea-house offerings, plus a new billing workflow for customer invoices.

## AKA-83 feature overview

This deliverable adds a dedicated billing section for managing invoices across various customers while preserving the previously expanded Indian restaurant experience.

### Billing highlights

- Added a dedicated billing route at `/billing`
- Added seeded invoice data with **10–20 preloaded invoices** for various customers
- Added invoice creation so users can build a new invoice directly in the UI
- Added multiple invoice templates for different presentation styles
- Added billing summary cards for revenue and follow-up visibility
- Preserved invoice details such as customer, company, status, dates, notes, and line items

## AKA-82 feature overview

This deliverable takes the earlier “feed data” work and pushes it into a more complete Indian restaurant experience:

- Expanded the menu feed to **130 total items**
- Added category depth for:
  - **Indian Thali**
  - **South Indian**
  - **North Indian**
  - **Tea**
  - **Desserts**
  - **Drinks**
- Added stronger image coverage across the menu dataset so galleries and menu browsing feel visually complete
- Added dedicated landing paths for key Indian browsing intents:
  - `/thalis`
  - `/south-indian`
  - `/tea-house`
- Refined supporting browse pages such as **Gallery** and **Story** so the site feels less generic and more regionally focused
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

## What was built for “Now Add Billing Section in Which various Customer invoice Are Present user Able to create A Invoice And Seed Atleast 10-20 invoice in it With various Template”

The ticket asked for a billing section where various customer invoices are already present, users can create invoices, at least 10–20 invoices are seeded into the experience, and multiple templates are available. The implemented site now includes:

### Billing and invoice management

- A dedicated billing experience at `/billing`
- Seeded invoice records for various customers so the section is populated on first load
- Invoice creation inputs for:
  - customer name
  - customer email
  - company
  - invoice status
  - invoice template
  - issue date
  - due date
  - notes
  - editable line items with quantity and unit price
- Generated invoice identifiers in the UI flow
- Summary cards for invoice totals, overdue/pending visibility, and portfolio value
- Invoice cards that surface the seeded and newly created invoice data
- Template options that let the billing area support multiple visual invoice styles

## What was built for “its good But Feed data And create for indian”

The previous ticket asked for a stronger content feed, at least 100 more entries / fuller coverage, higher-quality images, more pages, and explicit Indian category depth. The implemented site now includes:

### Content and data

- A local structured menu dataset in `data/menu.ts`
- **130 menu entries** total
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
- Category descriptions that support more meaningful menu filtering and browsing

### Category coverage

- **Indian Thali** — large-format platter meals with regional variety
- **South Indian** — dosas, idlis, pongal, appams, biryanis, and tiffin dishes
- **North Indian** — curries, breads, biryanis, tandoor items, and chaat-style dishes
- **Tea** — chai, kahwa, filter coffee, herbal tea, and iced variants
- **Desserts** — Indian sweets and puddings
- **Drinks** — lassi, chaas, soda, sugarcane, and refreshers

### Page coverage

- `/` — upgraded homepage with featured dishes, stats, showcase content, and browse entry points
- `/menu` — full menu browsing experience with category filtering
- `/billing` — customer invoice management with seeded invoices, creation flow, and template selection
- `/thalis` — dedicated Indian thali page
- `/south-indian` — dedicated South Indian browse path
- `/tea-house` — dedicated tea and sweets page
- `/gallery` — image-led food browsing by Indian category
- `/story` — brand and positioning page aligned to the Indian refresh
- `/order` — ordering experience
- `/reservations` — booking flow
- `/contact` — contact and hours

### Experience improvements

- Homepage messaging now clearly frames the site as an Indian restaurant with regional structure
- Featured dishes are surfaced directly on the homepage
- The menu browser supports category filtering with per-category counts and descriptions
- Gallery sections reuse the richer image-backed menu dataset instead of relying on sparse filler content
- Navigation paths now better support actual customer intent: thali browsing, South Indian breakfast/tiffin exploration, curry-heavy North Indian browsing through the main menu, and tea-time discovery
- Restaurant metadata and stats reinforce the expanded menu depth and Indian positioning

## Repository notes

- Documentation for this ticket is captured in `CHANGELOG.md`
- Delivery and handoff notes live in `docs/IMPLEMENTATION_NOTES.md`
- This Scribe phase intentionally avoids source-code changes and focuses on release-ready documentation only
- Billing implementation details are documented for deployment reviewers, but no billing source files were changed during this phase

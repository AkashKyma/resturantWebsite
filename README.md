# AKA-77 Restaurant Website

A complete restaurant website built with Next.js 14, TypeScript, and Tailwind CSS.

This project delivers a polished marketing and ordering experience for a restaurant, including a landing page, menu browsing, online ordering flow, reservations form, and contact details page.

## What was built

For ticket **AKA-77**, the application includes:

- **Home page (`/`)** with hero content and 4 featured dishes
- **Menu page (`/menu`)** with category filtering across starters, mains, desserts, and drinks
- **Order page (`/order`)** with a starter cart experience and order form
- **Reservations page (`/reservations`)** with a table booking form
- **Contact page (`/contact`)** with restaurant details and opening hours
- Shared UI building blocks including:
  - Navbar
  - HeroSection
  - MenuCard
  - CategoryFilter
  - Cart
  - OrderForm
  - ReservationForm

## Tech stack

- **Next.js 14 App Router**
- **TypeScript**
- **Tailwind CSS**
- Static menu data via local TypeScript data source

## Project structure

- `app/` — route-level pages and global app layout
- `components/` — reusable UI and interactive client components
- `data/menu.ts` — menu catalog and category definitions
- `src/site.ts` — restaurant profile content such as name, hours, and contact details
- `docs/` — implementation notes and delivery artifacts

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

Then open:

- <http://localhost:3000>

## Production build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Feature overview

### Landing page

The home page introduces the restaurant brand, highlights featured dishes, and links customers into the main conversion routes:

- Browse the full menu
- Place a pickup order
- Reserve a table
- View contact details

### Menu browsing

The menu page provides:

- Full menu listing
- Category filters
- Per-category counts
- Item cards with pricing and dietary/spice indicators

### Ordering flow

The order page provides:

- A menu selection area
- Cart quantity controls
- Pickup-oriented order form on the same page

### Reservations

The reservations page provides a structured booking form for:

- Guest info
- Party size
- Date and time
- Occasion and seating notes

### Contact details

The contact page provides:

- Restaurant name
- Address
- Phone number
- Email address
- Opening hours
- Private dining prompt

## Acceptance criteria coverage

This implementation is intended to satisfy the ticket requirements:

1. `npm run dev` starts the app locally
2. `/` renders a hero banner and at least 4 featured dishes
3. `/menu` renders the full menu with category filtering
4. `/order` renders a cart and order form
5. `/reservations` renders a table booking form
6. `/contact` renders restaurant contact information

## Notes

- No environment variables are required for the current implementation.
- Menu content is provided through static local data, so the app works without external APIs.

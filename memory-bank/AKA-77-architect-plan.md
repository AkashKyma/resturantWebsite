# AKA-77 Architect Plan — Restaurant Website

## Scope Summary
Build a complete restaurant website in Next.js 14 App Router with TypeScript and Tailwind CSS. The app must provide five user-facing routes (`/`, `/menu`, `/order`, `/reservations`, `/contact`) and use static menu JSON fallback data to support browsing and ordering without external dependencies.

## Current Repository State
- Repository is effectively empty for app code.
- Present files are only repository metadata/docs (`README.md`, `.paperclip/AGENTS.md`, `.gitignore`).
- No existing Next.js, TypeScript, Tailwind, or app source files detected.
- `git status` shows pre-existing unrelated working tree changes:
  - `M README.md`
  - `?? .gitignore`

## Recommended Stack Shape
- Framework: Next.js 14 App Router
- Language: TypeScript
- Styling: Tailwind CSS
- State:
  - Local React state for menu filters and reservation form
  - Shared cart state via lightweight React context or client state provider
- Data:
  - Static JSON or TypeScript data module for menu items
- Forms:
  - Client-side controlled forms with lightweight validation
- No required env vars; `.env.example` optional but not required unless Grunt adds any integration.

## App Structure Plan

### Core App Files
- `package.json` — scripts for `dev`, `build`, `start`, `lint`
- `tsconfig.json`
- `next.config.ts` or `next.config.mjs`
- `postcss.config.js`
- `tailwind.config.ts`
- `app/globals.css`
- `app/layout.tsx`
- `app/page.tsx`
- `app/menu/page.tsx`
- `app/order/page.tsx`
- `app/reservations/page.tsx`
- `app/contact/page.tsx`

### Data Layer
- `data/menu.ts` or `data/menu.json`
  - Item fields should include:
    - `id`
    - `name`
    - `description`
    - `price`
    - `category`
    - `image` or decorative emoji/icon fallback
    - `featured` boolean
  - Categories should cover enough breadth for filtering, e.g. `Starters`, `Mains`, `Desserts`, `Drinks`

### Shared Components
- `components/navbar.tsx`
- `components/hero-section.tsx`
- `components/menu-card.tsx`
- `components/category-filter.tsx`
- `components/cart.tsx`
- `components/order-form.tsx`
- `components/reservation-form.tsx`
- Likely helpful extras:
  - `components/footer.tsx`
  - `components/section-heading.tsx`
  - `components/featured-dishes.tsx`

### Shared Utilities / State
- `lib/utils.ts` for class merging if using `clsx`/`tailwind-merge`
- `context/cart-context.tsx` or `components/providers/cart-provider.tsx`
  - add item
  - increment/decrement quantity
  - remove item
  - compute subtotal

## Page-by-Page Plan

### `/` Home / Landing
Purpose:
- Establish restaurant branding
- Promote ordering/reservation CTAs
- Satisfy featured dishes acceptance criteria

Sections:
- Navbar
- Hero banner with headline, subcopy, CTA buttons
- Featured dishes grid showing at least 4 featured items
- Optional highlights section (fresh ingredients / online ordering / reservations)
- Footer

Data needed:
- Filter menu data by `featured === true`

### `/menu`
Purpose:
- Show full menu with filterable categories

Sections:
- Intro heading
- Category filter buttons including `All`
- Responsive grid/list of `MenuCard` components

Behavior:
- Client component for category state
- Filter updates visible list instantly

### `/order`
Purpose:
- Allow users to add menu items to cart and submit an order form

Sections:
- Menu selection list or grouped cards with add-to-cart actions
- Cart summary
- Order form with customer details

Recommended fields:
- name
- phone
- email (optional but useful)
- address or pickup/delivery selector
- special instructions

Behavior:
- Cart provider wraps order page or global app layout
- Order form validates basic required fields
- Submission should remain local/mock (success state or confirmation banner), since no backend API is required

### `/reservations`
Purpose:
- Collect reservation requests

Fields:
- guest name
- phone/email
- date
- time
- party size
- notes

Behavior:
- Client-side validation
- Submit to local success state only
- Show confirmation message after submit

### `/contact`
Purpose:
- Provide static restaurant contact information

Sections:
- Address
- Phone
- Email
- Business hours
- Optional embedded map placeholder or styled location card

## Component Expectations

### Navbar
- Persistent site navigation to all five routes
- Mobile-friendly layout preferred, but simple responsive stacking is acceptable

### HeroSection
- Strong restaurant branding
- Two CTAs: view menu and order/reserve

### MenuCard
- Reusable across home, menu, and order page
- Displays name, description, category, and price
- On order page, include add-to-cart button via prop

### CategoryFilter
- Accept categories, selected category, and change handler
- Visual selected state

### Cart
- Render selected items, quantities, remove/update actions, subtotal
- Empty state if cart has no items

### OrderForm
- Controlled client component
- Disabled/guarded submit if cart empty
- Success state after mock submission

### ReservationForm
- Controlled client component with date/time/party size
- Success state after mock submission

## Suggested Styling Direction
- Tailwind-based polished restaurant theme
- Warm palette, dark text on light surfaces, accent color for CTAs
- Consistent container widths and card styling
- Responsive grid for featured/menu cards

## API / Integration Plan
- No external API required.
- Treat menu data as local static source.
- Optional future-proofing: expose menu via a small helper module so Grunt can later swap in remote data without rewriting pages.

## Build / Quality Plan for Grunt
1. Scaffold Next.js 14 + TypeScript + Tailwind from scratch in repo.
2. Add static menu dataset with enough items to support featured + categories.
3. Implement reusable layout/navigation.
4. Build each route to satisfy acceptance criteria.
5. Add cart state and wire order interactions.
6. Ensure forms have usable validation and success messaging.
7. Run `npm install`, `npm run build`, and verify `npm run dev` boot path.

## Risks / Watchouts
- Because the repo lacks any existing app scaffold, Grunt must create all configuration and source files.
- Need to avoid overwriting unrelated pre-existing `README.md` / `.gitignore` changes unless necessary.
- App Router components requiring interactivity (`CategoryFilter`, `Cart`, forms) must be client components.
- Keep implementation self-contained so app works with zero env vars.

## Handoff to Grunt
Deliver a full implementation with:
- runnable Next.js app scaffold
- static menu data
- working category filter
- working cart interactions
- local/mock order + reservation submission flows
- responsive styling for all required pages
- successful build validation

## Terminal Log
- Inspected repository file tree with `find . -maxdepth 3 -type f | sort`
- Read `README.md`
- Read `.paperclip/AGENTS.md`
- Checked git state with `git status --short --branch`
- Checked for existing Next.js/Tailwind/app files; none found
- Wrote handoff plan to `memory-bank/AKA-77-architect-plan.md`

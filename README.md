# Saffron Thali House

A polished Next.js restaurant site for **Saffron Thali House** with menu browsing, Indian cuisine landing pages, and a dedicated billing experience for managing customer invoices.

## AKA-84 feature overview

This deliverable adds a **Billing** section where various customer invoices are already present and new invoices can be created from the UI.

### What was built

- Added a dedicated billing route at `/billing`
- Seeded the billing experience with **12 customer invoices** spanning multiple invoice states
- Added support for **4 invoice templates**:
  - `Classic`
  - `Modern`
  - `Minimal`
  - `Bold`
- Added invoice status coverage for:
  - `Paid`
  - `Pending`
  - `Overdue`
  - `Draft`
- Added a create-invoice form so users can add a new invoice directly from the billing dashboard
- Added filtering by **status** and **template**
- Added invoice detail viewing with totals, notes, customer info, and line items
- Added billing summary metrics such as total billed, collected revenue, overdue count, and seeded invoice count

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

## Billing section details

The billing experience is designed to satisfy the ticket requirement: **“Now Add Billing Section in Which various Customer invoice Are Present user Able to create A Invoice And Seed Atleast 10-20 invoice in it With various Template.”**

### Seeded data

The app includes a seeded invoice dataset in `data/invoices.ts` with:

- **12 invoices** total
- Multiple customer records and companies
- Structured line items per invoice
- INR currency formatting
- Different due dates and issue dates
- Template variety across the seeded set
- Status variety across the seeded set

### Billing capabilities

At `/billing`, users can:

- browse the invoice library
- filter invoices by status
- filter invoices by template
- inspect invoice totals and customer notes
- review customer company and contact information
- create a new invoice with:
  - customer name
  - company
  - email
  - template
  - status
  - issue date
  - due date
  - notes
  - multiple line items

### Validation behavior

The create-invoice flow includes UI validation for:

- required customer details
- required dates
- at least one valid billable line item
- due date not earlier than issue date

## Route coverage

- `/` — homepage
- `/menu` — restaurant menu browsing
- `/thalis` — thali browse page
- `/south-indian` — South Indian menu page
- `/tea-house` — tea and sweets page
- `/gallery` — image-led food gallery
- `/story` — restaurant story page
- `/order` — ordering flow
- `/reservations` — booking page
- `/contact` — contact page
- `/billing` — customer invoice dashboard and invoice creation flow

## Repository notes

- Documentation for this ticket is captured in `CHANGELOG.md`
- Delivery and release notes live in `docs/IMPLEMENTATION_NOTES.md`
- This Scribe phase intentionally avoids source-code changes and focuses on release-ready documentation only

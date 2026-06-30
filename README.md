# Saffron Thali House

A polished Next.js restaurant site for **Saffron Thali House** with a dedicated billing workspace that showcases seeded customer invoices, multiple invoice templates, and in-browser invoice creation for various customers.

## AKA-87 feature overview

This deliverable adds a **Billing** section focused on customer invoicing and invoice template coverage.

- Added a dedicated billing experience for **various customers**
- Seeded **12 invoice records** across different customer accounts
- Added **12 billing customers** with company, contact, city, and tax details
- Added support for **4 invoice templates**:
  - **Modern**
  - **Classic**
  - **Minimal**
  - **Bold**
- Added invoice creation flow with:
  - customer selection
  - invoice status selection
  - issue and due dates
  - editable notes
  - custom line items
  - automatic subtotal / GST / grand total calculation
- Added billing summaries for:
  - status counts
  - per-template invoice coverage
  - selected customer profile preview
- Added invoice template preview support so users can inspect the currently selected template while preparing an invoice

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

The ticket asked for a billing section where multiple customer invoices are present, the user can create a new invoice, at least 10–20 invoices are seeded, and multiple templates are available. The implemented experience now includes:

### Billing data

Primary billing data lives in `data/billing.ts`.

The billing dataset includes:

- `BillingCustomer`
- `Invoice`
- `InvoiceLineItem`
- `InvoiceStatus`
- `InvoiceTemplate`
- `billingCustomers`
- `seededInvoices`
- currency and total helpers

Current seeded data coverage:

- **12 customers**
- **12 seeded invoices**
- **4 templates**
- invoice statuses for **Draft**, **Pending**, **Paid**, and **Overdue**

### Billing experience

The billing interface lets the user:

- browse seeded invoices in a tabular list
- create a new invoice from the UI
- choose a customer from multiple companies
- switch between multiple invoice templates
- select invoice status before creation
- set issue and due dates
- add, edit, and remove custom line items
- see live INR totals, including **GST (18%)**
- review customer profile metadata while drafting the invoice

### Customer and invoice coverage

The seeded records cover multiple companies and cities, including examples such as:

- Mehta Retail Group
- Nair Wellness Studio
- Kapoor Logistics
- Sen Design House
- Shah Trading Co.
- Iyer Foods Private
- Malhotra Media Lab
- Joshi Events & Co.
- Verma Industrial Supply
- Batra Legal Advisory
- Rao Tech Systems
- Dutta Hospitality

### Template coverage

The billing system includes multiple visual template options:

- **Modern**
- **Classic**
- **Minimal**
- **Bold**

This gives the user seeded invoice variation plus a template switcher during invoice creation.

### Experience improvements

- Billing is no longer just static data; it includes an interactive invoice creation workflow
- Seeded invoices make the section feel populated immediately instead of empty on first load
- Template previews make the multiple-template requirement visible and testable
- Customer profile metadata helps users verify invoice context before creating a record
- Summary chips make status distribution and template coverage easier to scan

## Repository notes

- Documentation for this ticket is captured in `CHANGELOG.md`
- Delivery and handoff notes live in `docs/IMPLEMENTATION_NOTES.md`
- This Scribe phase intentionally avoids source-code changes and focuses on release-ready documentation only

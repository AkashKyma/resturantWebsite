# Changelog

## [AKA-84] Now Add Billing Section in Which various Customer invoice Are Present user Able to create A Invoice And Seed Atleast 10-20 invoice in it With various Template

- Documented the billing dashboard release for automated PR handoff
- Verified implementation commit presence: `feat(aka-84): implement billing section with seeded invoices`
- Updated README with setup, local run steps, billing route coverage, seeded invoice behavior, and invoice creation flow
- Captured release notes for the billing deliverable:
  - dedicated `/billing` experience
  - **12 seeded customer invoices**
  - support for **4 invoice templates**: `Classic`, `Modern`, `Minimal`, `Bold`
  - invoice status coverage across `Paid`, `Pending`, `Overdue`, and `Draft`
  - create-invoice form with validation and multi-line-item support
  - billing metrics for total billed, collected revenue, overdue count, and invoice volume
- Refreshed implementation notes so deployment reviewers can quickly confirm billing architecture, seeded data scope, and release readiness

## [AKA-82] Its good But Feed data And create for indian

- Documented the Indian restaurant content expansion for automated PR handoff
- Verified implementation commit presence: `feat(aka-82): implement its good But Feed data And create for indian`
- Updated README with setup, local run steps, production build steps, route coverage, and deliverable summary
- Captured release notes for the richer Indian menu feed:
  - **130 total menu items**
  - stronger image coverage across the dataset
  - explicit category structure for **Indian Thali**, **South Indian**, **North Indian**, **Tea**, **Desserts**, and **Drinks**
  - dedicated browse pages for `/thalis`, `/south-indian`, and `/tea-house`
- Added implementation notes so deployment reviewers can quickly confirm architecture, scope, and release readiness

## [AKA-80] Its good But Feed data

- Documented the expanded restaurant content release for automated PR handoff
- Verified implementation commit presence: `feat(aka-80): implement its good But Feed data`
- Updated README with setup, local run steps, production build steps, route coverage, and deliverable summary
- Captured release notes for the richer data feed: **100 menu items**, stronger image coverage, and additional browse pages including gallery, story, and events
- Refreshed implementation notes so deployment reviewers can quickly confirm scope and release readiness

## [AKA-77] Restaurant Website

- Documented the completed Restaurant Website deliverable for handoff and automated PR flow
- Added README coverage for setup, local development, production build, routes, and feature summary
- Captured implementation notes describing page structure, shared components, data model, and release-readiness expectations
- Verified presence of implementation commit: `feat(aka-77): implement Restaurant Website`

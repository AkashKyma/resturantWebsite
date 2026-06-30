# AKA-77: Restaurant Website

## ⚠️ Agent Implementation Directive

**You MUST build the COMPLETE, FULLY WORKING application described below.**

* Write ALL source code files needed to run this project (components, pages, API routes, styles, config, tests)
* Do NOT create only documentation, markdown files, README updates, or empty scaffold folders
* Do NOT leave placeholder comments like `// TODO: implement this` — write the actual implementation
* The project MUST be runnable with `npm run dev` (or the specified command) after your PR is merged
* Every acceptance criterion listed below must pass when a human tests the running app
* If an API key or env var is needed, include a `.env.example` AND fallback/mock data so the app works without it
* Commit ALL necessary files: package.json, all source files, config files, public assets

**This is a full project build, not a documentation task.**

## Problem / Overview

A complete restaurant website with a menu and ordering system, built with Next.js and Tailwind. The website will provide an online presence for the restaurant and allow customers to browse the menu, place orders, and make table reservations.

## Pages / Routes

* `/` — Landing page with hero section and featured dishes
* `/menu` — Full menu with category filter
* `/order` — Page with cart and order form
* `/reservations` — Page with table booking form
* `/contact` — Contact information of the restaurant

## Data Sources

* Menu JSON — fallback: Static JSON for menu items

## Tech Stack & Solution

Next.js 14 App Router + TypeScript + Tailwind CSS

## Acceptance Criteria

1. npm run dev starts the app on localhost:3000 without errors
2. Home page (/) renders hero banner and at least 4 featured dishes
3. Menu page (/menu) renders full menu with category filter
4. Order page (/order) renders cart and order form
5. Reservations page (/reservations) renders table booking form
6. Contact page (/contact) renders contact information of the restaurant

## Components to Build

* Navbar
* HeroSection
* MenuCard
* CategoryFilter
* Cart
* OrderForm
* ReservationForm

## Integrations / APIs

* Menu JSON

## Implementation Notes

Dev: npm run dev
Build: npm run build
Install: npm install

User Stories:

1. As a customer, I want to browse the menu on the menu page so I can see what dishes are available
2. As a customer, I want to place orders on the order page so I can purchase dishes
3. As a customer, I want to make table reservations on the reservations page so I can book a table at the restaurant

***

## Definition of Done

* [ ] `npm run dev` (or equivalent) starts the app without errors
* [ ] `npm run build` completes without errors
* [ ] All routes/pages listed in the spec render correctly
* [ ] All acceptance criteria above pass when tested in browser
* [ ] No files are empty placeholders — all source code is written
* [ ] `.env.example` exists if any environment variables are needed

import Link from 'next/link';

import { HeroSection } from '@/components/HeroSection';
import { ImageShowcase } from '@/components/ImageShowcase';
import { MenuCard } from '@/components/MenuCard';
import { OccasionGrid } from '@/components/OccasionGrid';
import { SectionIntro } from '@/components/SectionIntro';
import { StatsStrip } from '@/components/StatsStrip';
import { menuItems } from '@/data/menu';
import { restaurant } from '@/src/site';

const featuredItems = menuItems.filter((item) => item.featured).slice(0, 8);
const showcaseItems = menuItems.slice(12, 20);

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsStrip stats={restaurant.stats} />

      <section className="section-shell pt-8">
        <SectionIntro
          eyebrow="Featured dishes"
          title="Now with a properly loaded menu, not just a polite sample size."
          description="The feed is fuller, the images are stronger, and the menu finally feels like a place people can browse instead of guess at."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <ImageShowcase items={showcaseItems} />
      <OccasionGrid occasions={restaurant.occasions} />

      <section className="section-shell">
        <div className="card-surface grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="Plan your visit"
              title="More pages, better browsing, less dead-end energy."
              description="Move from menu to gallery, story, events, ordering, or reservations without the site feeling unfinished."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/menu" className="card-surface p-5 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Browse</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Full menu</h3>
              <p className="mt-2 text-slate-600">See all 100 menu items with images, pricing, prep times, and categories.</p>
            </Link>
            <Link href="/gallery" className="card-surface p-5 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">See</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Food gallery</h3>
              <p className="mt-2 text-slate-600">A visual sweep of plated dishes, desserts, drinks, and room mood.</p>
            </Link>
            <Link href="/events" className="card-surface p-5 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Gather</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Private events</h3>
              <p className="mt-2 text-slate-600">Packages, rooms, and sample hosting formats for bigger nights out.</p>
            </Link>
            <Link href="/story" className="card-surface p-5 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">About</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Our story</h3>
              <p className="mt-2 text-slate-600">Give the brand some personality instead of leaving the site purely transactional.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

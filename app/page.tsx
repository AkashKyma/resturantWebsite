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
const showcaseItems = menuItems.slice(18, 30);

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsStrip stats={restaurant.stats} />

      <section className="section-shell pt-8">
        <SectionIntro
          eyebrow="Featured dishes"
          title="The Indian feed is properly loaded now."
          description="More than 100 items, stronger food imagery, and real regional structure for thalis, South Indian, North Indian, tea, desserts, and drinks."
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
              eyebrow="Browse deeper"
              title="More pages, clearer regional paths, less generic restaurant-site energy."
              description="Jump straight into grand thalis, breakfast-heavy South Indian plates, North Indian comfort food, or the tea house without hitting thin pages."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/menu" className="card-surface p-5 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Browse</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Full menu</h3>
              <p className="mt-2 text-slate-600">See all menu items with category filtering, pricing, prep times, and visual coverage.</p>
            </Link>
            <Link href="/thalis" className="card-surface p-5 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Feast</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Indian thalis</h3>
              <p className="mt-2 text-slate-600">Big-format platters for regional lunches, family meals, and signature house specials.</p>
            </Link>
            <Link href="/south-indian" className="card-surface p-5 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Morning</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">South Indian</h3>
              <p className="mt-2 text-slate-600">Dosas, idlis, appams, biryanis, coffee, and tiffin-style favorites with dedicated browsing.</p>
            </Link>
            <Link href="/north-indian" className="card-surface p-5 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Comfort</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">North Indian</h3>
              <p className="mt-2 text-slate-600">Butter chicken, paneer gravies, breads, chaat, and biryanis with a proper dedicated route.</p>
            </Link>
            <Link href="/tea-house" className="card-surface p-5 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Sip</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Tea house</h3>
              <p className="mt-2 text-slate-600">Masala chai, kahwa, filter coffee, sweets, and evening drinks in one calmer flow.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

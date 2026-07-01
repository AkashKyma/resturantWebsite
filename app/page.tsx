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
const showcaseItems = menuItems.slice(8, 20);

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsStrip stats={restaurant.stats} />

      <section className="section-shell pt-8">
        <SectionIntro
          eyebrow="Featured dishes"
          title="The Chinese cuisine remodel is fully visible now."
          description="Dim sum, Sichuan signatures, noodle-house staples, tea service, desserts, and drinks now live in a menu structure that actually supports browsing."
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
              title="Clearer cuisine paths, stronger pages, less leftover Indian-site structure."
              description="Jump straight into brunch dim sum, spice-heavy Sichuan dishes, noodle comfort bowls, or the tea house without hitting thin or mismatched routes."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/menu" className="card-surface p-5 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Browse</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Full menu</h3>
              <p className="mt-2 text-slate-600">See all menu items with category filtering, pricing, prep times, and visual coverage.</p>
            </Link>
            <Link href="/dim-sum" className="card-surface p-5 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Brunch</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Dim sum</h3>
              <p className="mt-2 text-slate-600">Steamed baskets, buns, noodle rolls, and small plates built for sharing and weekend traffic.</p>
            </Link>
            <Link href="/sichuan" className="card-surface p-5 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Heat</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Sichuan</h3>
              <p className="mt-2 text-slate-600">Peppercorn mains, chili oil noodles, wok-fired vegetables, and dinner plates with actual bite.</p>
            </Link>
            <Link href="/noodle-house" className="card-surface p-5 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Comfort</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Noodle house</h3>
              <p className="mt-2 text-slate-600">Hand-pulled noodles, fried rice, congee, and quick bowls for takeout or solo meals.</p>
            </Link>
            <Link href="/tea-house" className="card-surface p-5 transition hover:-translate-y-1 sm:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Sip</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Tea house</h3>
              <p className="mt-2 text-slate-600">Jasmine, pu-erh, milk tea, chilled refreshers, and desserts in a calmer late-day flow.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

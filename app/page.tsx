import Link from 'next/link';

import { HeroSection } from '@/components/HeroSection';
import { ImageShowcase } from '@/components/ImageShowcase';
import { MenuCard } from '@/components/MenuCard';
import { OccasionGrid } from '@/components/OccasionGrid';
import { SectionIntro } from '@/components/SectionIntro';
import { StatsStrip } from '@/components/StatsStrip';
import { regionalHighlights, menuItems } from '@/data/menu';
import { restaurant } from '@/src/site';

const featuredItems = menuItems.filter((item) => item.featured).slice(0, 8);
const showcaseItems = menuItems.slice(20, 28);

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsStrip stats={restaurant.stats} />

      <section className="section-shell pt-8">
        <SectionIntro
          eyebrow="Featured dishes"
          title="Indian food feed, properly expanded and worth browsing now."
          description="The menu now carries 100 items, stronger images, better regional spread, and actual depth across thali, South Indian, North Indian, and tea."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-4 md:grid-cols-3">
          {regionalHighlights.map((highlight) => (
            <article key={highlight.title} className="card-surface p-6">
              <h3 className="text-2xl font-bold text-slate-950">{highlight.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{highlight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ImageShowcase items={showcaseItems} />
      <OccasionGrid occasions={restaurant.occasions} />

      <section className="section-shell">
        <div className="card-surface grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="Explore more"
              title="More pages, better paths, less unfinished-site energy."
              description="Customers can jump into thalis, tea service, regional story, events, or reservations without the site feeling half-built."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/menu" className="card-surface p-5 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Browse</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Full menu</h3>
              <p className="mt-2 text-slate-600">See all 100 menu items with images, prep times, price, and region tags.</p>
            </Link>
            <Link href="/thalis" className="card-surface p-5 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Feast</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Thali specials</h3>
              <p className="mt-2 text-slate-600">A dedicated page for full thali plates and regional platters people actually order together.</p>
            </Link>
            <Link href="/tea-room" className="card-surface p-5 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Sip</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Tea room</h3>
              <p className="mt-2 text-slate-600">Masala chai, kahwa, filter coffee, chaas, and lighter drinks with a calmer browsing surface.</p>
            </Link>
            <Link href="/story" className="card-surface p-5 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">About</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Regional story</h3>
              <p className="mt-2 text-slate-600">Explain the cuisine mix instead of leaving the brand as a generic food grid.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

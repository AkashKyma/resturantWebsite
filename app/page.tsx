import Link from 'next/link';

import { HeroSection } from '@/components/HeroSection';
import { MenuCard } from '@/components/MenuCard';
import { SectionIntro } from '@/components/SectionIntro';
import { menuItems } from '@/data/menu';

const featuredItems = menuItems.filter((item) => item.featured).slice(0, 4);

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <section className="section-shell pt-8">
        <SectionIntro
          eyebrow="Featured dishes"
          title="The kind of menu that makes people steal bites."
          description="A few guest favorites to start with — bright starters, comforting mains, and a dessert worth pretending you&apos;ll share."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="card-surface grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="Plan your visit"
              title="Walk in hungry, leave smug about your choice."
              description="Reserve a table for date night, order ahead for pickup, or stop by for happy hour and stay longer than planned."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/menu" className="card-surface p-5 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Browse</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Full menu</h3>
              <p className="mt-2 text-slate-600">See every starter, main, dessert, and drink in one place.</p>
            </Link>
            <Link href="/order" className="card-surface p-5 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Pickup</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Place an order</h3>
              <p className="mt-2 text-slate-600">Build a cart, set pickup time, and get dinner handled fast.</p>
            </Link>
            <Link href="/reservations" className="card-surface p-5 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Book</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Reserve a table</h3>
              <p className="mt-2 text-slate-600">Secure your table for brunch, dinner, or celebrations.</p>
            </Link>
            <Link href="/contact" className="card-surface p-5 transition hover:-translate-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Visit</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Contact details</h3>
              <p className="mt-2 text-slate-600">Find our address, hours, phone number, and email.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

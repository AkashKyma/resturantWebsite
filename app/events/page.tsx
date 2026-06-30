import Link from 'next/link';

import { SectionIntro } from '@/components/SectionIntro';

const packages = [
  {
    title: 'Chef Counter',
    capacity: 'Up to 12 guests',
    description: 'Front-row dining with tasting-style pacing, cocktail pairings, and direct kitchen energy.',
  },
  {
    title: 'Garden Patio',
    capacity: 'Up to 24 guests',
    description: 'String lights, shareable menus, and a layout suited for birthdays and rehearsal dinners.',
  },
  {
    title: 'Candle Room',
    capacity: 'Up to 40 guests',
    description: 'Private room setup for launches, family gatherings, and polished group dinners.',
  },
];

export default function EventsPage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Events"
        title="More than a dinner reservation."
        description="Private dining options, sample room formats, and clear next steps for guests planning something bigger than a two-top."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {packages.map((pkg) => (
          <article key={pkg.title} className="card-surface p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-700">{pkg.capacity}</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">{pkg.title}</h2>
            <p className="mt-4 leading-7 text-slate-600">{pkg.description}</p>
          </article>
        ))}
      </div>
      <div className="card-surface flex flex-col gap-5 p-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-950">Want menus, room photos, and pricing details?</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">Use the contact page for larger event inquiries or lock in a smaller gathering with reservations.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="primary-button">Contact the team</Link>
          <Link href="/reservations" className="secondary-button">Reserve a table</Link>
        </div>
      </div>
    </main>
  );
}

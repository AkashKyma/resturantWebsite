import { SectionIntro } from '@/components/SectionIntro';

const pillars = [
  {
    title: 'Built around Indian regional depth',
    description: 'The restaurant refresh now centers actual Indian browsing patterns: thali-led lunches, dosa breakfasts, curry-heavy dinners, and chai-time returns.',
  },
  {
    title: 'Feed data that feels intentional',
    description: 'Instead of a light menu with vague categories, the site now carries a real catalog with pricing, prep time, tags, and enough image variety to support discovery.',
  },
  {
    title: 'Warm hospitality with faster decisions',
    description: 'The goal is simple: let guests understand the food quickly, choose by region or mood, and move from curiosity to order without friction.',
  },
];

export default function StoryPage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Our story"
        title="An Indian restaurant site should feel generous before the food even arrives."
        description="Saffron Thali House is shaped around the kind of meal people actually come back for: full plates, layered spice, good tea, and pages that don\'t look underbuilt."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="card-surface p-6">
            <h2 className="text-2xl font-bold text-slate-950">{pillar.title}</h2>
            <p className="mt-4 leading-7 text-slate-600">{pillar.description}</p>
          </article>
        ))}
      </div>
      <section className="card-surface p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Why this refresh matters</p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          The site now behaves like a proper Indian food destination. It has category depth, stronger visual identity, dedicated landing pages, and enough menu density to make ordering or planning feel trustworthy.
        </p>
      </section>
    </main>
  );
}

import { SectionIntro } from '@/components/SectionIntro';

const pillars = [
  {
    title: 'Built around Chinese browsing patterns',
    description: 'The refresh now follows the way guests actually choose: dim sum brunch, peppery dinner mains, noodle comfort, and tea-house add-ons.',
  },
  {
    title: 'Menu data that feels intentional',
    description: 'Instead of mismatched regional categories, the site now carries a focused Chinese catalog with pricing, prep time, tags, and stronger image variety.',
  },
  {
    title: 'Warmer hospitality with faster decisions',
    description: 'The goal is simple: let guests understand the food quickly, pick by mood or section, and move from curiosity to order without friction.',
  },
];

export default function StoryPage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Our story"
        title="A Chinese restaurant site should feel generous before the first basket lands on the table."
        description="Red Lantern House is shaped around the kind of meal people come back for: steaming dumplings, layered sauces, comforting noodles, patient tea, and pages that don&apos;t feel underbuilt."
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
          The site now behaves like a proper Chinese food destination. It has cuisine-specific category depth, stronger visual identity, dedicated landing pages, and enough menu density to make ordering or planning feel trustworthy.
        </p>
      </section>
    </main>
  );
}

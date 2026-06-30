import { SectionIntro } from '@/components/SectionIntro';

const pillars = [
  {
    title: 'Ingredient-first menu building',
    description: 'The expanded feed leans into seasonal ingredients and keeps every section feeling intentionally stocked instead of padded.',
  },
  {
    title: 'Warm room, fast decisions',
    description: 'Guests can scan menu detail, preview dishes visually, and move from browsing to booking without friction.',
  },
  {
    title: 'Neighborhood regular energy',
    description: 'The tone is polished, but never stiff. Good food, late cocktails, and enough range for weeknights or celebrations.',
  },
];

export default function StoryPage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Our story"
        title="Built for people who want a restaurant site to feel alive."
        description="Juniper Table started with the simple idea that comfort food can still look sharp, move fast, and feel memorable."
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
          The site now carries enough menu depth and enough visual variety to support discovery. Instead of looking finished on the home page and thin everywhere else, it now holds up across menu browsing, image-led exploration, and event planning.
        </p>
      </section>
    </main>
  );
}

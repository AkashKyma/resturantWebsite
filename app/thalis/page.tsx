import { MenuCard } from '@/components/MenuCard';
import { SectionIntro } from '@/components/SectionIntro';
import { menuItems } from '@/data/menu';

const thaliItems = menuItems.filter((item) => item.category === 'Indian Thali');

export default function ThalisPage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Thali specials"
        title="Regional thalis built like full meals, not token combos."
        description="This page gives Indian thali plates their own space, with state-by-state variety and enough detail to choose confidently."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['Balanced plates', 'Vegetarian, non-vegetarian, spicy, and coastal thalis all show up here.'],
          ['Regional spread', 'Rajasthan, Gujarat, Punjab, Bengal, Kashmir, Kerala, and more.'],
          ['Meal-ready detail', 'Each plate shows pricing, prep time, calories, and region tags.'],
        ].map(([title, copy]) => (
          <article key={title} className="card-surface p-6">
            <h3 className="text-2xl font-bold text-slate-950">{title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{copy}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {thaliItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

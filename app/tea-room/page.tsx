import { MenuCard } from '@/components/MenuCard';
import { SectionIntro } from '@/components/SectionIntro';
import { menuItems } from '@/data/menu';

const drinks = menuItems.filter((item) => item.category === 'Tea & Drinks');

export default function TeaRoomPage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Tea room"
        title="Chai, kahwa, coffee, and coolers deserve their own page too."
        description="Instead of burying drinks at the bottom of a generic menu, this space highlights Indian tea culture and slower add-on ordering."
      />

      <div className="card-surface grid gap-6 p-8 lg:grid-cols-3">
        {[
          ['Street chai', 'Cutting chai, adrak chai, tandoori chai, and other stronger everyday pours.'],
          ['Slower sips', 'Kahwa, herbal infusions, filter coffee, badam milk, and café-style options.'],
          ['Cooling side', 'Chaas, lassi, jaljeera, panakam, and coconut-led refreshers for hot days.'],
        ].map(([title, copy]) => (
          <div key={title}>
            <h3 className="text-2xl font-bold text-slate-950">{title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{copy}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {drinks.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

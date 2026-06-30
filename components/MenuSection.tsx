import { MenuCard } from '@/components/MenuCard';
import { type MenuItem } from '@/data/menu';

type MenuSectionProps = {
  title: string;
  description: string;
  items: MenuItem[];
};

export function MenuSection({ title, description, items }: MenuSectionProps) {
  return (
    <section className="space-y-6">
      <div className="card-surface p-6">
        <h2 className="text-3xl font-bold text-slate-950">{title}</h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">{description}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

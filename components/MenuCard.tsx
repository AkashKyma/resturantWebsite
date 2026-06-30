import type { MenuItem } from '@/data/menu';

type MenuCardProps = {
  item: MenuItem;
  action?: React.ReactNode;
};

export function MenuCard({ item, action }: MenuCardProps) {
  return (
    <article className="card-surface flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">{item.category}</p>
          <h3 className="mt-2 text-2xl font-bold text-slate-950">{item.name}</h3>
        </div>
        <span className="rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-brand-700">
          ${item.price.toFixed(2)}
        </span>
      </div>
      <p className="mt-4 flex-1 leading-7 text-slate-600">{item.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.vegetarian ? (
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            Vegetarian
          </span>
        ) : null}
        {item.spicy ? (
          <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-700">
            Spicy
          </span>
        ) : null}
        {item.featured ? (
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
            Featured
          </span>
        ) : null}
      </div>
      {action ? <div className="mt-6">{action}</div> : null}
    </article>
  );
}

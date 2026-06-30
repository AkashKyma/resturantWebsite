import Image from 'next/image';

import type { MenuItem } from '@/data/menu';

type MenuCardProps = {
  item: MenuItem;
  action?: React.ReactNode;
};

export function MenuCard({ item, action }: MenuCardProps) {
  return (
    <article className="card-surface flex h-full flex-col overflow-hidden">
      <div className="relative h-56 w-full">
        <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-5 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-200">{item.category}</p>
          <h3 className="mt-2 text-2xl font-bold">{item.name}</h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-brand-700">
            ₹{item.price.toFixed(0)}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">{item.prepTime}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">{item.calories} cal</span>
          <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-800">{item.region}</span>
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
      </div>
    </article>
  );
}

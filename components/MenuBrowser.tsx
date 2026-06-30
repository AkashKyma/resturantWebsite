'use client';

import { useMemo, useState } from 'react';

import { CategoryFilter } from '@/components/CategoryFilter';
import { MenuCard } from '@/components/MenuCard';
import { SectionIntro } from '@/components/SectionIntro';
import { categories, menuItems, type MenuCategory } from '@/data/menu';

export function MenuBrowser() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') {
      return menuItems;
    }

    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const counts = useMemo(() => {
    return menuItems.reduce<Record<MenuCategory, number>>(
      (acc, item) => {
        acc[item.category] += 1;
        return acc;
      },
      {
        'Indian Thali': 0,
        'South Indian': 0,
        'North Indian': 0,
        'Tea & Drinks': 0,
      }
    );
  }, []);

  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Menu"
        title="Browse the full Indian menu without digging through filler."
        description="Filter across thalis, South Indian, North Indian, and tea to get to the right kind of meal fast."
      />

      <div className="card-surface p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <CategoryFilter categories={categories} activeCategory={activeCategory} onChange={setActiveCategory} />
          <div className="grid grid-cols-2 gap-3 text-sm text-slate-600 sm:grid-cols-4">
            {Object.entries(counts).map(([category, count]) => (
              <div key={category} className="rounded-2xl bg-orange-50 px-4 py-3 text-center">
                <p className="font-semibold text-slate-900">{count}</p>
                <p>{category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

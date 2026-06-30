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
        Starters: 0,
        Mains: 0,
        Desserts: 0,
        Drinks: 0,
      }
    );
  }, []);

  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Menu"
        title="Browse the full menu. Filter first, commit emotionally after."
        description="From small plates to dessert, everything is organized by category so customers can scan quickly and order with confidence."
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

'use client';

import { useMemo, useState } from 'react';

import { CategoryFilter } from '@/components/CategoryFilter';
import { MenuCard } from '@/components/MenuCard';
import { SectionIntro } from '@/components/SectionIntro';
import { categories, categoryDescriptions, menuItems, type MenuCategory } from '@/data/menu';

const categoryKeys: MenuCategory[] = ['Indian Thali', 'South Indian', 'North Indian', 'Tea', 'Desserts', 'Drinks'];

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
        Tea: 0,
        Desserts: 0,
        Drinks: 0,
      }
    );
  }, []);

  const activeDescription = activeCategory === 'All'
    ? 'Browse the entire Indian menu across thalis, South Indian, North Indian, tea, desserts, and drinks.'
    : categoryDescriptions[activeCategory];

  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Menu"
        title="An actually loaded Indian menu, with categories that mean something."
        description="Filter by regional sections and tea-house offerings so customers can find what they want fast, whether they came for a giant thali or a single cup of chai."
      />

      <div className="card-surface p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-4">
            <CategoryFilter categories={categories} activeCategory={activeCategory} onChange={setActiveCategory} />
            <p className="max-w-3xl text-sm leading-7 text-slate-600">{activeDescription}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm text-slate-600 sm:grid-cols-3">
            {categoryKeys.map((category) => (
              <div key={category} className="rounded-2xl bg-orange-50 px-4 py-3 text-center">
                <p className="font-semibold text-slate-900">{counts[category]}</p>
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

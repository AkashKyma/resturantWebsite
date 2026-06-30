import Image from 'next/image';

import { SectionIntro } from '@/components/SectionIntro';
import type { MenuItem } from '@/data/menu';

type ImageShowcaseProps = {
  items: MenuItem[];
};

export function ImageShowcase({ items }: ImageShowcaseProps) {
  return (
    <section className="section-shell">
      <SectionIntro
        eyebrow="Gallery"
        title="Good food should look good before the first bite."
        description="A quick visual sweep of the dining room mood and some of the plates people end up taking photos of anyway."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <article key={item.id} className="card-surface overflow-hidden">
            <div className="relative h-72 w-full">
              <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-slate-950">{item.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

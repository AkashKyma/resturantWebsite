import Link from 'next/link';

type Occasion = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

type OccasionGridProps = {
  occasions: Occasion[];
};

export function OccasionGrid({ occasions }: OccasionGridProps) {
  return (
    <section className="section-shell">
      <div className="card-surface p-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {occasions.map((occasion) => (
            <article key={occasion.title} className="rounded-3xl bg-orange-50/70 p-6">
              <h3 className="text-2xl font-bold text-slate-950">{occasion.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{occasion.description}</p>
              <Link href={occasion.href} className="mt-6 inline-flex text-sm font-semibold text-brand-700 transition hover:text-brand-900">
                {occasion.cta} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

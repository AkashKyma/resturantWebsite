type Stat = {
  label: string;
  value: string;
  detail: string;
};

type StatsStripProps = {
  stats: Stat[];
};

export function StatsStrip({ stats }: StatsStripProps) {
  return (
    <section className="section-shell pt-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="card-surface p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-700">{stat.label}</p>
            <p className="mt-3 text-4xl font-bold text-slate-950">{stat.value}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{stat.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

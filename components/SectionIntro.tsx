type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
};

export function SectionIntro({ eyebrow, title, description, centered = false }: SectionIntroProps) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
    </div>
  );
}

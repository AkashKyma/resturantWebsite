import type { InvoiceTemplate } from '@/data/billing';

const templateStyles: Record<InvoiceTemplate, { accent: string; badge: string; body: string }> = {
  Modern: {
    accent: 'from-cyan-500 via-sky-500 to-blue-600',
    badge: 'bg-cyan-50 text-cyan-700',
    body: 'Structured layout with a bold summary header and compact totals.',
  },
  Classic: {
    accent: 'from-amber-500 via-orange-500 to-rose-500',
    badge: 'bg-amber-50 text-amber-700',
    body: 'Traditional invoice formatting with clean labels and familiar spacing.',
  },
  Minimal: {
    accent: 'from-slate-700 via-slate-800 to-slate-950',
    badge: 'bg-slate-100 text-slate-700',
    body: 'Low-noise presentation focused on readability and quick customer review.',
  },
  Bold: {
    accent: 'from-fuchsia-600 via-violet-600 to-indigo-700',
    badge: 'bg-fuchsia-50 text-fuchsia-700',
    body: 'High-contrast styling for agencies and customer-facing invoice decks.',
  },
};

type InvoiceTemplatePreviewProps = {
  template: InvoiceTemplate;
};

export function InvoiceTemplatePreview({ template }: InvoiceTemplatePreviewProps) {
  const style = templateStyles[template];

  return (
    <article className="card-surface overflow-hidden">
      <div className={`h-3 bg-gradient-to-r ${style.accent}`} />
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Active template</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-950">{template}</h3>
          </div>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${style.badge}`}>
            Template
          </span>
        </div>
        <p className="mt-4 leading-7 text-slate-600">{style.body}</p>
        <div className="mt-6 grid gap-3 rounded-3xl bg-slate-50 p-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Header</p>
            <p className="mt-2 text-sm text-slate-700">Customer summary, invoice number, dates, and account contact.</p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Totals</p>
            <p className="mt-2 text-sm text-slate-700">Subtotals, taxes, and due amount grouped for quick review.</p>
          </div>
        </div>
      </div>
    </article>
  );
}

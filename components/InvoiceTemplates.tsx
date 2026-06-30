import type { InvoiceTemplate } from '@/data/invoices';

type InvoiceTemplatesProps = {
  templates: InvoiceTemplate[];
};

const descriptions: Record<InvoiceTemplate, string> = {
  Classic: 'Clean two-column layout for standard service invoices and recurring retainers.',
  Modern: 'Color-forward template for creative teams, agencies, and product work.',
  Minimal: 'Low-noise invoice with compact details for quick payment review.',
  Executive: 'Premium summary-first format for enterprise accounts and large contracts.',
};

export function InvoiceTemplates({ templates }: InvoiceTemplatesProps) {
  return (
    <section className="card-surface p-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Templates</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-950">Various invoice templates, already wired in.</h2>
        <p className="mt-3 leading-7 text-slate-600">
          Pick a visual style per customer account so invoices feel consistent with different client expectations.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {templates.map((template) => (
          <div key={template} className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-orange-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-700">{template}</p>
            <div className="mt-4 rounded-2xl border border-white/80 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Invoice</span>
                <span>Due</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-orange-100" />
              <div className="mt-2 h-2 w-3/4 rounded-full bg-slate-100" />
              <div className="mt-5 space-y-2">
                <div className="h-2 rounded-full bg-slate-100" />
                <div className="h-2 w-5/6 rounded-full bg-slate-100" />
                <div className="h-2 w-2/3 rounded-full bg-slate-100" />
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">{descriptions[template]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

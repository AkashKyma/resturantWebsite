import type { Invoice, InvoiceStatus } from '@/data/invoices';
import { calculateInvoiceTotal } from '@/data/invoices';

type InvoiceSummaryCardProps = {
  invoice: Invoice;
};

const statusTone: Record<InvoiceStatus, string> = {
  Paid: 'bg-emerald-100 text-emerald-700',
  Pending: 'bg-amber-100 text-amber-700',
  Overdue: 'bg-rose-100 text-rose-700',
  Draft: 'bg-slate-200 text-slate-700',
};

const money = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export function InvoiceSummaryCard({ invoice }: InvoiceSummaryCardProps) {
  return (
    <article className="card-surface p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-700">{invoice.id}</p>
          <h3 className="mt-2 text-2xl font-bold text-slate-950">{invoice.customerName}</h3>
          <p className="mt-1 text-sm text-slate-500">{invoice.customerEmail}</p>
        </div>
        <span className={`rounded-full px-3 py-1 text-sm font-semibold ${statusTone[invoice.status]}`}>{invoice.status}</span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-orange-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Template</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">{invoice.template}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Total</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">{money.format(calculateInvoiceTotal(invoice.lineItems))}</p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {invoice.lineItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between rounded-2xl border border-slate-100 px-4 py-3 text-sm">
            <div>
              <p className="font-semibold text-slate-800">{item.description}</p>
              <p className="text-slate-500">
                {item.quantity} × {money.format(item.unitPrice)}
              </p>
            </div>
            <p className="font-semibold text-slate-900">{money.format(item.quantity * item.unitPrice)}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-600">
        <span>Issued {invoice.issueDate}</span>
        <span>Due {invoice.dueDate}</span>
      </div>
    </article>
  );
}

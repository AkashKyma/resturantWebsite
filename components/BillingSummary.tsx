import { billingCustomers, seededInvoices, formatCurrency, getInvoiceTotal } from '@/data/billing';

const paidTotal = seededInvoices
  .filter((invoice) => invoice.status === 'Paid')
  .reduce((sum, invoice) => sum + getInvoiceTotal(invoice.lineItems), 0);

const pendingTotal = seededInvoices
  .filter((invoice) => invoice.status === 'Pending' || invoice.status === 'Overdue')
  .reduce((sum, invoice) => sum + getInvoiceTotal(invoice.lineItems), 0);

const draftCount = seededInvoices.filter((invoice) => invoice.status === 'Draft').length;

const summaryCards = [
  {
    label: 'Total customers',
    value: String(billingCustomers.length),
    detail: 'Seeded customer accounts ready to invoice.',
  },
  {
    label: 'Seeded invoices',
    value: String(seededInvoices.length),
    detail: 'Preloaded billing records across multiple templates.',
  },
  {
    label: 'Paid revenue',
    value: formatCurrency(paidTotal),
    detail: 'Invoices already marked as paid.',
  },
  {
    label: 'Open balance',
    value: formatCurrency(pendingTotal),
    detail: `${draftCount} draft invoices still awaiting review.`,
  },
];

export function BillingSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {summaryCards.map((card) => (
        <article key={card.label} className="card-surface p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-700">{card.label}</p>
          <p className="mt-4 text-3xl font-black text-slate-950">{card.value}</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">{card.detail}</p>
        </article>
      ))}
    </div>
  );
}

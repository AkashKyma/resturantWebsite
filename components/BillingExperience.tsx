'use client';

import { useMemo, useState } from 'react';

import { InvoiceSummaryCard } from '@/components/InvoiceSummaryCard';
import { InvoiceTemplates } from '@/components/InvoiceTemplates';
import { SectionIntro } from '@/components/SectionIntro';
import {
  calculateInvoiceTotal,
  seededInvoices,
  type Invoice,
  type InvoiceLineItem,
  type InvoiceStatus,
  type InvoiceTemplate,
} from '@/data/invoices';

const templateOptions: InvoiceTemplate[] = ['Classic', 'Modern', 'Minimal', 'Executive'];
const statusOptions: InvoiceStatus[] = ['Draft', 'Pending', 'Paid', 'Overdue'];

const emptyLineItem = (): InvoiceLineItem => ({
  id: crypto.randomUUID(),
  description: '',
  quantity: 1,
  unitPrice: 0,
});

const today = '2026-06-30';
const defaultDueDate = '2026-07-14';

export function BillingExperience() {
  const [invoices, setInvoices] = useState<Invoice[]>(seededInvoices);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [company, setCompany] = useState('');
  const [template, setTemplate] = useState<InvoiceTemplate>('Classic');
  const [status, setStatus] = useState<InvoiceStatus>('Draft');
  const [issueDate, setIssueDate] = useState(today);
  const [dueDate, setDueDate] = useState(defaultDueDate);
  const [notes, setNotes] = useState('Net 14. Thanks for the business.');
  const [lineItems, setLineItems] = useState<InvoiceLineItem[]>([emptyLineItem(), emptyLineItem()]);

  const totalRevenue = useMemo(() => invoices.reduce((sum, invoice) => sum + calculateInvoiceTotal(invoice.lineItems), 0), [invoices]);
  const pendingInvoices = useMemo(() => invoices.filter((invoice) => invoice.status === 'Pending' || invoice.status === 'Overdue').length, [invoices]);

  const updateLineItem = (id: string, field: keyof Omit<InvoiceLineItem, 'id'>, value: string) => {
    setLineItems((current) =>
      current.map((item) => {
        if (item.id !== id) return item;
        if (field === 'quantity' || field === 'unitPrice') {
          return { ...item, [field]: Number(value) };
        }
        return { ...item, [field]: value };
      }),
    );
  };

  const addLineItem = () => setLineItems((current) => [...current, emptyLineItem()]);

  const createInvoice = () => {
    const cleanedLineItems = lineItems.filter((item) => item.description.trim().length > 0 && item.quantity > 0);
    if (!customerName.trim() || !customerEmail.trim() || cleanedLineItems.length === 0) {
      return;
    }

    const nextInvoice: Invoice = {
      id: `INV-2026-${String(invoices.length + 1).padStart(3, '0')}`,
      customerName: customerName.trim(),
      customerEmail: customerEmail.trim(),
      company: company.trim() || customerName.trim(),
      status,
      template,
      issueDate,
      dueDate,
      notes: notes.trim(),
      lineItems: cleanedLineItems,
    };

    setInvoices((current) => [nextInvoice, ...current]);
    setCustomerName('');
    setCustomerEmail('');
    setCompany('');
    setTemplate('Classic');
    setStatus('Draft');
    setIssueDate(today);
    setDueDate(defaultDueDate);
    setNotes('Net 14. Thanks for the business.');
    setLineItems([emptyLineItem(), emptyLineItem()]);
  };

  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Billing"
        title="Customer billing now has a real home."
        description="Manage various customer invoices, create new ones on the page, and start with a seeded set of invoice records across multiple templates."
      />

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <div className="card-surface p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950 p-5 text-white">
                <p className="text-sm uppercase tracking-[0.25em] text-orange-200">Invoices</p>
                <p className="mt-3 text-4xl font-bold">{invoices.length}</p>
                <p className="mt-2 text-sm text-slate-300">Seeded with 12 starter invoices plus anything created here.</p>
              </div>
              <div className="rounded-3xl bg-orange-100 p-5 text-slate-900">
                <p className="text-sm uppercase tracking-[0.25em] text-orange-700">Open follow-up</p>
                <p className="mt-3 text-4xl font-bold">{pendingInvoices}</p>
                <p className="mt-2 text-sm text-slate-600">Pending and overdue accounts needing attention.</p>
              </div>
            </div>
            <div className="mt-4 rounded-3xl border border-orange-100 bg-white p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Portfolio value</p>
              <p className="mt-3 text-4xl font-bold text-slate-950">
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(totalRevenue)}
              </p>
              <p className="mt-2 text-sm text-slate-600">Running total across seeded and newly created invoices.</p>
            </div>
          </div>

          <div className="card-surface p-8">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Create invoice</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">Add a customer invoice without leaving the billing page.</h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <input className="field" placeholder="Customer name" value={customerName} onChange={(event) => setCustomerName(event.target.value)} />
              <input className="field" placeholder="Customer email" value={customerEmail} onChange={(event) => setCustomerEmail(event.target.value)} />
              <input className="field" placeholder="Company" value={company} onChange={(event) => setCompany(event.target.value)} />
              <select className="field" value={template} onChange={(event) => setTemplate(event.target.value as InvoiceTemplate)}>
                {templateOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select className="field" value={status} onChange={(event) => setStatus(event.target.value as InvoiceStatus)}>
                {statusOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <input className="field" type="date" value={issueDate} onChange={(event) => setIssueDate(event.target.value)} />
              <input className="field sm:col-span-2" type="date" value={dueDate} onChange={(event) => setDueDate(event.target.value)} />
            </div>

            <div className="mt-6 space-y-4">
              {lineItems.map((item, index) => (
                <div key={item.id} className="grid gap-3 rounded-3xl border border-slate-100 p-4 md:grid-cols-[1.6fr_0.6fr_0.8fr]">
                  <input
                    className="field"
                    placeholder={`Line item ${index + 1}`}
                    value={item.description}
                    onChange={(event) => updateLineItem(item.id, 'description', event.target.value)}
                  />
                  <input
                    className="field"
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(event) => updateLineItem(item.id, 'quantity', event.target.value)}
                  />
                  <input
                    className="field"
                    type="number"
                    min="0"
                    step="1"
                    value={item.unitPrice}
                    onChange={(event) => updateLineItem(item.id, 'unitPrice', event.target.value)}
                  />
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <button type="button" className="secondary-button" onClick={addLineItem}>
                Add line item
              </button>
              <button type="button" className="primary-button" onClick={createInvoice}>
                Create invoice
              </button>
            </div>

            <textarea className="field mt-6 min-h-28" placeholder="Notes" value={notes} onChange={(event) => setNotes(event.target.value)} />
          </div>
        </div>

        <div className="space-y-6">
          <InvoiceTemplates templates={templateOptions} />
          <section className="space-y-4">
            {invoices.map((invoice) => (
              <InvoiceSummaryCard key={invoice.id} invoice={invoice} />
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}

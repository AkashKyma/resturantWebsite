'use client';

import { useMemo, useState } from 'react';

import {
  formatCurrency,
  getInvoiceTotal,
  invoiceStatuses,
  invoiceTemplates,
  seededInvoices,
  type CustomerInvoice,
  type InvoiceLineItem,
  type InvoiceStatus,
  type InvoiceTemplate,
} from '@/data/invoices';

const templateClasses: Record<InvoiceTemplate, string> = {
  Classic: 'border-slate-200 bg-white text-slate-900',
  Modern: 'border-cyan-200 bg-cyan-50 text-cyan-950',
  Minimal: 'border-zinc-200 bg-zinc-50 text-zinc-900',
  Bold: 'border-orange-200 bg-orange-50 text-orange-950',
};

const statusClasses: Record<InvoiceStatus, string> = {
  Paid: 'bg-emerald-100 text-emerald-800',
  Pending: 'bg-amber-100 text-amber-800',
  Overdue: 'bg-rose-100 text-rose-800',
  Draft: 'bg-slate-200 text-slate-700',
};

const createEmptyItem = (): InvoiceLineItem => ({ description: '', quantity: 1, rate: 0 });

const today = new Date().toISOString().slice(0, 10);
const dueDateDefault = (() => {
  const date = new Date();
  date.setDate(date.getDate() + 14);
  return date.toISOString().slice(0, 10);
})();

type FormState = {
  customerName: string;
  company: string;
  email: string;
  template: InvoiceTemplate;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
  notes: string;
  items: InvoiceLineItem[];
};

const initialFormState: FormState = {
  customerName: '',
  company: '',
  email: '',
  template: 'Classic',
  status: 'Draft',
  issueDate: today,
  dueDate: dueDateDefault,
  notes: '',
  items: [createEmptyItem(), createEmptyItem()],
};

export function BillingDashboard() {
  const [invoices, setInvoices] = useState<CustomerInvoice[]>(seededInvoices);
  const [selectedStatus, setSelectedStatus] = useState<'All' | InvoiceStatus>('All');
  const [selectedTemplate, setSelectedTemplate] = useState<'All' | InvoiceTemplate>('All');
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string>(seededInvoices[0]?.id ?? '');
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [submitMessage, setSubmitMessage] = useState('');

  const filteredInvoices = useMemo(() => {
    return invoices.filter((invoice) => {
      const statusMatch = selectedStatus === 'All' || invoice.status === selectedStatus;
      const templateMatch = selectedTemplate === 'All' || invoice.template === selectedTemplate;
      return statusMatch && templateMatch;
    });
  }, [invoices, selectedStatus, selectedTemplate]);

  const selectedInvoice = useMemo(
    () => filteredInvoices.find((invoice) => invoice.id === selectedInvoiceId) ?? filteredInvoices[0] ?? invoices[0],
    [filteredInvoices, invoices, selectedInvoiceId],
  );

  const metrics = useMemo(() => {
    const totalRevenue = invoices.reduce((sum, invoice) => sum + getInvoiceTotal(invoice), 0);
    const paidRevenue = invoices.filter((invoice) => invoice.status === 'Paid').reduce((sum, invoice) => sum + getInvoiceTotal(invoice), 0);
    const overdueCount = invoices.filter((invoice) => invoice.status === 'Overdue').length;
    return {
      totalRevenue,
      paidRevenue,
      overdueCount,
      totalInvoices: invoices.length,
    };
  }, [invoices]);

  const resetForm = () => {
    setFormState(initialFormState);
  };

  const handleItemChange = (index: number, key: keyof InvoiceLineItem, value: string) => {
    setFormState((current) => ({
      ...current,
      items: current.items.map((item, itemIndex) => {
        if (itemIndex !== index) {
          return item;
        }

        if (key === 'description') {
          return { ...item, description: value };
        }

        const parsedValue = Number(value);
        return {
          ...item,
          [key]: Number.isFinite(parsedValue) ? parsedValue : 0,
        };
      }),
    }));
  };

  const addLineItem = () => {
    setFormState((current) => ({
      ...current,
      items: [...current.items, createEmptyItem()],
    }));
  };

  const removeLineItem = (index: number) => {
    setFormState((current) => ({
      ...current,
      items: current.items.length === 1 ? current.items : current.items.filter((_, itemIndex) => itemIndex !== index),
    }));
  };

  const handleCreateInvoice = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validItems = formState.items.filter((item) => item.description.trim() && item.quantity > 0 && item.rate > 0);
    if (!formState.customerName.trim() || !formState.company.trim() || !formState.email.trim() || validItems.length === 0) {
      setSubmitMessage('Add customer details and at least one billable line item before saving.');
      return;
    }

    const nextInvoice: CustomerInvoice = {
      id: `inv-${invoices.length + 1}`,
      invoiceNumber: `INV-2026-${String(1001 + invoices.length).padStart(4, '0')}`,
      customerName: formState.customerName.trim(),
      company: formState.company.trim(),
      email: formState.email.trim(),
      template: formState.template,
      status: formState.status,
      issueDate: formState.issueDate,
      dueDate: formState.dueDate,
      notes: formState.notes.trim(),
      items: validItems,
    };

    setInvoices((current) => [nextInvoice, ...current]);
    setSelectedInvoiceId(nextInvoice.id);
    setSubmitMessage(`Created ${nextInvoice.invoiceNumber} for ${nextInvoice.customerName}.`);
    resetForm();
  };

  return (
    <div className="space-y-10">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Invoices seeded" value={String(metrics.totalInvoices)} detail="Includes a starting set of customer invoices plus anything you create below." />
        <MetricCard label="Total billed" value={formatCurrency(metrics.totalRevenue)} detail="Combined value across all invoice templates and customers." />
        <MetricCard label="Collected" value={formatCurrency(metrics.paidRevenue)} detail="Revenue already marked as paid." />
        <MetricCard label="Overdue count" value={String(metrics.overdueCount)} detail="Invoices that still need follow-up from customers." />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <div className="card-surface p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Invoice library</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">Various customers, various templates, already seeded.</h3>
                <p className="mt-2 max-w-2xl text-slate-600">
                  Filter the billing section by status or template, then open any invoice to inspect totals, notes, and customer details.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-700">
                  Status
                  <select className="field mt-2" value={selectedStatus} onChange={(event) => setSelectedStatus(event.target.value as 'All' | InvoiceStatus)}>
                    <option value="All">All statuses</option>
                    {invoiceStatuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="text-sm font-medium text-slate-700">
                  Template
                  <select className="field mt-2" value={selectedTemplate} onChange={(event) => setSelectedTemplate(event.target.value as 'All' | InvoiceTemplate)}>
                    <option value="All">All templates</option>
                    {invoiceTemplates.map((template) => (
                      <option key={template} value={template}>
                        {template}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {filteredInvoices.map((invoice) => {
                const total = getInvoiceTotal(invoice);
                const isActive = selectedInvoice?.id === invoice.id;
                return (
                  <button
                    key={invoice.id}
                    type="button"
                    className={`rounded-3xl border p-5 text-left transition ${templateClasses[invoice.template]} ${isActive ? 'ring-2 ring-brand-400' : 'hover:-translate-y-1 hover:shadow-soft'}`}
                    onClick={() => setSelectedInvoiceId(invoice.id)}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-80">{invoice.invoiceNumber}</p>
                        <h4 className="mt-2 text-xl font-bold">{invoice.customerName}</h4>
                        <p className="mt-1 text-sm opacity-80">{invoice.company}</p>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[invoice.status]}`}>{invoice.status}</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm opacity-80">
                      <span>{invoice.template} template</span>
                      <span>{invoice.issueDate}</span>
                    </div>
                    <div className="mt-5 text-2xl font-black">{formatCurrency(total)}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {selectedInvoice ? (
            <div className={`card-surface border p-6 ${templateClasses[selectedInvoice.template]}`}>
              <div className="flex flex-col gap-5 border-b border-current/10 pb-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] opacity-75">Invoice preview</p>
                  <h3 className="mt-2 text-3xl font-black">{selectedInvoice.invoiceNumber}</h3>
                  <p className="mt-2 text-sm opacity-80">Template: {selectedInvoice.template}</p>
                </div>
                <div className="space-y-2 text-sm md:text-right">
                  <div>
                    <span className="font-semibold">Customer:</span> {selectedInvoice.customerName}
                  </div>
                  <div>
                    <span className="font-semibold">Company:</span> {selectedInvoice.company}
                  </div>
                  <div>
                    <span className="font-semibold">Email:</span> {selectedInvoice.email}
                  </div>
                  <div>
                    <span className="font-semibold">Due:</span> {selectedInvoice.dueDate}
                  </div>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-3xl border border-current/10 bg-white/70">
                <div className="grid grid-cols-[1.6fr_0.5fr_0.7fr_0.7fr] gap-3 border-b border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600">
                  <span>Description</span>
                  <span>Qty</span>
                  <span>Rate</span>
                  <span className="text-right">Line total</span>
                </div>
                {selectedInvoice.items.map((item) => (
                  <div key={`${selectedInvoice.id}-${item.description}`} className="grid grid-cols-[1.6fr_0.5fr_0.7fr_0.7fr] gap-3 px-5 py-4 text-sm text-slate-700">
                    <span>{item.description}</span>
                    <span>{item.quantity}</span>
                    <span>{formatCurrency(item.rate)}</span>
                    <span className="text-right font-semibold text-slate-950">{formatCurrency(item.quantity * item.rate)}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-[1fr_0.55fr]">
                <div className="rounded-3xl bg-white/70 p-5 text-sm text-slate-700">
                  <p className="font-semibold text-slate-950">Customer notes</p>
                  <p className="mt-2 leading-7">{selectedInvoice.notes || 'No extra notes on this invoice.'}</p>
                </div>
                <div className="rounded-3xl bg-slate-950 p-5 text-white">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Status</span>
                    <span>{selectedInvoice.status}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm text-slate-300">
                    <span>Issue date</span>
                    <span>{selectedInvoice.issueDate}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-2xl font-bold">
                    <span>Total</span>
                    <span>{formatCurrency(getInvoiceTotal(selectedInvoice))}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <form className="card-surface p-6" onSubmit={handleCreateInvoice}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Create invoice</p>
          <h3 className="mt-2 text-2xl font-bold text-slate-950">Add a new billing record for any customer.</h3>
          <p className="mt-2 text-slate-600">Use the built-in template picker, add line items, and save a new invoice into the seeded list instantly.</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              Customer name
              <input className="field mt-2" value={formState.customerName} onChange={(event) => setFormState((current) => ({ ...current, customerName: event.target.value }))} placeholder="Aarohi Desai" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Company
              <input className="field mt-2" value={formState.company} onChange={(event) => setFormState((current) => ({ ...current, company: event.target.value }))} placeholder="Lotus Banquets" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Email
              <input className="field mt-2" type="email" value={formState.email} onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))} placeholder="accounts@example.com" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Template
              <select className="field mt-2" value={formState.template} onChange={(event) => setFormState((current) => ({ ...current, template: event.target.value as InvoiceTemplate }))}>
                {invoiceTemplates.map((template) => (
                  <option key={template} value={template}>
                    {template}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm font-medium text-slate-700">
              Status
              <select className="field mt-2" value={formState.status} onChange={(event) => setFormState((current) => ({ ...current, status: event.target.value as InvoiceStatus }))}>
                {invoiceStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm font-medium text-slate-700">
              Issue date
              <input className="field mt-2" type="date" value={formState.issueDate} onChange={(event) => setFormState((current) => ({ ...current, issueDate: event.target.value }))} />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Due date
              <input className="field mt-2" type="date" value={formState.dueDate} onChange={(event) => setFormState((current) => ({ ...current, dueDate: event.target.value }))} />
            </label>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">Line items</p>
              <button type="button" className="secondary-button px-4 py-2 text-sm" onClick={addLineItem}>
                Add item
              </button>
            </div>
            {formState.items.map((item, index) => (
              <div key={`line-item-${index}`} className="rounded-3xl border border-orange-100 bg-orange-50/60 p-4">
                <div className="grid gap-4 md:grid-cols-[1.4fr_0.5fr_0.7fr_auto] md:items-end">
                  <label className="text-sm font-medium text-slate-700">
                    Description
                    <input className="field mt-2" value={item.description} onChange={(event) => handleItemChange(index, 'description', event.target.value)} placeholder="Buffet dinner service" />
                  </label>
                  <label className="text-sm font-medium text-slate-700">
                    Qty
                    <input className="field mt-2" type="number" min="1" value={item.quantity} onChange={(event) => handleItemChange(index, 'quantity', event.target.value)} />
                  </label>
                  <label className="text-sm font-medium text-slate-700">
                    Rate
                    <input className="field mt-2" type="number" min="0" value={item.rate} onChange={(event) => handleItemChange(index, 'rate', event.target.value)} />
                  </label>
                  <button type="button" className="secondary-button px-4 py-3 text-sm" onClick={() => removeLineItem(index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <label className="mt-6 block text-sm font-medium text-slate-700">
            Notes
            <textarea className="field mt-2 min-h-28" value={formState.notes} onChange={(event) => setFormState((current) => ({ ...current, notes: event.target.value }))} placeholder="Payment terms, reminders, or delivery notes." />
          </label>

          <div className="mt-6 rounded-3xl bg-slate-950 p-5 text-white">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>Draft total</span>
              <span>{formatCurrency(formState.items.reduce((sum, item) => sum + item.quantity * item.rate, 0))}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <button type="submit" className="primary-button">
                Save invoice
              </button>
              <button type="button" className="secondary-button border-white/20 bg-white/10 text-white hover:border-white hover:text-white" onClick={resetForm}>
                Reset form
              </button>
            </div>
            {submitMessage ? <p className="mt-4 text-sm text-orange-200">{submitMessage}</p> : null}
          </div>
        </form>
      </section>
    </div>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
  detail: string;
};

function MetricCard({ label, value, detail }: MetricCardProps) {
  return (
    <div className="card-surface p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-700">{label}</p>
      <h3 className="mt-3 text-3xl font-black text-slate-950">{value}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{detail}</p>
    </div>
  );
}

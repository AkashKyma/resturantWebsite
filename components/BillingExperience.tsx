'use client';

import { useMemo, useState } from 'react';

import {
  billingCustomers,
  formatCurrency,
  getInvoiceTotal,
  invoiceTemplates,
  seededInvoices,
  type Invoice,
  type InvoiceLineItem,
  type InvoiceStatus,
  type InvoiceTemplate,
} from '@/data/billing';

import { InvoiceTemplatePreview } from '@/components/InvoiceTemplatePreview';

const statusOptions: InvoiceStatus[] = ['Draft', 'Pending', 'Paid', 'Overdue'];

function createStarterLineItem(): InvoiceLineItem {
  return {
    id: Date.now(),
    description: 'New service line item',
    quantity: 1,
    unitPrice: 0,
  };
}

export function BillingExperience() {
  const [invoices, setInvoices] = useState<Invoice[]>(seededInvoices);
  const [customerId, setCustomerId] = useState<number>(billingCustomers[0]?.id ?? 1);
  const [template, setTemplate] = useState<InvoiceTemplate>('Modern');
  const [status, setStatus] = useState<InvoiceStatus>('Draft');
  const [issueDate, setIssueDate] = useState('2026-06-30');
  const [dueDate, setDueDate] = useState('2026-07-07');
  const [notes, setNotes] = useState('Prepared for review before sending to the customer.');
  const [lineItems, setLineItems] = useState<InvoiceLineItem[]>([
    { id: 1, description: 'Implementation package', quantity: 1, unitPrice: 2400 },
    { id: 2, description: 'Support hours', quantity: 4, unitPrice: 180 },
  ]);

  const customerMap = useMemo(() => new Map(billingCustomers.map((customer) => [customer.id, customer])), []);

  const totals = useMemo(() => {
    const subtotal = getInvoiceTotal(lineItems);
    const tax = subtotal * 0.18;
    const grandTotal = subtotal + tax;

    return { subtotal, tax, grandTotal };
  }, [lineItems]);

  const statusCounts = useMemo(
    () =>
      statusOptions.map((value) => ({
        status: value,
        count: invoices.filter((invoice) => invoice.status === value).length,
      })),
    [invoices],
  );

  const updateLineItem = (id: number, field: keyof InvoiceLineItem, value: string) => {
    setLineItems((current) =>
      current.map((item) => {
        if (item.id !== id) {
          return item;
        }

        if (field === 'quantity' || field === 'unitPrice') {
          return {
            ...item,
            [field]: Math.max(0, Number(value) || 0),
          };
        }

        return {
          ...item,
          [field]: value,
        };
      }),
    );
  };

  const addLineItem = () => {
    setLineItems((current) => [...current, createStarterLineItem()]);
  };

  const removeLineItem = (id: number) => {
    setLineItems((current) => (current.length > 1 ? current.filter((item) => item.id !== id) : current));
  };

  const handleCreateInvoice = () => {
    const filteredLineItems = lineItems.filter((item) => item.description.trim().length > 0 && item.quantity > 0);
    if (filteredLineItems.length === 0) {
      return;
    }

    const nextInvoice: Invoice = {
      id: invoices.length + 1,
      invoiceNumber: `INV-2026-${String(invoices.length + 1).padStart(3, '0')}`,
      customerId,
      template,
      status,
      issueDate,
      dueDate,
      notes,
      lineItems: filteredLineItems,
    };

    setInvoices((current) => [nextInvoice, ...current]);
    setStatus('Draft');
    setTemplate('Modern');
    setNotes('Prepared for review before sending to the customer.');
    setLineItems([
      { id: Date.now(), description: 'Implementation package', quantity: 1, unitPrice: 2400 },
      { id: Date.now() + 1, description: 'Support hours', quantity: 4, unitPrice: 180 },
    ]);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <section className="space-y-6">
        <div className="card-surface p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Create invoice</p>
              <h3 className="mt-2 text-3xl font-black text-slate-950">Billing workspace for various customers</h3>
              <p className="mt-3 max-w-2xl text-slate-600">
                Seeded invoice records are available below, and this form lets the user create a new invoice with a customer,
                status, template, notes, and custom line items.
              </p>
            </div>
            <div className="rounded-2xl bg-orange-50 px-4 py-3 text-sm font-semibold text-brand-700">
              Current total: {formatCurrency(totals.grandTotal)}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Customer</span>
              <select className="field" value={customerId} onChange={(event) => setCustomerId(Number(event.target.value))}>
                {billingCustomers.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.company} — {customer.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Template</span>
              <select className="field" value={template} onChange={(event) => setTemplate(event.target.value as InvoiceTemplate)}>
                {invoiceTemplates.map((templateOption) => (
                  <option key={templateOption} value={templateOption}>
                    {templateOption}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Issue date</span>
              <input className="field" type="date" value={issueDate} onChange={(event) => setIssueDate(event.target.value)} />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Due date</span>
              <input className="field" type="date" value={dueDate} onChange={(event) => setDueDate(event.target.value)} />
            </label>
            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-semibold text-slate-700">Status</span>
              <div className="flex flex-wrap gap-3">
                {statusOptions.map((value) => (
                  <button
                    key={value}
                    type="button"
                    className={value === status ? 'primary-button px-4 py-2 text-sm' : 'secondary-button px-4 py-2 text-sm'}
                    onClick={() => setStatus(value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </label>
            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-semibold text-slate-700">Notes</span>
              <textarea className="field min-h-28" value={notes} onChange={(event) => setNotes(event.target.value)} />
            </label>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold text-slate-950">Line items</h4>
              <button type="button" className="secondary-button px-4 py-2 text-sm" onClick={addLineItem}>
                Add line item
              </button>
            </div>
            <div className="space-y-4">
              {lineItems.map((item, index) => (
                <div key={item.id} className="rounded-3xl border border-orange-100 bg-orange-50/40 p-4">
                  <div className="grid gap-4 md:grid-cols-[1.8fr_0.7fr_0.8fr_auto] md:items-end">
                    <label className="space-y-2">
                      <span className="text-sm font-semibold text-slate-700">Description</span>
                      <input
                        className="field"
                        value={item.description}
                        onChange={(event) => updateLineItem(item.id, 'description', event.target.value)}
                      />
                    </label>
                    <label className="space-y-2">
                      <span className="text-sm font-semibold text-slate-700">Qty</span>
                      <input
                        className="field"
                        type="number"
                        min="0"
                        value={item.quantity}
                        onChange={(event) => updateLineItem(item.id, 'quantity', event.target.value)}
                      />
                    </label>
                    <label className="space-y-2">
                      <span className="text-sm font-semibold text-slate-700">Rate</span>
                      <input
                        className="field"
                        type="number"
                        min="0"
                        value={item.unitPrice}
                        onChange={(event) => updateLineItem(item.id, 'unitPrice', event.target.value)}
                      />
                    </label>
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm">
                        {formatCurrency(item.quantity * item.unitPrice)}
                      </div>
                      <button
                        type="button"
                        className="secondary-button px-4 py-2 text-sm"
                        onClick={() => removeLineItem(item.id)}
                        disabled={lineItems.length === 1 && index === 0}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-3xl bg-slate-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1 text-sm text-slate-300">
              <p>Subtotal: {formatCurrency(totals.subtotal)}</p>
              <p>GST (18%): {formatCurrency(totals.tax)}</p>
              <p className="text-lg font-semibold text-white">Grand total: {formatCurrency(totals.grandTotal)}</p>
            </div>
            <button type="button" className="primary-button bg-white px-6 py-3 text-slate-950 hover:bg-orange-100" onClick={handleCreateInvoice}>
              Create invoice
            </button>
          </div>
        </div>

        <div className="card-surface overflow-hidden">
          <div className="border-b border-slate-100 px-7 py-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Seeded invoices</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">12+ invoice records across various customers</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {statusCounts.map((item) => (
                  <span key={item.status} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                    {item.status}: {item.count}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left">
              <thead className="bg-slate-50 text-sm uppercase tracking-[0.22em] text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-semibold">Invoice</th>
                  <th className="px-6 py-4 font-semibold">Customer</th>
                  <th className="px-6 py-4 font-semibold">Template</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Due date</th>
                  <th className="px-6 py-4 font-semibold">Total</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => {
                  const customer = customerMap.get(invoice.customerId);
                  const total = getInvoiceTotal(invoice.lineItems);

                  return (
                    <tr key={`${invoice.invoiceNumber}-${invoice.id}`} className="border-t border-slate-100 align-top">
                      <td className="px-6 py-5">
                        <p className="font-semibold text-slate-950">{invoice.invoiceNumber}</p>
                        <p className="mt-1 text-sm text-slate-500">Issued {invoice.issueDate}</p>
                      </td>
                      <td className="px-6 py-5">
                        <p className="font-semibold text-slate-900">{customer?.company ?? 'Unknown customer'}</p>
                        <p className="mt-1 text-sm text-slate-500">{customer?.name}</p>
                      </td>
                      <td className="px-6 py-5 text-sm font-medium text-slate-700">{invoice.template}</td>
                      <td className="px-6 py-5">
                        <span className="rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-brand-700">{invoice.status}</span>
                      </td>
                      <td className="px-6 py-5 text-sm text-slate-600">{invoice.dueDate}</td>
                      <td className="px-6 py-5">
                        <p className="font-semibold text-slate-950">{formatCurrency(total)}</p>
                        <p className="mt-1 text-sm text-slate-500">{invoice.lineItems.length} line items</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <aside className="space-y-6">
        <InvoiceTemplatePreview template={template} />

        <div className="card-surface p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-700">Customer profile</p>
          {customerMap.get(customerId) ? (
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div>
                <p className="text-lg font-bold text-slate-950">{customerMap.get(customerId)?.company}</p>
                <p>{customerMap.get(customerId)?.name}</p>
              </div>
              <p>Email: {customerMap.get(customerId)?.email}</p>
              <p>Phone: {customerMap.get(customerId)?.phone}</p>
              <p>City: {customerMap.get(customerId)?.city}</p>
              <p>Tax ID: {customerMap.get(customerId)?.taxId}</p>
            </div>
          ) : null}
        </div>

        <div className="card-surface p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-700">Template coverage</p>
          <div className="mt-4 grid gap-3">
            {invoiceTemplates.map((templateOption) => {
              const count = invoices.filter((invoice) => invoice.template === templateOption).length;
              return (
                <div key={templateOption} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="font-semibold text-slate-900">{templateOption}</span>
                  <span className="text-sm text-slate-500">{count} invoices</span>
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    </div>
  );
}

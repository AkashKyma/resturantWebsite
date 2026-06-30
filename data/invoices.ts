export type InvoiceStatus = 'Paid' | 'Pending' | 'Overdue' | 'Draft';
export type InvoiceTemplate = 'Classic' | 'Modern' | 'Minimal' | 'Executive';

export type InvoiceLineItem = {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
};

export type Invoice = {
  id: string;
  customerName: string;
  customerEmail: string;
  company: string;
  status: InvoiceStatus;
  template: InvoiceTemplate;
  issueDate: string;
  dueDate: string;
  notes: string;
  lineItems: InvoiceLineItem[];
};

const day = 24 * 60 * 60 * 1000;
const today = new Date('2026-06-30T00:00:00.000Z');

const currency = [
  ['Website design retainer', 1, 1200],
  ['Brand support hours', 8, 95],
  ['Hosting and maintenance', 1, 180],
  ['SEO content batch', 4, 140],
  ['Checkout integration', 1, 860],
  ['Analytics reporting', 2, 110],
  ['Product photography set', 1, 640],
  ['CMS migration', 1, 980],
] as const;

const customers = [
  ['Aarav Foods', 'accounts@aaravfoods.com'],
  ['BluePeak Retail', 'finance@bluepeakretail.com'],
  ['Cinder Studio', 'ops@cinderstudio.co'],
  ['Delta Clinics', 'billing@deltaclinics.org'],
  ['Evermint Travel', 'ap@everminttravel.com'],
  ['FreshNest Market', 'hello@freshnest.market'],
  ['Golden Petals', 'finance@goldenpetals.in'],
  ['Horizon Motors', 'payables@horizonmotors.io'],
  ['Ivory Legal', 'admin@ivorylegal.com'],
  ['Juniper Stay', 'accounts@juniperstay.com'],
  ['Kindred Health', 'billing@kindredhealth.co'],
  ['Luma Interiors', 'studio@lumainteriors.com'],
] as const;

const templates: InvoiceTemplate[] = ['Classic', 'Modern', 'Minimal', 'Executive'];
const statuses: InvoiceStatus[] = ['Paid', 'Pending', 'Overdue', 'Draft'];

const buildLineItems = (index: number): InvoiceLineItem[] => {
  const first = currency[index % currency.length];
  const second = currency[(index + 3) % currency.length];
  return [
    { id: `item-${index}-1`, description: first[0], quantity: first[1], unitPrice: first[2] },
    { id: `item-${index}-2`, description: second[0], quantity: second[1], unitPrice: second[2] },
  ];
};

export const calculateInvoiceTotal = (lineItems: InvoiceLineItem[]) =>
  lineItems.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);

export const seededInvoices: Invoice[] = Array.from({ length: 12 }, (_, index) => {
  const customer = customers[index % customers.length];
  const issueDate = new Date(today.getTime() - index * 5 * day);
  const dueDate = new Date(issueDate.getTime() + 14 * day);

  return {
    id: `INV-2026-${String(index + 1).padStart(3, '0')}`,
    customerName: customer[0],
    customerEmail: customer[1],
    company: customer[0],
    status: statuses[index % statuses.length],
    template: templates[index % templates.length],
    issueDate: issueDate.toISOString().slice(0, 10),
    dueDate: dueDate.toISOString().slice(0, 10),
    notes: index % 2 === 0 ? 'Thank you for your repeat business.' : 'Please process via the usual AP workflow.',
    lineItems: buildLineItems(index),
  };
});

export type InvoiceStatus = 'Paid' | 'Pending' | 'Overdue' | 'Draft';
export type InvoiceTemplate = 'Classic' | 'Modern' | 'Minimal' | 'Bold';

export type InvoiceLineItem = {
  description: string;
  quantity: number;
  rate: number;
};

export type CustomerInvoice = {
  id: string;
  invoiceNumber: string;
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

export const invoiceTemplates: InvoiceTemplate[] = ['Classic', 'Modern', 'Minimal', 'Bold'];
export const invoiceStatuses: InvoiceStatus[] = ['Paid', 'Pending', 'Overdue', 'Draft'];

const daysFrom = (date: string, offset: number) => {
  const next = new Date(date);
  next.setDate(next.getDate() + offset);
  return next.toISOString().slice(0, 10);
};

const createInvoice = (
  index: number,
  customerName: string,
  company: string,
  template: InvoiceTemplate,
  status: InvoiceStatus,
  issueDate: string,
  dueInDays: number,
  items: InvoiceLineItem[],
  notes: string,
): CustomerInvoice => ({
  id: `inv-${index + 1}`,
  invoiceNumber: `INV-2026-${String(1001 + index).padStart(4, '0')}`,
  customerName,
  company,
  email: `${customerName.toLowerCase().replace(/[^a-z]+/g, '.').replace(/^\.|\.$/g, '')}@example.com`,
  template,
  status,
  issueDate,
  dueDate: daysFrom(issueDate, dueInDays),
  notes,
  items,
});

export const seededInvoices: CustomerInvoice[] = [
  createInvoice(0, 'Aarav Mehta', 'Spice Route Catering', 'Classic', 'Paid', '2026-06-01', 14, [
    { description: 'Corporate lunch thali service', quantity: 2, rate: 18500 },
    { description: 'Tea station add-on', quantity: 1, rate: 6500 },
  ], 'Paid via bank transfer.'),
  createInvoice(1, 'Priya Nair', 'Monsoon Events', 'Modern', 'Pending', '2026-06-03', 10, [
    { description: 'Wedding tasting session', quantity: 1, rate: 12000 },
    { description: 'Dessert sampler trays', quantity: 3, rate: 4200 },
  ], 'Awaiting final approval from the client.'),
  createInvoice(2, 'Kabir Shah', 'Blue Banyan Studios', 'Minimal', 'Overdue', '2026-05-18', 7, [
    { description: 'Production catering day package', quantity: 2, rate: 24000 },
  ], 'Reminder sent twice.'),
  createInvoice(3, 'Ananya Rao', 'South Table Club', 'Bold', 'Paid', '2026-06-05', 15, [
    { description: 'Private dining room booking deposit', quantity: 1, rate: 30000 },
    { description: 'Custom mocktail pairing', quantity: 1, rate: 9500 },
  ], 'Includes premium service package.'),
  createInvoice(4, 'Rohan Kapoor', 'Morning Filter Co.', 'Classic', 'Draft', '2026-06-11', 12, [
    { description: 'Breakfast pop-up dosa station', quantity: 1, rate: 16000 },
    { description: 'Coffee urn setup', quantity: 2, rate: 3500 },
  ], 'Draft pending internal review.'),
  createInvoice(5, 'Meera Iyer', 'Garden Lantern Hotels', 'Modern', 'Pending', '2026-06-08', 21, [
    { description: 'Hotel welcome snack boxes', quantity: 45, rate: 280 },
    { description: 'Late-night chai service', quantity: 1, rate: 7200 },
  ], 'Split payment terms requested.'),
  createInvoice(6, 'Vihaan Singh', 'North Lane Ventures', 'Minimal', 'Paid', '2026-06-13', 14, [
    { description: 'Boardroom lunch delivery', quantity: 18, rate: 540 },
    { description: 'Seasonal mithai gift packs', quantity: 18, rate: 220 },
  ], 'Delivered ahead of schedule.'),
  createInvoice(7, 'Ishita Patel', 'Peacock House', 'Bold', 'Overdue', '2026-05-25', 10, [
    { description: 'Weekend brunch buffet', quantity: 1, rate: 42000 },
  ], 'Customer requested a revised copy.'),
  createInvoice(8, 'Aditya Verma', 'Copper Kettle Media', 'Classic', 'Pending', '2026-06-09', 9, [
    { description: 'Launch event dinner buffet', quantity: 1, rate: 38000 },
    { description: 'On-site service team', quantity: 4, rate: 2200 },
  ], 'Payment due before event date.'),
  createInvoice(9, 'Sana Mirza', 'Lotus Advisory', 'Modern', 'Paid', '2026-06-14', 14, [
    { description: 'Investor meeting snack spread', quantity: 24, rate: 310 },
    { description: 'Artisan chai thermos kit', quantity: 3, rate: 1800 },
  ], 'Recurring corporate customer.'),
  createInvoice(10, 'Dev Malhotra', 'Cedar & Co.', 'Minimal', 'Draft', '2026-06-16', 18, [
    { description: 'Chef tasting and menu planning', quantity: 1, rate: 14000 },
  ], 'Need final guest count.'),
  createInvoice(11, 'Nisha Kulkarni', 'Studio Marigold', 'Bold', 'Pending', '2026-06-17', 14, [
    { description: 'Photo shoot styling meal set', quantity: 1, rate: 12600 },
    { description: 'Prop dessert assortment', quantity: 1, rate: 6400 },
  ], 'Waiting on purchase order.'),
];

export const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);

export const getInvoiceTotal = (invoice: Pick<CustomerInvoice, 'items'>) =>
  invoice.items.reduce((sum, item) => sum + item.quantity * item.rate, 0);

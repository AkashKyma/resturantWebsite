export type InvoiceStatus = 'Paid' | 'Pending' | 'Overdue' | 'Draft';
export type InvoiceTemplate = 'Modern' | 'Classic' | 'Minimal' | 'Bold';

export type BillingCustomer = {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  city: string;
  taxId: string;
};

export type InvoiceLineItem = {
  id: number;
  description: string;
  quantity: number;
  unitPrice: number;
};

export type Invoice = {
  id: number;
  invoiceNumber: string;
  customerId: number;
  template: InvoiceTemplate;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
  notes: string;
  lineItems: InvoiceLineItem[];
};

export const invoiceTemplates: InvoiceTemplate[] = ['Modern', 'Classic', 'Minimal', 'Bold'];

export const billingCustomers: BillingCustomer[] = [
  { id: 1, name: 'Aarav Mehta', company: 'Mehta Retail Group', email: 'aarav@mehtaretail.in', phone: '+91 98765 12001', city: 'Mumbai', taxId: 'GST29AARM1200K1ZL' },
  { id: 2, name: 'Priya Nair', company: 'Nair Wellness Studio', email: 'priya@nairwellness.in', phone: '+91 98765 12002', city: 'Bengaluru', taxId: 'GST29PRIN2200J1ZT' },
  { id: 3, name: 'Rohan Kapoor', company: 'Kapoor Logistics', email: 'rohan@kapoorlogistics.in', phone: '+91 98765 12003', city: 'Delhi', taxId: 'GST07ROHK3300P1ZA' },
  { id: 4, name: 'Ishita Sen', company: 'Sen Design House', email: 'ishita@sendesign.in', phone: '+91 98765 12004', city: 'Kolkata', taxId: 'GST19ISHS4400C1ZQ' },
  { id: 5, name: 'Kabir Shah', company: 'Shah Trading Co.', email: 'kabir@shahtrading.in', phone: '+91 98765 12005', city: 'Ahmedabad', taxId: 'GST24KABS5500D1ZH' },
  { id: 6, name: 'Ananya Iyer', company: 'Iyer Foods Private', email: 'ananya@iyerfoods.in', phone: '+91 98765 12006', city: 'Chennai', taxId: 'GST33ANAI6600R1ZB' },
  { id: 7, name: 'Dev Malhotra', company: 'Malhotra Media Lab', email: 'dev@malhotramedia.in', phone: '+91 98765 12007', city: 'Pune', taxId: 'GST27DEVM7700L1ZM' },
  { id: 8, name: 'Mira Joshi', company: 'Joshi Events & Co.', email: 'mira@joshievents.in', phone: '+91 98765 12008', city: 'Jaipur', taxId: 'GST08MIRJ8800F1ZU' },
  { id: 9, name: 'Samar Verma', company: 'Verma Industrial Supply', email: 'samar@vermasupply.in', phone: '+91 98765 12009', city: 'Lucknow', taxId: 'GST09SAMV9900S1ZX' },
  { id: 10, name: 'Neha Batra', company: 'Batra Legal Advisory', email: 'neha@batralegal.in', phone: '+91 98765 12010', city: 'Hyderabad', taxId: 'GST36NEHB1010M1ZY' },
  { id: 11, name: 'Arjun Rao', company: 'Rao Tech Systems', email: 'arjun@raotech.in', phone: '+91 98765 12011', city: 'Noida', taxId: 'GST09ARJR1111T1ZC' },
  { id: 12, name: 'Tara Dutta', company: 'Dutta Hospitality', email: 'tara@duttahospitality.in', phone: '+91 98765 12012', city: 'Goa', taxId: 'GST30TARD1212E1ZW' },
];

export const seededInvoices: Invoice[] = [
  {
    id: 1,
    invoiceNumber: 'INV-2026-001',
    customerId: 1,
    template: 'Modern',
    status: 'Paid',
    issueDate: '2026-06-01',
    dueDate: '2026-06-08',
    notes: 'Quarterly inventory restock and expedited support.',
    lineItems: [
      { id: 1, description: 'Retail platform license', quantity: 1, unitPrice: 4200 },
      { id: 2, description: 'Priority onboarding session', quantity: 2, unitPrice: 350 },
    ],
  },
  {
    id: 2,
    invoiceNumber: 'INV-2026-002',
    customerId: 2,
    template: 'Classic',
    status: 'Pending',
    issueDate: '2026-06-02',
    dueDate: '2026-06-12',
    notes: 'Monthly wellness workshop billing.',
    lineItems: [
      { id: 1, description: 'Workshop package', quantity: 3, unitPrice: 650 },
      { id: 2, description: 'Printed resource kits', quantity: 15, unitPrice: 18 },
    ],
  },
  {
    id: 3,
    invoiceNumber: 'INV-2026-003',
    customerId: 3,
    template: 'Minimal',
    status: 'Overdue',
    issueDate: '2026-05-28',
    dueDate: '2026-06-06',
    notes: 'Logistics dashboard implementation milestone.',
    lineItems: [
      { id: 1, description: 'Dashboard milestone payment', quantity: 1, unitPrice: 5200 },
      { id: 2, description: 'Support hours', quantity: 6, unitPrice: 110 },
    ],
  },
  {
    id: 4,
    invoiceNumber: 'INV-2026-004',
    customerId: 4,
    template: 'Bold',
    status: 'Paid',
    issueDate: '2026-06-03',
    dueDate: '2026-06-09',
    notes: 'Brand refresh design system retainer.',
    lineItems: [
      { id: 1, description: 'Design retainer', quantity: 1, unitPrice: 3100 },
      { id: 2, description: 'Asset exports', quantity: 12, unitPrice: 24 },
    ],
  },
  {
    id: 5,
    invoiceNumber: 'INV-2026-005',
    customerId: 5,
    template: 'Modern',
    status: 'Draft',
    issueDate: '2026-06-04',
    dueDate: '2026-06-18',
    notes: 'Awaiting customer PO confirmation.',
    lineItems: [
      { id: 1, description: 'Trade data subscription', quantity: 1, unitPrice: 1800 },
      { id: 2, description: 'Analyst briefing', quantity: 1, unitPrice: 420 },
    ],
  },
  {
    id: 6,
    invoiceNumber: 'INV-2026-006',
    customerId: 6,
    template: 'Classic',
    status: 'Pending',
    issueDate: '2026-06-05',
    dueDate: '2026-06-15',
    notes: 'Catering and operations planning package.',
    lineItems: [
      { id: 1, description: 'Operations planning', quantity: 2, unitPrice: 950 },
      { id: 2, description: 'Kitchen audit', quantity: 1, unitPrice: 680 },
    ],
  },
  {
    id: 7,
    invoiceNumber: 'INV-2026-007',
    customerId: 7,
    template: 'Minimal',
    status: 'Paid',
    issueDate: '2026-06-07',
    dueDate: '2026-06-14',
    notes: 'Campaign analytics and reporting.',
    lineItems: [
      { id: 1, description: 'Analytics retainer', quantity: 1, unitPrice: 2400 },
      { id: 2, description: 'Video ad optimization', quantity: 4, unitPrice: 160 },
    ],
  },
  {
    id: 8,
    invoiceNumber: 'INV-2026-008',
    customerId: 8,
    template: 'Bold',
    status: 'Overdue',
    issueDate: '2026-05-30',
    dueDate: '2026-06-07',
    notes: 'Event production planning and vendor coordination.',
    lineItems: [
      { id: 1, description: 'Production coordination', quantity: 1, unitPrice: 2750 },
      { id: 2, description: 'Venue sourcing', quantity: 3, unitPrice: 140 },
    ],
  },
  {
    id: 9,
    invoiceNumber: 'INV-2026-009',
    customerId: 9,
    template: 'Modern',
    status: 'Pending',
    issueDate: '2026-06-08',
    dueDate: '2026-06-20',
    notes: 'Supply chain reporting add-on.',
    lineItems: [
      { id: 1, description: 'Reporting add-on', quantity: 1, unitPrice: 1950 },
      { id: 2, description: 'User seats', quantity: 8, unitPrice: 45 },
    ],
  },
  {
    id: 10,
    invoiceNumber: 'INV-2026-010',
    customerId: 10,
    template: 'Classic',
    status: 'Paid',
    issueDate: '2026-06-09',
    dueDate: '2026-06-16',
    notes: 'Legal document workflow setup.',
    lineItems: [
      { id: 1, description: 'Workflow setup', quantity: 1, unitPrice: 3600 },
      { id: 2, description: 'Template migration', quantity: 5, unitPrice: 95 },
    ],
  },
  {
    id: 11,
    invoiceNumber: 'INV-2026-011',
    customerId: 11,
    template: 'Minimal',
    status: 'Draft',
    issueDate: '2026-06-10',
    dueDate: '2026-06-24',
    notes: 'Prepared for hardware deployment phase.',
    lineItems: [
      { id: 1, description: 'Deployment prep', quantity: 1, unitPrice: 4300 },
      { id: 2, description: 'Device imaging', quantity: 14, unitPrice: 32 },
    ],
  },
  {
    id: 12,
    invoiceNumber: 'INV-2026-012',
    customerId: 12,
    template: 'Bold',
    status: 'Pending',
    issueDate: '2026-06-11',
    dueDate: '2026-06-21',
    notes: 'Hospitality seasonal package renewal.',
    lineItems: [
      { id: 1, description: 'Seasonal renewal', quantity: 1, unitPrice: 2850 },
      { id: 2, description: 'Property onboarding', quantity: 2, unitPrice: 380 },
    ],
  },
];

export function getInvoiceTotal(lineItems: InvoiceLineItem[]) {
  return lineItems.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
}

import { BillingExperience } from '@/components/BillingExperience';
import { BillingSummary } from '@/components/BillingSummary';
import { SectionIntro } from '@/components/SectionIntro';

export default function BillingPage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Billing"
        title="Invoices for various customers, with seeded records and template-based creation."
        description="This billing section ships with multiple customer accounts, 12 preloaded invoices, and a working invoice creation flow so the user can add new records without leaving the page."
      />
      <BillingSummary />
      <BillingExperience />
    </main>
  );
}

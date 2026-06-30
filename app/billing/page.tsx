import { BillingDashboard } from '@/components/BillingDashboard';
import { SectionIntro } from '@/components/SectionIntro';

export default function BillingPage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Billing"
        title="Customer invoices, template choices, and a working billing section in one place."
        description="Review seeded customer invoices, preview different template styles, and create new invoices directly from the billing dashboard."
      />
      <BillingDashboard />
    </main>
  );
}

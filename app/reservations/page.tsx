import { ReservationForm } from '@/components/ReservationForm';
import { SectionIntro } from '@/components/SectionIntro';

export default function ReservationsPage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Reserve"
        title="Book dinner, brunch, or the table everyone wants by the window."
        description="Use the reservation form to request a table, share your party size, and let us know if you&apos;re celebrating something worth dessert."
      />
      <ReservationForm />
    </main>
  );
}

import { SectionIntro } from '@/components/SectionIntro';
import { restaurant } from '@/src/site';

export default function ContactPage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Contact"
        title="Everything you need to find us, call us, or just show up hungry."
        description="The essentials live here: address, phone, email, and opening hours for dine-in, pickup, and reservations."
      />

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card-surface p-8">
          <h2 className="text-3xl font-black text-slate-950">{restaurant.name}</h2>
          <div className="mt-6 space-y-5 text-slate-600">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Address</p>
              <p className="mt-2 text-lg">{restaurant.address}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Phone</p>
              <a className="mt-2 block text-lg font-semibold text-slate-900" href={`tel:${restaurant.phone}`}>
                {restaurant.phone}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Email</p>
              <a className="mt-2 block text-lg font-semibold text-slate-900" href={`mailto:${restaurant.email}`}>
                {restaurant.email}
              </a>
            </div>
          </div>
        </div>

        <div className="card-surface p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Hours</p>
          <ul className="mt-6 space-y-4 text-lg text-slate-700">
            {restaurant.hours.map((hours) => (
              <li key={hours} className="flex items-center justify-between rounded-2xl bg-orange-50 px-5 py-4">
                <span>{hours.split(': ')[0]}</span>
                <span className="font-semibold text-slate-900">{hours.split(': ')[1]}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-white">
            <h3 className="text-2xl font-bold">Need a private dining option?</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Email our team with your group size and preferred date. We&apos;ll help with menu planning, seating, and timing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

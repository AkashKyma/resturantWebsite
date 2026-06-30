export function ReservationForm() {
  return (
    <section className="card-surface p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Reservations</p>
      <h2 className="mt-2 text-3xl font-black text-slate-950">Book your table</h2>
      <p className="mt-3 max-w-2xl text-slate-600">
        Reserve a cozy dinner, family brunch, or celebration. We&apos;ll hold your table for 15 minutes after the selected time.
      </p>

      <form className="mt-8 grid gap-4 sm:grid-cols-2">
        <input className="field" type="text" name="name" placeholder="Guest name" required />
        <input className="field" type="email" name="email" placeholder="Email address" required />
        <input className="field" type="tel" name="phone" placeholder="Phone number" required />
        <select className="field" name="partySize" defaultValue="">
          <option value="" disabled>
            Party size
          </option>
          <option>2 guests</option>
          <option>4 guests</option>
          <option>6 guests</option>
          <option>8 guests</option>
        </select>
        <input className="field" type="date" name="date" required />
        <input className="field" type="time" name="time" required />
        <textarea
          className="field min-h-32 resize-y sm:col-span-2"
          name="notes"
          placeholder="Occasion, accessibility, or seating notes"
        />
        <button type="submit" className="primary-button sm:col-span-2">
          Request reservation
        </button>
      </form>
    </section>
  );
}

type OrderFormProps = {
  itemCount: number;
};

export function OrderForm({ itemCount }: OrderFormProps) {
  return (
    <section className="card-surface p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Checkout</p>
      <h2 className="mt-2 text-3xl font-black text-slate-950">Pickup details</h2>
      <p className="mt-3 text-slate-600">
        {itemCount > 0
          ? 'Review your dishes and share pickup details to complete the order.'
          : 'Add dishes to the cart, then fill this form to place your order.'}
      </p>

      <form className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input className="field" type="text" name="name" placeholder="Full name" required />
          <input className="field" type="tel" name="phone" placeholder="Phone number" required />
        </div>
        <input className="field" type="email" name="email" placeholder="Email address" required />
        <div className="grid gap-4 sm:grid-cols-2">
          <select className="field" name="pickupTime" defaultValue="">
            <option value="" disabled>
              Preferred pickup time
            </option>
            <option>ASAP · 20 minutes</option>
            <option>In 30 minutes</option>
            <option>In 45 minutes</option>
            <option>In 1 hour</option>
          </select>
          <select className="field" name="paymentMethod" defaultValue="">
            <option value="" disabled>
              Payment method
            </option>
            <option>Pay on pickup</option>
            <option>Card on arrival</option>
            <option>Gift card</option>
          </select>
        </div>
        <textarea className="field min-h-32 resize-y" name="notes" placeholder="Dietary notes or pickup instructions" />
        <button type="submit" className="primary-button w-full">
          Place order
        </button>
      </form>
    </section>
  );
}

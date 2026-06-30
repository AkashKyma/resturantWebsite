import type { MenuItem } from '@/data/menu';

export type CartItem = MenuItem & { quantity: number };

type CartProps = {
  items: CartItem[];
  onUpdateQuantity: (id: number, nextQuantity: number) => void;
};

export function Cart({ items, onUpdateQuantity }: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="card-surface p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Cart</p>
          <h2 className="mt-2 text-3xl font-black text-slate-950">Your order</h2>
        </div>
        <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-brand-700">
          {items.reduce((sum, item) => sum + item.quantity, 0)} items
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {items.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-orange-200 bg-orange-50/60 p-6 text-slate-600">
            Your cart is empty. Add dishes from the menu to start an order.
          </div>
        ) : (
          items.map((item) => (
            <div key={item.id} className="rounded-3xl border border-slate-100 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{item.category}</p>
                </div>
                <p className="font-semibold text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <button
                  type="button"
                  className="secondary-button h-10 w-10 rounded-full px-0 py-0"
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  aria-label={`Decrease ${item.name}`}
                >
                  −
                </button>
                <span className="min-w-8 text-center font-semibold text-slate-900">{item.quantity}</span>
                <button
                  type="button"
                  className="secondary-button h-10 w-10 rounded-full px-0 py-0"
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  aria-label={`Increase ${item.name}`}
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-8 space-y-3 rounded-3xl bg-slate-950 p-5 text-white">
        <div className="flex items-center justify-between text-sm text-slate-300">
          <span>Pickup fee</span>
          <span>$4.00</span>
        </div>
        <div className="flex items-center justify-between text-lg font-semibold">
          <span>Total</span>
          <span>${(subtotal + (items.length ? 4 : 0)).toFixed(2)}</span>
        </div>
      </div>
    </section>
  );
}

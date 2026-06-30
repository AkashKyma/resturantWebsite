'use client';

import { useMemo, useState } from 'react';

import { Cart } from '@/components/Cart';
import { MenuCard } from '@/components/MenuCard';
import { OrderForm } from '@/components/OrderForm';
import { SectionIntro } from '@/components/SectionIntro';
import { menuItems } from '@/data/menu';
import type { CartItem } from '@/components/Cart';

const starterCart = menuItems.filter((item) => item.featured).slice(0, 2).map((item) => ({ ...item, quantity: 1 }));

export function OrderExperience() {
  const [cartItems, setCartItems] = useState<CartItem[]>(starterCart);

  const cartIds = useMemo(() => new Set(cartItems.map((item) => item.id)), [cartItems]);

  const updateQuantity = (id: number, nextQuantity: number) => {
    setCartItems((current) => {
      if (nextQuantity <= 0) {
        return current.filter((item) => item.id !== id);
      }

      return current.map((item) => (item.id === id ? { ...item, quantity: nextQuantity } : item));
    });
  };

  const addToCart = (id: number) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === id);
      if (existing) {
        return current.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
      }

      const menuItem = menuItems.find((item) => item.id === id);
      return menuItem ? [...current, { ...menuItem, quantity: 1 }] : current;
    });
  };

  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Order online"
        title="Build a pickup order without the awkward phone call."
        description="Add dishes from the menu, review the cart, and fill in pickup details on the same page for a simple checkout flow."
      />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {menuItems.slice(0, 6).map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                action={
                  <button
                    type="button"
                    className={cartIds.has(item.id) ? 'secondary-button w-full' : 'primary-button w-full'}
                    onClick={() => addToCart(item.id)}
                  >
                    {cartIds.has(item.id) ? 'Add another' : 'Add to cart'}
                  </button>
                }
              />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Cart items={cartItems} onUpdateQuantity={updateQuantity} />
          <OrderForm itemCount={cartItems.length} />
        </div>
      </div>
    </main>
  );
}

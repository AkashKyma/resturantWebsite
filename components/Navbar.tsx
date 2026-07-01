import Link from 'next/link';

import { restaurant } from '@/src/site';

const links = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/dim-sum', label: 'Dim Sum' },
  { href: '/sichuan', label: 'Sichuan' },
  { href: '/noodle-house', label: 'Noodles' },
  { href: '/tea-house', label: 'Tea House' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reservations', label: 'Reservations' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-700">Chinese Cuisine</span>
          <span className="text-xl font-bold text-slate-900">{restaurant.name}</span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-brand-700">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/order" className="primary-button px-4 py-2 text-sm">
          Order Now
        </Link>
      </div>
    </header>
  );
}

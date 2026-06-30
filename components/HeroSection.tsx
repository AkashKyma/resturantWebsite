import Image from 'next/image';
import Link from 'next/link';

import { restaurant } from '@/src/site';

export function HeroSection() {
  return (
    <section className="section-shell pb-8 pt-14">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand-700">
            Indian thalis · Chai service · Regional specials daily
          </span>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">
              Big Indian plates, proper chai, and a menu with real depth.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              {restaurant.tagline} Explore a fuller feed of South Indian classics, North Indian favorites, loaded thalis, and drinks worth staying for.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/menu" className="primary-button">
              Explore Menu
            </Link>
            <Link href="/thalis" className="secondary-button">
              View Thalis
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['100', 'Menu items'],
              ['4 zones', 'Regional sections'],
              ['Daily', 'Tea & tiffin service'],
            ].map(([value, label]) => (
              <div key={label} className="card-surface px-5 py-4">
                <p className="text-2xl font-bold text-slate-950">{value}</p>
                <p className="text-sm text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card-surface overflow-hidden p-4">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 text-white">
            <div className="relative h-80 w-full">
              <Image src={restaurant.heroImage} alt={restaurant.name} fill className="object-cover opacity-75" sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/10" />
            <div className="absolute inset-0 p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Today&apos;s table</p>
              <h2 className="mt-4 text-3xl font-bold">Thali first, extras second, regrets never.</h2>
              <p className="mt-4 max-w-md text-base leading-7 text-slate-200">
                Start with a full regional thali, drift into dosa or curry, then slow down with kahwa, chai, or filter coffee.
              </p>
              <div className="mt-8 grid gap-3 rounded-[1.5rem] bg-white/10 p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>Lunch special</span>
                  <span className="font-semibold text-orange-300">Gujarati &amp; Andhra thali</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>Evening pour</span>
                  <span className="font-semibold text-orange-300">Masala chai &amp; filter coffee</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Kitchen focus</span>
                  <span className="font-semibold text-orange-300">Regional Indian comfort</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

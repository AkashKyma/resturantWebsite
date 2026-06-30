import { menuItems } from '@/data/menu';

export const restaurant = {
  name: 'Saffron Thali House',
  tagline: 'Regional Indian comfort, loaded thalis, slow chai, and a menu that finally feels complete.',
  address: '18 Residency Road, Bengaluru 560025',
  phone: '+91 80 4123 7788',
  email: 'hello@saffronthalihouse.in',
  hours: ['Mon–Thu: 11:00 AM – 10:30 PM', 'Fri: 11:00 AM – 11:00 PM', 'Sat: 8:00 AM – 11:00 PM', 'Sun: 8:00 AM – 10:30 PM'],
  heroImage: 'https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?auto=format&fit=crop&w=1600&q=80',
  stats: [
    { label: 'Menu Items', value: String(menuItems.length), detail: 'A full 100-item Indian feed with proper regional variety.' },
    { label: 'Regional Focus', value: '4 Sections', detail: 'Indian thali, South Indian, North Indian, and tea all get dedicated space.' },
    { label: 'House Specials', value: '25 Featured', detail: 'Best-sellers and signature plates surfaced instead of buried.' },
    { label: 'Service Style', value: 'All Day', detail: 'Breakfast dosa, lunch thali, dinner curries, and tea in between.' },
  ],
  occasions: [
    {
      title: 'Breakfast & tiffin',
      description: 'Dosa, idli, pongal, filter coffee, and lighter South Indian comfort that actually belongs on the site.',
      href: '/menu',
      cta: 'Browse breakfast picks',
    },
    {
      title: 'Family thali meals',
      description: 'Big-format thalis and regional plates for the table, not just individual dishes floating without context.',
      href: '/thalis',
      cta: 'See thali specials',
    },
    {
      title: 'Tea breaks & evening snacks',
      description: 'Masala chai, kahwa, chaas, and lighter add-ons for office breaks and slow evenings.',
      href: '/tea-room',
      cta: 'Open tea room',
    },
  ],
};

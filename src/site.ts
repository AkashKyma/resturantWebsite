import { menuItems } from '@/data/menu';

export const restaurant = {
  name: 'Saffron Thali House',
  tagline: 'Regional Indian plates, long tea pours, and a billing workspace with seeded customer invoices.',
  address: '14 Spice Market Road, Bengaluru 560001',
  phone: '+91 80 5550 1482',
  email: 'hello@saffronthalihouse.in',
  hours: [
    'Mon–Thu: 11:00 AM – 10:30 PM',
    'Fri: 11:00 AM – 11:30 PM',
    'Sat: 8:00 AM – 11:30 PM',
    'Sun: 8:00 AM – 10:30 PM',
  ],
  heroImage: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1600&q=80',
  stats: [
    { label: 'Menu Items', value: String(menuItems.length), detail: 'Expanded past 100 items with real Indian categories instead of filler content.' },
    { label: 'Billing Customers', value: '12', detail: 'The new billing section includes seeded customer accounts ready for invoice creation.' },
    { label: 'Invoice Templates', value: '4', detail: 'Modern, Classic, Minimal, and Bold templates are available when creating invoices.' },
    { label: 'Serving Style', value: 'All Day', detail: 'Breakfast dosas, lunch thalis, dinner curries, and evening chai under one roof.' },
  ],
  occasions: [
    {
      title: 'Lunch thali runs',
      description: 'Fast, filling platters with curry, rice, bread, sides, and dessert for weekday comfort.',
      href: '/thalis',
      cta: 'Explore thalis',
    },
    {
      title: 'Breakfast & tiffin',
      description: 'Dosas, idlis, pongal, coffee, and soft morning plates built for South Indian cravings.',
      href: '/south-indian',
      cta: 'See breakfast menu',
    },
    {
      title: 'Chai evenings',
      description: 'Tea flights, snacks, and desserts for casual meetups, family catch-ups, and late conversations.',
      href: '/tea-house',
      cta: 'Open the tea house',
    },
    {
      title: 'Customer billing',
      description: 'Seeded invoices, multiple customer profiles, and template-based invoice creation in one billing workspace.',
      href: '/billing',
      cta: 'Open billing',
    },
  ],
};

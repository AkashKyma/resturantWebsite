import { menuItems } from '@/data/menu';

export const restaurant = {
  name: 'Juniper Table',
  tagline: 'Seasonal plates, warm lights, and a table worth lingering at.',
  address: '245 Orchard Lane, Portland, OR 97205',
  phone: '(503) 555-0148',
  email: 'hello@junipertable.com',
  hours: ['Mon–Thu: 4:00 PM – 10:00 PM', 'Fri: 4:00 PM – 11:00 PM', 'Sat: 10:00 AM – 11:00 PM', 'Sun: 10:00 AM – 9:00 PM'],
  heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
  stats: [
    { label: 'Menu Items', value: String(menuItems.length), detail: 'Freshly expanded with plenty of real choices across food and drinks.' },
    { label: 'Photo-Ready Plates', value: '100%', detail: 'Every category now carries high-quality imagery to make browsing feel complete.' },
    { label: 'Private Events', value: '3 Rooms', detail: 'Book the patio, chef counter, or candle room for celebrations.' },
    { label: 'Open Late', value: '7 Days', detail: 'Dinner, cocktails, and weekend brunch under one roof.' },
  ],
  occasions: [
    {
      title: 'Weeknight dinner',
      description: 'Fast ordering, hearty mains, and desserts that make staying in feel unnecessary.',
      href: '/order',
      cta: 'Start an order',
    },
    {
      title: 'Celebrations',
      description: 'Reserve for birthdays, date nights, or any excuse to dress slightly better than usual.',
      href: '/reservations',
      cta: 'Book a table',
    },
    {
      title: 'Group events',
      description: 'Browse event spaces, sample menus, and flexible hosting packages without chasing staff by phone.',
      href: '/events',
      cta: 'See event options',
    },
  ],
};

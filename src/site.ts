import { menuItems } from '@/data/menu';

export const restaurant = {
  name: 'Red Lantern House',
  tagline: 'Regional Chinese cuisine, dim sum lunches, wok-fired dinners, and a menu designed for proper browsing.',
  siteUrl: 'https://redlanternhouse.example.com',
  address: '88 Jade Market Street, San Francisco, CA 94108',
  phone: '+1 (415) 555-0188',
  email: 'hello@redlanternhouse.com',
  hours: [
    'Mon–Thu: 11:00 AM – 9:30 PM',
    'Fri: 11:00 AM – 10:30 PM',
    'Sat: 10:00 AM – 10:30 PM',
    'Sun: 10:00 AM – 9:30 PM',
  ],
  heroImage: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1600&q=80',
  stats: [
    { label: 'Menu Items', value: String(menuItems.length), detail: 'A full Chinese menu with dim sum, wok specialties, noodles, rice, desserts, and tea-house drinks.' },
    { label: 'Regional Paths', value: '4 Core', detail: 'Dim sum, Sichuan, noodle house, and tea-house browsing now lead the site instead of the old cuisine structure.' },
    { label: 'Photo Coverage', value: '30+', detail: 'Every major section has strong dish imagery so the menu feels complete and trustworthy.' },
    { label: 'Service Flow', value: 'All Day', detail: 'Brunch carts, lunch bowls, family-style dinners, and late tea all sit under one roof.' },
  ],
  occasions: [
    {
      title: 'Weekend dim sum',
      description: 'Dumplings, buns, cheung fun, and tea service for slow brunch tables and big group ordering.',
      href: '/dim-sum',
      cta: 'Explore dim sum',
    },
    {
      title: 'Sichuan dinner runs',
      description: 'Chili oil, peppercorn heat, wok-fired classics, and big mains for dinner-focused cravings.',
      href: '/sichuan',
      cta: 'See Sichuan menu',
    },
    {
      title: 'Noodle comfort bowls',
      description: 'Hand-pulled noodles, fried rice, congee, and quick favorites for solo meals or takeout.',
      href: '/noodle-house',
      cta: 'Open noodle house',
    },
    {
      title: 'Tea and dessert nights',
      description: 'Milk tea, jasmine pours, sesame sweets, mango desserts, and lighter late-evening stops.',
      href: '/tea-house',
      cta: 'Browse tea house',
    },
  ],
};

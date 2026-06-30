import { menuItems } from '@/data/menu';

export const restaurant = {
  name: 'Saffron Thali House',
  tagline: 'Regional Indian plates, long tea pours, and a menu built for proper browsing.',
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
    { label: 'Regional Sections', value: '4 Core', detail: 'Indian thali, South Indian, North Indian, and tea now lead the browsing experience.' },
    { label: 'Quality Images', value: '30+', detail: 'Every section is backed by stronger imagery coverage so the food pages actually feel complete.' },
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
      title: 'North Indian comfort food',
      description: 'Rich gravies, breads, kebabs, biryanis, and chaat with a dedicated route for dinner-focused browsing.',
      href: '/north-indian',
      cta: 'Browse North Indian',
    },
  ],
};

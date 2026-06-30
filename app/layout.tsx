import type { Metadata } from 'next';

import './globals.css';
import { Navbar } from '@/components/Navbar';
import { restaurant } from '@/src/site';

export const metadata: Metadata = {
  title: `${restaurant.name} | Restaurant Website`,
  description: restaurant.tagline,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

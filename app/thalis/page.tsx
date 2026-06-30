import { MenuSection } from '@/components/MenuSection';
import { SectionIntro } from '@/components/SectionIntro';
import { menuItems } from '@/data/menu';

const thaliItems = menuItems.filter((item) => item.category === 'Indian Thali');
const featured = thaliItems.filter((item) => item.featured).slice(0, 6);

export default function ThalisPage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Indian thali"
        title="Big platters, regional range, zero underfed-menu feeling."
        description="This page focuses on the complete-plate experience: curries, breads, rice, pickles, sweets, and regional thalis that actually feel worth opening."
      />
      <MenuSection
        title="Signature thalis"
        description="Chef-picked spreads for lunch tables, family orders, and guests who want the full Indian plate instead of piecing the meal together manually."
        items={featured}
      />
      <MenuSection
        title="Full thali selection"
        description="Browse every thali option from satvik and millet-led plates to seafood, dhaba, coastal, and festival-style combinations."
        items={thaliItems}
      />
    </main>
  );
}

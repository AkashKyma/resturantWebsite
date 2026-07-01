import { MenuSection } from '@/components/MenuSection';
import { SectionIntro } from '@/components/SectionIntro';
import { menuItems } from '@/data/menu';

const dimSumItems = menuItems.filter((item) => item.category === 'Dim Sum');
const featured = dimSumItems.filter((item) => item.featured).slice(0, 6);

export default function ThalisPage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Dim sum"
        title="Shareable baskets, brunch-table range, zero dead-route feeling."
        description="This preserved route now maps to the new dim sum experience so returning visitors still hit a strong Chinese cuisine page instead of outdated thali content."
      />
      <MenuSection
        title="Signature dim sum"
        description="Chef-picked baskets and pastries for group tables, brunch orders, and guests who want the full shareable spread instead of piecing the meal together manually."
        items={featured}
      />
      <MenuSection
        title="Full dim sum selection"
        description="Browse dumplings, buns, rice rolls, crisp bites, and dessert-leaning small plates in one dedicated route."
        items={dimSumItems}
      />
    </main>
  );
}

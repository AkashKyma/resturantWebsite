import { ImageShowcase } from '@/components/ImageShowcase';
import { MenuSection } from '@/components/MenuSection';
import { SectionIntro } from '@/components/SectionIntro';
import { menuItems } from '@/data/menu';

const dimSumItems = menuItems.filter((item) => item.category === 'Dim Sum');
const featuredDimSumItems = dimSumItems.filter((item) => item.featured).slice(0, 6);

export default function DimSumPage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Dim Sum"
        title="Steamed baskets, baked buns, and brunch-table momentum."
        description="Built for guests who want a dedicated dim sum path instead of digging through unrelated categories to find the shareable favorites."
      />
      <ImageShowcase items={dimSumItems.slice(0, 8)} />
      <MenuSection
        title="Featured dim sum"
        description="From har gow and siu mai to cheung fun, custard buns, and flaky pastry snacks, this route is tuned for brunch browsing and group ordering."
        items={featuredDimSumItems}
      />
      <MenuSection
        title="Full dim sum lineup"
        description="A fuller dim sum selection with dumplings, buns, crisp bites, rice rolls, and lighter desserts for the table that keeps ordering another round."
        items={dimSumItems}
      />
    </main>
  );
}

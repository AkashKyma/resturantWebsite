import { ImageShowcase } from '@/components/ImageShowcase';
import { MenuSection } from '@/components/MenuSection';
import { SectionIntro } from '@/components/SectionIntro';
import { menuItems } from '@/data/menu';

const northIndianItems = menuItems.filter((item) => item.category === 'North Indian');
const featuredNorthIndianItems = northIndianItems.filter((item) => item.featured).slice(0, 6);

export default function NorthIndianPage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="North Indian"
        title="Tandoor classics, rich gravies, breads, biryanis, and comfort-food depth."
        description="Built for diners who want a dedicated North Indian path instead of finding curries and breads mixed into the wider menu."
      />
      <ImageShowcase items={northIndianItems.slice(0, 8)} />
      <MenuSection
        title="Featured North Indian plates"
        description="Start with the signature dishes that define the richer, tandoor-forward side of the menu."
        items={featuredNorthIndianItems}
      />
      <MenuSection
        title="Full North Indian menu"
        description="Browse curries, breads, rice, chaat, kebab-house favorites, and dessert-led finishes in one place."
        items={northIndianItems}
      />
    </main>
  );
}

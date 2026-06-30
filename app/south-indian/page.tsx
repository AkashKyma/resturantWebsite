import { ImageShowcase } from '@/components/ImageShowcase';
import { MenuSection } from '@/components/MenuSection';
import { SectionIntro } from '@/components/SectionIntro';
import { menuItems } from '@/data/menu';

const southIndianItems = menuItems.filter((item) => item.category === 'South Indian');

export default function SouthIndianPage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="South Indian"
        title="Dosas, idlis, appams, biryanis, and proper tiffin-page depth."
        description="Built around breakfast, tiffin, and spice-forward Southern comfort with enough variety to support actual browsing instead of a token section."
      />
      <ImageShowcase items={southIndianItems.slice(0, 8)} />
      <MenuSection
        title="South Indian menu"
        description="From Mysore dosa and pongal to Malabar parotta and Hyderabadi biryani, this section keeps the regional range visible and useful."
        items={southIndianItems}
      />
    </main>
  );
}

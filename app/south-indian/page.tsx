import { ImageShowcase } from '@/components/ImageShowcase';
import { MenuSection } from '@/components/MenuSection';
import { SectionIntro } from '@/components/SectionIntro';
import { menuItems } from '@/data/menu';

const noodleHouseItems = menuItems.filter((item) => item.category === 'Noodle House');

export default function SouthIndianPage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Noodle House"
        title="Broth bowls, fried rice, stir-fried noodles, and dependable comfort-food depth."
        description="This preserved route now serves the Chinese noodle-house experience so older links still land somewhere useful instead of breaking or showing the wrong cuisine."
      />
      <ImageShowcase items={noodleHouseItems.slice(0, 8)} />
      <MenuSection
        title="Noodle-house menu"
        description="From hand-pulled noodles and chow fun to congee, rice bowls, and wok rice, this section keeps the everyday Chinese comfort range visible and practical."
        items={noodleHouseItems}
      />
    </main>
  );
}

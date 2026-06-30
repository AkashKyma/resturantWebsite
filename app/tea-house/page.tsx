import { MenuSection } from '@/components/MenuSection';
import { SectionIntro } from '@/components/SectionIntro';
import { menuItems } from '@/data/menu';

const teaItems = menuItems.filter((item) => item.category === 'Tea');
const desserts = menuItems.filter((item) => item.category === 'Desserts').slice(0, 6);

export default function TeaHousePage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Tea house"
        title="Chai, kahwa, filter coffee, and sweets for the slower side of the restaurant."
        description="This page gives the tea program its own identity instead of burying it under generic drinks. It is built for evening browsing, add-on orders, and dessert pairing."
      />
      <MenuSection
        title="Tea and coffee"
        description="House masala chai, kulhad pours, herbal brews, and South Indian filter coffee with enough range for repeat visits."
        items={teaItems}
      />
      <MenuSection
        title="Tea-time sweets"
        description="Pair the brews with Indian desserts like rasmalai, phirni, kulfi, jalebi rabri, and payasam."
        items={desserts}
      />
    </main>
  );
}

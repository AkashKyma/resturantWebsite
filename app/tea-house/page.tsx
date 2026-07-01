import { ImageShowcase } from '@/components/ImageShowcase';
import { MenuSection } from '@/components/MenuSection';
import { SectionIntro } from '@/components/SectionIntro';
import { menuItems } from '@/data/menu';

const teaItems = menuItems.filter((item) => item.category === 'Tea House');
const teaDesserts = menuItems.filter((item) => item.category === 'Desserts' || item.category === 'Drinks').slice(0, 12);

export default function TeaHousePage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Tea house"
        title="Jasmine pours, milk tea, desserts, and the slower side of the room."
        description="The tea-house route lets guests browse beverages, sweets, and lighter add-ons without scanning the full lunch-and-dinner menu."
      />
      <ImageShowcase items={teaItems.slice(0, 8)} />
      <MenuSection
        title="Tea and milk tea"
        description="From jasmine pearl and pu-erh to Hong Kong milk tea, boba, and herbal pours, this page collects the calmer late-day side of the restaurant."
        items={teaItems}
      />
      <MenuSection
        title="Desserts and cold drinks"
        description="Pair the tea menu with sesame sweets, mango desserts, fruit coolers, and lighter refreshers for brunch follow-ups or evening stops."
        items={teaDesserts}
      />
    </main>
  );
}

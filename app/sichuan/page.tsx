import { ImageShowcase } from '@/components/ImageShowcase';
import { MenuSection } from '@/components/MenuSection';
import { SectionIntro } from '@/components/SectionIntro';
import { menuItems } from '@/data/menu';

const sichuanItems = menuItems.filter((item) => item.category === 'Sichuan');
const featuredSichuanItems = sichuanItems.filter((item) => item.featured).slice(0, 6);

export default function SichuanPage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Sichuan"
        title="Peppercorn heat, chili oil depth, and proper dinner-table energy."
        description="This page is built for guests who want the spicy, numbing, wok-fired side of the menu without bouncing through unrelated sections."
      />
      <ImageShowcase items={sichuanItems.slice(0, 8)} />
      <MenuSection
        title="Featured Sichuan dishes"
        description="Start with mapo tofu, kung pao chicken, dan dan noodles, or big-format house signatures before dropping deeper into the full spicy lineup."
        items={featuredSichuanItems}
      />
      <MenuSection
        title="Full Sichuan lineup"
        description="A full pass across vegetables, noodles, soups, mains, rice, and dinner plates shaped around Sichuan flavor instead of generic takeout defaults."
        items={sichuanItems}
      />
    </main>
  );
}

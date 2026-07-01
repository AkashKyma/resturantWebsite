import { ImageShowcase } from '@/components/ImageShowcase';
import { MenuSection } from '@/components/MenuSection';
import { SectionIntro } from '@/components/SectionIntro';
import { menuItems } from '@/data/menu';

const noodleHouseItems = menuItems.filter((item) => item.category === 'Noodle House');
const featuredNoodleItems = noodleHouseItems.filter((item) => item.featured).slice(0, 6);

export default function NoodleHousePage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Noodle House"
        title="Broth bowls, wok noodles, fried rice, and everyday Chinese comfort."
        description="Built for guests who want a dedicated quick-meal path for bowls, rice, congee, and stir-fried staples instead of a one-size-fits-all menu page."
      />
      <ImageShowcase items={noodleHouseItems.slice(0, 8)} />
      <MenuSection
        title="Featured noodle-house favorites"
        description="Start with hand-pulled noodles, chow fun, wonton soup, fried rice, or the rice-bowl staples that anchor the all-day menu."
        items={featuredNoodleItems}
      />
      <MenuSection
        title="Full noodle-house lineup"
        description="A full browse across soups, stir-fries, rice bowls, congee, noodles, and fast lunch comfort designed for repeat ordering and takeout trust."
        items={noodleHouseItems}
      />
    </main>
  );
}

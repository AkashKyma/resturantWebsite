import { ImageShowcase } from '@/components/ImageShowcase';
import { SectionIntro } from '@/components/SectionIntro';
import { menuItems } from '@/data/menu';

const thalis = menuItems.filter((item) => item.category === 'Indian Thali').slice(0, 8);
const southIndian = menuItems.filter((item) => item.category === 'South Indian').slice(0, 8);
const northIndian = menuItems.filter((item) => item.category === 'North Indian').slice(0, 8);

export default function GalleryPage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Gallery"
        title="Real Indian menu coverage, not repeated filler photos."
        description="The gallery now sweeps through thalis, dosas, curries, and plated regional dishes so the restaurant looks fully stocked and visually credible."
      />
      <ImageShowcase items={thalis} />
      <ImageShowcase items={southIndian} />
      <ImageShowcase items={northIndian} />
    </main>
  );
}

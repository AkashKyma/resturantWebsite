import { ImageShowcase } from '@/components/ImageShowcase';
import { SectionIntro } from '@/components/SectionIntro';
import { menuItems } from '@/data/menu';

const dimSum = menuItems.filter((item) => item.category === 'Dim Sum').slice(0, 8);
const sichuan = menuItems.filter((item) => item.category === 'Sichuan').slice(0, 8);
const noodleHouse = menuItems.filter((item) => item.category === 'Noodle House').slice(0, 8);

export default function GalleryPage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Gallery"
        title="Real Chinese menu coverage, not leftover cuisine filler."
        description="The gallery now moves through dumplings, noodles, wok-fired mains, and plated tea-house moments so the remodel reads as a full cuisine shift."
      />
      <ImageShowcase items={dimSum} />
      <ImageShowcase items={sichuan} />
      <ImageShowcase items={noodleHouse} />
    </main>
  );
}

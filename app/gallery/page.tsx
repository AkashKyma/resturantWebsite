import { ImageShowcase } from '@/components/ImageShowcase';
import { SectionIntro } from '@/components/SectionIntro';
import { menuItems } from '@/data/menu';

export default function GalleryPage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Gallery"
        title="Regional Indian plates with enough visual range to feel alive."
        description="The gallery now pulls from thalis, dosa service, curries, and tea instead of repeating a tiny sample set."
      />
      <ImageShowcase items={menuItems.slice(0, 12)} />
      <ImageShowcase items={menuItems.slice(24, 36)} />
      <ImageShowcase items={menuItems.slice(72, 84)} />
    </main>
  );
}

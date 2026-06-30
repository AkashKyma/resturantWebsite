import { ImageShowcase } from '@/components/ImageShowcase';
import { SectionIntro } from '@/components/SectionIntro';
import { menuItems } from '@/data/menu';

export default function GalleryPage() {
  return (
    <main className="section-shell space-y-10">
      <SectionIntro
        eyebrow="Gallery"
        title="A fuller visual menu with actual browsing depth."
        description="Every category now has real image support, so the gallery page can do more than recycle the same few cards."
      />
      <ImageShowcase items={menuItems.slice(0, 12)} />
      <ImageShowcase items={menuItems.slice(24, 32)} />
    </main>
  );
}

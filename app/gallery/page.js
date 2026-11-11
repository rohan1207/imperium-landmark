import PageHero from "@/components/PageHero";
import GalleryView from "@/components/GalleryView";
import { GALLERY, IMPERIUM } from "@/lib/imperium";

export const metadata = {
  title: "Gallery",
  description: GALLERY.body || GALLERY.title,
};

export default function ImperiumGalleryPage() {
  return (
    <>
      <PageHero
        eyebrow={GALLERY.eyebrow}
        title={GALLERY.title}
        body={GALLERY.body}
        accent="presence"
      />
      <GalleryView />
    </>
  );
}

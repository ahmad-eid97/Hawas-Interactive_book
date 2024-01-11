//== Components
import { PageHeader, Galleries } from "@/components";
//= Api
import { getAllGalleries, getGalleryCategories } from '@/API/pages';
//= Types
import type { GalleryCategory, GalleryItem } from "@/types";

export async function generateMetadata() {
  return {
    title: `حواس - المعرض`,
    description: 'تصفح معرض حواس - شاهد صورًا توثق رحلتنا في تعزيز الصحة والأمان من خلال فعالياتنا ومشاريعنا'
  }
}

const Gallery: React.FC = async () => {
  let galleryData: GalleryItem[] = [];
  let categories: GalleryCategory[] = [];

  try {
    const data = await getAllGalleries({ limit: 6 });
    if (data) galleryData = data;
  } catch (err) { }

  try {
    const data = await getGalleryCategories();
    if (data) categories = data;
  } catch (err) { }

  return (
    <>
      <PageHeader title="ألبومات الصور" />
      <Galleries data={galleryData} categories={categories} />
    </>
  );
}

export default Gallery;
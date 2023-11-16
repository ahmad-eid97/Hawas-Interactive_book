//== Components
import { PageHeader, Galleries } from "@/components";

interface GalleryProps { }

const Gallery: React.FC<GalleryProps> = () => {
  return (
    <>
      <PageHeader title="ألبومات الصور" />
      <Galleries />
    </>
  );
}

export default Gallery;
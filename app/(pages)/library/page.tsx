//== Components
import { PageHeader } from "@/components";
import HawasLibrary from "@/components/HawasLibrary";
//= Api
import { getLibraryPageData } from '@/API/pages';
//= Types
import type { LibrayPageResponse } from "@/types";

export async function generateMetadata() {
  return {
    title: `حواس - مكتبة حواس`,
    description: 'استعرض تصنيفات حواس - اكتشف الموارد المختلفة التي تغطي مجموعة واسعة من مواضيع الصحة والأمان.'
  }
}

const Library = async () => {
  let fetchedData: LibrayPageResponse | null = null;

  try {
    const data = await getLibraryPageData();
    if (data) fetchedData = data;
  } catch (err) { }

  return (
    <div>
      <PageHeader title="مكتبة حواس" />
      <HawasLibrary data={fetchedData} />
    </div>
  )
}

export default Library;
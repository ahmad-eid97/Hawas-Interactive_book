//== Components
import { PageHeader, HawasFilms } from "@/components";
//= Api
import { getFilmsPageData } from '@/API/pages';
//= Types
import type { FilmsPageResponse } from "@/types";

export async function generateMetadata() {
  return {
    title: `حواس - أفلام حواس`,
    description: 'استعرض تصنيفات حواس - اكتشف الموارد المختلفة التي تغطي مجموعة واسعة من مواضيع الصحة والأمان.'
  }
}

const Films = async () => {
  let fetchedData: FilmsPageResponse | null = null;

  try {
    const data = await getFilmsPageData();
    if (data) fetchedData = data;
  } catch (err) { }

  return (
    <div>
      <PageHeader title="أفلام حواس" />
      <HawasFilms data={fetchedData} />
    </div>
  )
}

export default Films;
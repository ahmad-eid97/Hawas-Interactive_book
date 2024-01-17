//== Components
import { PageHeader, HawasWorkshops } from "@/components";
//= Api
import { getWorkshopsPageData } from '@/API/pages';
//= Types
import type { WorkshopsPageResponse } from "@/types";

export async function generateMetadata() {
  return {
    title: `حواس - ورشة عمل حواس`,
    description: 'استعرض تصنيفات حواس - اكتشف الموارد المختلفة التي تغطي مجموعة واسعة من مواضيع الصحة والأمان.'
  }
}

const Workshops = async () => {
  let fetchedData: WorkshopsPageResponse | null = null;

  try {
    const data = await getWorkshopsPageData();
    if (data) fetchedData = data;
  } catch (err) { }

  return (
    <div>
      <PageHeader title="ورشات حواس" />
      <HawasWorkshops data={fetchedData} />
    </div>
  )
}

export default Workshops;
//== Components
import { PageHeader, HawasPlays } from "@/components";
//= Api
import { getPlaysPageData } from '@/API/pages';
//= Types
import type { PlaysPageResponse } from "@/types";

export async function generateMetadata() {
  return {
    title: `حواس - مسرحيات حواس`,
    description: 'استعرض تصنيفات حواس - اكتشف الموارد المختلفة التي تغطي مجموعة واسعة من مواضيع الصحة والأمان.'
  }
}

const Plays = async () => {
  let fetchedData: PlaysPageResponse | null = null;

  try {
    const data = await getPlaysPageData();
    if (data) fetchedData = data;
  } catch (err) { }

  return (
    <div>
      <PageHeader title="مسرحيات حواس" />
      <HawasPlays data={fetchedData} />
    </div>
  )
}

export default Plays;
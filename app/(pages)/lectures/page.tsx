//== Components
import { PageHeader, HawasLectures } from "@/components";
//= Api
import { getLecturesPageData } from '@/API/pages';
//= Types
import type { LecturesPageResponse } from "@/types";

export async function generateMetadata() {
  return {
    title: `حواس - محاضرات حواس`,
    description: 'استعرض تصنيفات حواس - اكتشف الموارد المختلفة التي تغطي مجموعة واسعة من مواضيع الصحة والأمان.'
  }
}

const Lectures = async () => {
  let fetchedData: LecturesPageResponse | null = null;

  try {
    const data = await getLecturesPageData();
    if (data) fetchedData = data;
  } catch (err) { }

  return (
    <>
      <PageHeader title="محاضرات حواس" />
      <HawasLectures data={fetchedData} />
    </>
  )
}

export default Lectures;
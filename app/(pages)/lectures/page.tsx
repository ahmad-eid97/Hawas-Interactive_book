//== Components
import { PageHeader, HawasLectures } from "@/components";

export async function generateMetadata() {
  return {
    title: `حواس - محاضرات حواس`,
    description: 'استعرض تصنيفات حواس - اكتشف الموارد المختلفة التي تغطي مجموعة واسعة من مواضيع الصحة والأمان.'
  }
}

const Lectures = () => {
  return (
    <>
      <PageHeader title="محاضرات حواس" />
      <HawasLectures />
    </>
  )
}

export default Lectures;
//== Components
import { PageHeader, HawasFilms } from "@/components";

export async function generateMetadata() {
  return {
    title: `حواس - أفلام حواس`,
    description: 'استعرض تصنيفات حواس - اكتشف الموارد المختلفة التي تغطي مجموعة واسعة من مواضيع الصحة والأمان.'
  }
}

const Films = () => {
  return (
    <div>
      <PageHeader title="أفلام حواس" />
      <HawasFilms />
    </div>
  )
}

export default Films;
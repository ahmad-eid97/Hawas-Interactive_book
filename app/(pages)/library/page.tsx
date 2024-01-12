//== Components
import { PageHeader } from "@/components";
import HawasLibrary from "@/components/HawasLibrary";

export async function generateMetadata() {
  return {
    title: `حواس - مكتبة حواس`,
    description: 'استعرض تصنيفات حواس - اكتشف الموارد المختلفة التي تغطي مجموعة واسعة من مواضيع الصحة والأمان.'
  }
}

const Library = () => {
  return (
    <div>
      <PageHeader title="مكتبة حواس" />
      <HawasLibrary />
    </div>
  )
}

export default Library;
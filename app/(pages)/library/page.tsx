//== Components
import { PageHeader } from "@/components";

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
    </div>
  )
}

export default Library;
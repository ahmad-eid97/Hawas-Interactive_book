//== Components
import { PageHeader, HawasWorkshops } from "@/components";

export async function generateMetadata() {
  return {
    title: `حواس - ورشة عمل حواس`,
    description: 'استعرض تصنيفات حواس - اكتشف الموارد المختلفة التي تغطي مجموعة واسعة من مواضيع الصحة والأمان.'
  }
}

const Workshops = () => {
  return (
    <div>
      <PageHeader title="ورشات حواس" />
      <HawasWorkshops />
    </div>
  )
}

export default Workshops;
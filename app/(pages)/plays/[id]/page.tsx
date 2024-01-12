//== Components
import { PageHeader, HawasPlayDetails } from "@/components";

export async function generateMetadata() {
  return {
    title: `حواس - مسرحيات حواس`,
    description: 'استعرض تصنيفات حواس - اكتشف الموارد المختلفة التي تغطي مجموعة واسعة من مواضيع الصحة والأمان.'
  }
}

const Plays = () => {
  return (
    <div>
      <PageHeader title="مسرحيات حواس" />
      <HawasPlayDetails />
    </div>
  )
}

export default Plays;
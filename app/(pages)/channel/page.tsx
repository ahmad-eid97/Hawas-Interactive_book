//== Components
import { PageHeader, HawasChannel } from "@/components";

export async function generateMetadata() {
  return {
    title: `حواس - قناة حواس`,
    description: 'استعرض تصنيفات حواس - اكتشف الموارد المختلفة التي تغطي مجموعة واسعة من مواضيع الصحة والأمان.'
  }
}

const Channel = () => {
  return (
    <div>
      <PageHeader title="قناة حواس" />
      <HawasChannel />
    </div>
  )
}

export default Channel;
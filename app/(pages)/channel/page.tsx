//== Components
import { PageHeader, HawasChannel } from "@/components";
//= Api
import { getAllSettings } from '@/API/pages';

export async function generateMetadata() {
  return {
    title: `حواس - قناة حواس`,
    description: 'استعرض تصنيفات حواس - اكتشف الموارد المختلفة التي تغطي مجموعة واسعة من مواضيع الصحة والأمان.'
  }
}

const Channel = async () => {
  let settingsData: Awaited<ReturnType<typeof getAllSettings>> | null = null;

  try {
    const data = await getAllSettings();
    if (data) settingsData = data;
  } catch (err) { }

  return (
    <div>
      <PageHeader title="قناة حواس" />
      <HawasChannel channelLink={settingsData?.youtube_url || ''} />
    </div>
  )
}

export default Channel;
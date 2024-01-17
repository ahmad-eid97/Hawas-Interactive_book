//== Components
import { PageHeader, HawasPlayDetails } from "@/components";
//= Api
import { getPlaysPageData } from '@/API/pages';
//= Types
import type { IPlay } from "@/types";

export async function generateMetadata() {
  return {
    title: `حواس - مسرحيات حواس`,
    description: 'استعرض تصنيفات حواس - اكتشف الموارد المختلفة التي تغطي مجموعة واسعة من مواضيع الصحة والأمان.'
  }
}

type Props = { params: { title: string } }

const Plays = async ({ params: { title } }: Props) => {
  let fetchedData: IPlay | null = null;

  try {
    const data = await getPlaysPageData();
    if (data) {
      const play = data.options.find(opt => opt.title === decodeURIComponent(title));
      if (play) fetchedData = play;
    }
  } catch (err) { }

  return (
    <div>
      <PageHeader title="مسرحيات حواس" />
      <HawasPlayDetails data={fetchedData} />
    </div>
  )
}

export default Plays;
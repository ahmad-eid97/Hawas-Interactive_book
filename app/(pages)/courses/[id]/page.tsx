//== Components
import { PageHeader, CourseDetails as CourseDetailsComponent } from "@/components";
//= Api
import { getCourseById } from "@/API/pages";
//= Types
import type { ICourse } from '@/types';

export async function generateMetadata() {
  return {
    title: `حواس - الدورات`,
    description: 'اكتسب المهارات والمعرفة من خلال دورات حواس - اختر من بين تشكيلة من الدورات المصممة لتعزيز صحتك وسلامتك'
  }
}

interface CourseDetailsProps {
  params: {
    id: number;
  }
}

const CourseDetails: React.FC<CourseDetailsProps> = async ({ params: { id } }) => {
  let courseDetails: ICourse | null = null;

  try {
    const data = await getCourseById(id);
    if (data) courseDetails = data;
  } catch (err) { }

  return (
    <>
      <PageHeader title={courseDetails?.title || 'تفاصيل المدونة'} />
      <CourseDetailsComponent data={courseDetails} />
    </>
  );
}

export default CourseDetails;
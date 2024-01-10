//== Components
import { PageHeader, CourseDetails as CourseDetailsComponent } from "@/components";
//= Api
import { getCourseById } from "@/API/pages";
//= Types
import type { ICourse } from '@/types';


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
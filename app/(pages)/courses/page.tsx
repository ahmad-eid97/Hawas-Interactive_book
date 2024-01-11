//== Components
import { PageHeader, CoursesList } from "@/components";
//= Api
import { getAllCourses } from '@/API/pages';
//= Types
import type { Course } from "@/types";

export async function generateMetadata() {
  return {
    title: `حواس - الدورات`,
    description: 'اكتسب المهارات والمعرفة من خلال دورات حواس - اختر من بين تشكيلة من الدورات المصممة لتعزيز صحتك وسلامتك'
  }
}

const CoursesPage: React.FC = async () => {
  let coursesData: Course[] = [];

  try {
    const data = await getAllCourses({ limit: 15 });
    if (data) coursesData = data;
  } catch (err) { }

  return (
    <>
      <PageHeader title="دورات حواس" />
      <CoursesList data={coursesData} />
    </>
  );
}

export default CoursesPage;
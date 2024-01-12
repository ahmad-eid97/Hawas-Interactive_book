//== API
import { getBookLessons } from "@/API/lessons";
import { PageHeader, LessonsWrapper } from "@/components";

export async function generateMetadata() {
  return {
    title: `حواس - الدروس`,
    description: 'استعرض مجموعتنا من الكتب - اكتشف الموارد المفيدة التي تساعدك على تعزيز فهمك للصحة وتحقيق الأمان.'
  }
}

const Lessons = async ({ params }: { params: { id: number } }) => {
  const lessons = await getBookLessons(params.id);

  return (
    <>
      <PageHeader title="الفصول" padding="228px 0" bgColor="var(--main-color)" color="#fff" />
      <LessonsWrapper lessons={lessons} />
    </>
  )
}

export default Lessons
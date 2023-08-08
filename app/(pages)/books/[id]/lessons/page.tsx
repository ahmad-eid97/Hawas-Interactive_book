//== API
import { getBookLessons } from "@/API/lessons";
import { PageHeader, LessonsWrapper } from "@/components";

const Lessons = async ({ params }: { params: { id: number } }) => {
  const lessons = await getBookLessons(params.id);

  return (
    <>
      <PageHeader title="الدروس" padding="228px 0" bgColor="var(--main-color)" color="#fff" />
      <LessonsWrapper lessons={lessons} />
    </>
  )
}

export default Lessons
//== API
import { getBookLessons } from "@/API/lessons";
import { LessonsWrapper } from "@/components";

const Lessons = async ({ params }: { params: { id: number } }) => {
  const lessons = await getBookLessons(params.id);

  return (
    <>
      <LessonsWrapper lessons={lessons} />
    </>
  )
}

export default Lessons
//== API
import { getBookLessons } from "@/API/lessons";
import { PageHeader, LessonsWrapper } from "@/components";

export const metadata = {
  title: 'Hawas | lessons',
  description: "Experience the power of a dynamic book designed specifically for primary school children, offering an immersive journey filled with captivating visuals, hands-on exercises, and vibrant storytelling to foster a love for learning"
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
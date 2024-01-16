//== Components
import { BookPagesWrapper } from "@/components";
//== API
import { getLessonPages } from "@/API/lessonPages";

export const metadata = {
  title: 'Hawas | lesson',
  description: "Experience the power of a dynamic book designed specifically for primary school children, offering an immersive journey filled with captivating visuals, hands-on exercises, and vibrant storytelling to foster a love for learning"
}

const Book = async ({ params }: { params: { id: number } }) => {
  const response = await getLessonPages(params.id);

  return (
    <>
      <BookPagesWrapper data={response?.data?.data} bookId={response?.data?.data?.book.id} nextLesson={response?.data?.data?.next_lesson} prevLesson={response?.data?.data?.prev_lesson} />
    </>
  )
}

export default Book;
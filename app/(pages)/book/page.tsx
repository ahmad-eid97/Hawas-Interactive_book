//== Components
import { BookPages, NextButton } from "@/components";
//== API
import { getLessonPages } from "@/API/lessonPages";

export const metadata = {
  title: 'Hawas | book',
  description: "Experience the power of a dynamic book designed specifically for primary school children, offering an immersive journey filled with captivating visuals, hands-on exercises, and vibrant storytelling to foster a love for learning"
}

const Book = async () => {
  const response = await getLessonPages(`/e-books/books/all_pages_by_lesson/2`);

  return (
    <>
      <BookPages data={response?.data?.data} />
      <NextButton />
    </>
  )
}

export default Book;
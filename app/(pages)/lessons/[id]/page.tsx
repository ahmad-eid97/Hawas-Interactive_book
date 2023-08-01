//== Components
import { BookPages, NextButton } from "@/components";
//== API
import { getLessonPages } from "@/API/lessonPages";

export const metadata = {
  title: 'Hawas | book',
  description: "Experience the power of a dynamic book designed specifically for primary school children, offering an immersive journey filled with captivating visuals, hands-on exercises, and vibrant storytelling to foster a love for learning"
}

const Book = async ({ params }: { params: { id: number } }) => {
  const response = await getLessonPages(params.id);

  return (
    <>
      <BookPages data={response?.data?.data} />
      <NextButton />
    </>
  )
}

export default Book;
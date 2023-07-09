//== Components
import BookPages from "@/components/book/BookPages";

export const metadata = {
  title: 'Hawas | book',
  description: "Experience the power of a dynamic book designed specifically for primary school children, offering an immersive journey filled with captivating visuals, hands-on exercises, and vibrant storytelling to foster a love for learning"
}

const Book = () => {
  return (
    <>
      <BookPages />
    </>
  )
}

export default Book;
//== Components
import { PageHeader, BooksWrapper } from "@/components";
//== API
import { getBooks } from "@/API/books";

export const metadata = {
  title: 'Hawas | books',
  description: "Experience the power of a dynamic book designed specifically for primary school children, offering an immersive journey filled with captivating visuals, hands-on exercises, and vibrant storytelling to foster a love for learning"
}

const Books: React.FC = async () => {
  const data = await getBooks();

  return (
    <>
      <PageHeader title="كتب حواس" padding="228px 0" bgColor="var(--main-color)" color="#fff" />
      <BooksWrapper books={data.books} />
    </>
  )
}

export default Books
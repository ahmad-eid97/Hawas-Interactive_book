//== Components
import { PageHeader, BooksWrapper } from "@/components";
//== API
import { getBooks } from "@/API/books";

export async function generateMetadata() {
  return {
    title: `حواس - الكتب`,
    description: 'استعرض مجموعتنا من الكتب - اكتشف الموارد المفيدة التي تساعدك على تعزيز فهمك للصحة وتحقيق الأمان.'
  }
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
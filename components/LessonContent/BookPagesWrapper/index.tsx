//== Components
import BookPagesWrapper from "./Wrapper";
//== Contexts
import ContextProvider from "./PagesContext/context";

interface CProps {
  data: { book: any, content: any[], quizzes: any[], current_lesson: any };
  bookId: number;
  nextLesson: any;
  prevLesson: any;
  lessonId: number;
}

function Wrapper({ data, bookId, nextLesson, prevLesson, lessonId }: CProps) {
  return (
    <ContextProvider>
      <BookPagesWrapper initialData={data} bookId={bookId} nextLesson={nextLesson} prevLesson={prevLesson} lessonId={lessonId} />
    </ContextProvider>
  )
}

export default Wrapper
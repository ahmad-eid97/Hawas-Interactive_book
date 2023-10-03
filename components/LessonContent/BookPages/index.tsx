"use client";
//== Modules
import { Flippy, FrontCover, BackCover, Page, Lesson } from "@/components";
//== Component Logic
import useLogic from "./logic";
//== Styles
import styles from "./bookPages.module.scss";

interface CProps {
  data: { book: any, content: any[], quizzes: any[], current_lesson: any }
}

const BookPages = ({ data }: CProps) => {
  const { pageLoaded, bookWidth, bookHeight, flippy } = useLogic();

  return (
    <div className={styles.bookPages}>
      {pageLoaded ?
        <Flippy
          pageWidth={bookWidth}
          pageHeight={bookHeight}
          rtl={true}
          backSkin="#34495e"
          pageSkin="#eee"
          breakpoint={992}
          flippingTime={500}
          disableSound={false}
          // flipNext={(pageNum: number) => goToNextPage(pageNum)}
          // flipPrev={goToPrevPage}
          ref={flippy}
        >
          <FrontCover cover={data?.book?.logo_file} lessonNumber={data?.current_lesson.sort} lessonTitle={data?.current_lesson?.title} />
          <Lesson lessonNumber={data?.current_lesson.sort} lessonTitle={data?.current_lesson?.title} content={data?.content} />
          <Page quizzes={data?.quizzes} />
          <BackCover />
        </Flippy>
        :
        null
      }
    </div>
  )
}

export default BookPages
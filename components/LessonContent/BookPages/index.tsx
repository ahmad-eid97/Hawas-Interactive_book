"use client";
//== Modules, useEffect
import { Flippy, FrontCover, BackCover, Page, Lesson } from "@/components";
//== Component Logic
import useLogic from "./logic";
//== Styles
import styles from "./bookPages.module.scss";
import { useEffect, useState } from "react";

interface CProps {
  data: { book: any, content: any[], quizzes: any[], current_lesson: any };
  flippy: any;
  bookId: number;
}

const BookPages = ({ data, flippy, bookId }: CProps) => {
  const { pageLoaded, bookWidth, bookHeight } = useLogic();
  const [content, setContent] = useState<any[]>([]);

  useEffect(() => {
    setContent(data?.content);
  }, [data]);

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
          ref={flippy}
        >
          <FrontCover cover={data?.current_lesson?.cover} lessonTitle={data?.current_lesson?.title} />
          <Lesson
            lessonNumber={data?.current_lesson.sort}
            lessonTitle={data?.current_lesson?.title}
            content={content}
          />
          <Page quizzes={data?.quizzes} bookId={bookId} />
          <BackCover />
        </Flippy>
        :
        null
      }
    </div>
  )
}

export default BookPages
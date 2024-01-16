'use client';
import { useRef } from "react";
//== Components
import { BookPages, NextButton } from "@/components";

interface CProps {
  data: { book: any, content: any[], quizzes: any[], current_lesson: any };
  bookId: number;
  nextLesson: any;
  prevLesson: any;
}

const BookPagesWrapper = ({ data, bookId, nextLesson, prevLesson }: CProps) => {
  const flippy = useRef(null);

  return (
    <>
      <BookPages data={data} flippy={flippy} />
      <NextButton bookId={bookId} nextLesson={nextLesson} prevLesson={prevLesson} flippy={flippy} />
    </>
  )
}

export default BookPagesWrapper
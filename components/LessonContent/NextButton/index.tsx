"use client";
//= Utils
import { isDemo } from "@/utils/isDemo";
//== Hooks
import Link from 'next/link';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './nextButton.module.scss';

interface CProps {
  bookId: number;
  nextLesson: any;
  prevLesson: any;
  flippy: any;
}

const NextButton = ({ bookId, nextLesson, prevLesson, flippy }: CProps) => {
  const { mounted, goToNextLesson, goToPreviousLesson } = useLogic();

  if (!mounted) return null;
  return (
    <div className={styles.nextButton}>
      {prevLesson ?
        <button onClick={() => goToPreviousLesson(prevLesson.id)} className={styles.first}>
          <i className="fa-duotone fa-arrow-right"></i>
          السابق: {prevLesson.title}
        </button>
        :
        null
      }
      <button className={styles.smallScreenBtn} onClick={() => flippy.flipPrev()}><i className="fa-solid fa-angles-right"></i></button>
      <button className={styles.middle}>
        <Link href={`/books/${bookId}/lessons`}>
          <i className="fa-regular fa-house"></i>
        </Link>
      </button>
      <button className={styles.smallScreenBtn} onClick={() => flippy.flipNext()}><i className="fa-solid fa-angles-left"></i></button>
      {
        nextLesson ?
          <button disabled={isDemo() && nextLesson.sort > 3 ? true : false} onClick={() => goToNextLesson(nextLesson.id, nextLesson.sort)} className={styles.last}>
            التالي: {nextLesson.title}
            <i className="fa-duotone fa-arrow-left"></i>
          </button>
          :
          null
      }
    </div >
  )
}

export default NextButton;
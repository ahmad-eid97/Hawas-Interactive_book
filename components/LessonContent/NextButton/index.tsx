"use client";
//== Hooks
import Link from 'next/link';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './nextButton.module.scss';

interface CProps {
  nextLesson: any,
  prevLesson: any
}

const NextButton = ({ nextLesson, prevLesson }: CProps) => {
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
      <button className={styles.middle}>
        <Link href="/">
          <i className="fa-regular fa-house"></i>
        </Link>
      </button>
      {
        nextLesson ?
          <button onClick={() => goToNextLesson(nextLesson.id)} className={styles.last}>
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
"use client";
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
        <button onClick={() => goToPreviousLesson(prevLesson.id)}>
          <i className="fa-duotone fa-arrow-right"></i>
          الفصل السابق
        </button>
        :
        null
      }
      {nextLesson ?
        <button onClick={() => goToNextLesson(nextLesson.id)}>
          الفصل التالي
          <i className="fa-duotone fa-arrow-left"></i>
        </button>
        :
        null
      }
    </div>
  )
}

export default NextButton;
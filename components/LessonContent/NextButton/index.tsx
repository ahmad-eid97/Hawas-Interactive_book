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
  const { mounted } = useLogic();

  console.log(nextLesson);
  console.log(prevLesson);

  if (!mounted) return null;
  return (
    <div className={styles.nextButton}>
      {prevLesson ?
        <button>
          <i className="fa-duotone fa-arrow-right"></i>
          الدرس السابق
        </button>
        :
        null
      }
      {nextLesson ?
        <button>
          الدرس التالي
          <i className="fa-duotone fa-arrow-left"></i>
        </button>
        :
        null
      }
    </div>
  )
}

export default NextButton;
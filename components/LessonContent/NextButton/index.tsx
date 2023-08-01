"use client";
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './nextButton.module.scss'

const NextButton = () => {
  const { mounted } = useLogic();

  if (!mounted) return null;
  return (
    <div className={styles.nextButton}>
      <i className="fa-duotone fa-arrow-left"></i>
      الدرس التالي
    </div>
  )
}

export default NextButton;
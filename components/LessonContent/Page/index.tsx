"use client";
//== Component Logic
import useLogic from "./logic";
//== Components
import { Pagination, Success, Fail } from '@/components';
//== Styles
import styles from './page.module.scss';

interface CProps {
  quizzes: any[]
}

const Page = ({ quizzes }: CProps) => {
  const { renderQuiz, changePage, correctAnswer, wrongAnswer } = useLogic({ quizzes });

  return (
    <div className={styles.page}>
      {renderQuiz()}
      <Pagination count={quizzes.length} changePage={changePage} />
      {correctAnswer && <Success />}
      {wrongAnswer && <Fail />}
    </div>
  )
}

export default Page;
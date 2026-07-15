"use client";
//== Component Logic
import useLogic from "./logic";
//== Components
import { Pagination, Success, Fail } from '@/components';
//== Styles
import styles from './page.module.scss';

interface CProps {
  quizzes: any[];
  bookId: number;
}

const Page = ({ quizzes, bookId }: CProps) => {
  const { renderQuiz, changePage, correctAnswer, wrongAnswer } = useLogic({ quizzes, bookId });

  return (
    <div className={styles.page}>
      <div className={styles.quiz}>
        {renderQuiz()}
      </div>
      <Pagination count={quizzes?.length} changePage={changePage} />
      {correctAnswer && <Success />}
      {wrongAnswer && <Fail />}
    </div>
  )
}

export default Page;
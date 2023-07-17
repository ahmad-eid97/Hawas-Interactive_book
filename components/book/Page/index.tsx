"use client";
//== Component Logic
import useLogic from "./logic";
//== Components
import { Pagination, Success, Fail } from '@/components';
//== Styles
import styles from './page.module.scss';

const Page = () => {
  const { ComponentRendered, pageNum, changePage, correctAnswer, wrongAnswer } = useLogic();

  return (
    <div className={styles.page}>
      {ComponentRendered[pageNum]}
      <Pagination count={Object.keys(ComponentRendered).length} changePage={changePage} />
      {correctAnswer && <Success />}
      {wrongAnswer && <Fail />}
    </div>
  )
}

export default Page;
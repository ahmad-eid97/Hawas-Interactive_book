"use client";
//== Component Logic
import useLogic from "./logic";
//== Components
import { Pagination } from '@/components';
//== Styles
import styles from './page.module.scss';
import { useEffect } from "react";

const Page = () => {
  const { ComponentRendered, pageNum, changePage } = useLogic();

  return (
    <div className={styles.page}>
      {ComponentRendered[pageNum]}
      <Pagination pageNum={pageNum} changePage={changePage} />
    </div>
  )
}

export default Page;
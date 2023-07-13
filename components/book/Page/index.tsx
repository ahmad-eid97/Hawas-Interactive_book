"use client";
//== Component Logic
import useLogic from "./logic";
//== Components
import { Pagination } from '@/components';
//== Styles
import styles from './page.module.scss';
import { useEffect } from "react";
//== Component Interface
interface CProps {
  pageNum: number
  changePage: (e: any, pageNum: number) => void
}

const Page = ({ pageNum, changePage }: CProps) => {
  const { ComponentRendered } = useLogic();

  useEffect(() => {
    console.log('===========>', pageNum)
  }, [pageNum])

  return (
    <div className={styles.page}>
      {ComponentRendered[pageNum]}
      <Pagination pageNum={pageNum} changePage={changePage} />
    </div>
  )
}

export default Page;
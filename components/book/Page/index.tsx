"use client";
//== Component Logic
import useLogic from "./logic";
//== Components
import { Pagination } from '@/components';
//== Styles
import styles from './page.module.scss';
//== Component Interface
interface CProps {
  pageNum: number
  goToNextPage: (e: any, pageNum: number) => void
}

const Page = ({ pageNum, goToNextPage }: CProps) => {
  const { ComponentRendered } = useLogic();

  return (
    <div className={styles.page}>
      {ComponentRendered[pageNum]}
      <Pagination pageNum={pageNum} goToNextPage={goToNextPage} />
    </div>
  )
}

export default Page;
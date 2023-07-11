"use client";
//== Modules
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
//== Styles
import styles from './pagination.module.scss';
//== Component Interface
interface CProps {
  pageNum: number
  goToNextPage: (e: any, pageNum: number) => void
}

const PagePagination = ({ pageNum, goToNextPage }: CProps) => {
  return (
    <div className={styles.pagination}>
      <Stack spacing={2}>
        <Pagination count={16} variant="outlined" shape="rounded" page={pageNum} onChange={goToNextPage} />
      </Stack>
    </div>
  )
}

export default PagePagination;
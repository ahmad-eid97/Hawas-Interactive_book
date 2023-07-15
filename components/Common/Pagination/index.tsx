"use client";
//== Modules
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
//== Styles
import styles from './pagination.module.scss';
//== Component Interface
interface CProps {
  count: number
  changePage: (e: any, pageNum: number) => void
}

const PagePagination = ({ count, changePage }: CProps) => {

  return (
    <div className={styles.pagination}>
      <Stack spacing={2}>
        <Pagination count={count} variant="outlined" shape="rounded" onChange={changePage} />
      </Stack>
    </div>
  )
}

export default PagePagination;
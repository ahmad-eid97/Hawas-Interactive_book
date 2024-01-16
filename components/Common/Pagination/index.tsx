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
  position?: string;
}

const PagePagination = ({ count, changePage, position }: CProps) => {

  return (
    <div className={`${styles.pagination} ${position === 'top' ? styles.top : ''}`}>
      <Stack spacing={2}>
        {count <= 1 ? null : <Pagination count={count} variant="outlined" shape="rounded" onChange={changePage} />}
      </Stack>
    </div>
  )
}

export default PagePagination;
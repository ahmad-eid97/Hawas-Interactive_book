"use client";
//== Modules
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
//== Styles
import styles from './pagination.module.scss';

const PagePagination = () => {
  return (
    <div className={styles.pagination}>
      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </div>
  )
}

export default PagePagination;
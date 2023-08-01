"use client";
//== Components
import { BookBox } from '@/components';
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//== Types
import { Book } from '../types';
//== Styles
import styles from './booksWrapper.module.scss';

interface CProps {
  books: Book[]
}

const BooksWrapper = ({ books }: CProps) => {
  return (
    <Container maxWidth="xl" className={styles.booksWrapper}>
      <h1>Our Books</h1>
      <Grid container justifyContent="center">
        {books.map(book => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
            <BookBox book={book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default BooksWrapper
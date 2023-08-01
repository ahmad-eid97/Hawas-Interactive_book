"use client";
//== Components
import { LessonBox } from '@/components';
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//== Types
import { Lesson } from '../types';
//== Styles
import styles from './lessonsWrapper.module.scss';

interface CProps {
  lessons: Lesson[]
}

const BooksWrapper = ({ lessons }: CProps) => {
  return (
    <Container maxWidth="xl" className={styles.booksWrapper}>
      <h1>Book Lessons</h1>
      <Grid container justifyContent="center" spacing={3}>
        {lessons?.map(lesson => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={lesson.id}>
            <LessonBox lesson={lesson} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default BooksWrapper
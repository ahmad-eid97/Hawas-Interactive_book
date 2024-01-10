"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//== Components
import Course from './Course';
//= Types
import type { Course as ICourse } from '@/types';
//== Styles
import styles from './courses.module.scss';

interface CoursesProps {
  data: ICourse[];
}

const CoursesList: React.FC<CoursesProps> = ({ data }) => {
  return (
    <section className={styles.courses}>
      <Container maxWidth="xl">
        <Grid container className={styles.header} alignItems="center" >
          <Grid item md xs={12}>
            <p>اكتشف برنامجك المثالي في دوراتنا.</p>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {
            data.length > 0 &&
            data.map(course => (
              <Grid item xs={12} sm={6} lg={4} key={course.id}>
                <Course data={course} />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </section>
  );
}

export default CoursesList;
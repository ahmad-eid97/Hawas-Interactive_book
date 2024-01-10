//== Utils
import Link from 'next/link';
//== Modules
import Grid from '@mui/material/Grid';
//= Types
import type { Course as ICourse } from '@/types';
//== Styles
import styles from './course.module.scss';

interface CourseProps {
  data: ICourse;
}

const Course: React.FC<CourseProps> = ({ data }) => {
  return (
    <div className={`${styles.card}`}>
      <div className={styles.cardImgContainer}>
        <img src={data.images[0]} alt="product_title" />
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.details}>
          <Link href={`/courses/${data.id}`}><h4>{data.title}</h4></Link>
          <p>{data.summary}</p>
          <Grid container alignItems="flex-end" >
            <Grid item xs>
              <ul className={styles.nav}>
                <li className={styles.navItem}>
                  <div className={styles.icon}>
                    <i className="fa-regular fa-clock"></i>
                  </div>
                  <div className={styles.text}>{data.course_duration} دقيقة</div>
                </li>
              </ul>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Course;
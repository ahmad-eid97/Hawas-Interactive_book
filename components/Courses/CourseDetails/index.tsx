"use client";
import Link from 'next/link';
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//= Types
import type { ICourse } from '@/types';
//== Styles
import styles from './course_details.module.scss';

interface CoursesDetailsProps {
  data: ICourse | null;
}

const CoursesDetails: React.FC<CoursesDetailsProps> = ({ data }) => {
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'ILS',
  });

  return (
    <section className={styles.course_details}>
      <Container maxWidth="xl">
        <Grid container className={styles.body} justifyContent="center" alignItems="start" spacing={5}>
          <Grid item lg={12} md={12} sm={12} xs={12} className={styles.blogBody}>
            <div className={styles.header}>
              <img src={data?.images[0] || ''} alt="" />
              <div className={styles.meta}>
                <ul>
                  <li>
                    <div className={styles.icon}>
                      <i className="fa-regular fa-chalkboard-user"></i>
                    </div>
                    <p className={styles.text}>{data?.instructor_name || ''}</p>
                  </li>
                  <li>
                    <div className={styles.icon}>
                      <i className="fa-regular fa-money-bill"></i>
                    </div>
                    <p className={styles.text}>{formatter.format(data?.current_price || 0)}</p>
                  </li>
                  <li>
                    <div className={styles.icon}>
                      <i className="fa-regular fa-clock"></i>
                    </div>
                    <p className={styles.text}>{data?.course_duration} دقيقة</p>
                  </li>
                </ul>
                <Link href="/contact-us">أشترك الان</Link>
              </div>
            </div>
            <div className={styles.content}>
              <h2 className={styles.blogTitle}>{data?.title || ''}</h2>
              <p>{data?.overview || ''}</p>
              <p>{data?.summary || ''}</p>
              <div>
                <div className={styles.shareLinks}>
                  <span>مشاركة</span>
                  {
                    typeof window !== 'undefined' &&
                    <ul>
                      <li><a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(window.location.href)}`} target='_blank'><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href={`https://twitter.com/intent/tweet?text=${data?.title} ${encodeURI(window.location.href)}`} target='_blank'><i className="fa-brands fa-twitter"></i></a></li>
                      <li><a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURI(window.location.href)}`} target='_blank'><i className="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                  }
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default CoursesDetails;
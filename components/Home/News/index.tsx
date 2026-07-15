"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//== Components
import Post from './Post';
//= Types
import type { Blog } from '@/types';
//== Utils
import Link from 'next/link';
//== Styles
import styles from './news.module.scss';

interface NewsProps {
  data: Blog[];
}

const News: React.FC<NewsProps> = ({ data }) => {
  return (
    <section className={styles.News}>
      <div className={`${styles.divider}`}></div>
      <Container maxWidth="xl">
        <Grid container className={styles.header}>
          <Grid item xs >
            <h1>احدث المقالات</h1>
            <p>اكتشف برنامجك المثالي في دوراتنا.</p>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {
            data.length > 0 &&
            data.slice(0, 3).map(article => (
              <Grid item xs={12} sm={6} lg={4} key={article.id}>
                <Post data={article} />
              </Grid>
            ))
          }
        </Grid>
      </Container>

      <div className={styles.btn}>
        <Link href="/blogs" className="hvr-sweep-to-left">
          عرض المزيد
        </Link>
      </div>

      <div className={`${styles.divider} ${styles.bottom}`}></div>
    </section>
  );
}

export default News;
"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//== Components
import Post from './Post';
//= Types
import type { Blog } from '@/types';
//== Styles
import styles from './news.module.scss';

interface NewsProps {
  data: Blog[];
}

const News: React.FC<NewsProps> = ({ data }) => {
  return (
    <section className={styles.News}>
      <Container maxWidth="xl">
        <Grid container className={styles.header}>
          <Grid item xs >
            <h1>احدث المقالات</h1>
            <p>اكتشف برنامجك المثالي في دوراتنا.</p>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {
            data.length > 0 &&
            data.map(article => (
              <Grid item lg={4} sm={6} xs={12} key={article.id}>
                <Post data={article} />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </section>
  );
}

export default News;
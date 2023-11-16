"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//== Components
import Post from './Post';
//== Styles
import styles from './news.module.scss';

interface NewsProps { }

const News: React.FC<NewsProps> = () => {
  return (
    <section className={styles.News}>
      <Container maxWidth="xl">
        <Grid container className={styles.header} alignItems="center">
          <Grid item xs >
            <h1>احدث المقالات</h1>
            <p>اكتشف برنامجك المثالي في دوراتنا.</p>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item lg={4} sm={6} xs={12}>
            <Post />
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
            <Post />
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
            <Post />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default News;
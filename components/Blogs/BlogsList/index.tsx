"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//== Components
import BlogItem from './BlogItem';
//== Styles
import styles from './blogsList.module.scss';

interface BlogsListProps { }

const BlogsList: React.FC<BlogsListProps> = () => {
  return (
    <section className={styles.blog}>
      <Container maxWidth="xl">
        <Grid container className={styles.header} alignItems="center" spacing={5}>
          <Grid item xs={12}>
            <h2>Blogs</h2>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4}>
            <BlogItem />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <BlogItem />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <BlogItem />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <BlogItem />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <BlogItem />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <BlogItem />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default BlogsList;
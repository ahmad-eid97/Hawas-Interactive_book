"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//== Components
import BlogItem from './BlogItem';
//= Types
import type { Blog } from '@/types';
//== Styles
import styles from './blogsList.module.scss';

interface BlogsListProps {
  data: Blog[];
}

const BlogsList: React.FC<BlogsListProps> = ({ data }) => {
  return (
    <section className={styles.blog}>
      <Container maxWidth="xl">
        <Grid container className={styles.header} alignItems="center" spacing={5}>
          <Grid item xs={12}>
            <h2>المقالات</h2>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {
            data.length > 0 &&
            data.map(article => (
              <Grid item xs={12} sm={6} lg={4} key={article.id}>
                <BlogItem data={article} />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </section>
  );
}

export default BlogsList;
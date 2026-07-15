"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//== Components
import BlogItem from '@/components/Blogs/BlogsList/BlogItem';
import SingleEvent from '@/components/Home/EventsList/SingleEvent';
import Service from '@/components/Services/ServicesList/Item';
//= Types
import type { SearchResponse } from '@/types';
//== Styles
import styles from './searchResult.module.scss';

interface SearchResultProps {
  data: SearchResponse;
}

const SearchResult: React.FC<SearchResultProps> = ({ data }) => {
  return (
    <section className={styles.searchResult}>
      <Container maxWidth="xl">
        <Grid container className={styles.header} alignItems="center" spacing={5}>
          <Grid item xs={12}>
            <h2>المقالات</h2>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {
            data?.blogs && data?.blogs?.length > 0 ?
              data.blogs.map(article => (
                <Grid item xs={12} sm={6} lg={4} key={article.id}>
                  <BlogItem data={article} />
                </Grid>
              ))
              :
              <p className={styles.noData}>لا توجد مقالات مطابقة</p>
          }
        </Grid>

        <br />
        <hr />

        <Grid container className={styles.header} alignItems="center" spacing={5}>
          <Grid item xs={12}>
            <h2>المناسبات</h2>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {
            data?.events && data.events?.length > 0 ?
              data.events.map(event => (
                <Grid item xs={12} key={event.id}>
                  <SingleEvent data={event} />
                </Grid>
              ))
              :
              <p className={styles.noData}>لا توجد مناسبات مطابقة</p>
          }
        </Grid>

        <br />
        <hr />

        <Grid container className={styles.header} alignItems="center" spacing={5}>
          <Grid item xs={12}>
            <h2>الخدمات</h2>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {
            data?.services && data?.services?.length > 0 ?
              data.services.map(service => (
                <Grid item xs={12} key={service.id}>
                  <Service item={service} />
                </Grid>
              ))
              :
              <p className={styles.noData}>لا توجد خدمات مطابقة</p>
          }
        </Grid>
      </Container>
    </section>
  );
}

export default SearchResult;
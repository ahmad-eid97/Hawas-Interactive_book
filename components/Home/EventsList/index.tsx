"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//== Components
import SingleEvent from './SingleEvent';
//== Styles
import styles from './eventList.module.scss';

interface EventsListProps {
}

const EventsList: React.FC<EventsListProps> = () => {
  return (
    <section className={styles.events}>
      <Container maxWidth="xl">
        <Grid container className={styles.header} alignItems="center">
          <Grid item xs >
            <h1>مناسبات واحداث قادمة</h1>
            <p>اكتشف برنامجك المثالي في دوراتنا.</p>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SingleEvent />
          </Grid>
          <Grid item xs={12}>
            <SingleEvent />
          </Grid>
          <Grid item xs={12}>
            <SingleEvent />
          </Grid>
          <Grid item xs={12}>
            <SingleEvent />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default EventsList;
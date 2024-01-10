"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//== Components
import SingleEvent from './SingleEvent';
//= Types
import { IEvent } from '@/types';
//== Styles
import styles from './eventList.module.scss';

interface EventsListProps {
  data: IEvent[];
}

const EventsList: React.FC<EventsListProps> = ({ data }) => {
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
          {
            data.length > 0 &&
            data.map((event) => (
              <Grid item xs={12} key={event.id}>
                <SingleEvent data={event} />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </section>
  );
}

export default EventsList;
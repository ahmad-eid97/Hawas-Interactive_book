"use client";
//== Utils
import Link from 'next/link';
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//= Api
import { getExperinceSection } from '@/API/pages';
//== Styles
import styles from './experince.module.scss';

interface ExperinceProps {
  data: Awaited<ReturnType<typeof getExperinceSection>> | null;
}

const Experince: React.FC<ExperinceProps> = ({ data }) => {
  return (
    <section className={`${styles.why}`}>
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          <Grid item lg={6} xs={12}>
            <img src={data?.image as string || '/images/home/cover-1.png'} alt="event_cover" />
          </Grid>
          <Grid item lg={6} xs={12}>
            <h1 className="font-lora fw-bold text-black mb-4">{data?.title as string || ''}</h1>
            <p className="mb-5 line-height-lg">
              {data?.description as string || ''}
            </p>
            <Link href="/about-us">
              <i className="fa-solid fa-arrow-right-long"></i>
              المزيد
            </Link>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Experince;
"use client";
//== Utils
import Link from 'next/link';
//== Modules
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { Icon } from '@iconify/react';
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
    <div className={styles.section_wrapper}>
      <MouseParallaxContainer>
        <div className={styles.parallaxCursor}>
          <MouseParallaxChild factorX={0.03} factorY={0.02} >
            <img className="img-fluid" src="/images/parallax/new/1.svg" alt="Layer" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.04} factorY={0.03} >
            <img className="img-fluid" src="/images/parallax/new/2.svg" alt="Layer" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.06} factorY={0.02} >
            <img className="img-fluid" src="/images/parallax/new/3.svg" alt="Layer" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.01} factorY={0.04} >
            <img className="img-fluid" src="/images/parallax/new/4.svg" alt="Layer" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.01} factorY={0.05} >
            <img className="img-fluid" src="/images/parallax/new/5.svg" alt="Layer" />
          </MouseParallaxChild>
        </div>
        <section className={`${styles.why}`}>
          <div className={`${styles.divider}`}></div>
          <Container maxWidth="xl">
            <Grid container spacing={6} alignItems="center">
              <Grid item lg={6} xs={12}>
                <div className={styles.imageWrapper}>
                  <img src="/images/shapes/dots-grid.svg" alt="" className={`deco-shape ${styles.decoDots}`} />
                  <img src="/images/shapes/sparkle-white.svg" alt="" className={`deco-shape anim-pop ${styles.decoSparkle}`} />
                  <img src={data?.image as string || '/images/home/cover-1.png'} alt="event_cover" />
                </div>
              </Grid>
              <Grid item lg={6} xs={12}>
                <h1 className={`font-lora fw-bold text-black mb-4 ${styles.title}`}>{data?.title as string || ''}</h1>
                <p className="mb-5 line-height-lg">
                  {data?.description as string || ''}
                </p>
                <Link href="/about-us" className="hvr-sweep-to-left">
                  <Icon icon="mdi:read-more-outline" />
                  أعرف المزيد
                </Link>
              </Grid>
            </Grid>
          </Container>
          <div className={`${styles.divider} ${styles.bottom}`}></div>
        </section>
      </MouseParallaxContainer>
    </div>
  );
}

export default Experince;
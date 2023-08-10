"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
//== Styles
import styles from './banner.module.scss';

interface BannerProps { }

const Banner: React.FC<BannerProps> = () => {
  return (
    <MouseParallaxContainer>
      <section className={`${styles.intro}`}>
        <div className={styles.parallaxCursor}>
          <MouseParallaxChild factorX={0.03} factorY={0.05} >
            <img className="img-fluid" src="/images/parallax/layer-01.svg" alt="Layer" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.04} factorY={0.06} >
            <img className="img-fluid" src="/images/parallax/layer-02.svg" alt="Layer" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.05} factorY={0.07} >
            <img className="img-fluid" src="/images/parallax/layer-03.svg" alt="Layer" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.04} factorY={0.08} >
            <img className="img-fluid" src="/images/parallax/layer-04.svg" alt="Layer" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.06} factorY={0.07} >
            <img className="img-fluid" src="/images/parallax/layer-05.svg" alt="Layer" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.06} factorY={0.08} >
            <img className="img-fluid" src="/images/parallax/layer-06.svg" alt="Layer" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.02} factorY={0.06} >
            <img className="img-fluid" src="/images/parallax/layer-07.svg" alt="Layer" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.07} factorY={0.05} >
            <img className="img-fluid" src="/images/parallax/layer-08.svg" alt="Layer" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.03} factorY={0.09} >
            <img className="img-fluid" src="/images/parallax/layer-09.svg" alt="Layer" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.07} factorY={0.08} >
            <img className="img-fluid" src="/images/parallax/layer-10.svg" alt="Layer" />
          </MouseParallaxChild>
        </div>
        <Container maxWidth="xl" className={styles.introContent}>
          <Grid container alignItems="center">
            <Grid item xs={12} md={7} lg={6}>
              <h1>
                افضل البرامج التربوية  <span>بوسائل تدريبية متطورة</span>
              </h1>
              <form>
                <div className={styles.inputGroup}>
                  <div className={styles.inputGroupPrepend}>
                    <span className="input-group-text border-right-0 text-primary icon-xs rounded-left-xl">
                      <i className="fa-regular fa-magnifying-glass"></i>
                    </span>
                  </div>
                  <input type="search" placeholder="ابحث في حواس …" />
                </div>
              </form>
              <p> بحث شائع: تطوير ، أعمال ، تصميم ، تسويق </p>
            </Grid>
            <Grid item xs={12} md={5} lg={6} className={styles.bannerImg}>
              <img src="/images/home/intro.png" alt="banner" />
            </Grid>
          </Grid>
        </Container>
        <div className={styles.shapeBottom}>
          <svg viewBox="0 0 1920 230" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M0,229l1920,0V-0.4c0,25.8-19.6,47.3-45.2,49.8L54.8,223.8C25.4,226.6,0,203.5,0,174V229z"></path>
          </svg>

        </div>
      </section>
    </MouseParallaxContainer>
  );
}

export default Banner;
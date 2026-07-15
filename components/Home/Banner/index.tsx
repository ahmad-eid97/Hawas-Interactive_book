"use client";
import { useRouter } from 'next/navigation';
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
//= Types
import type { Slider } from '@/types';
//== Styles
import styles from './banner.module.scss';

interface BannerProps {
  data: Slider | null;
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  const router = useRouter();

  function handleSearch() {
    const btn = document.querySelector<HTMLSpanElement>('.btn-search')!
    btn.classList.add('loading-btn');

    const searchValue = document.querySelector<HTMLInputElement>('#search-input')!.value;
    router.push('/search?keyword=' + searchValue);
  }

  function handleEnterClick(event: React.KeyboardEvent<HTMLInputElement>) {
    event.preventDefault();
    if (event.key === 'Enter') handleSearch();
  }

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
          <img src="/images/shapes/sparkle.svg" alt="" className={`deco-shape anim-pop ${styles.decoSparkle1}`} />
          <img src="/images/shapes/sparkle-white.svg" alt="" className={`deco-shape anim-pop anim-delay-2 ${styles.decoSparkle2}`} />
          <img src="/images/shapes/paper-plane.svg" alt="" className={`deco-shape anim-drift ${styles.decoPlane}`} />
          <img src="/images/shapes/ring.svg" alt="" className={`deco-shape anim-float-slow anim-delay-1 ${styles.decoRing}`} />
          <Grid container alignItems="center">
            <Grid item xs={12} md={12} lg={6}>
              <h1 className={styles.title}>{data?.title || ''}</h1>
              <p>أفضل البرامج التربوية بوسائل تدريبية متطورة</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className={styles.inputGroup}>
                  <div className={styles.inputGroupPrepend}>
                    <span className="input-group-text border-right-0 text-primary icon-xs rounded-left-xl btn-search" onClick={handleSearch}>
                      <i className="fa-regular fa-magnifying-glass"></i>
                    </span>
                  </div>
                  <input type="search" placeholder="ابحث في حواس …" id="search-input" onKeyUp={handleEnterClick} />
                </div>
              </form>
            </Grid>
            <Grid item xs={12} md={12} lg={6} className={styles.bannerImg}>
              <img src="/images/shapes/blob-white.svg" alt="" className={`deco-shape ${styles.decoBlob}`} />
              <img src="/images/shapes/sun.svg" alt="" className={`deco-shape anim-spin ${styles.decoSun}`} />
              <div className={styles.bookStack}>
                <img src="/images/books/1.png" alt="banner" />
                <img src="/images/books/2.png" alt="banner" />
              </div>
            </Grid>
          </Grid>
        </Container>
        <div className={`${styles.divider}`}></div>
        <div className={`${styles.divider_op}`}></div>
      </section>
    </MouseParallaxContainer>
  );
}

export default Banner;
"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
//== Components
import Course from './Course';
//== Utils
import Link from 'next/link';
//= Types
import type { Course as ICourse } from '@/types';
//== Styles
import 'swiper/css';
import "swiper/css/pagination";
import styles from './courses.module.scss';

interface CoursesProps {
  data: ICourse[];
}

const Courses: React.FC<CoursesProps> = ({ data }) => {
  return (
    <>
      <MouseParallaxContainer>
        <section className={styles.courses}>
          <div className={`${styles.divider}`}></div>
          <div className={styles.parallaxCursor}>
            <MouseParallaxChild factorX={0.03} factorY={0.05} >
              <img className="img-fluid" src="/images/parallax/layer-20.svg" alt="Layer" />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.04} factorY={0.06} >
              <img className="img-fluid" src="/images/parallax/layer-21.svg" alt="Layer" />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.05} factorY={0.07} >
              <img className="img-fluid" src="/images/parallax/layer-22.svg" alt="Layer" />
            </MouseParallaxChild>
          </div>
          <Container maxWidth="xl">
            <Grid container className={styles.header} alignItems="center" >
              <Grid item md xs={12}>
                <h1 className="mb-1">دورات مميزة</h1>
                <p>اكتشف برنامجك المثالي في دوراتنا.</p>
              </Grid>
            </Grid>
            {
              data.length > 0 &&
              <Swiper
                slidesPerView={1}
                dir='rtl'
                spaceBetween={20}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                breakpoints={{
                  500: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
              >
                {
                  data.map(course => (
                    <SwiperSlide key={course.id}>
                      <Course data={course} />
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            }
          </Container>

          <div className={styles.btn}>
            <Link href="/courses" className="hvr-sweep-to-left">
              عرض المزيد
            </Link>
          </div>
        </section>
      </MouseParallaxContainer>
    </>
  );
}

export default Courses;
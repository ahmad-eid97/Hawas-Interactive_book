"use client";
//== Modules
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
//== Components
import Testimonial from "./Testimonial";
//== Styles
import styles from './testimonials.module.scss';

interface TestimonialsProps { }

const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <section className={styles.testimonials}>
      <Container maxWidth="xl" >
        <Grid container className={styles.header} alignItems="center" >
          <Grid item md xs={12}>
            <h1 className="mb-1">What our students have to say</h1>
            <p className="font-size-lg text-capitalize">Discover your perfect program in our courses.</p>

          </Grid>
        </Grid>
        <Swiper
          dir="rtl"
          loop={true}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={0}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
        >
          <SwiperSlide>
            <Testimonial />
            <i className="fa-sharp fa-solid fa-ditto"></i>
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial />
            <i className="fa-sharp fa-solid fa-ditto"></i>
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial />
            <i className="fa-sharp fa-solid fa-ditto"></i>
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial />
            <i className="fa-sharp fa-solid fa-ditto"></i>
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial />
            <i className="fa-sharp fa-solid fa-ditto"></i>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
}

export default Testimonials;
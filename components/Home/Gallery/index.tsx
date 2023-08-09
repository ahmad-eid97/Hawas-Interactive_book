"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Lightbox from "yet-another-react-lightbox";
//== Component Logic
import useLogic from './logic';
//== Styles
import "yet-another-react-lightbox/styles.css";
import styles from './gallery.module.scss';

interface GalleryProps { }

import image1 from "../../../public/images/home/photo-23.jpg";
import image2 from "../../../public/images/home/photo-24.jpg";
import image3 from "../../../public/images/home/photo-25.jpg";
import image4 from "../../../public/images/home/photo-26.jpg";
import image5 from "../../../public/images/home/photo-27.jpg";
import image6 from "../../../public/images/home/photo-28.jpg";
import image7 from "../../../public/images/home/photo-29.jpg";
import image8 from "../../../public/images/home/photo-30.jpg";

const Gallery: React.FC<GalleryProps> = () => {
  const { items, open, setOpen } = useLogic();

  return (
    <section className={styles.gallery}>
      <Container maxWidth="xl">
        <div className="text-center mb-md-8 mb-5 text-capitalize">
          <h1 className="font-lora fw-bold mb-1">معرض الصور</h1>
          <p>اكتشف برنامجك المثالي في دوراتنا.</p>
        </div>
        <Grid container spacing={3}>
          {items.map((item) => (
            <Grid item xs={12} sm={6} md={3} className={styles.imageWrapper} key={item.id}>
              <div onClick={() => setOpen(true)} className={styles.image}>
                <img src={item.image} className="img-fluid" alt="..." />
                <div className={styles.meta}>
                  <div className={styles.icon}>
                    <i className="fa-regular fa-magnifying-glass-plus"></i>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[image1, image2, image3, image4, image5, image6, image7, image8]}
      />
    </section>
  );
}

export default Gallery;
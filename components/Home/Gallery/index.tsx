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

const Gallery: React.FC<GalleryProps> = () => {
  const { items, open, setOpen, openImage, imageIndex } = useLogic();

  return (
    <section className={styles.gallery}>
      <Container maxWidth="xl">
        <div className="text-center mb-md-8 mb-5 text-capitalize">
          <h1 className="font-lora fw-bold mb-1">معرض الصور</h1>
          <p>اكتشف برنامجك المثالي في دوراتنا.</p>
        </div>
        <Grid container spacing={3}>
          {items.map((item, idx) => (
            <Grid item xs={12} sm={6} md={3} className={styles.imageWrapper} key={item.id}>
              <div onClick={() => openImage(idx)} className={styles.image}>
                <img src={item.src} className="img-fluid" alt="..." />
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
        index={imageIndex}
        open={open}
        close={() => setOpen(false)}
        slides={[...items]}
      />
    </section>
  );
}

export default Gallery;
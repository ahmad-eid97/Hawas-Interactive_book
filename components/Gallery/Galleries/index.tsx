"use client";
//== Modules
import Lightbox from "yet-another-react-lightbox";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//== Component Logic
import useLogic from "./logic";
//= Types
import type { GalleryItem, GalleryCategory } from '@/types';
//== Styles
import "yet-another-react-lightbox/styles.css";
import styles from './galleries.module.scss';

interface GalleriesProps {
  data: GalleryItem[];
  categories: GalleryCategory[];
}

const Galleries: React.FC<GalleriesProps> = ({ data, categories }) => {
  const { open, imageIndex, setOpen, openImage, filter, handleFilterClick, images } = useLogic({ data, categories });
  const filteredImages = filter === 'all' ? images : images.filter((image) => image.category === filter);

  return (
    <>
      <Container maxWidth="xl" className={styles.gallery}>
        <ul className={styles.nav}>
          <li className="nav-item">
            <a onClick={() => handleFilterClick('all')} className={filter === 'all' ? styles.active : ''}>
              الكل
            </a>
          </li>
          {
            categories.length > 0 &&
            categories.map((category) => (
              <li className="nav-item" key={category.id}>
                <a onClick={() => handleFilterClick(category.name)} className={filter === category.name ? styles.active : ''}>
                  {category.name}
                </a>
              </li>
            ))
          }
        </ul>

        <Grid container spacing={3}>
          {filteredImages.map((image, idx) => (
            <Grid item xs={12} sm={4} md={3} key={image.id}>
              <div className={styles.item} onClick={() => openImage(idx)}>
                <img src={image.src} alt={image.alt} />
                <div className={styles.meta}>
                  <div className={styles.icon}>
                    <svg width="30" height="30" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.3272 10.8975H20.6028V16.5998H14.8105V19.4059H20.6028V25.1982H23.3272V19.4059H29.1113V16.5998H23.3272V10.8975Z" fill="currentColor"></path>
                      <path d="M21.9604 0C11.9957 0 3.91267 8.07486 3.91267 18.0478C3.91267 22.4411 5.48346 26.4662 8.09327 29.5996L0.509281 37.11C-0.16976 37.789 -0.16976 38.8117 0.509281 39.4907C1.18832 40.1698 2.21097 40.1698 2.89001 39.4907L10.4413 31.9395C13.5665 34.5329 17.5753 36.0873 21.9522 36.0873C31.917 36.0873 40 28.0125 40 18.0396C40 8.06668 31.9251 0 21.9604 0ZM21.9604 32.7739C13.8283 32.7739 7.23424 26.1799 7.23424 18.0478C7.23424 9.91563 13.8283 3.32157 21.9604 3.32157C30.0926 3.32157 36.6866 9.91563 36.6866 18.0478C36.6866 26.1799 30.0926 32.7739 21.9604 32.7739Z" fill="currentColor"></path>
                    </svg>
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
        slides={images}
      />
    </>
  );
}

export default Galleries;
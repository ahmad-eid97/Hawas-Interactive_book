"use client";
//== Utils
import Link from 'next/link';
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//== Styles
import styles from './portfolio.module.scss';

interface PortfolioProps { }

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <>
      <Container maxWidth="xl" className={`${styles.portfolio}`}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} lg={3}>
            <div className={styles.project}>
              <div className={styles.projectImage}>
                <img src="/images/home/photo-23.jpg" alt="ogency" />
              </div>
              <div className={styles.projectContent}>
                <p className={styles.projectCats}>
                  <Link href="/services">Graphic Design</Link>
                </p>
                <h3 className={styles.projectTitle}>
                  <Link href="/portfolio-details">Project Name</Link>
                </h3>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <div className={styles.project}>
              <div className={styles.projectImage}>
                <img src="/images/home/photo-23.jpg" alt="ogency" />
              </div>
              <div className={styles.projectContent}>
                <p className={styles.projectCats}>
                  <Link href="/services">Graphic Design</Link>
                </p>
                <h3 className={styles.projectTitle}>
                  <Link href="/portfolio-details">Project Name</Link>
                </h3>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <div className={styles.project}>
              <div className={styles.projectImage}>
                <img src="/images/home/photo-23.jpg" alt="ogency" />
              </div>
              <div className={styles.projectContent}>
                <p className={styles.projectCats}>
                  <Link href="/services">Graphic Design</Link>
                </p>
                <h3 className={styles.projectTitle}>
                  <Link href="/portfolio-details">Project Name</Link>
                </h3>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <div className={styles.project}>
              <div className={styles.projectImage}>
                <img src="/images/home/photo-23.jpg" alt="ogency" />
              </div>
              <div className={styles.projectContent}>
                <p className={styles.projectCats}>
                  <Link href="/services">Graphic Design</Link>
                </p>
                <h3 className={styles.projectTitle}>
                  <Link href="/portfolio-details">Project Name</Link>
                </h3>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <div className={styles.project}>
              <div className={styles.projectImage}>
                <img src="/images/home/photo-23.jpg" alt="ogency" />
              </div>
              <div className={styles.projectContent}>
                <p className={styles.projectCats}>
                  <Link href="/services">Graphic Design</Link>
                </p>
                <h3 className={styles.projectTitle}>
                  <Link href="/portfolio-details">Project Name</Link>
                </h3>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <div className={styles.project}>
              <div className={styles.projectImage}>
                <img src="/images/home/photo-23.jpg" alt="ogency" />
              </div>
              <div className={styles.projectContent}>
                <p className={styles.projectCats}>
                  <Link href="/services">Graphic Design</Link>
                </p>
                <h3 className={styles.projectTitle}>
                  <Link href="/portfolio-details">Project Name</Link>
                </h3>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Portfolio;
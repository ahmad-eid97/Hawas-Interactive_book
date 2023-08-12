"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//== Styles
import styles from './portfolioDetails.module.scss';

interface PortfolioDetailsProps { }

const PortfolioDetails: React.FC<PortfolioDetailsProps> = () => {
  return (
    <>
      <Container maxWidth="xl" className={styles.portfolio}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <div className={styles.projectImage}>
              <img src="/images/home/photo-23.jpg" alt="ogency" />
            </div>
          </Grid>
          <Grid item lg={7} xs={12}>
            <div className={styles.portfolioDetails}>
              <h3 className={styles.title}>Product development</h3>
              <p className={styles.text}>Neque porro est qui dolorem ipsum quia quaed
                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes
                port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem
                Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <p className={styles.textLead}>Biophilia is the idea that humans possess an innate
                tendency to seek connections with nature. The term translates</p>
              <p className={styles.text}>When an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.
                Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus
                eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <p className={styles.text}>Neque porro est qui dolorem ipsum quia quaed
                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes
                port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem
                Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div className={styles.pointsBox}>
                <h3>Project challenges</h3>
                <ul>
                  <li>
                    <div className={styles.icon}>
                      <span className="fa fa-check"></span>
                    </div>
                    <div className={styles.text}>
                      <p>Nemo enim ipsam voluptatem quia voluptas mus et iusto odio</p>
                    </div>
                  </li>
                  <li>
                    <div className={styles.icon}>
                      <span className="fa fa-check"></span>
                    </div>
                    <div className={styles.text}>
                      <p>Nemo enim ipsam voluptatem quia voluptas mus et iusto odio</p>
                    </div>
                  </li>
                  <li>
                    <div className={styles.icon}>
                      <span className="fa fa-check"></span>
                    </div>
                    <div className={styles.text}>
                      <p>Nemo enim ipsam voluptatem quia voluptas mus et iusto odio</p>
                    </div>
                  </li>

                </ul>
              </div>
              <p className={styles.text}>When an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </Grid>
          <Grid item lg={5} xs={12}>
            <div className={styles.portfolioSummary}>
              <ul className="list-unstyled portfolio-details__info-list">
                <li>
                  <span>Date:</span>
                  <p>23 April 2023</p>
                </li>
                <li>
                  <span>Services:</span>
                  <p>Digital, Marketing</p>
                </li>
                <li>
                  <span>Client:</span>
                  <p>Mike Hardson</p>
                </li>
                <li>
                  <span>Location:</span>
                  <p>Broklyn, New York</p>
                </li>
              </ul>
              <div className={styles.portfolioSocial}>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}

export default PortfolioDetails;
"use client";
//== Utils
import Link from 'next/link';
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//== Styles
import styles from './footer.module.scss';

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={`${styles.footer}`}>
      <Container maxWidth="xl" >
        <Grid container>
          <Grid item lg={4} md={4} xs={12}>
            <img src="./images/navbar/hawaafinal.png" alt="..." />
            <a href="#">support@gridsapps.com</a>
            <ul className={styles.socials}>
              <li   >
                <a href="#"    >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li   >
                <a href="#"    >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li   >
                <a href="#"    >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li   >
                <a href="#"    >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item lg={2} md={4} xs={12} className={styles.widgit}>
            <h5>
              Our Company
            </h5>
            <ul>
              <li >
                <a href="#" >
                  Our Company
                </a>
              </li>
              <li >
                <a href="#" >
                  About Us
                </a>
              </li>
              <li >
                <a href="#" >
                  Contact Us
                </a>
              </li>
              <li >
                <a href="#" >
                  Community
                </a>
              </li>
              <li >
                <a href="#" >
                  Student Perks
                </a>
              </li>
              <li >
                <a href="#" >
                  Blog
                </a>
              </li>
              <li >
                <a href="#" >
                  Affiliate Program
                </a>
              </li>
              <li >
                <a href="#" >
                  Careers
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item lg={2} md={4} xs={12} className={styles.widgit}>
            <h5>
              Topics
            </h5>
            <ul>
              <li >
                <a href="#" >
                  HTML
                </a>
              </li>
              <li >
                <a href="#" >
                  CSS
                </a>
              </li>
              <li >
                <a href="#" >
                  Design
                </a>
              </li>
              <li >
                <a href="#" >
                  JavaScript
                </a>
              </li>
              <li >
                <a href="#" >
                  Ruby
                </a>
              </li>
              <li >
                <a href="#" >
                  PHP
                </a>
              </li>
              <li >
                <a href="#" >
                  Android
                </a>
              </li>
              <li >
                <a href="#" >
                  Development Tools
                </a>
              </li>
              <li >
                <a href="#" >
                  Business
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item lg={4} md={8} xs={12} className={styles.widgit}>
            <h5>
              Subscribe our newsletter
            </h5>
            <p>Your download should start automatically, if not  Click here. Should I give up, huh?.</p>
            <form>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Enter your email" />
                <button className={styles.inputGroupAppend} type="button">Subscribe</button>
              </div>
            </form>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.footerBottom}>
              <Grid container justifyContent="center">
                <Grid item lg="auto" xs={12}>
                  <p>Copyright © 2023 GridsApps. All Right Reserved.</p>
                </Grid>
                <Grid item lg md="auto" xs={12}>
                  <div className={styles.links}>
                    <ul>
                      <li>
                        <Link href="#">Home</Link>
                      </li>
                      <li>
                        <Link href="#">Site Map</Link>
                      </li>
                      <li>
                        <Link href="#">Privacy policy</Link>
                      </li>
                      <li>
                        <Link href="#">Web Use Policy</Link>
                      </li>
                      <li>
                        <Link href="#">Cookie Policy</Link>
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
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
              شركتا
            </h5>
            <ul>
              <li >
                <a href="#" >
                  من نحن
                </a>
              </li>
              <li >
                <a href="#" >
                  تواصل معنا
                </a>
              </li>
              <li >
                <a href="#" >
                  مجتمعنا
                </a>
              </li>
              <li >
                <a href="#" >
                  الكتب
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item lg={2} md={4} xs={12} className={styles.widgit}>
            <h5>
              مواضيعنا
            </h5>
            <ul>
              <li >
                <a href="#" >
                  الكتب
                </a>
              </li>
              <li >
                <a href="#" >
                  الدروس
                </a>
              </li>
              <li >
                <a href="#" >
                  الاسئلة
                </a>
              </li>
              <li >
                <a href="#" >
                  الألعاب
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item lg={4} md={8} xs={12} className={styles.widgit}>
            <h5>
              إشترك معنا
            </h5>
            <p>أرسل إلينا بريدك الإلكتروني لتحصل علي كل جديد عن شركتنا والعروض المقدمة.</p>
            <form>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="البريد الإلكتروني" />
                <button className={styles.inputGroupAppend} type="button">إشترك الاَن</button>
              </div>
            </form>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.footerBottom}>
              <p>حقوق النشر © 2023 GridsApps. جميع الحقوق محفوظة.</p>
              <div className={styles.links}>
                <ul>
                  <li>
                    <Link href="#">الصفحة الرئيسية</Link>
                  </li>
                  <li>
                    <Link href="#">لوحة التحكم</Link>
                  </li>
                  <li>
                    <Link href="#">الكتب</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
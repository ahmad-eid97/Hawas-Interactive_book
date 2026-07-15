"use client";
//== Utils
import Link from 'next/link';
import toast from 'react-hot-toast';
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//= Api
import { getAllSettings, subscribeToNewsletter } from '@/API/pages';
//= Types
import { FooterItem, FooterSocialLinks } from '@/types';
//== Styles
import styles from './footer.module.scss';

interface FooterProps {
  data: {
    links: FooterItem[];
    settingsData: Awaited<ReturnType<typeof getAllSettings>> | null;
  }
}

const Footer: React.FC<FooterProps> = ({ data: { links, settingsData } }) => {
  async function handleSubscribeToNewsLetter(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const btn = event.currentTarget;
    btn.classList.add('loading-btn');

    const email = document.querySelector<HTMLInputElement>('#newsletter-email')!;

    const response = await subscribeToNewsletter(email.value);

    if (response && response.success) {
      toast.success('شكراً لتواصلك معنا, تم إشتراكك بنجاح');
      email.value = ''
    }

    btn.classList.remove('loading-btn');
  }

  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.divider}`}></div>
      <Container maxWidth="xl" style={{ position: 'relative', 'zIndex': '1' }}>
        <Grid container>
          <Grid item lg={4} md={4} xs={12}>
            <Link href='/'>
              <img src="/images/navbar/footer_logo.png" alt="logo" />
            </Link>
            <a href={`mailto:${settingsData?.contact_email}`}>{settingsData?.contact_email}</a>
            <ul className={styles.socials}>
              <li>
                <a href={settingsData?.facebook_url || ''}>
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href={settingsData?.instagram_url || ''}>
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href={settingsData?.youtube_url || ''}>
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href={settingsData?.linkedin_url || ''}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item lg={2} md={4} xs={12} className={styles.widgit}>
            <h5>
              شركتنا
            </h5>
            <ul>
              {
                links.length > 0 &&
                links.slice(0, 4).map(link => (
                  <li key={link.id}>
                    <Link href={link.url}>
                      {link.translations[0].name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </Grid>
          <Grid item lg={2} md={4} xs={12} className={styles.widgit}>
            <h5>
              مواضيعنا
            </h5>
            <ul>
              {
                links.length > 0 &&
                links.slice(4, 8).map(link => (
                  <li key={link.id}>
                    <Link href={link.url}>
                      {link.translations[0].name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </Grid>
          <Grid item lg={4} md={8} xs={12} className={styles.widgit}>
            <h5>
              إشترك معنا
            </h5>
            <p>أرسل إلينا بريدك الإلكتروني لتحصل علي كل جديد عن شركتنا والعروض المقدمة.</p>
            <form>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="البريد الإلكتروني" id="newsletter-email" />
                <button className={styles.inputGroupAppend} onClick={handleSubscribeToNewsLetter}>إشترك الاَن</button>
              </div>
            </form>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.footerBottom}>
              <p>حقوق النشر © 2024 GridsApps. جميع الحقوق محفوظة.</p>
              <div className={styles.links}>
                <ul>
                  <li>
                    <Link href="/">الصفحة الرئيسية</Link>
                  </li>
                  <li>
                    <Link href="/books">الكتب</Link>
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
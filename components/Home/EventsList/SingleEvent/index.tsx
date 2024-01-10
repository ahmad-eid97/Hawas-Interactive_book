//== Utils
import Link from 'next/link';
//== Modules
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import Grid from '@mui/material/Grid';
//= Types
import { IEvent } from '@/types';
//== Styles
import styles from './singleEvent.module.scss';

interface SingleEventProps {
  data: IEvent;
}

const SingleEvent: React.FC<SingleEventProps> = ({ data }) => {
  const dateDay = format(new Date(data.date), 'dd', { locale: ar });
  const dateMonth = format(new Date(data.date), 'MMMM', { locale: ar });

  return (
    <div className={`${styles.event}`}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs="auto" >
          <Link href="#">
            <img src={data.image} alt="event" />
          </Link>
        </Grid>
        <Grid item xs>
          <Grid container alignItems="center">
            <Grid item xs>
              <div className={styles.cardBody}>
                <Grid container alignItems="center">
                  <Grid item xs>
                    <h5>{data.title}</h5>
                  </Grid>
                  <Grid item xs="auto">
                    <ul className={styles.nav}>
                      <li className={styles.navItem}>
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.3164 4.20996C13.985 4.37028 13.8464 4.76904 14.0067 5.10026C14.4447 6.00505 14.6667 6.98031 14.6667 8C14.6667 11.6759 11.6759 14.6667 8 14.6667C4.32406 14.6667 1.33333 11.6759 1.33333 8C1.33333 4.32406 4.32406 1.33333 8 1.33333C9.52328 1.33333 10.9543 1.83073 12.1387 2.77165C12.4259 3.00098 12.846 2.95296 13.0754 2.66471C13.3047 2.37663 13.2567 1.95703 12.9683 1.72803C11.5661 0.613607 9.8016 0 8 0C3.58903 0 0 3.58903 0 8C0 12.411 3.58903 16 8 16C12.411 16 16 12.411 16 8C16 6.77767 15.7331 5.60628 15.2067 4.51969C15.0467 4.18766 14.6466 4.04932 14.3164 4.20996Z" fill="currentColor"></path>
                          <path d="M7.99967 2.66663C7.63167 2.66663 7.33301 2.96529 7.33301 3.33329V7.99996C7.33301 8.36796 7.63167 8.66663 7.99967 8.66663H11.333C11.701 8.66663 11.9997 8.36796 11.9997 7.99996C11.9997 7.63196 11.701 7.33329 11.333 7.33329H8.66634V3.33329C8.66634 2.96529 8.36768 2.66663 7.99967 2.66663Z" fill="currentColor"></path>
                        </svg>
                        <div className={styles.text}>{data.time.slice(0, -3)}</div>
                      </li>
                      <li className={styles.navItem}>
                        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.9748 3.12964C13.6007 1.14086 11.4229 0 9.0002 0C6.57754 0 4.39972 1.14086 3.02557 3.12964C1.65816 5.10838 1.34243 7.61351 2.17929 9.82677C2.40313 10.4312 2.75894 11.0184 3.23433 11.5687L8.52105 17.7784C8.64062 17.919 8.8158 18 9.0002 18C9.18459 18 9.35978 17.919 9.47934 17.7784L14.7646 11.5703C15.2421 11.0169 15.5974 10.4303 15.8194 9.83078C16.658 7.61351 16.3422 5.10838 14.9748 3.12964ZM14.6408 9.38999C14.4697 9.85257 14.1902 10.3099 13.8107 10.7498C13.8096 10.7509 13.8086 10.7519 13.8077 10.7532L9.0002 16.3999L4.1897 10.7497C3.8104 10.3101 3.53094 9.85282 3.35808 9.38581C2.66599 7.55539 2.92864 5.48413 4.06088 3.84546C5.19668 2.20155 6.9971 1.25873 9.0002 1.25873C11.0033 1.25873 12.8035 2.20152 13.9393 3.84546C15.0718 5.48413 15.3346 7.55539 14.6408 9.38999Z" fill="currentColor"></path>
                          <path d="M9.00019 3.73438C7.0569 3.73438 5.47571 5.31535 5.47571 7.25886C5.47571 9.20237 7.05668 10.7833 9.00019 10.7833C10.9437 10.7833 12.5247 9.20237 12.5247 7.25886C12.5247 5.31556 10.9435 3.73438 9.00019 3.73438ZM9.00019 9.52457C7.75088 9.52457 6.73444 8.50814 6.73444 7.25882C6.73444 6.00951 7.75088 4.99307 9.00019 4.99307C10.2495 4.99307 11.2659 6.00951 11.2659 7.25882C11.2659 8.50814 10.2495 9.52457 9.00019 9.52457Z" fill="currentColor"></path>
                        </svg>
                        <div className={styles.text}>{data.venue_location}</div>
                      </li>
                    </ul>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs="auto">
              <Link href="#" className={styles.date}>
                <div >
                  <h3 className={styles.day}>{dateDay}</h3>
                  <span className={styles.month}>{dateMonth}</span>
                </div>
              </Link>
            </Grid>
            <Grid item xs="auto">
              <Link href="/contact-us" className={styles.ticket}>
                شراء تذكرة
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default SingleEvent;
//== Utils
import Link from 'next/link';
//== Modules
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import Grid from '@mui/material/Grid';
//== Components
import { Icon } from '@iconify/react';
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
      <img src={data.image} alt="event" />
      <div className={styles.cardBody}>
        <h5>{data.title}</h5>
        <div className={styles.box}>
          <div className={styles.data}>
            <ul className={styles.nav}>
              <li className={styles.navItem}>
                <Icon icon="ri:time-fill" />
                <div className={styles.text}>{data.time.slice(0, -3)}</div>
              </li>
              <li className={styles.navItem}>
                <Icon icon="fluent:location-28-filled" />
                <div className={styles.text}>{data.venue_location}</div>
              </li>
            </ul>
            <Link href="/contact-us" className={styles.ticket}>
              طلب تذكرة
            </Link>
          </div>
          <div className={styles.date}>
            <h3 className={styles.day}>{dateDay}</h3>
            <span className={styles.month}>{dateMonth}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleEvent;
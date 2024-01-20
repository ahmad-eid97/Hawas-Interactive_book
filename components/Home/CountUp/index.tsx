"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CountUp from 'react-countup';
//= Api
import { getCounters } from '@/API/pages';
//= Types
import type { CounterValueElement } from '@/types';
//== Styles
import styles from './countUp.module.scss';

interface CountUpProps {
  data: Awaited<ReturnType<typeof getCounters>> | null;
}

const CoutUp: React.FC<CountUpProps> = ({ data }) => {
  return (
    <div className={styles.countUp}>
      <Container maxWidth="xl">
        <div className={styles.header}>
          <h1>{data?.title as string || ''}</h1>
          <p>{data?.sub_title as string || ''}</p>
        </div>
        <div className={styles.boxesContainer}>
          {
            data?.list && data?.list.length > 0 &&
            data?.list.map(item => (
              <div className={styles.item} key={item.title}>
                <div className={styles.icon}>
                  <i className={item.icon}></i>
                </div>
                <CountUp
                  end={+item.counter}
                  // @ts-ignore
                  duration={5}
                  enableScrollSpy={true} />
                <p> {item.title}</p>
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  );
}

export default CoutUp;
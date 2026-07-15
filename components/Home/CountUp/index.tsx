"use client";
//== Modules
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Container from '@mui/material/Container';
import CountUp from 'react-countup';
import { Users, BookOpen, GraduationCap, Award, type LucideProps } from 'lucide-react';
//= Api
import { getCounters } from '@/API/pages';
//= Types
import type { CounterValueElement } from '@/types';
//== Styles
import styles from './countUp.module.scss';

const iconMap: Record<string, React.FC<LucideProps>> = {
  Users,
  BookOpen,
  GraduationCap,
  Award,
};

interface CountUpProps {
  data: Awaited<ReturnType<typeof getCounters>> | null;
}

const CoutUp: React.FC<CountUpProps> = ({ data }) => {
  return (
    <div className={styles.countUp}>
      <Container maxWidth="xl" className={styles.container}>
        <MouseParallaxContainer>
          <div className={styles.parallaxCursor}>
            <MouseParallaxChild factorX={0.03} factorY={0.02} >
              <img className="img-fluid" src="/images/parallax/new/6.svg" alt="Layer" />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.04} factorY={0.03} >
              <img className="img-fluid" src="/images/parallax/new/7.svg" alt="Layer" />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.06} factorY={0.02} >
              <img className="img-fluid" src="/images/parallax/new/8.svg" alt="Layer" />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.01} factorY={0.04} >
              <img className="img-fluid" src="/images/parallax/new/9.svg" alt="Layer" />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.01} factorY={0.05} >
              <img className="img-fluid" src="/images/parallax/new/10.svg" alt="Layer" />
            </MouseParallaxChild>
          </div>
          <div className={styles.header}>
            <h1>{data?.title as string || ''}</h1>
            <p>{data?.sub_title as string || ''}</p>
          </div>
          <div className={styles.boxesContainer}>
            {
              data?.list && data?.list.length > 0 &&
              data?.list.map(item => {
                const IconComponent = iconMap[item.icon];
                return (
                  <div className={styles.item} key={item.title}>
                    <div className={styles.icon}>
                      {IconComponent ? <IconComponent size={32} strokeWidth={1.5} /> : null}
                    </div>
                    <CountUp
                      end={+item.counter}
                      // @ts-ignore
                      duration={5}
                      enableScrollSpy={true} />
                    <p> {item.title}</p>
                  </div>
                );
              })
            }
          </div>
        </MouseParallaxContainer>
      </Container>
    </div>
  );
}

export default CoutUp;
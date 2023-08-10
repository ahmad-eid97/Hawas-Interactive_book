"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CountUp from 'react-countup';
//== Styles
import styles from './countUp.module.scss';

interface CoutUpProps {
}

const CoutUp: React.FC<CoutUpProps> = () => {
  return (
    <div className={styles.countUp}>
      <Container maxWidth="xl">
        <div className={styles.header}>
          <h1>ارقام حواس</h1>
          <p>اكتشف برنامجك المثالي في دوراتنا.</p>
        </div>
        <Grid container >
          <Grid item xs={12} sm={6} md={3}>
            <div className={styles.icon}>
              <i className="fa-regular fa-chalkboard-user"></i>
            </div>
            <CountUp
              end={4800}
              // @ts-ignore
              duration={5}
              enableScrollSpy={true} />
            <p> كل الطلاب </p>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={styles.icon}>
              <i className="fa-regular fa-chalkboard-user"></i>
            </div>
            <CountUp
              end={950}
              // @ts-ignore
              duration={5}
              enableScrollSpy={true} />
            <p> غرف الصف </p>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={styles.icon}>
              <i className="fa-regular fa-chalkboard-user"></i>
            </div>
            <CountUp
              end={200}
              // @ts-ignore
              duration={5}
              enableScrollSpy={true} />
            <p> حافلات المدارس </p>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={styles.icon}>
              <i className="fa-regular fa-chalkboard-user"></i>
            </div>
            <CountUp
              end={450}
              // @ts-ignore
              duration={5}
              enableScrollSpy={true} />
            <p> مجموع المعلمين </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CoutUp;
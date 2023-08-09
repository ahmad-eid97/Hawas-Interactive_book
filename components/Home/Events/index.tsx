"use client";
//== Utils
import Link from 'next/link';
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//== Styles
import styles from './events.module.scss';

interface EventsProps {
}

const Events: React.FC<EventsProps> = () => {
  return (
    <section className={`${styles.why}`}>
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          <Grid item lg={6} xs={12}>
            <img src="/images/home/cover-1.png" alt="event_cover" />
          </Grid>
          <Grid item lg={6} xs={12}>
            <h1 className="font-lora fw-bold text-black mb-4">أسبوع الحذر على الطرق في البلاد</h1>
            <p className="mb-5 line-height-lg">
              ابداع منقطع النظير لطاقنا بمؤسسة حواس ضمن فعاليات اسبوع الحذر تجوالا بشتى المدن والقرى العربية، من مؤسسة لاخرى توعية وتذويت، فن وغناء ومسرح وافلام، جميعها لرفع منسوب الوعي المروري ومنع حوادث الطرق بمجتمعنا العربي. كل الشكر والتقدير لطاقم مؤسسة حواس وجميع القائمين على انجاح مثل هذه الفعاليات بدون استثناء.
            </p>
            <Link href="./">
              <i className="fa-solid fa-arrow-right-long"></i>
              المزيد
            </Link>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Events;
"use client";
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//== Styles
import styles from './details.module.scss';

interface PlayDetailsProps {
  // data: IBlogDetails | null;
}

const PlayDetails: React.FC<PlayDetailsProps> = () => {
  return (
    <>
      <section className={styles.details}>
        <Container maxWidth="xl">
          <Grid container className={styles.header} justifyContent="center" alignItems="start" spacing={5}>
            <Grid item xs={12} className={styles.body}>
              <img src={'https://hawas.co/storage/dummy/play_header.png'} alt="" />
              <div className={styles.content}>
                <div className={styles.meta}>
                  <ul>
                    <li><i className="fa-regular fa-clock"></i> {format(new Date(), 'dd MMMM yyy', { locale: ar })}</li>
                  </ul>
                </div>
                <h2 className={styles.title}>مسرحية زعتر وعنتر في الطريق</h2>
                <div>
                  <p>
                    مسرحية توعوية للأطفال من جيل 4 حتى 8 سنوات ( بستان حتى رابع ) غنية بالوسائل التوعوية المختلفة جميعها تهدف الى محاورة الاطفال على خشبة المسرح من خلال الاغاني والكوميديا والمشاركة الفاعلة مع الممثلين لعرض السلوك الايجابي ورفض السلوك السلبي, برفض العنف والتهور في الشارع وفي كل مكان . مدة المسرحية 45 دقيقة معدة ل 150 طفل في قاعة مفتوحة او مغلقة
                  </p>
                  <h4>صور من المسرحية</h4>
                  <div className={styles.gallery}>
                    <img src={'https://hawas.co/storage/dummy/play_header.png'} alt="" />
                    <img src={'/images/plays/play2.png'} alt="" />
                  </div>
                  <h4>فيديو</h4>
                  <video controls src=""></video>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}

export default PlayDetails;
'use client';
//= Components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//= Styles
import cls from './hawasFilms.module.scss';

const HawasFilms = () => {
  return (
    <Container maxWidth="xl">
      <div className={cls.hawasFilms}>
        <h2>العديد من المسرحيات الكوميدية والغنائية التربوية من انتاج وتأليف واخراج مؤسسة حواس, جميعها تهدف الى ترسيخ الوعي الصحي والسلوك الامن</h2>
        <div className={cls.filmsList}>
          {/* <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <div className={cls.film}>
                <div className={cls.image}>
                  <img src="/images/plays/play1.png" alt="hawasPlays" />
                </div>
                <div className={cls.content}>
                  <p>مسرحية زعتر وعنتر في الطريق</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={cls.play}>
                <div className={cls.playImg}>
                  <img src="/images/plays/play2.png" alt="hawasPlays" />
                </div>
                <div className={cls.playContent}>
                  <p>مسرحية زعتر وعنتر في الطريق</p>
                </div>
              </div>
            </Grid>
          </Grid> */}
        </div>
      </div>
    </Container>
  )
}

export default HawasFilms;
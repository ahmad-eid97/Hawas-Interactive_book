'use client';
//= Components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//= Styles
import cls from './hawasChannel.module.scss';

const HawasChannel = () => {
  return (
    <Container maxWidth="xl">
      <div className={cls.hawasChannel}>
        <h2>نجحت مؤسسة حواس من خلال الأخصائيين المهنيين بأن تنتج مجموعة كبيرة من الافلام الكرتونية، وإضافة إلى ذلك تلحين وغناء مجموعة من الأشعار التربوية والتعليمية في قضايا المجتمع, جميعها للأطفال سهلة المضامين وقريبة إلى واقع الطف,</h2>
        <div className={cls.list}>
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

export default HawasChannel;
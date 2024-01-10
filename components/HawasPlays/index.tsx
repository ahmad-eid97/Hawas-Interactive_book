'use client';
//= Components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//= Styles
import cls from './hawasPlays.module.scss';

const HawasPlays = () => {
  return (
    <Container maxWidth="xl">
      <div className={cls.hawasPlays}>
        <h2>مسرحيات هادفة للأطفال من جيل 4 وحتى 10 بمواضيع السلامة والصحة والتسامح.</h2>
        <div className={cls.playsList}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <div className={cls.play}>
                <div className={cls.playImg}>
                  <img src="/images/plays/play1.png" alt="hawasPlays" />
                </div>
                <div className={cls.playContent}>
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
          </Grid>
        </div>
      </div>
    </Container>
  )
}

export default HawasPlays;
'use client';
//= Components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//= Styles
import cls from './hawasLectures.module.scss';

const HawasLectures = () => {
  return (
    <Container maxWidth="xl">
      <div className={cls.hawasLectures}>
        <h2>العديد من الورشات والفعاليات التربوية التثقيفية لشتى الشرائح الطلابية منها بمواضيع الحذر على الطرق وأخرى بمواضيع السلامة والصحة او بمواضيع توعوية للتسامح ونبذ العنف. ورشات عمل وفعاليات تربوية لشتى الاجيال في المدارس, الابتدائية, الاعدادية والثانوية</h2>
        <div className={cls.list}>
          {/* <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <div className={cls.lecture}>
                <div className={cls.image}>
                  <img src="/images/plays/play1.png" alt="hawasPlays" />
                </div>
                <div className={cls.content}>
                  <p>مسرحية زعتر وعنتر في الطريق</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={cls.lecture}>
                <div className={cls.image}>
                  <img src="/images/plays/play2.png" alt="hawasPlays" />
                </div>
                <div className={cls.content}>
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

export default HawasLectures;
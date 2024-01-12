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
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <div className={cls.lecture}>
                <div className={cls.image}>
                  <iframe src="https://www.youtube.com/embed/1e-4P8RHpHk?si=mgs51vFjF5r5Eo02" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className={cls.content}>
                  <p>فيلم واغنية زعتر والقطةعلى الطريق.</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={cls.lecture}>
                <div className={cls.image}>
                  <iframe src="https://www.youtube.com/embed/kP6o6eGfZRM?si=LxRNtG7bb36sVxpU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className={cls.content}>
                  <p>اغنية وفيلم انا زعتر</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={cls.lecture}>
                <div className={cls.image}>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/wJnMNEQK8I8?si=-qyhlBnIJvHDsvh9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className={cls.content}>
                  <p>فيلم واغنية فزورة الاشارة الضوئية</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  )
}

export default HawasLectures;
'use client';
//= Components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//= Styles
import cls from './hawasLibrary.module.scss';

const HawasLibrary = () => {
  function openBook(link: string) {
    window.open(link, '_blank');
  }

  const link = 'https://www.noor-book.com/book/internal_download/8569643d178a35678f9149b34a22dbc4de41e657/3/c905c063d844335ab3f66c8eab71d7ba'

  return (
    <Container maxWidth="xl">
      <div className={cls.hawasLibrary}>
        <h2>معلومات وابداعات قيمة بمواضيع الصحة والاحتراس ترجمت الى مهارات توعوية حسب منهاج ومصادقة وزارة التربية والتعليم منها الورقية واخرى الرقمية المحوسبة على اعلى الاصعدة والمستويات .</h2>
        <div className={cls.list}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <div className={cls.book}>
                <div className={cls.sign} onClick={() => openBook(link)}><i className="fa-regular fa-file-pdf"></i></div>
                <div className={cls.image} onClick={() => openBook(link)}>
                  <img src="/images/library/health-book1.webp" alt="hawas book" />
                </div>
                <div className={cls.content}>
                  <h3 onClick={() => openBook(link)}>الصحة النفسية والتوافق</h3>
                  <p>
                    <i className="fa-regular fa-pen-to-square"></i>
                    د. سهير كامل احمد
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={cls.book}>
                <div className={cls.sign} onClick={() => openBook(link)}><i className="fa-regular fa-file-pdf"></i></div>
                <div className={cls.image} onClick={() => openBook(link)}>
                  <img src="/images/library/health-book2.webp" alt="hawas book" />
                </div>
                <div className={cls.content}>
                  <h3 onClick={() => openBook(link)}>الصحة العقلية في العالم</h3>
                  <p>
                    <i className="fa-regular fa-pen-to-square"></i>
                    أ.د عبد الحميد محمد
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  )
}

export default HawasLibrary;
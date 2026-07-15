'use client';
//= Components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//= Types
import type { LibrayPageResponse } from '@/types';
//= Styles
import cls from './hawasLibrary.module.scss';

type Props = {
  data: LibrayPageResponse | null;
}

const HawasLibrary = ({ data }: Props) => {
  function openBook(link: string) {
    window.open(link, '_blank');
  }

  return (
    <Container maxWidth="xl">
      <div className={cls.hawasLibrary}>
        <h2 dangerouslySetInnerHTML={{ __html: data?.description || '' }} />
        <div className={cls.list}>
          <Grid container spacing={8}>
            {
              data?.options.length ?
                data?.options.map(opt => (
                  <Grid item xs={12} md={6} lg={4} key={opt.title}>
                    <div className={cls.page}>
                      <div className={cls.image} onClick={() => openBook(opt.link)}>
                        <img src={opt.image || '/images/book.png'} alt="hawas book" />
                      </div>
                      {/* <div className={cls.content}>
                        <h3 onClick={() => openBook(opt.link)}>{opt.title}</h3>
                        <p>
                          <i className="fa-regular fa-pen-to-square"></i>
                          {opt.author}
                        </p>
                      </div> */}
                    </div>
                  </Grid>
                ))
                :
                <p>لا توجد ملفات بعد في المكتبة</p>
            }
          </Grid>
        </div>
      </div>
    </Container>
  )
}

export default HawasLibrary;
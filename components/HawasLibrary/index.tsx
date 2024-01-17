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
          <Grid container spacing={4} justifyContent="center">
            {
              data?.options.length ?
                data?.options.map(opt => (
                  <Grid item xs={12} sm={6} md={4} key={opt.title}>
                    <div className={cls.book}>
                      <div className={cls.sign} onClick={() => openBook(opt.link)}><i className="fa-regular fa-file-pdf"></i></div>
                      <div className={cls.image} onClick={() => openBook(opt.link)}>
                        <img src={'/images/book.png'} alt="hawas book" />
                      </div>
                      <div className={cls.content}>
                        <h3 onClick={() => openBook(opt.link)}>{opt.title}</h3>
                        <p>
                          <i className="fa-regular fa-pen-to-square"></i>
                          {opt.author}
                        </p>
                      </div>
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
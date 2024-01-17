'use client';
//= Components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//= Types
import type { LecturesPageResponse } from "@/types";
//= Styles
import cls from './hawasLectures.module.scss';

type Props = {
  data: LecturesPageResponse | null;
}

const HawasLectures = ({ data }: Props) => {
  return (
    <Container maxWidth="xl">
      <div className={cls.hawasLectures}>
        <h2 dangerouslySetInnerHTML={{ __html: data?.description || '' }} />
        <div className={cls.list}>
          <Grid container spacing={4} justifyContent="center">
            {
              data?.options.length ?
                data?.options.map(opt => (
                  <Grid item xs={12} sm={6} md={4} key={opt.title}>
                    <div className={cls.lecture}>
                      <div className={cls.image}>
                        <iframe src={opt.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                      </div>
                      <div className={cls.content}>
                        <p>{opt.title}</p>
                      </div>
                    </div>
                  </Grid>
                ))
                :
                <p>لا توجد محاضرات بعد</p>
            }
          </Grid>
        </div>
      </div>
    </Container>
  )
}

export default HawasLectures;
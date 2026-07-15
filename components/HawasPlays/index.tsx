'use client';
import Link from 'next/link';
//= Components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//= Types
import type { PlaysPageResponse } from "@/types";
//= Styles
import cls from './hawasPlays.module.scss';

type Props = {
  data: PlaysPageResponse | null;
}

const HawasPlays = ({ data }: Props) => {
  return (
    <Container maxWidth="xl">
      <div className={cls.hawasPlays}>
        <h2 dangerouslySetInnerHTML={{ __html: data?.description || '' }} />
        <div className={cls.playsList}>
          <Grid container spacing={6} justifyContent="center">
            {
              data?.options.length ?
                data?.options.map(opt => (
                  <Grid item xs={12} sm={6} md={4} key={opt.title}>
                    <Link href={`/plays/${opt.title}`} className={cls.play_wrapper}>
                      <div className={cls.play}>
                        <div className={cls.playImg}>
                          <img src={opt.image} alt="hawasPlays" />
                        </div>
                        <div className={cls.playContent}>
                          <p>{opt.title}</p>
                        </div>
                      </div>
                    </Link>
                  </Grid>
                ))
                :
                <p>لا توجد مسرحيات بعد</p>
            }
          </Grid>
        </div>
      </div>
    </Container>
  )
}

export default HawasPlays;
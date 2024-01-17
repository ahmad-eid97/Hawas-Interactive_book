'use client';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
//= Components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//= Types
import type { FilmsPageResponse } from "@/types";
//= Styles
import cls from './hawasFilms.module.scss';

type Props = {
  data: FilmsPageResponse | null;
}

const HawasFilms = ({ data }: Props) => {
  const [showVideo, setShowVideo] = useState(false);
  const [showVideoId, setShowVideoId] = useState('');

  function handleOpenVide(link: string) {
    setShowVideoId(link.split('/').at(-1) || '');
    setShowVideo(true);
  }

  return (
    <Container maxWidth="xl">
      <div className={cls.hawasFilms}>
        <h2 dangerouslySetInnerHTML={{ __html: data?.description || '' }} />
        <div className={cls.filmsList}>
          <Grid container spacing={2} justifyContent="center">
            {
              data?.options.length ?
                data?.options.map(opt => (
                  <Grid item xs={12} sm={6} md={4} key={opt.title}>
                    <div className={cls.film}>
                      <div className={cls.image}>
                        <img src={opt.image || ''} alt="hawas film" />
                        <i className={`fa-solid fa-play ${cls.play}`} onClick={() => handleOpenVide(opt.video)}></i>
                      </div>
                      <div className={cls.content}>
                        <p>{opt.title}</p>
                      </div>
                    </div>
                  </Grid>
                ))
                :
                <p>لا توجد أفلام بعد</p>
            }
          </Grid>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={showVideo}
        videoId={showVideoId}
        onClose={() => setShowVideo(false)}
      />
    </Container>
  )
}

export default HawasFilms;
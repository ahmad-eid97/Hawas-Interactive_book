'use client';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
//= Components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//= Styles
import cls from './hawasFilms.module.scss';

const HawasFilms = () => {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <Container maxWidth="xl">
      <div className={cls.hawasFilms}>
        <h2>العديد من المسرحيات الكوميدية والغنائية التربوية من انتاج وتأليف واخراج مؤسسة حواس, جميعها تهدف الى ترسيخ الوعي الصحي والسلوك الامن</h2>
        <div className={cls.filmsList}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <div className={cls.film}>
                <div className={cls.image}>
                  <img src="/images/films/film1.png" alt="hawas film" />
                  <i className={`fa-solid fa-play ${cls.play}`} onClick={() => setShowVideo(true)}></i>
                </div>
                <div className={cls.content}>
                  <p>فيلم التسامح المروري</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={showVideo}
        videoId="G4TsdAOE7cY"
        onClose={() => setShowVideo(false)}
      />
    </Container>
  )
}

export default HawasFilms;
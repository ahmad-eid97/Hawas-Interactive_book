'use client';
import { useState } from "react"
//= Components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Lightbox from "yet-another-react-lightbox";
//= Styles
import "yet-another-react-lightbox/styles.css";
import cls from './hawasWorkshops.module.scss';

const HawasWorkshops = () => {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const items = [
    {
      id: 1,
      src: '/images/plays/play1.png'
    },
    {
      id: 2,
      src: '/images/plays/play2.png'
    },
    {
      id: 3,
      src: '/images/plays/play1.png'
    },
    {
      id: 4,
      src: '/images/plays/play2.png'
    },
    {
      id: 5,
      src: '/images/films/film1.png'
    }
  ]

  const openImage = (index: number) => {
    setOpen(true)
    setImageIndex(index)
  }

  return (
    <Container maxWidth="xl">
      <div className={cls.hawasWorkshops}>
        <h2>العديد من الورشات والفعاليات التربوية التثقيفية لشتى الشرائح الطلابية منها بمواضيع الحذر على الطرق وأخرى بمواضيع السلامة والصحة او بمواضيع توعوية للتسامح ونبذ العنف. ورشات عمل وفعاليات تربوية لشتى الاجيال في المدارس, الابتدائية, الاعدادية والثانوية</h2>
        <div className={cls.playsList}>
          <Grid container spacing={4} justifyContent="center">
            {
              items.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={item.id} onClick={() => openImage(index)}>
                  <div className={cls.workshop}>
                    <img src={item.src} alt="hawasPlays" />
                  </div>
                </Grid>
              ))
            }
          </Grid>
        </div>
      </div>
      <Lightbox
        index={imageIndex}
        open={open}
        close={() => setOpen(false)}
        slides={[...items]}
      />
    </Container>
  )
}
export default HawasWorkshops;
'use client';
//= Components
import Container from '@mui/material/Container';
//= Styles
import cls from './hawasChannel.module.scss';

const HawasChannel = ({ channelLink }: { channelLink: string }) => {
  return (
    <Container maxWidth="xl">
      <div className={cls.hawasChannel}>
        <h2>نجحت مؤسسة حواس من خلال الأخصائيين المهنيين بأن تنتج مجموعة كبيرة من الافلام الكرتونية، وإضافة إلى ذلك تلحين وغناء مجموعة من الأشعار التربوية والتعليمية في قضايا المجتمع, جميعها للأطفال سهلة المضامين وقريبة إلى واقع الطف</h2>
        <div className={cls.channel} onClick={() => window.open(channelLink, '_blank')}>
          <i className="fa-solid fa-play"></i>
        </div>
      </div>
    </Container>
  )
}

export default HawasChannel;
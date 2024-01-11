"use client";
//== Modules
import Container from '@mui/material/Container';
// @ts-ignore
import ReactImageVideoLightbox from 'react-image-video-lightbox';
//== Component Logic
import useLogic from './logic';
//= Api
import { getWhyChooseUsSection } from '@/API/pages';
//== Styles
import styles from './videoSection.module.scss';

interface VideoSectionProps {
  data: Awaited<ReturnType<typeof getWhyChooseUsSection>> | null
}

const VideoSection: React.FC<VideoSectionProps> = ({ data }) => {
  const { lightBox, setLightBox } = useLogic();

  return (
    <div className={styles.video}>
      <Container maxWidth="xl">
        <button style={{ backgroundImage: `url(${data?.bgImage as string || '/images/home/cover-18.jpg'})` }}>
          <h1> {data?.title as string || ''} </h1>
          <p>{data?.description as string || ''}</p>
          <div className={styles.btn} onClick={() => setLightBox(true)}>
            <svg width="14" height="16" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.8704 6.15374L3.42038 0.328572C2.73669 -0.0923355 1.9101 -0.109836 1.20919 0.281759C0.508282 0.673291 0.0898438 1.38645 0.0898438 2.18929V13.7866C0.0898438 15.0005 1.06797 15.9934 2.27016 16C2.27344 16 2.27672 16 2.27994 16C2.65563 16 3.04713 15.8822 3.41279 15.6591C3.70694 15.4796 3.79991 15.0957 3.62044 14.8016C3.44098 14.5074 3.05697 14.4144 2.76291 14.5939C2.59188 14.6982 2.42485 14.7522 2.27688 14.7522C1.82328 14.7497 1.33763 14.3611 1.33763 13.7866V2.18933C1.33763 1.84492 1.51713 1.53907 1.81775 1.3711C2.11841 1.20314 2.47294 1.21064 2.76585 1.39098L12.2159 7.21615C12.4999 7.39102 12.6625 7.68262 12.6618 8.01618C12.6611 8.34971 12.4974 8.64065 12.2118 8.81493L5.37935 12.9983C5.08548 13.1783 4.9931 13.5623 5.17304 13.8562C5.35295 14.1501 5.73704 14.2424 6.03092 14.0625L12.8625 9.87962C13.5166 9.48059 13.9081 8.78496 13.9096 8.01868C13.9112 7.25249 13.5226 6.55524 12.8704 6.15374Z" fill="currentColor"></path>
            </svg>
          </div>
        </button>
      </Container>
      {lightBox === true && <ReactImageVideoLightbox className={styles.lightBox}
        data={[
          {
            url: data?.videoLink as string || 'https://www.youtube.com/embed/ScMzIvxBSi4',
            type: "video",
            title: "Placeholder video",
          }
        ]}
        startIndex={0}
        showResourceCount={false}
        onCloseCallback={() => setLightBox(false)}
        onNavigationCallback={(currentIndex: number) =>
          console.log(`Current index: ${currentIndex}`)
        }
      />}
    </div>
  );
}

export default VideoSection;
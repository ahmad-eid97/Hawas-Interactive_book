"use client";
import { useState } from 'react';
//== Components
import { Icon } from '@iconify/react';
import Container from '@mui/material/Container';
import ModalVideo from 'react-modal-video';
//= Api
import { getWhyChooseUsSection } from '@/API/pages';
//== Styles
import styles from './videoSection.module.scss';

interface VideoSectionProps {
  data: Awaited<ReturnType<typeof getWhyChooseUsSection>> | null
}

const VideoSection: React.FC<VideoSectionProps> = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className={styles.video}>
        <img src="/images/shapes/cloud.svg" alt="" className={`deco-shape anim-drift ${styles.decoCloud}`} />
        <img src="/images/shapes/pencil.svg" alt="" className={`deco-shape anim-float anim-delay-1 ${styles.decoPencil}`} />
        <img src="/images/shapes/triangle.svg" alt="" className={`deco-shape anim-spin ${styles.decoTriangle}`} />
        <Container maxWidth="xl">
          <button>
            <h1> {data?.title as string || ''} </h1>
            <p>{data?.description as string || ''}</p>
            <div className={styles.btn} onClick={() => setShowVideo(true)} style={{ backgroundImage: `url(${data?.bgImage as string || '/images/home/cover-18.jpg'})` }}>
              <Icon icon="uil:play" />
            </div>
          </button>
        </Container>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={showVideo}
        videoId={(data?.videoLink as string).split('/').at(-1) || 'ScMzIvxBSi4'}
        onClose={() => setShowVideo(false)}
      />
    </>
  );
}

export default VideoSection;
//== Styles
import styles from './videoSection.module.scss';

interface CProps {
  data: {
    title: string;
    description: string;
    video_link: string;
  }
}

const VideoSection = ({ data }: CProps) => {
  return (
    <div className={styles.videoSection}>
      <div className={styles.head}>
        <img src="/images/quizzes/video.gif" alt="projector_image" />
        <h3><i className="fa-duotone fa-star"></i> {data.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
      </div>
      <iframe src={data.video_link} frameBorder="0"></iframe>
    </div>
  )
}

export default VideoSection;
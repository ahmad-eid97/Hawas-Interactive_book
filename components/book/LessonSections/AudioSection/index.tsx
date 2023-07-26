//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './audioSection.module.scss';

interface CProps {
  data: {
    title: string;
    description: string;
    audio_link: string;
  }
}

const AudioSection = ({ data }: CProps) => {
  const { Audio, openAudio, audioOpened, setAudioOpened } = useLogic();

  return (
    <div className={styles.audioSection}>
      <h3><i className="fa-duotone fa-star"></i> {data.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
      <div className={styles.audioImage}>
        {audioOpened ?
          <img src="/images/quizzes/audio.gif" alt="audio" />
          :
          <img src="/images/quizzes/audio2.gif" alt="audio" />
        }
        {audioOpened ?
          <button onClick={() => openAudio(false)}>إيقاف</button>
          :
          <button onClick={() => openAudio(true)}>تشغيل</button>
        }
      </div>
      <audio
        src={data.audio_link}
        ref={Audio}
        onEnded={() => setAudioOpened(false)}
      ></audio>
    </div>
  )
}

export default AudioSection;
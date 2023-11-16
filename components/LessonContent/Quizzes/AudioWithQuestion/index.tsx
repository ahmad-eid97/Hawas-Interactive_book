//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './audioWithQuestion.module.scss'

interface AudioWithQuestionProps {
  questionData: any
}

const AudioWithQuestion: React.FC<AudioWithQuestionProps> = ({ questionData }) => {
  const { renderQuestion, Audio, openAudio, audioOpened, setAudioOpened } = useLogic({ questionData });

  return (
    <div className={styles.audioWithQuestion}>
      <h2>{questionData.title}</h2>
      <div className={styles.audioSection}>
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
          src={questionData.question_audio}
          ref={Audio}
          onEnded={() => setAudioOpened(false)}
        ></audio>
      </div>
      <div>
        {renderQuestion()}
      </div>
    </div>
  );
}

export default AudioWithQuestion;
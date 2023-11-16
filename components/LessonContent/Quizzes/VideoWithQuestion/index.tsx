//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './videoWithQuestion.module.scss'

interface VideoWithQuestionProps {
  questionData: any
}

const VideoWithQuestion: React.FC<VideoWithQuestionProps> = ({ questionData }) => {
  const { renderQuestion } = useLogic({ questionData });
  return (
    <div className={styles.videoWithQuestion}>
      <h2>{questionData.title}</h2>
      <iframe src={questionData.question_video_link} frameBorder="0"></iframe>
      <div>
        {renderQuestion()}
      </div>
    </div>
  );
}

export default VideoWithQuestion;
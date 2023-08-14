//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './imageWithQuestion.module.scss'

interface ImageWithQuestionProps {
  questionData: any
}

const ImageWithQuestion: React.FC<ImageWithQuestionProps> = ({ questionData }) => {
  const { renderQuestion } = useLogic({ questionData });
  return (
    <div className={styles.imageWithQuestion}>
      <h2>{questionData.title}</h2>
      <img src={questionData.question_img} alt="question_image" />
      <div>
        {renderQuestion()}
      </div>
    </div>
  );
}

export default ImageWithQuestion;
import { Fragment } from 'react';
//== Components
import { PageLoader } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Types
import { QuestionData } from '../types';
//== Styles
import styles from './openEnded.module.scss';

const OpenEnded = ({ questionData }: { questionData: QuestionData }) => {
  const { answer, correctAnswer, retry, showCorrection, setAnswer, rendered, isLoading } = useLogic({ questionData });

  if (!rendered) return null;
  if (isLoading) return <PageLoader />
  return (
    <div className={styles.continueTyping}>
      {questionData.question_img ?
        <div className={styles.question_img}>
          <img src={questionData.question_img} alt="question_image" />
        </div>
        :
        null
      }
      <h2>{questionData.title}</h2>
      <div className={styles.wrapper}>
        <textarea placeholder='اكتب الإجابة هنا...' onChange={(e) => setAnswer(e.target.value)}></textarea>
      </div>
      {showCorrection &&
        <div className={`correctData ${showCorrection.correct ? 'correct' : 'wrong'}`}>
          {showCorrection.data.map((one, idx) => (
            <Fragment key={idx}>
              {idx === 0 ?
                <p><i className="fa-solid fa-lightbulb-on"></i> {one}</p>
                :
                <p key={idx}>{one}</p>
              }
            </Fragment>
          ))}
        </div>
      }
      <div className="checkAnswer">
        <button onClick={correctAnswer}><i className="fa-regular fa-badge-check"></i> فحص الإجابات</button>
        <button onClick={retry}><i className="fa-regular fa-arrows-rotate"></i> إعادة المحاولة</button>
      </div>
    </div>
  )
}

export default OpenEnded;
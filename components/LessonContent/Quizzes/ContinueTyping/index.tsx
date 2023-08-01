//== Hooks
import { Fragment } from 'react';
//== Components
import { PageLoader } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Types
import { QuestionData } from '../types';
//== Styles
import styles from './continueTyping.module.scss';

const ContinueTyping = ({ questionData }: { questionData: QuestionData }) => {
  const { items, handleFields, correctAnswer, showCorrection, retry, rendered, isLoading } = useLogic({ questionData });

  if (!rendered) return null;
  if (isLoading) return <PageLoader />
  return (
    <div className={styles.continueTyping}>
      <h2>{questionData.title}</h2>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <i className="fa-duotone fa-pencil"></i>
          <span>بيت لي:</span>
          <input type="text" placeholder='بيتي' disabled />
        </div>
        {items.map((item: any, idx: number) => (
          <div className={styles.item} key={item.id}>
            <i className="fa-duotone fa-pencil"></i>
            <span>{item.text}:</span>
            <input type="text" onChange={(e) => handleFields(e, idx)} />
          </div>
        ))}
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

export default ContinueTyping;
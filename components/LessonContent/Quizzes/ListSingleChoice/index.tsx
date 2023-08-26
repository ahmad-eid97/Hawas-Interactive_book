//== Hooks
import { Fragment } from 'react';
//== Components
import { PageLoader } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Types
import { QuestionData } from '../types';
//== Styles
import styles from './listSingleChoice.module.scss';

const ListSingleChoice = ({ questionData }: { questionData: QuestionData }) => {
  const { items, handleFields, correctAnswer, showCorrection, retry, rendered, isLoading } = useLogic({ questionData });

  if (!rendered) return null;
  if (isLoading) return <PageLoader />
  return (
    <div className={styles.listSingleChoice}>
      <h2>{questionData.title}</h2>
      <div className={styles.wrapper}>
        {items.map((item: any, idx: number) => (
          <div className={styles.item} key={item.id}>
            <i className="fa-duotone fa-pencil"></i>
            <span>{item.text}:</span>
            {/* <input type="text" onChange={(e) => handleFields(e, idx)} /> */}
            <select name="" id="" defaultValue="إختر إجابة" onChange={(e) => handleFields(e, idx)}>
              <option disabled>إختر إجابة</option>
              {item.choices.map((choice: any, index: number) => (
                <option value={choice} key={index}>{choice}</option>
              ))}
            </select>
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

export default ListSingleChoice;
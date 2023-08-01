//== Hooks
import { Fragment } from 'react';
//== Components
import { PageLoader } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Types
import { QuestionData } from '../types';
//== Styles
import styles from './fillFields.module.scss';

const FillFields = ({ questionData }: { questionData: QuestionData }) => {
  const { titles, items, handleFields, correctAnswer, showCorrection, retry, rendered, isLoading } = useLogic({ questionData });

  if (!rendered) return null;
  if (isLoading) return <PageLoader />
  return (
    <div className={styles.fillFields}>
      <h2>{questionData.title}</h2>
      <div className={styles.fields}>
        <div className={styles.titles}>
          {titles?.map((title, idx) => (
            <div className={styles.title} key={idx}>
              <h3>{title}</h3>
            </div>
          ))}
        </div>
        {Object.keys(items).map((key, idx) => {
          const obj = items[key];
          return (
            <div className={styles.field} key={idx}>
              <ul>
                {obj.items.map((item: string, index: number) => (
                  <Fragment key={index}>
                    {item === '-'
                      ?
                      <li>
                        <input type="text" onChange={(e) => handleFields(e, idx, index)} />
                      </li>
                      :
                      <li>{item}</li>
                    }
                  </Fragment>
                ))}
              </ul>
            </div>
          )
        })}
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

export default FillFields;
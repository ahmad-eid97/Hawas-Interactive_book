//== Hooks
import { Fragment } from 'react';
//== Component Logic
import useLogic from './logic';
//== Types
import { QuestionData } from '../types';
//== Styles
import styles from './chooseAdjective.module.scss';

const ChooseAdjective = ({ questionData }: { questionData: QuestionData }) => {
  const { items, answers, addAnswer, removeAnswer } = useLogic({ questionData });

  return (
    <>
      <h2>{questionData.title}</h2>
      <div className={styles.chooseAdjective}>
        <div className={styles.items}>
          {items.map((item, idx) => (
            <div className={styles.item} key={item.id}>
              <i className="fa-duotone fa-star"></i>
              {item.text}
              <div className={styles.box}>
                {answers[idx] &&
                  <>
                    {answers[idx]}
                    <i className="fa-duotone fa-ban" onClick={() => removeAnswer(idx)}></i>
                  </>
                }
              </div>
              {item.correct !== answers[idx] && answers[idx] && <i className={`fa-duotone fa-triangle-exclamation ${styles.wrong}`}></i>}
              {item.correct === answers[idx] && item.correct === items[idx].correct && <i className={`fa-duotone fa-circle-check ${styles.correct}`}></i>}
              <div className={styles.choices}>
                (
                {item.choices.map((choice, index) => (
                  <Fragment key={index}>
                    {index > 0 && '، '}
                    <span onClick={() => addAnswer(idx, choice)} className={answers[idx] === choice ? styles.active : ''}>{choice}</span>
                  </Fragment>
                ))}
                )
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ChooseAdjective;
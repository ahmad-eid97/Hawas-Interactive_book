//== Hooks
import { Fragment } from 'react';
//== Components
import { PageLoader } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Types
import { QuestionData } from '../types';
//== Styles
import styles from './chooseWord.module.scss';

const ChooseLetter = ({ questionData }: { questionData: QuestionData }) => {
  const { items, choices, addToChoices, isLoading } = useLogic({ questionData });
  console.log(questionData)
  if (isLoading) return <PageLoader />;
  return (
    <div className={styles.chooseLetter}>
      <h2>{questionData.title}</h2>
      <div className={`${styles.questionContentWrapper} ${questionData.additional_image_direction === 'bottom' ? styles.reversed : ''}`}>
        <div className={styles.questionImage}>
          <img src={questionData.question_img} alt="question_image" />
        </div>
        <div className={styles.itemsWrapper}>
          {items.map((item: any, idx: number) => (
            <div className={styles.item} key={idx}>
              <div className={styles.choices}>
                <i className="fa-duotone fa-star"></i>
                {item.words.map((word: any, index: number) => (
                  <Fragment key={index}>
                    {index > 0 && '، '}
                    <span key={index} onClick={() => addToChoices(idx, word)} className={choices[idx] === word ? styles.active : ''}>
                      {word}
                      {item.correct !== choices[idx] && choices[idx] === word && item.correct !== word && <i className={`fa-duotone fa-triangle-exclamation ${styles.wrong}`}></i>}
                      {item.correct === choices[idx] && item.correct === word && <i className={`fa-duotone fa-circle-check ${styles.correct}`}></i>}
                    </span>
                  </Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChooseLetter;
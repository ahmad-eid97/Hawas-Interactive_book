//== Hooks
import { Fragment } from 'react';
//== Components
import { PageLoader } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Types
import { QuestionData } from '../types';
//== Styles
import styles from './chooseLetter.module.scss';

const ChooseLetter = ({ questionData }: { questionData: QuestionData }) => {
  const { items, choices, addToChoices, isLoading } = useLogic({ questionData });

  if (isLoading) return <PageLoader />
  return (
    <div className={styles.chooseLetter}>
      <h2>{questionData.title}</h2>
      <div className={styles.itemsWrapper}>
        {items.map((item: any, idx: number) => (
          <div className={styles.item} key={idx}>
            <img src={item.image} alt="quiz-image" loading='lazy' />
            <div className={styles.choices}>
              {item.letters.map((letter: any, index: number) => (
                <Fragment key={index}>
                  {index > 0 && '، '}
                  <span key={index} onClick={() => addToChoices(idx, letter)} className={choices[idx] === letter ? styles.active : ''}>
                    {letter}
                    {item.correct !== choices[idx] && choices[idx] && item.correct !== letter && <i className={`fa-duotone fa-triangle-exclamation ${styles.wrong}`}></i>}
                    {item.correct === choices[idx] && item.correct === letter && <i className={`fa-duotone fa-circle-check ${styles.correct}`}></i>}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChooseLetter;
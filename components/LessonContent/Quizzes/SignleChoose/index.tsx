//== Components
import { PageLoader, RadioGroup } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Types
import { QuestionData } from '../types';
//== Styles
import styles from './signleChoose.module.scss';

interface Item {
  question: string;
  words: string[];
  correct: string;
}

const SignleChoose = ({ questionData }: { questionData: QuestionData }) => {
  const { items, choices, addToChoices, isLoading } = useLogic({ questionData });

  if (isLoading) return <PageLoader />
  return (
    <div className={styles.chooseLetter}>
      <div className={styles.itemsWrapper}>
        {items.map((item: Item, idx: number) => (
          <div className={styles.item} key={idx}>
            <h2>{item.question}</h2>
            <div className={styles.choices}>
              {item.words.map((word, index) => (
                <span key={index} onClick={() => addToChoices(idx, word)} className={choices[idx] === word ? styles.active : ''}>
                  <RadioGroup name={`radio${idx}`} checked={choices[idx] === word ? true : false} />
                  {word}
                  {item.correct !== choices[idx] && choices[idx] === word && item.correct !== word && <i className={`fa-duotone fa-triangle-exclamation ${styles.wrong}`}></i>}
                  {item.correct === choices[idx] && item.correct === word && <i className={`fa-duotone fa-circle-check ${styles.correct}`}></i>}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SignleChoose;
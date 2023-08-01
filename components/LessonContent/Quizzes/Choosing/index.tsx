//== Components
import { PageLoader } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './choosing.module.scss';
//== Types
import { QuestionData } from '../types';

interface Item {
  id: number;
  question: string;
  words: string[];
  correct: string;
}

const Choosing = ({ questionData }: { questionData: QuestionData }) => {
  const { items, choices, addToChoices, isLoading } = useLogic({ questionData });

  if (isLoading) return <PageLoader />
  return (
    <div className={styles.chooseLetter}>
      <div className={styles.itemsWrapper}>
        {items && items.map((item: Item, idx: number) => (
          <div className={styles.item} key={idx}>
            <span>السؤال {idx + 1}:</span>
            <h2>{item.question}</h2>
            <div className={styles.choices}>
              {item.words.map((word, index) => (
                <span key={index} onClick={() => addToChoices(idx, word)} className={choices[idx] === word ? styles.active : ''}>
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

export default Choosing;
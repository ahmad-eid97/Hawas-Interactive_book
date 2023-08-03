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
  words: any[];
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
                <span key={index} onClick={() => addToChoices(idx, word)} className={choices[idx]?.title === word.title ? styles.active : ''}>
                  {(word.image && word.title) &&
                    <span>
                      <img src={word.image} alt={word.title} />
                      <span>{word.title}</span>
                    </span>
                  }
                  {(word.image && !word.title) &&
                    <>
                      <img src={word.image} alt={word.title} />
                    </>
                  }
                  {(!word.image && word.title) &&
                    <>
                      {word.title}
                    </>
                  }
                  {item.correct !== choices[idx]?.title && choices[idx]?.title === word.title && item.correct !== word.title && <i className={`fa-duotone fa-triangle-exclamation ${styles.wrong}`}></i>}
                  {item.correct === choices[idx]?.title && item.correct === word.title && <i className={`fa-duotone fa-circle-check ${styles.correct}`}></i>}
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
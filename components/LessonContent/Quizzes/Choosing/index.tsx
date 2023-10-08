//== Components
import { PageLoader } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './choosing.module.scss';
//== Types
import { QuestionData } from '../types';

const Choosing = ({ questionData }: { questionData: QuestionData }) => {
  const { items, choices, addToChoices, isLoading } = useLogic({ questionData });

  if (isLoading) return <PageLoader />
  return (
    <div className={styles.chooseLetter}>
      <h2>{questionData.title}</h2>
      <div className={styles.itemsWrapper}>
        {items && items?.length ? items.map((item: any, idx: number) => (
          <div className={styles.item} key={idx}>
            {/* <span>السؤال {idx + 1}:</span> */}
            {item.image && <img src={item.image} alt="quiz-image" loading='lazy' />}
            <h2>{item.question}</h2>
            <div className={styles.choices}>
              {item && item?.words?.length && item?.words.map((word: any, index: number) => (
                <span key={index} onClick={() => addToChoices(idx, word)} className={word.type === 'image' ? (choices[idx]?.image === word.image ? styles.active : '') : (choices[idx]?.text === word?.text ? styles.active : '')}>
                  {(word.type === 'text_image') &&
                    <span>
                      <img src={word.image} alt={word?.text} />
                      <span>{word?.text}</span>
                    </span>
                  }
                  {(word.type === 'image') &&
                    <>
                      <img src={word.image} alt={word?.text} />
                    </>
                  }
                  {(word.type === 'text') &&
                    <>
                      {word?.text}
                    </>
                  }
                  {word.type === 'image' || word.type === 'text' ?
                    <>
                      {item.correct?.[word.type] !== choices[idx]?.[word.type] && choices[idx] === word &&
                        <i className={`fa-duotone fa-triangle-exclamation ${styles.wrong}`}></i>
                      }
                      {item.correct?.[word.type] === choices[idx]?.[word.type] && item.correct?.[word.type] === word?.[word.type] &&
                        <i className={`fa-duotone fa-circle-check ${styles.correct}`}></i>
                      }
                    </>
                    :
                    <>
                      {item.correct?.text !== choices[idx]?.text && choices[idx] === word &&
                        <i className={`fa-duotone fa-triangle-exclamation ${styles.wrong}`}></i>
                      }
                      {item.correct?.text === choices[idx]?.text && item?.correct?.text === word?.text &&
                        <i className={`fa-duotone fa-circle-check ${styles.correct}`}></i>
                      }
                    </>
                  }
                </span>
              ))}
            </div>
          </div>
        )) : null}
      </div>
    </div>
  )
}

export default Choosing;
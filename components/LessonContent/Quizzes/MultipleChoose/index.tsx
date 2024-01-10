//== Components
import { PageLoader } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './multipleChoose.module.scss';
//== Types
import { QuestionData } from '../types';

const MultipleChoose = ({ questionData }: { questionData: QuestionData }) => {
  const { items, choices, addToChoices, isLoading } = useLogic({ questionData });

  if (isLoading) return <PageLoader />
  return (
    <div className={styles.multipleChoose}>
      <div className={styles.itemsWrapper}>
        {items ? items.map((item: any, idx: number) => (
          <div className={styles.item} key={idx}>
            {/* <span>السؤال {idx + 1}:</span> */}
            {item.image && <img src={item.image} alt="quiz-image" loading='lazy' />}
            {item.question !== '.' && <h2>{item.question}</h2>}
            <div className={styles.choices}>
              {item.words.map((word: any, index: number) => (
                <span key={index} onClick={() => addToChoices(idx, word)} className={word.type === 'image' ? (choices[idx]?.image === word.image ? styles.active : '') : (choices[idx]?.includes(word) ? styles.active : '')}>
                  {(word.type === 'text_image') &&
                    <span>
                      <img src={word.image} alt={word.text} />
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
                      {item.correct.find((one: any) => one?.text === word?.text)?.text !== choices[idx]?.find((one: any) => one?.text === word.text)?.text && choices[idx]?.find((one: any) => one?.text === word?.text) &&
                        <i className={`fa-duotone fa-triangle-exclamation ${styles.wrong}`}></i>
                      }
                      {item.correct.find((one: any) => one?.text === word?.text)?.text === choices[idx]?.find((one: any) => one?.text === word.text)?.text && choices[idx]?.find((one: any) => one?.text === word?.text) &&
                        <i className={`fa-duotone fa-circle-check ${styles.correct}`}></i>
                      }
                    </>
                    :
                    <>
                      {item.correct.find((one: any) => one?.text === word?.text)?.text !== choices[idx]?.find((one: any) => one?.text === word.text)?.text && choices[idx]?.find((one: any) => one?.text === word?.text) &&
                        <i className={`fa-duotone fa-triangle-exclamation ${styles.wrong}`}></i>
                      }
                      {item.correct.find((one: any) => one.text === word?.text)?.text === choices[idx]?.find((one: any) => one?.text === word.text)?.text && choices[idx]?.find((one: any) => one?.text === word?.text) &&
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

export default MultipleChoose;
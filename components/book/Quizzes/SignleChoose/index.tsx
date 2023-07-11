//== Components
import { RadioGroup } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './signleChoose.module.scss';

const SignleChoose = () => {
  const { items, choices, addToChoices } = useLogic();

  return (
    <div className={styles.chooseLetter}>
      <div className={styles.itemsWrapper}>
        {items.map((item, idx) => (
          <div className={styles.item} key={idx}>
            <span>؟السؤال {idx + 1}:</span>
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
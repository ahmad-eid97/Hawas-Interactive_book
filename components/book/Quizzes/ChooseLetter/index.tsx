//== Hooks
import { Fragment } from 'react';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './chooseLetter.module.scss';

const ChooseLetter = () => {
  const { items, choices, addToChoices } = useLogic();

  return (
    <div className={styles.chooseLetter}>
      <h2>اِخْتَرِ الْحَرْفَ الأَوَّلَ الّذي يَبْدَأُ بِهِ اسْمُ الصّورَةِ!</h2>
      <div className={styles.itemsWrapper}>
        {items.map((item, idx) => (
          <div className={styles.item} key={idx}>
            <img src={item.image} alt="quiz-image" loading='lazy' />
            <div className={styles.choices}>
              {item.letters.map((letter, index) => (
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
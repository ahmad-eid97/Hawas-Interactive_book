//== Hooks
import { Fragment } from 'react';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './chooseWord.module.scss';

const ChooseLetter = () => {
  const { items, choices, addToChoices } = useLogic();

  return (
    <div className={styles.chooseLetter}>
      <h2>ضَعْ مُرَبَّعًا حَوْلَ الْكَلِمَةِ الشّاذَّةِ!</h2>
      <div className={styles.itemsWrapper}>
        {items.map((item, idx) => (
          <div className={styles.item} key={idx}>
            <div className={styles.choices}>
              <i className="fa-duotone fa-star"></i>
              {item.words.map((word, index) => (
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
  )
}

export default ChooseLetter;
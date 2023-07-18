//== Hooks
import { Fragment } from 'react';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './imageTyping.module.scss';

const ImageTyping = () => {
  const { items, handleFields, showCorrection, correctAnswer, retry, rendered } = useLogic();

  if (!rendered) return null;
  return (
    <div className={styles.continueTyping}>
      <h2>أَكْمِلْ حَسْبَ الْمِثالِ الْوَهْمِيِّ!</h2>
      <div className={styles.wrapper}>
        {items.map((item, idx) => (
          <div className={styles.item} key={item.id}>
            <i className="fa-duotone fa-star"></i>
            <span>{item.text}:</span>
            <input type="text" onChange={(e) => handleFields(e, idx)} />
            <img src={item.image} alt="image" loading='lazy' />
          </div>
        ))}
      </div>
      {showCorrection &&
        <div className={`correctData ${showCorrection.correct ? 'correct' : 'wrong'}`}>
          {showCorrection.data.map((one, idx) => (
            <Fragment key={idx}>
              {idx === 0 ?
                <p><i className="fa-solid fa-lightbulb-on"></i> {one}</p>
                :
                <p key={idx}>{one}</p>
              }
            </Fragment>
          ))}
        </div>
      }
      <div className="checkAnswer">
        <button onClick={correctAnswer}><i className="fa-regular fa-badge-check"></i> فحص الإجابات</button>
        <button onClick={retry}><i className="fa-regular fa-arrows-rotate"></i> إعادة المحاولة</button>
      </div>
    </div>
  )
}

export default ImageTyping;
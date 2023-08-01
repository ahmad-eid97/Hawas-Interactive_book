//== Hooks
import { Fragment } from 'react';
//== Components
import PageLoader from '@/components/Common/PageLoader';
//== Component Logic
import useLogic from './logic';
//== Types
import { QuestionData } from '../types';
//== Styles
import styles from './imageTyping.module.scss';

interface Item {
  id: number;
  text: string;
  image: string;
}

const ImageTyping = ({ questionData }: { questionData: QuestionData }) => {
  const { items, handleFields, showCorrection, correctAnswer, retry, rendered, isLoading } = useLogic({ questionData });

  if (!rendered) return null;
  if (isLoading) return <PageLoader />
  return (
    <div className={styles.continueTyping}>
      <h2>{questionData.title}</h2>
      <div className={styles.wrapper}>
        {items.map((item: Item, idx: number) => (
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
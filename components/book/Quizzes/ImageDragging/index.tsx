"use client";
//== Hooks
import { Fragment } from 'react';
//== Components
import { ImageDroppables, ImageDraggables } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './draggingParts.module.scss';

const ArrangeWords = () => {
  const { droppingArea, choices, dragStart, dragEnd, dragOver, dragLeave, drop, removeChoice, showCorrection, correctAnswer, retry, rendered } = useLogic();

  if (!rendered) return null;
  return (
    <>
      <h2>ضع الكلمات المناسبة في شجرة المشاعر والأحاسيس</h2>
      <div className={styles.arrangeWords}>
        <div className={styles.wrapper}>
          <ImageDroppables
            dragOver={dragOver}
            dragLeave={dragLeave}
            drop={drop}
          />
          <ImageDraggables
            droppingArea={droppingArea}
            choices={choices}
            dragStart={dragStart}
            dragEnd={dragEnd}
            removeChoice={removeChoice}
          />
        </div>
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
    </>
  )
}

export default ArrangeWords;
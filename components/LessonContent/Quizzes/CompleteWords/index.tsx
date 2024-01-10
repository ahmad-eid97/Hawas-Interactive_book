"use client";
//== Hooks
import { Fragment } from 'react';
//== Components
import { CompleteDroppables, CompleteDraggables, PageLoader } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Types
import { QuestionData } from '../types';
//== Styles
import styles from './completeWords.module.scss';

const CompleteWords = ({ questionData }: { questionData: QuestionData }) => {
  const { items, droppingArea, choices, dragStart, dragEnd, dragOver, dragLeave, drop, removeChoice, showCorrection, correctAnswer, retry, rendered, isLoading } = useLogic({ questionData });

  if (!rendered) return null;
  if (isLoading) return <PageLoader />
  return (
    <>
      <h2 className={styles.title}>{questionData.title}</h2>
      <div className={styles.fillThePlaces}>
        <CompleteDraggables
          droppingArea={droppingArea}
          choices={choices}
          dragStart={dragStart}
          dragEnd={dragEnd}
          removeChoice={removeChoice}
        />
        <CompleteDroppables
          items={items}
          dragOver={dragOver}
          dragLeave={dragLeave}
          drop={drop}
        />
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

export default CompleteWords;
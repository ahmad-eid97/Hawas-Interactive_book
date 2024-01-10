"use client";
//== Hooks
import { Fragment } from 'react';
//== Components
import { Droppables, Draggables, PageLoader } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Types
import { QuestionData } from '../types';
//== Styles
import styles from './dragging.module.scss';

const WordDragging = ({ questionData }: { questionData: QuestionData }) => {
  const { items, droppingArea, dragStart, dragEnd, dragOver, dragLeave, drop, removeChoice, correctAnswer, showCorrection, retry, rendered, isLoading } = useLogic({ questionData });

  if (!rendered) return null;
  if (isLoading) return <PageLoader />
  return (
    <>
      <h2 className={styles.title}>{questionData.title}</h2>
      <div className={styles.wordDragging}>
        {items.map((item: any, idx: number) => (
          <div className={styles.wrapper} key={idx}>
            <Droppables
              dragOver={dragOver}
              dragLeave={dragLeave}
              drop={drop}
              index={idx}
              title={item.title}
            />
            <Draggables
              droppingArea={droppingArea}
              choices={item.choices}
              dragStart={dragStart}
              dragEnd={dragEnd}
              removeChoice={removeChoice}
              questionIndex={idx}
            />
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
    </>
  )
}

export default WordDragging;
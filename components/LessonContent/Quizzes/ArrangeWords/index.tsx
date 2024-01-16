"use client";
//== Hooks
import { Fragment } from 'react';
//== Components
import { ArrangeDroppables, ArrangeDraggables, PageLoader } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Types
import { QuestionData } from '../types';
//== Styles
import styles from './dragging.module.scss';

const ArrangeWords = ({ questionData }: { questionData: QuestionData }) => {
  const { items, droppingArea, dragStart, dragEnd, dragOver, dragLeave, drop, dragByClick, dropByClick, removeChoice, correctAnswer, showCorrection, retry, rendered, isLoading } = useLogic({ questionData });

  if (!rendered) return null;
  if (isLoading) return <PageLoader />;
  return (
    <>
      <h2 className={styles.title}>{questionData?.title}</h2>
      {questionData?.question_img ?
        <img className={styles.questionImage} src={questionData?.question_img} alt="question_image" />
        : null
      }
      <div className={styles.arrangeWords}>
        {items.map((item: any, idx: number) => (
          <div className={styles.wrapper} key={idx}>
            <ArrangeDroppables
              dragOver={dragOver}
              dragLeave={dragLeave}
              drop={drop}
              index={idx}
              droppables={item}
              dropByClick={dropByClick}
            />
            <ArrangeDraggables
              choices={item.answers}
              droppingArea={droppingArea}
              dragStart={dragStart}
              dragEnd={dragEnd}
              removeChoice={removeChoice}
              id={idx}
              dragByClick={dragByClick}
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
                <p>{one}</p>
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
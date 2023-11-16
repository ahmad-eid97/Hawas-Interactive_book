"use client";
//== Hooks
import { Fragment } from 'react';
//== Components
import { Boxes, PageLoader } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Types
import { QuestionData } from '../types';
//== Styles
import styles from './dragging.module.scss';

const TableDragging = ({ questionData }: { questionData: QuestionData }) => {
  const { dragStart, dragEnd, dragOver, dragLeave, drop, correctAnswer, showCorrection, retry, rendered, isLoading, questionDetails } = useLogic({ questionData });

  if (!rendered) return null;
  if (isLoading) return <PageLoader />
  return (
    <div className={styles.dragging}>
      <h2>{questionData.title}</h2>
      <div className={styles.words}>
        <h2>الكلمات</h2>
        <div className={styles.items}>
          {questionDetails?.items.map((item: any, idx: number) => (
            <p
              key={item.id}
              className={`${styles.item} item`}
              draggable={true}
              onDragStart={(e) => dragStart(e)}
              onDragEnd={(e) => dragEnd(e)}
            >
              {item.title}
            </p>
          ))}
        </div>
      </div>
      <Boxes titles={questionDetails?.titles} dragOver={dragOver} dragLeave={dragLeave} drop={drop} questionData={questionData} />
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

export default TableDragging;
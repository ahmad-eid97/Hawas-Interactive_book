"use client";
//== Hooks
import { Fragment } from 'react';
//== Components
import { ImageDroppables, ImageDraggables, PageLoader } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Types
import { QuestionData } from '../types';
//== Styles
import styles from './draggingParts.module.scss';

const ImageDragging = ({ questionData }: { questionData: QuestionData }) => {
  const { droppingArea, dragStart, dragEnd, dragOver, dragLeave, drop, removeChoice, showCorrection, correctAnswer, retry, rendered, isLoading, newDataLoading, questionDetails } = useLogic({ questionData });

  console.log(questionData)

  if (!rendered) return null;
  if (isLoading || newDataLoading) return <PageLoader />

  return (
    <>
      <h2>{questionData.title}</h2>
      <div className={`${styles.content} ${styles[questionData?.additional_image_direction]}`}>
        {questionData.additional_image ?
          <img className={styles.additionalImage} src={questionData.additional_image} alt="question_image" />
          :
          null
        }
        <div className={styles.arrangeWords}>
          <div className={styles.wrapper}>
            <ImageDroppables
              dragOver={dragOver}
              dragLeave={dragLeave}
              drop={drop}
              questionDetails={questionDetails}
            />
            <ImageDraggables
              droppingArea={droppingArea}
              dragStart={dragStart}
              dragEnd={dragEnd}
              removeChoice={removeChoice}
              questionDetails={questionDetails}
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
      </div>
      <div className="checkAnswer">
        <button onClick={correctAnswer}><i className="fa-regular fa-badge-check"></i> فحص الإجابات</button>
        <button onClick={retry}><i className="fa-regular fa-arrows-rotate"></i> إعادة المحاولة</button>
      </div>
    </>
  )
}

export default ImageDragging;
"use client";
//== Hooks
import { Fragment } from 'react';
//== Components
import { Droppables, Draggables } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './dragging.module.scss';

const WordDragging = () => {
  const { droppingArea, choices, dragStart, dragEnd, dragOver, dragLeave, drop, removeChoice, correctAnswer, showCorrection } = useLogic();

  return (
    <>
      <h2>اِخْتَرْ الْكَلِمَةَ النَّاقِصَةَ!</h2>
      <div className={styles.wordDragging}>
        {[...Array(3)].map((_, idx) => (
          <div className={styles.wrapper} key={idx}>
            <Droppables
              dragOver={dragOver}
              dragLeave={dragLeave}
              drop={drop}
              index={idx}
            />
            <Draggables
              droppingArea={droppingArea}
              choices={choices}
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
        <button onClick={correctAnswer}>فحص الإجابات</button>
      </div>
    </>
  )
}

export default WordDragging;
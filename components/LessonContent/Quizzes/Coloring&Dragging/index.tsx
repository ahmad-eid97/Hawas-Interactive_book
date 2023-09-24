"use client";
//== Hooks
import { Fragment } from 'react';
//== Components
import { PageLoader } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Types
import { QuestionData } from '../types';
//== Styles
import styles from './coloring&Dragging.module.scss';

export default function ColoringAndDragging({ questionData }: { questionData: QuestionData }) {
  const { questionDetails, dragStart, dragOver, dragLeave, dragEnd, drop, setChoosedColor, colorLetter, rendered, retry, correctAnswer, showCorrection, isLoading } = useLogic({ questionData });

  if (!rendered) return null;
  if (isLoading) return <PageLoader />
  return (
    <>
      <h2 className={styles.heading}>{questionDetails?.title}</h2>
      <div className={styles.coloringAndDragging}>
        <div className={styles.firstQuestion}>
          <div className={styles.colors}>
            {questionDetails?.colors.map((color: string, index: number) => (
              <p onClick={() => setChoosedColor(color)} key={index} style={{ backgroundColor: color }}></p>
            ))}
          </div>
          <div className={styles.wordArea}>
            <div>
              {questionDetails?.word.split('').map((letter: string, index: number) => (
                <Fragment key={index}>
                  {index === questionDetails.letterIndex ?
                    <span onClick={(e) => colorLetter(e)}>{questionDetails?.word[questionDetails.letterIndex]}{questionDetails.letterIndex !== 0 && questionDetails.letterIndex !== questionDetails.word.length - 1 ? 'ـ' : ''}
                      <span className={styles.layer}></span></span>
                    :
                    <p key={index}>{letter}</p>
                  }
                </Fragment>
              ))}
            </div>
            <span onClick={(e) => colorLetter(e)}>{questionDetails?.word[questionDetails.letterIndex]}
              <span className={styles.layer}></span>
            </span>
          </div>
        </div>
        <div className={styles.secondQuestion}>
          <img src={questionDetails?.image} alt="question_image" />
          <div className={styles.dragging}>
            <div className={styles.droppables}>
              {questionDetails?.fixedLetters.map((letter: string, index: number) => (
                <Fragment key={index}>
                  {letter === '-' ?
                    <div onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, index)} key={index}></div>
                    :
                    <div onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, index)} key={index}>
                      <p>{letter}</p>
                    </div>
                  }
                </Fragment>
              ))}
            </div>
            <div className={styles.letters}>
              {questionDetails?.choices.map((letter: string, index: number) => (
                <Fragment key={index}>
                  <p
                    draggable={true}
                    onDragStart={(e) => dragStart(e)}
                    onDragEnd={(e) => dragEnd(e)}
                    key={index}>
                    {letter}
                  </p>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div >
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

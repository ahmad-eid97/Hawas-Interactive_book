"use client";
//== Hooks
import { Fragment } from 'react';
//== Styles
import styles from './droppables.module.scss';
//== Component Interface
interface CProps {
  dragOver: (e: React.DragEvent<HTMLParagraphElement>) => void;
  dragLeave: (e: React.DragEvent<HTMLParagraphElement>) => void;
  drop: (e: React.DragEvent<HTMLParagraphElement>, index: number) => void;
  questionDetails: any
}

const Droppables = ({ dragOver, dragLeave, drop, questionDetails }: CProps) => {
  console.log(questionDetails)
  return (
    <div className={styles.dropables} style={{ backgroundImage: `url(${questionDetails.questionImage})` }}>
      <img className={styles.question_image} src={questionDetails.questionImage} alt="question_image" />
      {questionDetails?.droppables.map((one: any, idx: number) => (
        <Fragment key={idx}>
          {one.left &&
            <div
              className={styles.dropable}
              onDragOver={(e) => dragOver(e)}
              onDragLeave={(e) => dragLeave(e)}
              onDrop={(e) => drop(e, idx)}
              style={{ top: `${one.top}px`, left: `${one.left}px` }}
            ></div>
          }
        </Fragment>
      ))}
    </div>
  )
}

export default Droppables
"use client";
//== Types
import { Choice } from '../../types';
//== Styles
import styles from './draggables.module.scss';
//== Component Interface
interface CProps {
  choices: Choice[]
  droppingArea: React.MutableRefObject<HTMLDivElement | null>
  dragStart: (e: React.DragEvent<HTMLParagraphElement>) => void
  dragEnd: (e: React.DragEvent<HTMLParagraphElement>) => void
  removeChoice: (e: React.MouseEvent<HTMLElement, MouseEvent>, idx: number, questionIndex: number) => void
  questionIndex: number;
  dragByClick: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
}

const Draggables = ({ choices, droppingArea, dragStart, dragEnd, removeChoice, questionIndex, dragByClick }: CProps) => {
  return (
    <div className={styles.draggables} ref={droppingArea} id={`drag-${questionIndex}`}>
      {choices.map((choice: any, idx: number) => (
        <p
          key={idx}
          className={`${styles.item} item`}
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
          onClick={(e) => dragByClick(e)}
        >
          {choice}
          <i className="fa-duotone fa-ban" onClick={(e) => removeChoice(e, idx, questionIndex)}></i>
        </p>
      ))}
    </div>
  )
}

export default Draggables
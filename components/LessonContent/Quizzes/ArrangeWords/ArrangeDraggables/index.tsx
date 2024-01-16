"use client";
//== Types
import { Choice } from '../../types';
//== Styles
import styles from './draggables.module.scss';
//== Component Interface
interface CProps {
  choices: string[]
  droppingArea: React.MutableRefObject<HTMLDivElement | null>
  dragStart: (e: React.DragEvent<HTMLParagraphElement>) => void
  dragEnd: (e: React.DragEvent<HTMLParagraphElement>) => void
  removeChoice: (e: React.MouseEvent<HTMLElement, MouseEvent>, idx: number) => void;
  id: number;
  dragByClick: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void
}

const Draggables = ({ choices, droppingArea, dragStart, dragEnd, removeChoice, id, dragByClick }: CProps) => {
  return (
    <div className={styles.draggables} ref={droppingArea} id={`draggable-${id}`}>
      {choices.map((choice, idx) => (
        <p
          className={`${styles.item} item`}
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
          key={idx}
          onClick={(e) => dragByClick(e)}
        >
          {choice}
          <i className="fa-duotone fa-ban" onClick={(e) => removeChoice(e, id)}></i>
        </p>
      ))}
    </div>
  )
}

export default Draggables
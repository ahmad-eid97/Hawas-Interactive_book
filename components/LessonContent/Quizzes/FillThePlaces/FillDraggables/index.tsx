"use client";
//== Styles
import styles from './draggables.module.scss';
//== Component Interface
interface CProps {
  choices: any
  droppingArea: React.MutableRefObject<HTMLDivElement | null>
  dragStart: (e: React.DragEvent<HTMLParagraphElement>) => void
  dragEnd: (e: React.DragEvent<HTMLParagraphElement>) => void
  removeChoice: (e: React.MouseEvent<HTMLElement, MouseEvent>, idx: number) => void;
  dragByClick: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
}

const Draggables = ({ choices, droppingArea, dragStart, dragEnd, removeChoice, dragByClick }: CProps) => {
  return (
    <div className={styles.draggables} ref={droppingArea}>
      {choices.map((choice: any, idx: number) => (
        <p
          className={`${styles.item} item`}
          key={idx}
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
          onClick={(e) => dragByClick(e)}
        >
          {choice?.text}
          <i className="fa-duotone fa-ban" onClick={(e) => removeChoice(e, idx)}></i>
        </p>
      ))}
    </div>
  )
}

export default Draggables
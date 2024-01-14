"use client";
//== Styles
import styles from './draggables.module.scss';
//== Component Interface
interface CProps {
  droppingArea: React.MutableRefObject<HTMLDivElement | null>;
  dragStart: (e: React.DragEvent<HTMLParagraphElement>) => void;
  dragEnd: (e: React.DragEvent<HTMLParagraphElement>) => void;
  removeChoice: (e: React.MouseEvent<HTMLElement, MouseEvent>, idx: number) => void;
  questionDetails: any;
  dragByClick: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void
}

const Draggables = ({ droppingArea, dragStart, dragEnd, removeChoice, questionDetails, dragByClick }: CProps) => {
  return (
    <div className={styles.draggables} ref={droppingArea}>
      {questionDetails?.choices.map((choice: any, idx: number) => (
        <p
          className={`${styles.item} item`}
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
          key={choice.id}
          onClick={(e) => dragByClick(e)}
        >
          {choice.title}
          <i className="fa-duotone fa-ban" onClick={(e) => removeChoice(e, idx)}></i>
        </p>
      ))}
    </div>
  )
}

export default Draggables
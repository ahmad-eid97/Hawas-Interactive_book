"use client";
//== Styles
import styles from './draggables.module.scss';
//== Component Interface
interface CProps {
  choices: any
  droppingArea: React.MutableRefObject<HTMLDivElement | null>
  dragStart: (e: React.DragEvent<HTMLParagraphElement>) => void
  dragEnd: (e: React.DragEvent<HTMLParagraphElement>) => void
  removeChoice: (e: React.MouseEvent<HTMLElement, MouseEvent>, idx: number) => void
}

const Draggables = ({ choices, droppingArea, dragStart, dragEnd, removeChoice }: CProps) => {
  return (
    <div className={styles.draggables} ref={droppingArea}>
      {choices.map((choice: any, idx: number) => (
        <p
          className={`${styles.item} item`}
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
          key={idx}
        >
          {choice?.text}
          <i className="fa-duotone fa-ban" onClick={(e) => removeChoice(e, idx)}></i>
        </p>
      ))}
    </div>
  )
}

export default Draggables
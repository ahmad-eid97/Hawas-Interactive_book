"use client";
//== Styles
import styles from './droppables.module.scss';
//== Component Interface
interface CProps {
  droppables: { answers: string[]; image: string };
  dragOver: (e: React.DragEvent<HTMLParagraphElement>) => void;
  dragLeave: (e: React.DragEvent<HTMLParagraphElement>) => void;
  drop: (e: React.DragEvent<HTMLParagraphElement>, index: number, droppableIndex: number) => void;
  index: number;
}

const Droppables = ({ droppables, dragOver, dragLeave, drop, index }: CProps) => {
  return (
    <div className={styles.dropables}>
      {droppables.image ?
        <img src={droppables.image} alt="question_image" />
        :
        null
      }
      <i className="fa-duotone fa-star"></i>
      {droppables.answers.map((one: string, idx: number) => (
        <div key={idx} className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, index, idx)}></div>
      ))}
    </div>
  )
}

export default Droppables
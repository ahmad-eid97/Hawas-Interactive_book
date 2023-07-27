"use client";
//== Styles
import styles from './droppables.module.scss';
//== Component Interface
interface CProps {
  droppables: string[];
  dragOver: (e: React.DragEvent<HTMLParagraphElement>) => void;
  dragLeave: (e: React.DragEvent<HTMLParagraphElement>) => void;
  drop: (e: React.DragEvent<HTMLParagraphElement>, index: number, droppableIndex: number) => void;
  index: number;
}

const Droppables = ({ droppables, dragOver, dragLeave, drop, index }: CProps) => {
  return (
    <div className={styles.dropables}>
      <i className="fa-duotone fa-star"></i>
      {droppables.map((one, idx) => (
        <div key={idx} className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, index, idx)}></div>
      ))}
    </div>
  )
}

export default Droppables
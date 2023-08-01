"use client";
//== Styles
import styles from './droppables.module.scss';
//== Component Interface
interface CProps {
  title: string[];
  dragOver: (e: React.DragEvent<HTMLParagraphElement>) => void;
  dragLeave: (e: React.DragEvent<HTMLParagraphElement>) => void;
  drop: (e: React.DragEvent<HTMLParagraphElement>, index: number, droppapleIndex: number) => void;
  index: number
}

const Droppables = ({ title, dragOver, dragLeave, drop, index }: CProps) => {
  return (
    <div className={styles.dropables}>
      <i className="fa-duotone fa-star"></i>
      {title.map((one, idx) => (
        one === '-'
          ? <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, index, idx)}></div>
          : " " + one + " "
      ))}
    </div>
  )
}

export default Droppables
"use client";
//== Styles
import styles from './droppables.module.scss';
//== Component Interface
interface CProps {
  dragOver: (e: React.DragEvent<HTMLParagraphElement>) => void
  dragLeave: (e: React.DragEvent<HTMLParagraphElement>) => void
  drop: (e: React.DragEvent<HTMLParagraphElement>, index: number, droppableIndex: number) => void
  index: number
}

const Droppables = ({ dragOver, dragLeave, drop, index }: CProps) => {
  return (
    <div className={styles.dropables}>
      <i className="fa-duotone fa-star"></i>
      <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, index, 0)}></div>
      <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, index, 1)}></div>
      <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, index, 2)}></div>
      <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, index, 3)}></div>
      <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, index, 4)}></div>
    </div>
  )
}

export default Droppables
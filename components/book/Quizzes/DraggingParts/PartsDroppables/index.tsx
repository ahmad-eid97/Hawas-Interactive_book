"use client";
//== Styles
import styles from './droppables.module.scss';
//== Component Interface
interface CProps {
  dragOver: (e: React.DragEvent<HTMLParagraphElement>) => void
  dragLeave: (e: React.DragEvent<HTMLParagraphElement>) => void
  drop: (e: React.DragEvent<HTMLParagraphElement>, index: number) => void
}

const Droppables = ({ dragOver, dragLeave, drop }: CProps) => {
  return (
    <div className={styles.dropables}>
      <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, 0)}></div>
      <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, 1)}></div>
      <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, 2)}></div>
      <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, 3)}></div>
    </div>
  )
}

export default Droppables
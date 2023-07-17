"use client";
//== Styles
import styles from './droppables.module.scss';
//== Component Interface
interface CProps {
  dragOver: (e: React.DragEvent<HTMLParagraphElement>) => void
  dragLeave: (e: React.DragEvent<HTMLParagraphElement>) => void
  drop: (e: React.DragEvent<HTMLParagraphElement>, index: number, droppapleIndex: number) => void
  index: number
}

const Droppables = ({ dragOver, dragLeave, drop, index }: CProps) => {
  return (
    <div className={styles.dropables}>
      <i className="fa-duotone fa-star"></i>
      ركض عادل وراء
      <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, index, 0)}></div>
      ولكنها
      <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, index, 1)}></div>
      بعيداَ
    </div>
  )
}

export default Droppables
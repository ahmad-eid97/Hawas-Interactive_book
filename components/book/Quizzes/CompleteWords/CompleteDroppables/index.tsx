"use client";
//== Styles
import styles from './droppables.module.scss';
//== Component Interface
interface CProps {
  dragOver: (e: React.DragEvent<HTMLParagraphElement>) => void
  dragLeave: (e: React.DragEvent<HTMLParagraphElement>) => void
  drop: (e: React.DragEvent<HTMLParagraphElement>) => void
}

const Droppables = ({ dragOver, dragLeave, drop }: CProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dropables}>
        عا
        <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e)}></div>
      </div>
      <div className={styles.dropables}>
        <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e)}></div>
        لون
      </div>
      <div className={styles.dropables}>
        ور
        <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e)}></div>
        ء
      </div>
      <div className={styles.dropables}>
        <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e)}></div>
        كض
      </div>
      <div className={styles.dropables}>
        حز
        <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e)}></div>
      </div>
      <div className={styles.dropables}>
        جدي
        <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e)}></div>
      </div>
    </div>
  )
}

export default Droppables
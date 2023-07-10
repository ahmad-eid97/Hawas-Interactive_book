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
        <span>1-</span>
        عاد
        <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e)}></div>
        وعمر من
        <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e)}></div>
        إلي
        <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e)}></div>
      </div>
      <div className={styles.dropables}>
        <span>2-</span>
        أراد عثمان أن
        <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e)}></div>
        العش
        <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e)}></div>
      </div>
      <div className={styles.dropables}>
        <span>3-</span>
        فقال له عمر
        <div className={styles.dropable} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e)}></div>
      </div>
    </div>
  )
}

export default Droppables
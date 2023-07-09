"use client";
//== Styles
import styles from './boxes.module.scss';
//== Component Interface
interface CProps {
  dragOver: (e: React.DragEvent<HTMLDivElement>) => void
  dragLeave: (e: React.DragEvent<HTMLDivElement>) => void
  drop: (e: React.DragEvent<HTMLDivElement>) => void
}

const Boxes = ({ dragOver, dragLeave, drop }: CProps) => {
  return (
    <div className={styles.boxes}>
      <div className={styles.box} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e)}>
        <h2>حيوانات</h2>
      </div>
      <div className={styles.box} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e)}>
        <h2>طيور</h2>
      </div>
    </div>
  )
}

export default Boxes
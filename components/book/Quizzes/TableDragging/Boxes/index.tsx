"use client";
//== Styles
import styles from './boxes.module.scss';
//== Component Interface
interface CProps {
  dragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  dragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
  drop: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  titles: { right: string; left: string } | undefined;
}

const Boxes = ({ dragOver, dragLeave, drop, titles }: CProps) => {
  return (
    <div className={styles.boxes}>
      <div className={styles.box} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, 0)}>
        <h2>{titles?.right}</h2>
      </div>
      <div className={styles.box} onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, 1)}>
        <h2>{titles?.left}</h2>
      </div>
    </div>
  )
}

export default Boxes
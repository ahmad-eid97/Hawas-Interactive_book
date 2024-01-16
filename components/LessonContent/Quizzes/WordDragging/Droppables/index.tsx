"use client";
//== Styles
import styles from './droppables.module.scss';
//== Component Interface
interface CProps {
  title: string[];
  dragOver: (e: React.DragEvent<HTMLParagraphElement>) => void;
  dragLeave: (e: React.DragEvent<HTMLParagraphElement>) => void;
  drop: (e: React.DragEvent<HTMLParagraphElement>, index: number, droppapleIndex: number) => void;
  index: number;
  dropByClick: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>, index: number) => void;
}

const Droppables = ({ title, dragOver, dragLeave, drop, index, dropByClick }: CProps) => {
  return (
    <div className={styles.dropables}>
      <i className="fa-duotone fa-star"></i>
      {title.map((one, idx) => (
        <span key={idx}>
          {one === '-'
            ? <div
              className={styles.dropable}
              onDragOver={(e) => dragOver(e)}
              onDragLeave={(e) => dragLeave(e)}
              onDrop={(e) => drop(e, index, idx)}
              onClick={(e) => dropByClick(e, index)}
            ></div>
            : " " + one + " "}
        </span>
      ))}
    </div>
  )
}

export default Droppables
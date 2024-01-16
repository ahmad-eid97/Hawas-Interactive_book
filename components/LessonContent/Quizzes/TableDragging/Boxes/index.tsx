"use client";
//== Types
import { QuestionData } from '../../types';
//== Styles
import styles from './boxes.module.scss';
//== Component Interface
interface CProps {
  dragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  dragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
  drop: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  titles: { right: string; left: string } | undefined;
  questionData: QuestionData;
  dropByClick: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>, index: number) => void;
}

const Boxes = ({ dragOver, dragLeave, drop, titles, questionData, dropByClick }: CProps) => {
  return (
    <div className={styles.boxes}>
      <div className={styles.side}>
        {questionData.question_img ?
          <img src={questionData.question_img} alt="right_column_image" />
          :
          null
        }
        <div
          className={styles.box}
          onDragOver={(e) => dragOver(e)}
          onDragLeave={(e) => dragLeave(e)}
          onDrop={(e) => drop(e, 0)}
          onClick={(e) => dropByClick(e, 0)}
        >
          <h2>{titles?.right}</h2>
        </div>
      </div>
      <div className={styles.side}>
        {questionData.additional_image ?
          <img src={questionData.additional_image} alt="left_column_image" />
          :
          null
        }
        <div
          className={styles.box}
          onDragOver={(e) => dragOver(e)}
          onDragLeave={(e) => dragLeave(e)}
          onDrop={(e) => drop(e, 1)}
          onClick={(e) => dropByClick(e, 1)}
        >
          <h2>{titles?.left}</h2>
        </div>
      </div>
    </div>
  )
}

export default Boxes
"use client";
//== Hooks
import { Fragment } from 'react';
//== Components
import { Boxes } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './dragging.module.scss';

const TableDragging = () => {
  const { dragStart, dragEnd, dragOver, dragLeave, drop, correctAnswer, showCorrection } = useLogic();

  return (
    <div className={styles.dragging}>
      <h2>ضع الكلمات المناسبة في كل جدول</h2>
      <div className={styles.words}>
        <h2>الكلمات</h2>
        <p
          className={`${styles.item} item`}
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
        >
          أسد
        </p>
        <p
          className={`${styles.item} item`}
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
        >
          ثعبان
        </p>
        <p
          className={`${styles.item} item`}
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
        >
          بومة
        </p>
        <p
          className={`${styles.item} item`}
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
        >
          تمساح
        </p>
        <p
          className={`${styles.item} item`}
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
        >
          عصفورة
        </p>
        <p
          className={`${styles.item} item`}
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
        >
          حصان
        </p>
      </div>
      <Boxes dragOver={dragOver} dragLeave={dragLeave} drop={drop} />
      {showCorrection &&
        <div className={`correctData ${showCorrection.correct ? 'correct' : 'wrong'}`}>
          {showCorrection.data.map((one, idx) => (
            <Fragment key={idx}>
              {idx === 0 ?
                <p><i className="fa-solid fa-lightbulb-on"></i> {one}</p>
                :
                <p key={idx}>{one}</p>
              }
            </Fragment>
          ))}
        </div>
      }
      <div className="checkAnswer">
        <button onClick={correctAnswer}>فحص الإجابات</button>
      </div>
    </div>
  )
}

export default TableDragging;
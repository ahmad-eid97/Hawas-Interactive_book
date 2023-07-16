"use client";
//== Components
import { PartsDroppables, PartsDraggables } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './draggingParts.module.scss';

const ArrangeWords = () => {
  const { droppingArea, choices, dragStart, dragEnd, dragOver, dragLeave, drop, removeChoice } = useLogic();

  return (
    <>
      <h2>إانقل الاعضاء الأربع التي حول الراس ألي الأعضاء المناسبة</h2>
      <div className={styles.arrangeWords}>
        <div className={styles.wrapper}>
          <PartsDroppables
            dragOver={dragOver}
            dragLeave={dragLeave}
            drop={drop}
          />
          <PartsDraggables
            droppingArea={droppingArea}
            choices={choices}
            dragStart={dragStart}
            dragEnd={dragEnd}
            removeChoice={removeChoice}
          />
        </div>
      </div>
    </>
  )
}

export default ArrangeWords;
"use client";
//== Components
import { ImageDroppables, ImageDraggables } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './draggingParts.module.scss';

const ArrangeWords = () => {
  const { droppingArea, choices, dragStart, dragEnd, dragOver, dragLeave, drop, removeChoice } = useLogic();

  return (
    <>
      <h2>ضع الكلمات المناسبة في شجرة المشاعر والأحاسيس</h2>
      <div className={styles.arrangeWords}>
        <div className={styles.wrapper}>
          <ImageDroppables
            dragOver={dragOver}
            dragLeave={dragLeave}
            drop={drop}
          />
          <ImageDraggables
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
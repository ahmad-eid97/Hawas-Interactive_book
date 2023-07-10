"use client";
//== Components
import { FillDroppables, FillDraggables } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './fillThePlaces.module.scss';

const FillThePlaces = () => {
  const { droppingArea, choices, dragStart, dragEnd, dragOver, dragLeave, drop, removeChoice } = useLogic();

  return (
    <>
      <h2>اِخْتَرْ الْكَلِمَةَ النَّاقِصَةَ!</h2>
      <div className={styles.fillThePlaces}>
        <FillDraggables
          droppingArea={droppingArea}
          choices={choices}
          dragStart={dragStart}
          dragEnd={dragEnd}
          removeChoice={removeChoice}
        />
        <FillDroppables
          dragOver={dragOver}
          dragLeave={dragLeave}
          drop={drop}
        />
      </div>
    </>
  )
}

export default FillThePlaces;
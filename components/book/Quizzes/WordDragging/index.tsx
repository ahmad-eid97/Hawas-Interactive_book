"use client";
//== Components
import { Droppables, Draggables } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './dragging.module.scss';

const WordDragging = () => {
  const { droppingArea, choices, dragStart, dragEnd, dragOver, dragLeave, drop, removeChoice } = useLogic();

  return (
    <div className={styles.wordDragging}>
      {[...Array(3)].map((_, idx) => (
        <div className={styles.wrapper} key={idx}>
          <Droppables
            dragOver={dragOver}
            dragLeave={dragLeave}
            drop={drop}
          />
          <Draggables
            droppingArea={droppingArea}
            choices={choices}
            dragStart={dragStart}
            dragEnd={dragEnd}
            removeChoice={removeChoice}
          />
        </div>
      ))}
    </div>
  )
}

export default WordDragging;
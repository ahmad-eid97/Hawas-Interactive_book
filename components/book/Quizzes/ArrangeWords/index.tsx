"use client";
//== Components
import { ArrangeDroppables, ArrangeDraggables } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './dragging.module.scss';

const ArrangeWords = () => {
  const { droppingArea, choices, dragStart, dragEnd, dragOver, dragLeave, drop, removeChoice } = useLogic();

  return (
    <>
      <h2>رَتِّبِ الْجُمَلَ تَرْتيبًا صَحيحًا!</h2>
      <div className={styles.arrangeWords}>
        {[...Array(3)].map((_, idx) => (
          <div className={styles.wrapper} key={idx}>
            <ArrangeDroppables
              dragOver={dragOver}
              dragLeave={dragLeave}
              drop={drop}
            />
            <ArrangeDraggables
              droppingArea={droppingArea}
              choices={choices}
              dragStart={dragStart}
              dragEnd={dragEnd}
              removeChoice={removeChoice}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default ArrangeWords;
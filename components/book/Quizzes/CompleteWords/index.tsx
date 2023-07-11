"use client";
//== Components
import { CompleteDroppables, CompleteDraggables } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './completeWords.module.scss';

const CompleteWords = () => {
  const { droppingArea, choices, dragStart, dragEnd, dragOver, dragLeave, drop, removeChoice } = useLogic();

  return (
    <>
      <h2>أَكْمِلِ الْكَلِماتِ التّالِيَةَ مُسْتَعينًا بِمَخْزَنِ الْكَلِماتِ:</h2>
      <div className={styles.fillThePlaces}>
        <CompleteDraggables
          droppingArea={droppingArea}
          choices={choices}
          dragStart={dragStart}
          dragEnd={dragEnd}
          removeChoice={removeChoice}
        />
        <CompleteDroppables
          dragOver={dragOver}
          dragLeave={dragLeave}
          drop={drop}
        />
      </div>
    </>
  )
}

export default CompleteWords;
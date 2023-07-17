"use client";
//== Hooks
import { Fragment } from "react";
//== Modules
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
//== Components
import SortableItem from './SortableItem';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from "./sortDragging.module.scss";

function SortDragging() {
  const { items, handleDragEnd, correctAnswer, showCorrection } = useLogic();

  return (
    <>
      <h2>رَتِّبِ الْجُمَلَ التّالِيَةَ حَسْبَ التَّسَلْسُلِ الزَّمَنِيِّ في النَّصِّ!</h2>
      <div className={styles.sorting}>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={(e) => handleDragEnd(e)}
        >
          <div>
            <SortableContext
              items={items}
              strategy={verticalListSortingStrategy}
            >
              {/* We need components that use the useSortable hook */}
              {items.map(item =>
                <SortableItem key={item} id={item} />
              )}
            </SortableContext>
          </div>
        </DndContext>
      </div>
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
    </>
  );
}

export default SortDragging;
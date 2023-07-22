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
import { PageLoader } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Types
import { QuestionData } from "../types";
//== Styles
import styles from "./sortDragging.module.scss";

interface Cprops {
  questionData: QuestionData
}

function SortDragging({ questionData }: Cprops) {
  const { items, handleDragEnd, correctAnswer, showCorrection, retry, rendered, isLoading } = useLogic({ questionData });

  if (!rendered) return null;
  if (isLoading) return <PageLoader />
  return (
    <>
      <h2>{questionData.title}</h2>
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
        <button onClick={correctAnswer}><i className="fa-regular fa-badge-check"></i> فحص الإجابات</button>
        <button onClick={retry}><i className="fa-regular fa-arrows-rotate"></i> إعادة المحاولة</button>
      </div>
    </>
  );
}

export default SortDragging;
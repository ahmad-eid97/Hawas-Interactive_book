"use client";
//== Hooks
import { Fragment, useMemo } from "react";
//== Modules
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
//== Components
import { PageLoader } from '@/components';
import SortableItem from "./SortableItem";
//== Component Logic
import useLogic from './logic';
//== Types
import { QuestionData } from "../types";
//== Styles
import styles from "./sortDragging.module.scss";

interface Cprops {
  questionData: QuestionData;
}

function SortDragging({ questionData }: Cprops) {
  const { items, handleDragEnd, correctAnswer, showCorrection, retry, rendered, isLoading } = useLogic({ questionData });
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const itemIds = useMemo(() => items?.map((item: any) => item.id), [items]);

  if (!rendered) return null;
  if (isLoading) return <PageLoader />
  return (
    <>
      <h2 className={styles.title}>{questionData.title}</h2>
      <div className={styles.sorting}>
        <div className={styles.droppableWrapper}>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={items?.map((item: any) => item.id)}
              strategy={verticalListSortingStrategy}
            >
              {items.map((item: any) => (
                <SortableItem key={item.id} id={item} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
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
"use client";
//== Hooks
import { Fragment } from "react";
//== Modules
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
//== Components
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
  const { items, handleOndragEnd, correctAnswer, showCorrection, retry, rendered, isLoading } = useLogic({ questionData });

  if (!rendered) return null;
  if (isLoading) return <PageLoader />
  return (
    <>
      <h2 className={styles.title}>{questionData.title}</h2>
      <div className={styles.sorting}>
        <DragDropContext onDragEnd={handleOndragEnd}>
          <div className={styles.droppableWrapper}>
            <Droppable droppableId="ordering">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className={styles.items}>
                  {items.map((item: any, index: number) => (
                    <Draggable
                      key={item.id}
                      draggableId={`${item.id}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className={styles.item}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {item.image && <img src={item.image} alt="choice_img" />}
                          {item.title}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
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
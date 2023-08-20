//== Hooks
import { useState } from "react";

export default function useLogic() {
  const [draggableItem, setDraggableItem] = useState<any>(null);
  const [rendered, setRendered] = useState(true);

  const dragStart = (e: React.DragEvent<HTMLImageElement>) => {
    setDraggableItem(e.currentTarget);
    let newElement: any = e.currentTarget.cloneNode(true)
    newElement.id = Math.random() * 20;
    e.dataTransfer.effectAllowed = 'move';
  }

  const dragEnd = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
  }

  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }

  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.currentTarget.children.length >= 1) return;
    e.currentTarget.appendChild(draggableItem);
  }

  const retry = () => {
    setRendered(false);
    setTimeout(() => {
      setRendered(true)
    }, 20)
  }

  const correctAnswer = () => {
    // if (compareObjects(data?.correctAnswer, studentAnswer)) {
    //   dispatch(checkAnswer(true))
    //   setTimeout(() => {
    //     dispatch(checkAnswer(false))
    //   }, 3500)
    //   setShowCorrection({
    //     correct: true,
    //     data: [
    //       "أحسنت",
    //       "لقد حصلت على علامة كاملة",
    //     ]
    //   })
    // } else {
    //   dispatch(checkWrong(true))
    //   setTimeout(() => {
    //     dispatch(checkWrong(false))
    //   }, 3500)
    //   setShowCorrection({
    //     correct: false,
    //     data: [
    //       "حاول مرّة أخرى",
    //       "بعض الإجابات غير صحيحة",
    //     ]
    //   })
    // }
  }

  return {
    dragStart,
    dragEnd,
    dragOver,
    drop,
    retry,
    rendered,
    correctAnswer
  }
}
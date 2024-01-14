//== Hooks
import { useState } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== Store
import { useAppDispatch } from "@/store/hooks";
import { checkAnswer, checkWrong } from "@/store/slices/common";
//== Api
import { getImagesPuzzleQuestion } from "@/API/quizzes";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [draggableItem, setDraggableItem] = useState<any>(null);
  const [draggableItemIndex, setDraggableItemIndex] = useState<any>(null);
  const [rendered, setRendered] = useState(true);
  const [studentAnswer, setStudentAnswer] = useState({});
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [clickedItem, setClickedItem] = useState<HTMLElement | null>(null);
  const dispatch = useAppDispatch();

  const getQuestion = async () => {
    return await getImagesPuzzleQuestion(questionData.id);
  }

  const { data, isLoading } = useQuery(['getImagesPuzzleQuestion'], getQuestion, {
    cacheTime: 0
  });

  const dragStart = (e: React.DragEvent<HTMLImageElement>, index: number) => {
    setDraggableItem(e.currentTarget);
    let newElement: any = e.currentTarget.cloneNode(true)
    newElement.id = Math.random() * 20;
    e.dataTransfer.effectAllowed = 'move';
    setDraggableItemIndex(index);
  }

  const dragEnd = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
  }

  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }

  const drop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    if (e.currentTarget.children.length >= 1) return;
    e.currentTarget.appendChild(draggableItem);
    setStudentAnswer({ ...studentAnswer, [index]: draggableItemIndex });
  }

  const dragByClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>, index: number) => {
    if (clickedItem) return;
    e.currentTarget.classList.add('activeBGForDragging');
    setClickedItem(e.currentTarget);
    setDraggableItemIndex(index);
  }

  const dropByClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>, index: number) => {
    if (e.currentTarget.children.length > 0) return;
    clickedItem?.classList.remove('activeBGForDragging');
    if (clickedItem) e.currentTarget.appendChild(clickedItem);
    setClickedItem(null);
    setStudentAnswer({ ...studentAnswer, [index]: draggableItemIndex })
  }

  const retry = () => {
    if (clickedItem) setClickedItem(null);
    setRendered(false);
    setShowCorrection(null);
    setStudentAnswer({});
    setTimeout(() => {
      setRendered(true)
    }, 20)
  }

  const compareObjects = (obj1: any, obj2: any) => {
    for (const key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }

  const correctAnswer = () => {
    if (clickedItem) setClickedItem(null);
    if (compareObjects(data?.correctAnswer, studentAnswer)) {
      dispatch(checkAnswer(true))
      setTimeout(() => {
        dispatch(checkAnswer(false))
      }, 3500)
      setShowCorrection({
        correct: true,
        data: [
          "أحسنت",
          "لقد حصلت على علامة كاملة",
        ]
      })
    } else {
      dispatch(checkWrong(true))
      setTimeout(() => {
        dispatch(checkWrong(false))
      }, 3500)
      setShowCorrection({
        correct: false,
        data: [
          "حاول مرّة أخرى",
          "بعض الإجابات غير صحيحة",
        ]
      })
    }
  }

  return {
    puzzleImages: data?.puzzleImages,
    dragStart,
    dragEnd,
    dragOver,
    drop,
    dragByClick,
    dropByClick,
    retry,
    rendered,
    correctAnswer,
    isLoading,
    showCorrection
  }
}
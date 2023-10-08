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
  const dispatch = useAppDispatch();

  const getQuestion = async () => {
    return await getImagesPuzzleQuestion(questionData.id);
  }

  const { data, isLoading } = useQuery(['getImagesPuzzleQuestion'], getQuestion, {
    cacheTime: 0
  });

  console.log(data)

  const dragStart = (e: React.DragEvent<HTMLImageElement>, index: number) => {
    setDraggableItem(e.currentTarget);
    let newElement: any = e.currentTarget.cloneNode(true)
    newElement.id = Math.random() * 20;
    e.dataTransfer.effectAllowed = 'move';
    setDraggableItemIndex(index)
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
    setStudentAnswer({ ...studentAnswer, [index]: draggableItemIndex })
  }

  const retry = () => {
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
    retry,
    rendered,
    correctAnswer,
    isLoading,
    showCorrection
  }
}
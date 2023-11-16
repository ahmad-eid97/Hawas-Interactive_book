"use client";
//== Hooks
import { useState } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== API
import { getMatchingWithTableQuestion } from "@/API/quizzes";
//== Store
import { useAppDispatch } from "@/store/hooks";
import { checkAnswer, checkWrong } from "@/store/slices/common";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [draggableItem, setDraggableItem] = useState<HTMLParagraphElement | null>(null);
  const [studentAnswer, setStudentAnswer] = useState<any>({ 0: [], 1: [] });
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [rendered, setRendered] = useState(true);
  const dispatch = useAppDispatch();

  const getQuestion = async () => {
    return await getMatchingWithTableQuestion(questionData.id)
  }

  const { data, isLoading } = useQuery(["tableQuestion"], getQuestion, {
    cacheTime: 0
  });

  const dragStart = (e: React.DragEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    setDraggableItem(e.currentTarget);
    e.dataTransfer.effectAllowed = 'move';
    e.currentTarget.style.opacity = "0.5"
  }

  const dragEnd = (e: React.DragEvent<HTMLParagraphElement>) => {
    // setDraggableItem(null)
    e.stopPropagation();
    e.currentTarget.style.opacity = "1"
  }

  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    e.currentTarget.style.backgroundColor = "#00b894";
    // drop(e);
  }

  const dragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.currentTarget.style.backgroundColor = "var(--third-color)";
  }

  const drop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.stopPropagation();
    e.preventDefault();
    e.currentTarget.style.backgroundColor = "var(--third-color)";
    if (draggableItem) e.currentTarget.appendChild(draggableItem);
    setStudentAnswer({
      ...studentAnswer,
      [index]: [...studentAnswer[index], draggableItem?.innerText]
    })
  }


  const areArraysEqual = (arr1: any, arr2: any) => {
    if (arr1.length !== arr2.length) {
      return false;
    }

    const resultArray: any = []

    for (let i = 0; i < arr1.length; i++) {
      arr2.forEach((element: string) => {
        if (element === arr1[i]) {
          resultArray.push(element)
        }
      })
    }

    if (resultArray.length !== arr2.length) {
      return false;
    }

    return true;
  }

  const correctAnswer = () => {
    if (areArraysEqual(studentAnswer[0], data?.correctAnswer[0]) && areArraysEqual(studentAnswer[1], data?.correctAnswer[1])) {
      dispatch(checkAnswer(true))
      setTimeout(() => {
        dispatch(checkAnswer(false))
      }, 3500)
      setShowCorrection({
        correct: true,
        data: [
          "أحسنت",
          "لقد حصلت على العلامة الكاملة",
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
          "الإجابة غير صحيحة",
        ]
      })
    }
  }

  const retry = () => {
    setRendered(false);
    setShowCorrection(null);
    setStudentAnswer({ 0: [], 1: [] });
    setTimeout(() => {
      setRendered(true)
    }, 20)
  }

  return {
    dragStart,
    dragEnd,
    dragOver,
    dragLeave,
    drop,
    correctAnswer,
    showCorrection,
    retry,
    rendered,
    questionDetails: data,
    isLoading
  }
}
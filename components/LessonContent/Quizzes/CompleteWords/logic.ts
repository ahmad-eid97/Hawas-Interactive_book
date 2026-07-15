"use client";
//== Hooks 
import { useState, useRef } from "react";
//== API
import { getGroupFillBlanksCompleteWordsQuestion } from "@/API/quizzes";
//== Store
import { useAppDispatch } from "@/store/hooks";
import { checkAnswer, checkWrong } from "@/store/slices/common";
//== Module
import { useQuery } from "@tanstack/react-query";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [draggableItem, setDraggableItem] = useState<HTMLParagraphElement | null>(null);
  const droppingArea = useRef<HTMLDivElement | null>(null);
  const [studentAnswer, setStudentAnswer] = useState<any>({})
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [rendered, setRendered] = useState(true);
  const dispatch = useAppDispatch();

  const getQuestion = async () => {
    return await getGroupFillBlanksCompleteWordsQuestion(questionData.id)
  }

  const { data, isLoading } = useQuery(['group_fill_in_blank_complete_words'], getQuestion, {
    cacheTime: 0
  });

  const dragStart = (e: React.DragEvent<HTMLParagraphElement>) => {
    setDraggableItem(e.currentTarget);
    e.dataTransfer.effectAllowed = 'move';
    e.currentTarget.style.opacity = "0.5"
  }

  const dragEnd = (e: React.DragEvent<HTMLParagraphElement>) => {
    // setDraggableItem(null)
    e.currentTarget.style.opacity = "1"
  }

  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = "#00b894";
  }

  const dragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.style.backgroundColor = "rgb(250, 250, 212)";
  }

  const drop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = "rgb(250, 250, 212)";
    if (draggableItem && !e.currentTarget?.children?.length) e.currentTarget.appendChild(draggableItem);
    setStudentAnswer({ ...studentAnswer, [index]: draggableItem?.innerText })
  }

  const removeChoice = (e: React.MouseEvent<HTMLElement, MouseEvent>, idx: number) => {
    if (e.currentTarget.parentElement) droppingArea.current?.insertBefore(e.currentTarget.parentElement, droppingArea?.current.children[idx]);
    const answers = { ...studentAnswer };
    for (const key in answers) {
      if (answers[key] === e.currentTarget.parentElement?.innerText) {
        delete answers[key];
        break;
      }
    }
    setStudentAnswer({ ...answers })
  }

  const compareObjects = (obj1: any, obj2: any) => {
    let score = 0;
    for (const key in obj1) {
      if (obj1[key] === obj2[key]) {
        score += 1
      }
    }
    return score;
  }

  const correctAnswer = () => {
    const score = compareObjects(data?.correctAnswer, studentAnswer)
    if (score === data?.items?.length) {
      dispatch(checkAnswer(true))
      setTimeout(() => {
        dispatch(checkAnswer(false))
      }, 3500)
      setShowCorrection({
        correct: true,
        data: [
          "أحسنت",
          `لقد حصلت على علامة ${score} من ${data?.items?.length}`,
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
          `لقد حصلت على علامة ${score} من ${data?.items?.length}`,
        ]
      })
    }
  }

  const retry = () => {
    setRendered(false);
    setShowCorrection(null);
    setStudentAnswer({});
    setTimeout(() => {
      setRendered(true)
    }, 20)
  }

  return {
    items: data?.items,
    droppingArea,
    choices: data?.choices,
    dragStart,
    dragEnd,
    dragOver,
    dragLeave,
    drop,
    removeChoice,
    showCorrection,
    correctAnswer,
    retry,
    rendered,
    isLoading
  }
}
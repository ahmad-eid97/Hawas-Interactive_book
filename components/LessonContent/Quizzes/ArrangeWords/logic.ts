"use client";
//== Hooks 
import { useState, useRef } from "react";
//== Store
import { useAppDispatch } from "@/store/hooks";
import { checkAnswer, checkWrong } from "@/store/slices/common";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== API
import { getGroupOrderingQuestion } from "@/API/quizzes";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [draggableItem, setDraggableItem] = useState<HTMLParagraphElement | null>(null);
  const [studentAnswer, setStudentAnswer] = useState<any>({});
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [rendered, setRendered] = useState(true);
  const droppingArea = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();

  const getQuestion = async () => {
    return await getGroupOrderingQuestion(questionData.id);
  }

  const { data, isLoading } = useQuery(['group_ordering'], getQuestion, {
    cacheTime: 0
  });

  const dragStart = (e: React.DragEvent<HTMLParagraphElement>) => {
    setDraggableItem(e.currentTarget);
    e.dataTransfer.effectAllowed = 'move';
    e.currentTarget.style.opacity = "0.5"
  }

  const dragEnd = (e: React.DragEvent<HTMLParagraphElement>) => {
    e.currentTarget.style.opacity = "1"
  }

  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = "#00b894";
  }

  const dragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.style.backgroundColor = "rgb(250, 250, 212)";
  }

  const drop = (e: React.DragEvent<HTMLDivElement>, index: number, droppapleIndex: number) => {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = "rgb(250, 250, 212)";
    if (draggableItem && !e.currentTarget.children.length) e.currentTarget.appendChild(draggableItem);
    setStudentAnswer({ ...studentAnswer, [index]: { ...studentAnswer[index], [droppapleIndex]: draggableItem?.innerText } })
  }

  const removeChoice = (e: React.MouseEvent<HTMLElement, MouseEvent>, idx: number) => {
    const draggableAre = document.getElementById(`draggable-${idx}`)
    if (e.currentTarget.parentElement) draggableAre?.insertBefore(e.currentTarget.parentElement, draggableAre?.children[idx]);
    const answers = studentAnswer
    for (const key in answers) {
      const innerObj = answers[key];
      for (const innerKey in innerObj) {
        if (innerObj[innerKey] === e.currentTarget.parentElement?.innerText) {
          delete answers[key][innerKey];
          break;
        }
      }
    }
    setStudentAnswer({ ...answers })
  }

  const compareObjects = (object1: any, object2: any) => {
    if (!object2) return false
    if (Object.keys(object1)?.length !== Object.keys(object2).length) return false
    for (let i = 0; i < Object.keys(object1).length; i++) {
      if (object1[i] !== object2[i]) return false
    }
    return true;
  }

  const correctAnswer = () => {
    const answers: any = []
    for (let i = 0; i < Object.keys(data?.correctAnswer).length; i++) {
      answers.push(compareObjects(data?.correctAnswer[i], studentAnswer[i]))
    }
    const score = data?.items.length - answers.filter((item: any) => !item).length
    if (answers.every((answer: any) => answer === true)) {
      dispatch(checkAnswer(true))
      setTimeout(() => {
        dispatch(checkAnswer(false))
      }, 3500)
      setShowCorrection({
        correct: true,
        data: [
          "أحسنت",
          `لقد حصلت على علامة ${score} من ${data?.items.length}`,
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
          `لقد حصلت على علامة ${score} من ${data?.items.length}`,
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
    dragStart,
    dragEnd,
    dragOver,
    dragLeave,
    drop,
    removeChoice,
    correctAnswer,
    showCorrection,
    retry,
    rendered,
    isLoading
  }
}
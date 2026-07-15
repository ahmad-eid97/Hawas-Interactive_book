"use client";
//== Hooks 
import { useState, useRef } from "react";
//== Store
import { useAppDispatch } from "@/store/hooks";
import { checkAnswer, checkWrong } from "@/store/slices/common";
//== API
import { getGroupRoundedFillBlanksQuestion } from "@/API/quizzes";
//== Types
import { QuestionData } from "../types";
import { useQuery } from "@tanstack/react-query";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [draggableItem, setDraggableItem] = useState<HTMLParagraphElement | null>(null);
  const [studentAnswer, setStudentAnswer] = useState<any>({})
  const droppingArea = useRef<HTMLDivElement | null>(null);
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [rendered, setRendered] = useState(true);
  const [clickedItem, setClickedItem] = useState<HTMLElement | null>(null);
  const dispatch = useAppDispatch();

  const getQuestion = async () => {
    return await getGroupRoundedFillBlanksQuestion(questionData.id);
  }

  const { data, isLoading } = useQuery(["groupFillBlankQuestion"], getQuestion, {
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

  const drop = (e: React.DragEvent<HTMLDivElement>, index: number, droppapleIndex: number) => {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = "rgb(250, 250, 212)";
    if (draggableItem && !e.currentTarget?.children?.length) e.currentTarget.appendChild(draggableItem);
    setStudentAnswer({ ...studentAnswer, [index]: { ...studentAnswer[index], [droppapleIndex]: draggableItem?.innerText } })
  }

  const dragByClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    if (clickedItem) return;
    //@ts-ignore
    if (e.target.tagName !== 'I') {
      e.currentTarget.classList.add('activeBGForDragging');
      setClickedItem(e.currentTarget);
    };
  }

  const dropByClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>, index: number) => {
    if (e.currentTarget?.children?.length > 0) return;
    clickedItem?.classList.remove('activeBGForDragging');
    if (clickedItem) e.currentTarget.appendChild(clickedItem);
    setClickedItem(null);
    setStudentAnswer({ ...studentAnswer, [index]: clickedItem?.innerText });
  }

  const removeChoice = (e: React.MouseEvent<HTMLElement, MouseEvent>, idx: number, questionIndex: number) => {
    const draggableAre = document.getElementById(`drag-${questionIndex}`)
    if (e.currentTarget.parentElement) draggableAre?.insertBefore(e.currentTarget.parentElement, draggableAre?.children[idx]);
    // Delete object by it's value
    const values = Object.values(studentAnswer[questionIndex]);
    const index = values.indexOf(e.currentTarget.parentElement?.innerText);
    if (index !== -1) {
      const keys = Object.keys(studentAnswer[questionIndex]);
      const key = keys[index];
      delete studentAnswer[questionIndex][key];
    }
    setStudentAnswer({ ...studentAnswer });
    setClickedItem(null);
  }

  const compareObjects = (object1: any, object2: any) => {
    if (!object2) return false;
    if (Object.keys(object1)?.length !== Object.keys(object2)?.length) {
      return false;
    } else {
      for (let key in object1) {
        if (!object2.hasOwnProperty(key)) {
          return false;
        }
        for (let nestedKey in object1[key]) {
          if (object1[key][nestedKey] !== object2[key][nestedKey]) {
            return false;
          }
        }
      }
    }
    return true;
  }

  const correctAnswer = () => {
    if (clickedItem) setClickedItem(null);
    const answers = []
    for (let i = 0; i < Object.keys(data?.correctAnswer)?.length; i++) {
      answers.push(compareObjects(data?.correctAnswer[i], studentAnswer[i]))
    }
    const score = data?.items?.length - answers.filter((item: any) => !item)?.length
    if (answers.every((answer) => answer === true)) {
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
    if (clickedItem) setClickedItem(null);
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
    dragByClick,
    dropByClick,
    removeChoice,
    correctAnswer,
    showCorrection,
    retry,
    rendered,
    isLoading
  }
}
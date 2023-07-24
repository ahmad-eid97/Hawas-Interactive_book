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
  const [items, setItems] = useState<any>([
    [
      "عا",
      "-"
    ],
    [
      "-",
      "لون"
    ],
    [
      "ور",
      "-",
      "ء"
    ],
    [
      "-",
      "كض"
    ],
    [
      "حز",
      "-"
    ],
    [
      "جدي",
      "-"
    ],
  ])
  const [choices, setChoices] = useState<any>([
    {
      id: 1,
      text: "ر"
    },
    {
      id: 2,
      text: "ا"
    },
    {
      id: 3,
      text: "با"
    },
    {
      id: 4,
      text: "د"
    },
    {
      id: 5,
      text: "ن"
    },
    {
      id: 6,
      text: "دل"
    }
  ])
  const [correctData, setCorrectData] = useState<any>({
    0: "دل",
    1: "با",
    2: "ا",
    3: "ر",
    4: "ن",
    5: "د",
  })
  const [studentAnswer, setStudentAnswer] = useState<any>({})
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [rendered, setRendered] = useState(true);
  const dispatch = useAppDispatch();

  const getQuestion = async () => {
    return await getGroupFillBlanksCompleteWordsQuestion(questionData.id)
  }

  const { data, isLoading } = useQuery(['group_fill_in_blank_complete_words'], getQuestion);

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
    if (draggableItem && !e.currentTarget.children.length) e.currentTarget.appendChild(draggableItem);
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
    for (const key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }

  const correctAnswer = () => {
    console.log(studentAnswer)
    if (compareObjects(correctData, studentAnswer)) {
      dispatch(checkAnswer(true))
      setTimeout(() => {
        dispatch(checkAnswer(false))
      }, 3500)
      setShowCorrection({
        correct: true,
        data: [
          "أحسنت",
          "لقد حصلت على علامة كاملة",
          "العلامة المُستحقّة هي : 10"
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
          "العلامة المُستحقّة هي : 5"
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
    items,
    droppingArea,
    choices,
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
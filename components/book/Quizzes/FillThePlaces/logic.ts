"use client";
//== Hooks 
import { useState, useRef } from "react";
//== Store
import { useAppDispatch } from "@/store/hooks";
import { checkAnswer, checkWrong } from "@/store/slices/common";

export default function useLogic() {
  const [draggableItem, setDraggableItem] = useState<HTMLParagraphElement | null>(null);
  const [correctData, setCorrectData] = useState<any>({
    0: {
      0: "عثمان",
      1: "المدرسة",
      2: "الحديقة"
    },
    1: {
      0: "يأخذ",
      1: "البيت"
    },
    2: {
      0: "حرام"
    },
  })
  const [studentAnswer, setStudentAnswer] = useState<any>({});
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [rendered, setRendered] = useState(true);
  const droppingArea = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();

  const choices = [
    {
      id: 1,
      text: "حرام"
    },
    {
      id: 2,
      text: "المدرسة"
    },
    {
      id: 3,
      text: "عثمان"
    },
    {
      id: 4,
      text: "يأخذ"
    },
    {
      id: 5,
      text: "الحديقة"
    },
    {
      id: 6,
      text: "عمر"
    },
    {
      id: 7,
      text: "البيت"
    },
    {
      id: 8,
      text: "يبني"
    },
    {
      id: 9,
      text: "أحسنت"
    }
  ]

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
    if (draggableItem && !e.currentTarget.children.length) e.currentTarget.appendChild(draggableItem);
    setStudentAnswer({ ...studentAnswer, [index]: { ...studentAnswer[index], [droppapleIndex]: draggableItem?.innerText } })
  }

  const removeChoice = (e: React.MouseEvent<HTMLElement, MouseEvent>, idx: number) => {
    if (e.currentTarget.parentElement) droppingArea.current?.insertBefore(e.currentTarget.parentElement, droppingArea?.current.children[idx]);
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
    if (!object2) return false;
    if (Object.keys(object1)?.length !== Object.keys(object2).length) return false;
    for (let i = 0; i < Object.keys(object1).length; i++) {
      if (object1[i] !== object2[i]) return false;
    }
    return true;
  }

  const correctAnswer = () => {
    const answers = []
    for (let i = 0; i < Object.keys(correctData).length; i++) {
      answers.push(compareObjects(correctData[i], studentAnswer[i]))
    }
    if (answers.every((answer) => answer === true)) {
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

  const retry = () => {
    setRendered(false);
    setShowCorrection(null);
    setStudentAnswer({});
    setTimeout(() => {
      setRendered(true)
    }, 20)
  }

  return {
    droppingArea,
    choices,
    dragStart,
    dragEnd,
    dragOver,
    dragLeave,
    drop,
    removeChoice,
    correctAnswer,
    showCorrection,
    retry,
    rendered
  }
}
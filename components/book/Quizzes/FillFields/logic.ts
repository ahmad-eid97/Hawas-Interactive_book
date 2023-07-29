"use client"
//== Hooks
import { useState } from "react";
//== Store
import { useAppDispatch } from "@/store/hooks";
import { checkAnswer, checkWrong } from "@/store/slices/common";

export default function useLogic() {
  const [titles, setTitles] = useState<string[]>([
    "هو",
    "هي",
    "هم"
  ])
  const [items, setItems] = useState<any>({
    0: {
      items: [
        "طار",
        "-",
        "-"
      ]
    },
    1: {
      items: [
        "حزن",
        "-",
        "-",
      ]
    },
    2: {
      items: [
        "-",
        "-",
        "ركضوا",
      ]
    },
    3: {
      items: [
        "-",
        "نامت",
        "-",
      ]
    }
  })
  const [correctData, setCorrectData] = useState<any>({
    0: {
      1: "طارت",
      2: "طاروا"
    },
    1: {
      1: "حزنت",
      2: "حزنوا"
    },
    2: {
      0: "ركض",
      1: "ركضت"
    },
    3: {
      0: "نام",
      2: "ناموا"
    }
  })
  const [studentAnswer, setStudentAnswer] = useState<any>({});
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [rendered, setRendered] = useState(true);
  const dispatch = useAppDispatch();

  const handleFields = (e: React.ChangeEvent<HTMLInputElement>, indx: number, index: number) => {
    setStudentAnswer({ ...studentAnswer, [indx]: { ...studentAnswer[indx], [index]: e.target.value } })
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
    titles,
    items,
    handleFields,
    correctAnswer,
    showCorrection,
    retry,
    rendered
  }
}
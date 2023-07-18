"use client";
//== Hooks
import { useState } from "react";
//== Store
import { useAppDispatch } from "@/store/hooks";
import { checkAnswer, checkWrong } from "@/store/slices/common";

export default function useLogic() {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "عند عادل",
      image: "/images/quizzes/6.png",
      correct: 'بالون'
    },
    {
      id: 2,
      text: "أكل يزيد",
      image: "/images/quizzes/7.png",
      correct: 'البيضة'
    },
    {
      id: 3,
      text: "لعب مثني ب",
      image: "/images/quizzes/8.png",
      correct: 'الكرة'
    },
    {
      id: 4,
      text: "رسم رامي",
      image: "/images/quizzes/14.png",
      correct: 'سيارة'
    },
  ])
  const [correctData, setCorrectData] = useState<any>({
    0: "بالون",
    1: "بيضة",
    2: "الكرة",
    3: "سيارة",
  })
  const [studentAnswer, setStudentAnswer] = useState<any>({});
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [rendered, setRendered] = useState(true);
  const dispatch = useAppDispatch();

  const handleFields = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setStudentAnswer({ ...studentAnswer, [index]: e.target.value })
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
    handleFields,
    showCorrection,
    correctAnswer,
    retry,
    rendered
  }
}
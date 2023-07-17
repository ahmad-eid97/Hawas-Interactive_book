"use client";
//== Hooks
import { useState } from "react";
//== Store
import { useAppDispatch } from "@/store/hooks";
import { checkAnswer, checkWrong } from "@/store/slices/common";

export default function useLogic() {
  const [studentAnswer, setStudentAnswer] = useState<any>([]);
  const [correctData, setCorrectAnswer] = useState<any>([
    { from: 'بيت', to: 'بيوت' },
    { from: 'قلم', to: 'أقلام' },
    { from: 'باب', to: 'أبواب' },
    { from: 'ولد', to: 'أولاد' },
    { from: 'بنت', to: 'بنات' },
    { from: 'جبل', to: 'جبال' }
  ]);
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const dispatch = useAppDispatch();

  const areArraysEqual = (arr1: any, arr2: any) => {
    if (arr1.length !== arr2.length) {
      return false;
    }

    const resultArray: any = []

    for (let i = 0; i < arr1.length; i++) {
      arr2.forEach((element: object) => {
        // @ts-ignore
        if (element.from === arr1[i].from && element.to === arr1[i].to) {
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
    if (areArraysEqual(studentAnswer, correctData)) {
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
      dispatch(checkWrong(true));
      setTimeout(() => {
        dispatch(checkWrong(false));
      }, 3500);
      setShowCorrection({
        correct: false,
        data: [
          "حاول مرة اخري",
          "بعض الإجابات غير صحيحة",
          "العلامة المُستحقّة هي : 5"
        ]
      })
    }
  }

  return {
    correctAnswer,
    showCorrection,
    setStudentAnswer
  }
}
"use client";
//== Hooks
import { useState } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== Store
import { useAppDispatch } from "@/store/hooks";
import { checkAnswer, checkWrong } from "@/store/slices/common";
//== Types
import { QuestionData } from "../types";
//== API
import { getMatchingQuestion } from "@/API/quizzes";

interface CProps {
  questionData: QuestionData
}

export default function useLogic({ questionData }: CProps) {
  const [studentAnswer, setStudentAnswer] = useState<any>([]);
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [rendered, setRendered] = useState(true);
  const dispatch = useAppDispatch();

  const getQuestionData = async () => {
    return await getMatchingQuestion(questionData.id);
  }

  const { data, isLoading } = useQuery(['matchingQuestion'], getQuestionData, {
    cacheTime: 0
  })

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
    if (areArraysEqual(studentAnswer, data?.correctAnswers)) {
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
      dispatch(checkWrong(true));
      setTimeout(() => {
        dispatch(checkWrong(false));
      }, 3500);
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
    setStudentAnswer([]);
    setTimeout(() => {
      setRendered(true)
    }, 20)
  }

  return {
    correctAnswer,
    showCorrection,
    setStudentAnswer,
    retry,
    rendered,
    columnsData: data?.columnsData,
    isLoading
  }
}
"use client"
//== Hooks
import { useState } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== Store
import { useAppDispatch } from "@/store/hooks";
import { checkAnswer, checkWrong } from "@/store/slices/common";
//== API
import { getGroupTrueAndFalseQuestion } from "@/API/quizzes";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [studentAnswer, setStudentAnswer] = useState<any>({});
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [rendered, setRendered] = useState(true);
  const [studentScore, setStudentScore] = useState(0);
  const dispatch = useAppDispatch();

  const getQuestion = async () => {
    return await getGroupTrueAndFalseQuestion(questionData.id)
  }

  const { data, isLoading } = useQuery(['group-true-and-false'], getQuestion, {
    cacheTime: 0
  })

  const chooseAnswer = (index: number, answer: boolean) => {
    setStudentAnswer({ ...studentAnswer, [index]: answer })
  }

  const compareObjects = (object1: any, object2: any) => {
    let score = 0;
    if (!object2) return score;
    // if (Object.keys(object1)?.length !== Object.keys(object2).length) return score;
    for (let i = 0; i < Object.keys(object1).length; i++) {
      if (object1[i] === object2[i]) {
        score += 1
      }
    }
    return score;
  }

  const correctAnswer = () => {
    const result = compareObjects(data?.correctAnswer, studentAnswer);
    if (result === data?.items.length) {
      dispatch(checkAnswer(true))
      setTimeout(() => {
        dispatch(checkAnswer(false))
      }, 3500)
      setShowCorrection({
        correct: true,
        data: [
          "أحسنت",
          `لقد حصلت على علامة ${result} من ${data?.items.length}`,
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
          `لقد حصلت على علامة ${result} من ${data?.items.length}`,
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
    rendered,
    items: data?.items,
    chooseAnswer,
    studentAnswer,
    retry,
    correctAnswer,
    showCorrection,
    isLoading
  }
}
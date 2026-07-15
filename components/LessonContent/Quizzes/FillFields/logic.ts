"use client"
//== Hooks
import { useState } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== Store
import { useAppDispatch } from "@/store/hooks";
import { checkAnswer, checkWrong } from "@/store/slices/common";
//== API
import { getGroupRawFillInBlankQuestion } from "@/API/quizzes";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [studentAnswer, setStudentAnswer] = useState<any>({});
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [rendered, setRendered] = useState(true);
  const [studentScore, setStudentScore] = useState(0);
  const dispatch = useAppDispatch();

  const getQuestion = async () => {
    return await getGroupRawFillInBlankQuestion(questionData.id)
  }

  const { data, isLoading } = useQuery(['group-raw-fill-in-blank'], getQuestion, {
    cacheTime: 0
  })

  const handleFields = (e: React.ChangeEvent<HTMLInputElement>, indx: number, index: number) => {
    setStudentAnswer({ ...studentAnswer, [indx]: { ...studentAnswer[indx], [index]: e.target.value } })
  }

  const compareObjects = (object1: any, object2: any) => {
    if (!object2) return false;
    if (Object.keys(object1)?.length !== Object.keys(object2)?.length) return false;
    for (let i = 0; i < Object.keys(object1)?.length; i++) {
      if (object1[i] !== object2[i]) return false;
    }
    return true;
  }

  const correctAnswer = () => {
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
    setRendered(false);
    setShowCorrection(null);
    setStudentAnswer({});
    setTimeout(() => {
      setRendered(true)
    }, 20)
  }

  return {
    titles: data?.titles as string[] | undefined,
    items: (data?.items ?? {}) as Record<string, any>,
    handleFields,
    correctAnswer,
    showCorrection,
    retry,
    rendered,
    isLoading
  }
}
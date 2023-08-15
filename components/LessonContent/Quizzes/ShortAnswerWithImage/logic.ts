"use client";
//== Hooks
import { useState } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== API
import { getGroupShortAnswer } from "@/API/quizzes";
//== Store
import { useAppDispatch } from "@/store/hooks";
import { checkAnswer, checkWrong } from "@/store/slices/common";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [studentAnswer, setStudentAnswer] = useState<any>({});
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [rendered, setRendered] = useState(true);
  const dispatch = useAppDispatch();

  const getQuestion = async () => {
    return await getGroupShortAnswer(questionData.id);
  }

  const { data, isLoading } = useQuery(['groupShortAnswerQuestion'], getQuestion, {
    cacheTime: 0
  });

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
    if (compareObjects(data?.correctAnswer, studentAnswer)) {
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
    items: data?.items,
    handleFields,
    correctAnswer,
    showCorrection,
    retry,
    rendered,
    isLoading
  }
}
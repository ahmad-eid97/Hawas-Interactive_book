"use client";
//== Hooks
import { useState } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== Store
import { useAppDispatch } from "@/store/hooks";
import { checkAnswer, checkWrong } from "@/store/slices/common";
//== API
import { getGroupFillInBlankImageAnswerQuestion } from "@/API/quizzes";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [studentAnswer, setStudentAnswer] = useState<any>({});
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [rendered, setRendered] = useState(true);
  const dispatch = useAppDispatch();

  const getImageSingleQuestion = async () => {
    return await getGroupFillInBlankImageAnswerQuestion(questionData.id);
  }

  const { data, isLoading } = useQuery(['group_fill_in_blank_image_answer_question'], getImageSingleQuestion, {
    cacheTime: 0
  });

  const handleFields = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setStudentAnswer({ ...studentAnswer, [index]: e.target.value })
  }

  const compareObjects = (obj1: any, obj2: any) => {
    let score = 0;
    for (const key in obj1) {
      if (obj1[key] === obj2[key]) {
        score += 1;
      }
    }
    return score;
  }

  const correctAnswer = () => {
    const score = compareObjects(data?.correctAnswer, studentAnswer)
    if (score === data?.items.length) {
      dispatch(checkAnswer(true))
      setTimeout(() => {
        dispatch(checkAnswer(false))
      }, 3500)
      setShowCorrection({
        correct: true,
        data: [
          "أحسنت",
          `لقد حصلت على علامة ${score} من ${data?.items.length}`,
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
          `لقد حصلت على علامة ${score} من ${data?.items.length}`,
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
    showCorrection,
    correctAnswer,
    retry,
    rendered,
    isLoading
  }
}
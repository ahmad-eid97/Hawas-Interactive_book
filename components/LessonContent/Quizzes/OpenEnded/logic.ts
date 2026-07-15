"use client";
//== Hooks
import { useState } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== Store
import { useAppDispatch } from "@/store/hooks";
import { checkAnswer, checkWrong } from "@/store/slices/common";
//== API
import { getOpenEndedQuestion } from "@/API/quizzes";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [answer, setAnswer] = useState('')
  const [rendered, setRendered] = useState(true);
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [clickedItem, setClickedItem] = useState<HTMLElement | null>(null);
  const dispatch = useAppDispatch();

  const getQuestion = async () => {
    return await getOpenEndedQuestion(questionData.id);
  }

  const { data, isLoading } = useQuery(['groupImageShortAnswerQuestion'], getQuestion, {
    cacheTime: 0
  });

  const correctAnswer = () => {
    if (answer) {
      dispatch(checkAnswer(true))
      setTimeout(() => {
        dispatch(checkAnswer(false))
      }, 3500)
      setShowCorrection({
        correct: true,
        data: [
          "أحسنت",
          `لقد حصلت علي العلامة الكاملة`,
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
          `لقد حصلت علي درجة صفر في هذا السؤال`,
        ]
      })
    }
  }

  const retry = () => {
    if (clickedItem) setClickedItem(null);
    setRendered(false);
    setShowCorrection(null);
    setAnswer('');
    setTimeout(() => {
      setRendered(true)
    }, 20)
  }

  return {
    answer,
    setAnswer,
    showCorrection,
    correctAnswer,
    retry,
    rendered,
    isLoading
  }
}
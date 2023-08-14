"use client";
//== Hooks
import { useState } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== API
import { getSingleChoiceQuestion } from "@/API/quizzes";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [choosedAnswer, setChoosedAnswer] = useState<number>();

  const getQuestion = async () => {
    return await getSingleChoiceQuestion(questionData.id);
  }

  const { data, isLoading } = useQuery(['single_choice'], getQuestion, {
    cacheTime: 0
  });

  return {
    items: data?.answers,
    question: data?.question,
    choosedAnswer,
    setChoosedAnswer,
    isLoading
  }
}
"use client";
//== Hooks
import { useState } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== API 
import { getGroupRoundedSingleChoiceQuestion } from "@/API/quizzes";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [choices, setChoices] = useState<{ [index: number]: string }>({});

  const getQuestion = async () => {
    return await getGroupRoundedSingleChoiceQuestion(questionData.id);
  }

  const { data, isLoading } = useQuery(['group_rounded_single_choice'], getQuestion, {
    cacheTime: 0
  })

  const addToChoices = (index: number, letter: string) => {
    setChoices(prev => ({ ...prev, [index]: letter }));
  }

  return {
    items: data?.items,
    choices,
    addToChoices,
    isLoading
  }
}
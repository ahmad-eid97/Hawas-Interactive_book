"use client";
//== Hooks
import { useState } from "react";
//== API
import { getGroupOddWordChoice } from "@/API/quizzes";
//== Types
import { QuestionData } from "../types";
import { useQuery } from "@tanstack/react-query";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [choices, setChoices] = useState<{ [index: number]: string }>({});

  const getQuestion = async () => {
    return await getGroupOddWordChoice(questionData.id);
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
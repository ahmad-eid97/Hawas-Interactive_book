"use client";
//== Hooks
import { useState } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== API 
import { getGroupRoundedMultipleChoiceQuestion } from "@/API/quizzes";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [choices, setChoices] = useState<{ [index: number]: any }>({});

  const getQuestion = async () => {
    return await getGroupRoundedMultipleChoiceQuestion(questionData.id);
  }

  const { data, isLoading } = useQuery(['group_rounded_multiple_choice'], getQuestion, {
    cacheTime: 0
  })

  const addToChoices = (index: number, choice: any) => {
    if (choices[index] && choices[index].includes(choice)) {
      setChoices(prev => ({ ...prev, [index]: choices[index].filter((item: any) => item.text !== choice.text) }));
      return;
    }
    let updatedChoices: string[] = [];
    if (choices[index]) updatedChoices = [...choices[index], choice];
    else updatedChoices = [choice];
    setChoices(prev => ({ ...prev, [index]: [...updatedChoices] }));
  }

  return {
    items: data?.items,
    choices,
    addToChoices,
    isLoading
  }
}
"use client";
//== Hooks
import { useState } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== API
import { getGroupRadioSingleChoiceQuestion } from "@/API/quizzes";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [choices, setChoices] = useState<{ [index: number]: string }>({});

  const getRadioQuestion = async () => {
    return await getGroupRadioSingleChoiceQuestion(questionData.id);
  }

  const { data, isLoading } = useQuery(['group_radio_single_choice_question'], getRadioQuestion);

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
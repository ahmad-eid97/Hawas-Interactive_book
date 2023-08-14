"use client";
//== Hooks
import { useState } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== API
import { getGroupImageSingleWordChoice } from "@/API/quizzes";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [answers, setAnswers] = useState<{ [index: number]: string }>({});

  const getQuestion = async () => {
    return await getGroupImageSingleWordChoice(questionData.id);
  };

  const { data, isLoading } = useQuery(['groupWordSingleChoiceQuestion'], getQuestion, {
    cacheTime: 0
  });

  const addAnswer = (index: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [index]: answer }));
  }

  const removeAnswer = (index: number) => {
    const newAnswers = { ...answers };
    delete newAnswers[index];
    setAnswers(newAnswers);
  }

  return {
    items: data?.items,
    answers,
    addAnswer,
    removeAnswer,
    isLoading
  }
}
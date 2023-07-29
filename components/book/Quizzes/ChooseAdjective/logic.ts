"use client";
//== Hooks
import { useState } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== API
import { getGroupSingleWordChoice } from "@/API/quizzes";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [items, setItems] = useState([
    {
      id: 1,
      text: 'حَمامٌ',
      choices: ['صغير', 'صفير'],
      correct: "صغير"
    },
    {
      id: 2,
      text: 'عُشٌّ',
      choices: ['كميل', 'جميل'],
      correct: "جميل"
    },
    {
      id: 3,
      text: 'شَجَرَةٌ',
      choices: ['عالية', 'باكية'],
      correct: "عالية"
    },
    {
      id: 4,
      text: 'بَيْتٌ',
      choices: ['نحيف', 'نظيف'],
      correct: "نظيف"
    },
  ])
  const [answers, setAnswers] = useState<{ [index: number]: string }>({});

  const getQuestion = async () => {
    return await getGroupSingleWordChoice(questionData.id);
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
    items,
    answers,
    addAnswer,
    removeAnswer,
    isLoading
  }
}
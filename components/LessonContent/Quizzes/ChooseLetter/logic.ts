"use client";
//== Hooks
import { useState } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== API
import { getImageSingleChoiceQuestion } from "@/API/quizzes";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [items, setItems] = useState([
    {
      image: '/images/quizzes/1.png',
      letters: ["ح", "خ"],
      correct: 'ح'
    },
    {
      image: '/images/quizzes/2.png',
      letters: ["غ", "ع"],
      correct: 'ع'
    },
    {
      image: '/images/quizzes/3.png',
      letters: ["ت", "ب"],
      correct: 'ب'
    },
    {
      image: '/images/quizzes/4.png',
      letters: ["ش", "س"],
      correct: 'ش'
    },
  ])
  const [choices, setChoices] = useState<{ [index: number]: string }>({});

  const getQuestion = async () => {
    return await getImageSingleChoiceQuestion(questionData.id);
  }

  const { data, isLoading } = useQuery(['imageSingleChoiceQuestion'], getQuestion, {
    cacheTime: 0
  });

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
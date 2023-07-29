"use client";
//== Hooks
import { useState } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== API
import { getColoringQuestion } from "@/API/quizzes";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [colors, setColors] = useState<string[]>([
    "#2d3436",
    "#FDEA96",
    "#0984e3",
    "#F79257",
    "#00b894",
    "#4F6D7A"
  ]);
  const [choosedColor, setChoosedColor] = useState<string | null>(null);

  const getQuestion = async () => {
    return await getColoringQuestion(questionData.id);
  }

  const { data, isLoading } = useQuery(['coloringQuestion'], getQuestion, {
    cacheTime: 0
  });

  const changeColor = (color: string) => {
    setChoosedColor(color)
  }

  const fillElement = (e: React.MouseEvent) => {
    e.currentTarget.setAttribute('fill', choosedColor ? choosedColor : '#fff')
  }

  return {
    colors,
    choosedColor,
    changeColor,
    fillElement,
    isLoading,
    questionDetails: data ? data : {}
  }
}
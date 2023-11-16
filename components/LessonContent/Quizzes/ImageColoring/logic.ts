"use client";
//== Hooks
import { useMemo, useState } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== API
import { getColoringQuestion } from "@/API/quizzes";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData }: { questionData: QuestionData }) {
  const [choosedColor, setChoosedColor] = useState<string | null>(null);
  const [whiteImage, setWhiteImage] = useState<string>('');

  const getQuestion = async () => {
    return await getColoringQuestion(questionData.id);
  }

  const { data, isLoading } = useQuery(['coloringQuestion'], getQuestion, {
    cacheTime: 0
  });

  if (data && !whiteImage) setWhiteImage(data?.white_image);

  const changeColor = (color: string) => {
    setChoosedColor(color)
  }

  const fillElement = (e: React.MouseEvent<HTMLDivElement>) => {
    // @ts-ignore
    e.target.setAttribute('fill', choosedColor ? choosedColor : '#fff');
    setWhiteImage(e.currentTarget.querySelector('div')!.innerHTML)
  }

  return {
    choosedColor,
    changeColor,
    fillElement,
    isLoading,
    questionDetails: data ? data : {},
    whiteImage
  }
}
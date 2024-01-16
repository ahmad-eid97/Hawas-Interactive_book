"use client";
//== Hooks
import { useState } from "react";
//== Modules
import {
  arrayMove
} from "@dnd-kit/sortable";
import { useQuery } from "@tanstack/react-query";
//== Store
import { useAppDispatch } from "@/store/hooks";
import { checkAnswer, checkWrong } from "@/store/slices/common";
//== API
import { getSortingQuestion } from "@/API/quizzes";
//== Types
import { QuestionData } from "../types";

interface LogicProps {
  questionData: QuestionData
}

export default function useLogic({ questionData }: LogicProps) {
  const [items, setItems] = useState<{ id: number, title: string }[]>([]);
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [rendered, setRendered] = useState(true);
  const dispatch = useAppDispatch();

  const getQuestionData = async () => {
    return await getSortingQuestion(questionData.id)
  }

  const { data, isLoading } = useQuery(['sortingQuestion'], getQuestionData, {
    cacheTime: 0,
    onSuccess: (data) => {
      setItems(data?.items);
    }
  })

  // function handleDragEnd(event: any) {
  //   const { active, over } = event;
  //   if (active.id !== over.id) {
  //     setItems((items) => {
  //       const activeIndex = items.indexOf(active.id);
  //       const overIndex = items.indexOf(over.id);
  //       return arrayMove(items, activeIndex, overIndex);
  //     });
  //   }
  // }

  const handleOndragEnd = (result: any) => {
    if (!result.destination) return;
    const allAnswers = Array.from(items);
    const [reorderedItem] = allAnswers.splice(result.source.index, 1);
    allAnswers.splice(result.destination.index, 0, reorderedItem);
    setItems(allAnswers);
  };

  const correctAnswer = () => {
    if (!data?.correctAnswers) return;
    for (let i = 0; i < items.length; i++) {
      if (items[i].title !== data?.correctAnswers[i]) {
        dispatch(checkWrong(true))
        setTimeout(() => {
          dispatch(checkWrong(false))
        }, 3500)
        setShowCorrection({
          correct: false,
          data: [
            "حاول مرّة أخرى",
            "الإجابة غير صحيحة",
          ]
        })
        return;
      }
    }

    dispatch(checkAnswer(true))
    setTimeout(() => {
      dispatch(checkAnswer(false))
    }, 3500)
    setShowCorrection({
      correct: true,
      data: [
        "أحسنت",
        "لقد حصلت على العلامة الكاملة",
      ]
    })
  }

  const retry = () => {
    setRendered(false);
    setShowCorrection(null);
    setTimeout(() => {
      setRendered(true)
    }, 20)
  }

  return {
    items: items.length > 1 ? items : data?.items,
    handleOndragEnd,
    correctAnswer,
    showCorrection,
    retry,
    rendered,
    isLoading
  }
}
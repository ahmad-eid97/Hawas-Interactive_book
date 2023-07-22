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
import { getQuestion } from "@/API/quizzes";
//== Types
import { QuestionData } from "../types";

interface LogicProps {
  questionData: QuestionData
}

export default function useLogic({ questionData }: LogicProps) {
  const [items, setItems] = useState([""]);
  const [correctData, setCorrectData] = useState<string[] | null>(["طير عادل بالونه ليجري وراءه", "طار البالون بعيدا", "حزن عادل علي البالون",]);
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [rendered, setRendered] = useState(true);
  const dispatch = useAppDispatch();

  const getQuestionData = () => {
    return getQuestion(questionData.id)
  }

  const { data, isLoading } = useQuery(['questionData'], getQuestionData, {
    onSuccess: (data) => {
      const answers = data.data.data.answers.map((item: any) => item.title)
      function shuffleArray(answers: string[]) {
        function compareRandom(a: string, b: string) {
          return Math.random() - 0.5;
        }
        answers.sort(compareRandom);
      }
      shuffleArray(answers);
      setItems(answers);
      setCorrectData(data.data.data.answers.map((item: any) => item.title));
    }
  })

  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (active.id !== over.id) {
      setItems((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }

  const correctAnswer = () => {
    if (!correctData) return;
    for (let i = 0; i < items.length; i++) {
      if (items[i] !== correctData[i]) {
        dispatch(checkWrong(true))
        setTimeout(() => {
          dispatch(checkWrong(false))
        }, 3500)
        setShowCorrection({
          correct: false,
          data: [
            "حاول مرّة أخرى",
            "بعض الإجابات غير صحيحة",
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
        "لقد حصلت على علامة كاملة",
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
    items,
    handleDragEnd,
    correctAnswer,
    showCorrection,
    retry,
    rendered,
    isLoading
  }
}
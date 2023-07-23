"use client";
//== Hooks
import { useState } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== Store
import { useAppDispatch } from "@/store/hooks";
import { checkAnswer, checkWrong } from "@/store/slices/common";
//== Types
import { QuestionData } from "../types";
//== API
import { getQuestion } from "@/API/quizzes";

interface CProps {
  questionData: QuestionData
}

export default function useLogic({ questionData }: CProps) {
  const [columnsData, setColumnsData] = useState<any>({
    righthand: {
      title: '',
      items: []
    },
    lefthand: {
      title: '',
      items: []
    }
  });
  const [studentAnswer, setStudentAnswer] = useState<any>([]);
  const [correctData, setCorrectAnswer] = useState<any>([
  ]);
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [rendered, setRendered] = useState(true);
  const dispatch = useAppDispatch();

  const getQuestionData = async () => {
    return await getQuestion(questionData.id)
  }

  const { data, isLoading } = useQuery(['matchingQuestion'], getQuestionData, {
    onSuccess: (data) => {
      const correct = data.data.data.answers.map((item: any) => ({ from: item.title, to: item.answer_two_gap_match }));
      setCorrectAnswer(correct)
      const items = data.data.data.answers.map((item: any) => item)
      function shuffleArray(items: object[]) {
        function compareRandom() {
          return Math.random() - 0.5;
        }
        items.sort(compareRandom);
      }
      const answers = items.map((item: any) => item.answer_two_gap_match);
      shuffleArray(answers);
      const releasedItems = {
        righthand: {
          title: data.data.data.title_right,
          items: items.map((item: any) => ({ content: item.title })),
        },

        lefthand: {
          title: data.data.data.title_left,
          items: answers.map((item: any) => ({ content: item })),
        }
      }
      setColumnsData(releasedItems)
    }
  })

  const areArraysEqual = (arr1: any, arr2: any) => {
    if (arr1.length !== arr2.length) {
      return false;
    }

    const resultArray: any = []

    for (let i = 0; i < arr1.length; i++) {
      arr2.forEach((element: object) => {
        // @ts-ignore
        if (element.from === arr1[i].from && element.to === arr1[i].to) {
          resultArray.push(element)
        }
      })
    }

    if (resultArray.length !== arr2.length) {
      return false;
    }

    return true;
  }

  const correctAnswer = () => {
    if (areArraysEqual(studentAnswer, correctData)) {
      dispatch(checkAnswer(true))
      setTimeout(() => {
        dispatch(checkAnswer(false))
      }, 3500)
      setShowCorrection({
        correct: true,
        data: [
          "أحسنت",
          "لقد حصلت على علامة كاملة",
          "العلامة المُستحقّة هي : 10"
        ]
      })
    } else {
      dispatch(checkWrong(true));
      setTimeout(() => {
        dispatch(checkWrong(false));
      }, 3500);
      setShowCorrection({
        correct: false,
        data: [
          "حاول مرّة أخرى",
          "بعض الإجابات غير صحيحة",
          "العلامة المُستحقّة هي : 5"
        ]
      })
    }
  }

  const retry = () => {
    setRendered(false);
    setShowCorrection(null);
    setStudentAnswer([]);
    setTimeout(() => {
      setRendered(true)
    }, 20)
  }

  return {
    correctAnswer,
    showCorrection,
    setStudentAnswer,
    retry,
    rendered,
    columnsData,
    isLoading
  }
}
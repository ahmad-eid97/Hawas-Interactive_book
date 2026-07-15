"use client";
//== Hooks
import { useState, useEffect } from "react";
//== Modules
import { useQuery } from "@tanstack/react-query";
import Cookies from "universal-cookie";
//== Utils
import { errorNotify, successNotify } from "@/utils/toast";
//== API
import { getGroupOpenEndedQuestion } from "@/API/quizzes";
import { getAnswerAttempts, startQuiz, answerQuestion } from "@/API/quizzes/reported-quizzes";
//== Types
import { QuestionData } from "../types";

export default function useLogic({ questionData, bookId }: { questionData: QuestionData, bookId: number }) {
  const [answer, setAnswer] = useState<{ [key: number]: { value: string } }>({});
  const [userAnswered, setUserAnswered] = useState<null | { [key: number]: { value: any } }>(null);
  const [rendered, setRendered] = useState(true);
  const [showCorrection, setShowCorrection] = useState<{ correct: boolean, data: string[] } | null>(null);
  const [clickedItem, setClickedItem] = useState<HTMLElement | null>(null);
  const cookies = new Cookies();

  const checkUserAnsweredBefore = async () => {
    // @ts-ignore
    questionData.children.forEach(async (item: any, index: number) => {
      const response = await getAnswerAttempts(item.id);
      if (response.success) {
        setAnswer({ ...answer, [index]: { value: response.data.given_answer } })
        setUserAnswered({ ...userAnswered, [index]: { value: response.data } });
      } else {
        setUserAnswered({});
      }
    })
  }

  useEffect(() => {
    if (cookies.get("hawas-user")?.role === 'student') checkUserAnsweredBefore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getQuestion = async () => {
    return await getGroupOpenEndedQuestion(questionData.id);
  }

  const { data, isLoading } = useQuery(['groupImageShortAnswerQuestion'], getQuestion, {
    cacheTime: 0
  });

  const handleAnswer = (value: string, index: number) => {
    setAnswer({ ...answer, [index]: { value } });
  }

  const correctAnswer = async (index: number, questionId: number) => {
    if (!answer) return errorNotify('خانة الإجابة لا يمكن أن تكون فارغة');
    const data = {
      quiz_id: questionData.quiz_id,
      book_id: bookId
    }
    const startQuizResponse = await startQuiz(data);
    if (startQuizResponse.success) {
      const answerData = {
        quiz_attempt_id: startQuizResponse.data.id,
        question_id: questionId,
        given_answer: answer[index].value
      }
      const answerQuestionResponse = await answerQuestion(answerData);
      if (answerQuestionResponse.success) {
        successNotify('تم إرسال الإجابة للمدرس لتصحيحها')
      }
    }
  }

  const retry = () => {
    if (clickedItem) setClickedItem(null);
    setRendered(false);
    setShowCorrection(null);
    setAnswer({});
    setTimeout(() => {
      setRendered(true)
    }, 20)
  }

  return {
    items: data?.items,
    answer,
    setAnswer,
    handleAnswer,
    userAnswered,
    showCorrection,
    correctAnswer,
    retry,
    rendered,
    isLoading
  }
}
"use client";
//== Hooks
import { useEffect, useState } from "react";
//== Modules
import Cookies from "universal-cookie";
//== Utils
import { errorNotify, successNotify } from "@/utils/toast";
//== API
import { getAnswerAttempts, answerQuestion } from "@/API/quizzes/reported-quizzes";

export default function useLogic({ groupQuestion, attemptId, userRole }: { groupQuestion: any, attemptId: number, userRole: string }) {
  const [answer, setAnswer] = useState<{ [key: number]: { value: string } }>({});
  const [userAnswered, setUserAnswered] = useState<null | { [key: number]: { value: any } }>(null);
  const [rendered, setRendered] = useState(true);
  const cookies = new Cookies();

  const checkUserAnsweredBefore = async () => {
    // @ts-ignore
    groupQuestion.children.forEach(async (item: any, index: number) => {
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

  const handleAnswer = (value: string, index: number) => {
    setAnswer({ ...answer, [index]: { value } });
  }

  const sendAnswer = async (questionId: number, index: number) => {
    if (userRole === 'teacher') return errorNotify('لا يمكن للمدرس الإجابة علي السؤال');
    if (!answer) return errorNotify('خانة الإجابة لا يمكن أن تكون فارغة');
    const answerData = {
      quiz_attempt_id: attemptId,
      question_id: questionId,
      given_answer: answer[index].value
    }
    const answerQuestionResponse = await answerQuestion(answerData);
    if (answerQuestionResponse.success) {
      successNotify('تم إرسال الإجابة بنجاح');
    }
  }

  return {
    answer,
    handleAnswer,
    userAnswered,
    rendered,
    sendAnswer
  }
}
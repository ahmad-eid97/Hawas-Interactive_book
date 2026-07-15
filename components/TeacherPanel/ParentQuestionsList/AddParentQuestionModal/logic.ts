import { useState } from "react";
import { useSearchParams } from "next/navigation";
//= Utils
import { successNotify } from "@/utils/toast";
//== Api
import { addNewQuestion, updateQuestion } from "@/API/teacherPanel";

type Props = {
  setOpen: React.Dispatch<boolean>;
  targetedQuestion?: any;
  refetch: () => void;
}

export default function useLogic({ setOpen, targetedQuestion, refetch }: Props) {
  const searchParams = useSearchParams();
  const [questionData, setQuestionData] = useState({
    quiz_id: searchParams.get('quiz_id') || '',
    parent_id: '',
    question_type: targetedQuestion?.question_type || '',
    title: targetedQuestion?.title || '',
    description: targetedQuestion?.description || '',
    question_mark: targetedQuestion?.question_mark || '',
    question_img: targetedQuestion?.question_img || '',
    is_active: targetedQuestion?.is_active || '0',
    question_category: "evaluating",
  });

  function handleFields(e: React.ChangeEvent<HTMLInputElement>, type?: string) {
    const { name, value } = e.target;
    setQuestionData(prev => ({
      ...prev,
      [name]: type === 'question_img' && e.target.files ? e.target.files[0] : value
    }))
  }

  async function handleQuiz() {
    const response = targetedQuestion ? await updateQuestion(targetedQuestion.id, { ...questionData, _method: 'PUT' }) : await addNewQuestion(questionData);
    if (response?.success) {
      setOpen(false);
      successNotify(targetedQuestion ? 'تم تعديل السؤال بمجاح' : 'تم إضافة السؤال بنجاح');
      refetch();
    }
  }

  return {
    questionData,
    setQuestionData,
    handleFields,
    handleQuiz
  }
}
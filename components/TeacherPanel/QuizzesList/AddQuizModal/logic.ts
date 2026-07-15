import { useState } from "react";
//= Utils
import { successNotify } from "@/utils/toast";
//== Api
import { addNewQuiz, updateQuiz } from "@/API/teacherPanel";

type Props = {
  setOpen: React.Dispatch<boolean>;
  targetedQuiz?: any;
  refetch: () => void;
}

export default function useLogic({ setOpen, targetedQuiz, refetch }: Props) {
  const [quizData, setQuizData] = useState({
    title: targetedQuiz?.title || '',
    description: targetedQuiz?.description || '',
    school_id: targetedQuiz?.school_id || '',
    school_class_id: targetedQuiz?.school_class_id || '',
    per_q_mark: targetedQuiz?.per_q_mark || '',
    timer: targetedQuiz?.timer || '',
    is_active: targetedQuiz?.is_active || '0',
    show_ans: targetedQuiz?.show_ans || '0'
  });

  function handleFields(e: React.ChangeEvent<HTMLInputElement>, type?: string) {
    const { name, value } = e.target;
    setQuizData(prev => ({
      ...prev,
      [name]: type === 'file' && e.target.files ? e.target.files[0] : value
    }))
  }

  async function handleQuiz() {
    const response = targetedQuiz ? await updateQuiz(targetedQuiz.id, { ...quizData, _method: 'PUT' }) : await addNewQuiz(quizData);
    if (response?.success) {
      setOpen(false);
      successNotify(targetedQuiz ? 'تم تعديل الإختبار بنجاح' : 'تم إضافة الإختبار بنجاح');
      refetch();
    }
  }

  return {
    quizData,
    setQuizData,
    handleFields,
    handleQuiz
  }
}
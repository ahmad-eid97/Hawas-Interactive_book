import { useState } from "react";
import { useSearchParams } from "next/navigation";
//= Utils
import { successNotify } from "@/utils/toast";
//== Api
import { addNewQuestion, updateQuestion } from "@/API/teacherPanel";

type Props = {
  setOpen: React.Dispatch<boolean>;
  questionType: string;
  targetedQuestion?: any;
  refetch: () => void;
}

function getQuestionType(parentType: string) {
  switch (parentType) {
    case 'group_open_ended':
      return 'open_ended';
    case 'group_short_answer_2':
      return 'short_answer';
    case 'group_radio_single_choice':
      return 'single_choice';
    case 'group_multiple_choice':
      return 'multiple_choice';
    case 'group_true_false':
      return 'true_false';
  }
}

export default function useLogic({ setOpen, questionType, targetedQuestion, refetch }: Props) {
  const searchParams = useSearchParams();
  const [questionData, setQuestionData] = useState<any>({
    quiz_id: searchParams.get('quiz_id') || '',
    parent_id: searchParams.get('parent_id') || '',
    question_type: getQuestionType(questionType),
    title: targetedQuestion?.title || '',
    description: targetedQuestion?.description || '',
    question_mark: targetedQuestion?.question_mark || '',
    question_img: targetedQuestion?.question_img || '',
    is_active: targetedQuestion?.is_active || 0,
    question_category: "evaluating",
    answers: targetedQuestion?.answers || [],
    is_correct: targetedQuestion?.answers && targetedQuestion?.answers[0]?.is_correct === 1 ? 1 : 0
  });

  function handleFields(e: React.ChangeEvent<HTMLInputElement>, type?: string) {
    const { name, value } = e.target;
    setQuestionData((prev: any) => ({
      ...prev,
      [name]: type === 'question_img' && e.target.files ? e.target.files[0] : value
    }))
  }

  async function handleQuiz() {
    let data = questionData;
    if (questionType === 'group_true_false') {
      data = {
        ...questionData,
        answers: [
          {
            title: questionData.is_correct ? 'true' : 'false',
            is_correct: questionData.is_correct === 1 ? 1 : 0,
            answer_img: "",
            answer_order: 1
          },
          {
            title: questionData.is_correct ? 'false' : 'true',
            is_correct: questionData.is_correct === 1 ? 0 : 1,
            answer_img: "",
            answer_order: 1
          },
        ]
      }
    }

    delete data.is_correct;
    // @ts-ignore
    const response = targetedQuestion ? await updateQuestion(targetedQuestion.id, { ...data, _method: 'PUT' }) : await addNewQuestion(data);
    if (response?.success) {
      setOpen(false);
      successNotify(targetedQuestion ? 'تم تعديل السؤال بنجاح' : 'تم إضافة السؤال بنجاح');
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
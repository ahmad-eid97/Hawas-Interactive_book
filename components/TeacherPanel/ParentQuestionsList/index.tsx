import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
//= Modules
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
//= Components
import { Icon } from '@iconify/react';
import AddParentQuestionModal from './AddParentQuestionModal';
import Pagination from '@/components/UIs/Pagination';
//= Utils
import { successNotify } from '@/utils/toast';
//= Api
import { showQuiz, deleteQuestion } from '@/API/teacherPanel';
//= Styles
import cls from './parentQuestionsList.module.scss';

function ParentQuestionsList() {
  const searchParams = useSearchParams();
  const quizId = searchParams.get("quiz_id");
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [targetedQuestion, setTargetedQuestion] = useState(null);

  const { data: QuizData, isLoading, refetch } = useQuery(['getQuizQuestions'], () => showQuiz(`${quizId}`));

  function openEditQuestion(quiz?: any) {
    quiz ? setTargetedQuestion(quiz) : setTargetedQuestion(null);
    setOpen(true);
  }

  async function deleteQuestionHandler(questionId: string) {
    const result = await Swal.fire({
      icon: "question",
      title: "هل أنت متأكد انك تريد حذف هذا السؤال؟",
      showCancelButton: true,
      cancelButtonText: "إلغاء",
      confirmButtonText: "حذف",
    });

    if (result.isConfirmed) {
      const response = await deleteQuestion(questionId);
      if (response?.success) {
        successNotify("تم حذف السؤال بنجاح");
        await refetch();
      }
    }
  }

  function goBack() {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.delete("quiz_id");
    const query = current.toString();
    router.replace(`${pathname}?${query}`);
  }

  function goToChildrenQuestions(questionId: string) {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("parent_id", questionId);
    const query = current.toString();
    router.replace(`${pathname}?${query}`);
  }

  return (
    <>
      <div className={cls.head}>
        <button className={cls.addQuestion} onClick={() => openEditQuestion()}><Icon icon="carbon:add-filled" /> إضافة سؤال</button>
        <button className={cls.backButton} onClick={goBack}><Icon icon="icon-park-outline:return" /> رجوع للخلف</button>
      </div>
      <div className={cls.questionsList}>
        {
          (!isLoading && QuizData?.questions?.length) ?
            <>
              {QuizData?.questions?.map((question: any) => (
                <div className={cls.quiz} key={question.id}>
                  <p>{question.title}</p>
                  <div className={cls.actions}>
                    <button onClick={() => goToChildrenQuestions(question.id)}>الأسئلة</button>
                    <button onClick={() => openEditQuestion(question)}><Icon icon="tabler:edit" /></button>
                    <button onClick={() => deleteQuestionHandler(question.id)}><Icon icon="mynaui:trash" /></button>
                  </div>
                </div>
              ))}
            </>
            :
            (!isLoading && !QuizData?.questions?.length) ?
              <div className={cls.emptyData}>
                <p>لا يوجد أسئلة</p>
              </div>
              :
              <div className={cls.loading}>
                <Icon icon="eos-icons:loading" />
              </div>
        }
      </div>
      {
        open &&
        <AddParentQuestionModal
          setOpen={setOpen}
          targetedQuestion={targetedQuestion}
          refetch={refetch}
        />
      }
    </>
  )
}

export default ParentQuestionsList;
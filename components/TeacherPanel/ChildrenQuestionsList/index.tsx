import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
//= Modules
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
//= Components
import { Icon } from '@iconify/react';
import AddChildQuestionModal from './AddChildQuestionModal';
//= Utils
import { successNotify } from '@/utils/toast';
//= Api
import { getQuestionDetails, deleteQuestion } from '@/API/teacherPanel';
//= Styles
import cls from './childrenQuestionsList.module.scss';

function ChildrenQuestionsList() {
  const searchParams = useSearchParams();
  const questionId = searchParams.get("parent_id");
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [targetedQuestion, setTargetedQuestion] = useState(null);

  const { data: questionData, isLoading, refetch } = useQuery(['getChildrenQuestions'], () => getQuestionDetails(`${questionId}`));

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
    current.delete("parent_id");
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
          (!isLoading && questionData?.children?.length) ?
            <>
              {questionData?.children?.map((question: any) => (
                <div className={cls.quiz} key={question.id}>
                  <p>{question.title}</p>
                  <div className={cls.actions}>
                    <button onClick={() => openEditQuestion(question)}><Icon icon="tabler:edit" /></button>
                    <button onClick={() => deleteQuestionHandler(question.id)}><Icon icon="mynaui:trash" /></button>
                  </div>
                </div>
              ))}
            </>
            :
            (!isLoading && !questionData?.children?.length) ?
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
        <AddChildQuestionModal
          setOpen={setOpen}
          questionType={questionData?.question_type}
          targetedQuestion={targetedQuestion}
          refetch={refetch}
        />
      }
    </>
  )
}

export default ChildrenQuestionsList;
import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
//= Modules
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
//= Components
import { Icon } from '@iconify/react';
import AddQuizModal from './AddQuizModal';
import Pagination from '@/components/UIs/Pagination';
//= Utils
import { successNotify } from '@/utils/toast';
//= Api
import { getAllTeacherQuizzes, deleteQuiz } from '@/API/teacherPanel';
//= Styles
import cls from './quizzesList.module.scss';

type Props = {
  schools: any;
  schoolClasses: any;
}

function QuizzesList({ schools, schoolClasses }: Props) {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page");
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [targetedQuiz, setTargetedQuiz] = useState(null);

  const { data: quizzes, isLoading, refetch } = useQuery(['getQuizzes'], () => getAllTeacherQuizzes({ page: currentPage ? +currentPage : 1 }))

  function openEditQuiz(quiz?: any) {
    quiz ? setTargetedQuiz(quiz) : setTargetedQuiz(null);
    setOpen(true)
  }

  async function deleteQuizHandler(quizId: string) {
    const result = await Swal.fire({
      icon: "question",
      title: "هل أنت متأكد انك تريد حذف هذا الإختبار؟",
      showCancelButton: true,
      cancelButtonText: "إلغاء",
      confirmButtonText: "حذف",
    });

    if (result.isConfirmed) {
      const response = await deleteQuiz(quizId);
      if (response?.success) {
        successNotify("تم حذف الإختبار بنجاح");
        await refetch();
      }
    }
  }

  function goToQuizQuestions(quizId: string) {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("quiz_id", quizId);
    const query = current.toString();
    router.replace(`${pathname}?${query}`);
  }

  return (
    <>
      <button className={cls.addQuiz} onClick={() => openEditQuiz()}><Icon icon="carbon:add-filled" /> إضافة إختبار</button>
      <div className={cls.quizzesList}>
        {
          (!isLoading && quizzes?.quizzes?.length) ?
            <>
              {quizzes?.quizzes?.map((quiz: any) => (
                <div className={cls.quiz} key={quiz.id}>
                  <p>{quiz.title}</p>
                  <div className={cls.actions}>
                    <button onClick={() => goToQuizQuestions(quiz.id)}>الأسئلة</button>
                    <button onClick={() => openEditQuiz(quiz)}><Icon icon="tabler:edit" /></button>
                    <button onClick={() => deleteQuizHandler(quiz.id)}><Icon icon="mynaui:trash" /></button>
                  </div>
                </div>
              ))}
            </>
            :
            (!isLoading && !quizzes?.quizzes?.length) ?
              <div className={cls.emptyData}>
                <p>لا يوجد إختبارات</p>
              </div>
              :
              <div className={cls.loading}>
                <Icon icon="eos-icons:loading" />
              </div>
        }
        <Pagination
          pagesCount={quizzes?.meta.last_page}
          currentPage={quizzes?.meta.current_page - 1}
          refetch={refetch}
          isLoading={isLoading}
          isDisabled={quizzes?.meta.last_page <= 1}
        />
      </div>
      {
        open &&
        <AddQuizModal
          setOpen={setOpen}
          targetedQuiz={targetedQuiz}
          schools={schools}
          schoolClasses={schoolClasses}
          refetch={refetch}
        />
      }
    </>
  )
}

export default QuizzesList;
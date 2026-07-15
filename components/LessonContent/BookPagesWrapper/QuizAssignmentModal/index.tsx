import { useState } from "react";
//= Modules
import { useQuery } from "@tanstack/react-query";
import Cookies from "universal-cookie";
//= Components
import { Modal, PageLoader } from "@/components";
import GroupOpenEnded from "../AssignmentsQuizzes/GroupOpenEnded";
import GroupShortAnswer2 from "../AssignmentsQuizzes/GroupShortAnswer2";
import SingleChoice from "../AssignmentsQuizzes/SignleChoose";
import MultipleChoice from "../AssignmentsQuizzes/MultipleChoose";
import GroupTrueAndFalse from "../AssignmentsQuizzes/GroupTrueAndFalse";
import { errorNotify } from "@/utils/toast";
//= Api
import { showQuizForStudents } from "@/API/teacherPanel";
import { startQuiz } from "@/API/quizzes/reported-quizzes";
//= Styles
import cls from './quizAssignmentModal.module.scss';

type Props = {
  setOpenQuizAssignment: React.Dispatch<boolean>;
  quizId: string;
  bookId: number;
}

const QuizAssignmentModal = ({ setOpenQuizAssignment, quizId, bookId }: Props) => {
  const [activeQuestion, setActiveQuestion] = useState(1);
  const { data: quizData, isLoading: quizDataLoading } = useQuery(['quizData'], () => showQuizForStudents(quizId));
  const cookies = new Cookies();
  const userRole = cookies.get('hawas-user').role

  const startQuizHandler = async () => {
    if (userRole === 'teacher') return;
    const data = {
      quiz_id: +quizId,
      book_id: bookId
    }
    try {
      const startQuizResponse = await startQuiz(data);
      return startQuizResponse.data;
    } catch (error) {
      errorNotify('هذا الإختبار غير موجود أو تم حذفه ، حاول مرة أخرى')
    }
  }
  const { data: startQuizData } = useQuery(['startQuizInAssignment'], startQuizHandler);

  const renderComponent = (questionType: string, groupQuestion: any) => {
    const components: { [key: string]: JSX.Element } = {
      'group_open_ended':
        <GroupOpenEnded
          groupQuestion={groupQuestion}
          attemptId={startQuizData?.id}
          userRole={userRole}
        />,
      'group_short_answer_2':
        <GroupShortAnswer2
          groupQuestion={groupQuestion}
          attemptId={startQuizData?.id}
          userRole={userRole}
        />,
      'group_radio_single_choice':
        <SingleChoice
          groupQuestion={groupQuestion}
          attemptId={startQuizData?.id}
          userRole={userRole}
        />,
      'group_multiple_choice':
        <MultipleChoice
          groupQuestion={groupQuestion}
          attemptId={startQuizData?.id}
          userRole={userRole}
        />,
      'group_true_false':
        <GroupTrueAndFalse
          groupQuestion={groupQuestion}
          attemptId={startQuizData?.id}
          userRole={userRole}
        />,
    }
    return components[questionType];
  }

  function chnageQuestion(num: number) {
    if (num >= 1 && num <= quizData?.questions?.length) setActiveQuestion(num);
    else return;
  }

  return (
    <Modal setOpenModal={setOpenQuizAssignment}>
      {quizDataLoading ?
        <div className={cls.loadingArea}>
          <PageLoader />
        </div>
        :
        <>
          <div className={cls.stepper}>
            <div className={cls.btn} onClick={() => chnageQuestion(activeQuestion - 1)}>
              السابق
            </div>
            <div className={cls.number}>
              <p>{activeQuestion}</p>
              <span>/</span>
              <p>{quizData?.questions?.length}</p>
            </div>
            <div className={cls.btn} onClick={() => chnageQuestion(activeQuestion + 1)}>
              التالي
            </div>
          </div>
          <div className={cls.question}>
            {renderComponent(quizData?.questions?.[activeQuestion - 1]?.question_type, quizData?.questions?.[activeQuestion - 1])}
          </div>
          <div className={cls.actions}>
            <button onClick={() => setOpenQuizAssignment(false)}>إغلاق</button>
          </div>
        </>
      }

    </Modal>
  )
}

export default QuizAssignmentModal;
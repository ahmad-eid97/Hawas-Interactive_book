import { useState } from 'react';
//== Utils
import { errorNotify, successNotify } from "@/utils/toast";
//= Api
import { answerQuestion } from "@/API/quizzes/reported-quizzes";
//== Styles
import styles from './groupTrueAndFalse.module.scss';

type Props = {
  groupQuestion: any;
  attemptId: number;
  userRole: string;
}

const GroupTrueAndFalse = ({ groupQuestion, attemptId, userRole }: Props) => {
  const [studentAnswer, setStudentAnswer] = useState<any>({});

  async function sendAnswer(item: any, answerId: string) {
    if (userRole === 'teacher') return errorNotify('لا يمكن للمدرس الإجابة علي السؤال')
    const answerData = {
      quiz_attempt_id: attemptId,
      question_id: item.id,
      given_answer: answerId
    }
    const answerQuestionResponse = await answerQuestion(answerData);
    if (answerQuestionResponse.success) {
      successNotify('تم إرسال الإجابة بنجاح');
    }
  }

  const chooseAnswer = (item: any, index: number, answer: boolean, answerId: string) => {
    setStudentAnswer({ ...studentAnswer, [index]: answer });
    sendAnswer(item, answerId);
  }

  return (
    <div className={styles.groupTrueAndFalse}>
      <h2>{groupQuestion.title}</h2>
      <ul>
        {groupQuestion?.children?.map((item: any, idx: number) => (
          <li key={idx}>
            {item.title}
            <span>
              <i className={`fa-solid fa-check ${studentAnswer[idx] === true ? styles.trueChoosed : ''}`} onClick={() => chooseAnswer(item, idx, true, item.answers[0].id)}></i>
              <i className={`fa-solid fa-xmark ${studentAnswer[idx] === false ? styles.falseChoosed : ''}`} onClick={() => chooseAnswer(item, idx, false, item.answers[1].id)}></i>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GroupTrueAndFalse;
import { useState } from 'react';
//== Components
import { RadioGroup } from '@/components';
//== Utils
import { errorNotify, successNotify } from "@/utils/toast";
//= Api
import { answerQuestion } from "@/API/quizzes/reported-quizzes";
//= Styles
import styles from './item.module.scss';

type Props = {
  item: any;
  attemptId: number;
  userRole: string;
}

function Item({ item, attemptId, userRole }: Props) {
  const [choice, setChoice] = useState('');

  async function sendAnswer() {
    if (userRole === 'teacher') return errorNotify('لا يمكن للمدرس الإجابة علي السؤال')
    if (!choice) return errorNotify("الرجاء إختيار إجابة أولاَ")
    const answerData = {
      quiz_attempt_id: attemptId,
      question_id: item.id,
      given_answer: choice
    }
    const answerQuestionResponse = await answerQuestion(answerData);
    if (answerQuestionResponse.success) {
      successNotify('تم إرسال الإجابة بنجاح')
    }
  }

  return (
    <div className={styles.item}>
      <h2>{item.title}</h2>
      <div className={styles.choices}>
        {item?.answers?.map((answer: any, index: number) => (
          <span key={index} onClick={() => setChoice(answer.id)} className={choice === answer.id ? styles.active : ''}>
            <RadioGroup name={`radio${index}`} checked={choice === answer.id ? true : false} />
            {answer.title}
          </span>
        ))}
      </div>
      <div className={styles.actions}>
        <button onClick={sendAnswer}>إرسل الإجابة</button>
      </div>
    </div>
  )
}

export default Item;
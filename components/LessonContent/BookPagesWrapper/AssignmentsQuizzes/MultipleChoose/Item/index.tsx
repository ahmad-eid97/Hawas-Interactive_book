import { useState } from 'react';
//== Utils
import { errorNotify, successNotify } from "@/utils/toast";
//= Api
import { answerQuestion } from "@/API/quizzes/reported-quizzes";
//= Styles
import styles from './item.module.scss';

type Props = {
  item: any;
  idx: number;
  attemptId: number;
  userRole: string;
}

function Item({ item, idx, attemptId, userRole }: Props) {
  const [choices, setChoices] = useState<{ [index: number]: any }>({});

  const addToChoices = (index: number, choice: any) => {
    if (choices[index] && choices[index].includes(choice)) {
      setChoices(prev => ({ ...prev, [index]: choices[index].filter((item: any) => item?.text !== choice?.text) }));
      return;
    }
    let updatedChoices: string[] = [];
    if (choices[index]) updatedChoices = [...choices[index], choice];
    else updatedChoices = [choice];
    setChoices(prev => ({ ...prev, [index]: [...updatedChoices] }));
  }

  async function sendAnswer() {
    if (userRole === 'teacher') return errorNotify('لا يمكن للمدرس الإجابة علي السؤال')
    if (!Object.values(choices).length) return errorNotify("الرجاء إختيار إجابة أولاَ")
    const answerData = {
      quiz_attempt_id: attemptId,
      question_id: item.id,
      given_answer: Object.values(choices)[0].map((item: any) => item.id)
    }
    const answerQuestionResponse = await answerQuestion(answerData);
    if (answerQuestionResponse.success) {
      successNotify('تم إرسال الإجابة بنجاح');
    }
  }

  return (
    <div className={styles.item}>
      {item.image && <img src={item.image} alt="quiz-image" loading='lazy' />}
      {item.title !== '.' && <h2>{item.title}</h2>}
      <div className={styles.choices}>
        {item?.answers?.map((answer: any, index: number) => (
          <span key={index} onClick={() => addToChoices(idx, answer)} className={answer.type === 'image' ? (choices[idx]?.image === answer.image ? styles.active : '') : (choices[idx]?.includes(answer) ? styles.active : '')}>
            {(answer.answer_view_format === 'text_image') &&
              <span>
                <img src={answer.image} alt={answer.text} />
                <span>{answer?.title}</span>
              </span>
            }
            {(answer.answer_view_format === 'image') &&
              <>
                <img src={answer.image} alt={answer?.text} />
              </>
            }
            {(answer.answer_view_format === 'text') &&
              <>
                {answer?.title}
              </>
            }
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
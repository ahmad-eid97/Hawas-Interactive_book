import { Fragment } from 'react';
//== Components
import { PageLoader } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './groupShortAnswer2.module.scss';

type Props = {
  groupQuestion: any;
  attemptId: number;
  userRole: string;
}

const GroupShortAnswer2 = ({ groupQuestion, attemptId, userRole }: Props) => {
  const { answer, userAnswered, handleAnswer, rendered, sendAnswer } = useLogic({ groupQuestion, attemptId, userRole });

  if (!rendered) return null;
  return (
    <div className={styles.open_ended}>
      {groupQuestion.question_img ?
        <div className={styles.question_img}>
          <img src={groupQuestion.question_img} alt="question_image" />
        </div>
        :
        null
      }
      {groupQuestion?.children?.map((question: any, index: number) => (
        <Fragment key={index}>
          <h2>{question.title}</h2>
          <div className={styles.wrapper}>
            <textarea placeholder='اكتب الإجابة هنا...' disabled={userAnswered?.[index]?.value ? true : false} value={answer[index] ? answer[index]?.value : ''} onChange={(e) => handleAnswer(e.target.value, index)}></textarea>
          </div>
          <div className={styles.actions}>
            <button onClick={() => sendAnswer(question.id, index)}>إرسل الإجابة</button>
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default GroupShortAnswer2;
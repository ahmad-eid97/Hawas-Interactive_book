import { Fragment } from 'react';
//== Components
import { PageLoader } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Types
import { QuestionData } from '../types';
//== Styles
import styles from './groupOpenEnded.module.scss';

const GroupOpenEnded = ({ questionData, bookId }: { questionData: QuestionData, bookId: number }) => {
  const { items, answer, userAnswered, handleAnswer, correctAnswer, retry, showCorrection, setAnswer, rendered, isLoading } = useLogic({ questionData, bookId });

  if (!rendered) return null;
  if (isLoading) return <PageLoader />
  return (
    <div className={styles.open_ended}>
      {questionData.question_img ?
        <div className={styles.question_img}>
          <img src={questionData.question_img} alt="question_image" />
        </div>
        :
        null
      }
      {items.map((question: any, index: number) => (
        <Fragment key={index}>
          <h2>{question.title}</h2>
          <div className={styles.wrapper}>
            <textarea placeholder='اكتب الإجابة هنا...' disabled={userAnswered?.[index]?.value ? true : false} value={answer[index] ? answer[index]?.value : ''} onChange={(e) => handleAnswer(e.target.value, index)}></textarea>
          </div>
          {userAnswered?.[index]?.value?.is_correct ?
            <div className={styles.correction}>
              <p>لقد حصلت علي: <span>{userAnswered?.[index]?.value?.achieved_mark} / {userAnswered?.[index]?.value?.question_mark}</span></p>
            </div>
            :
            null
          }
          <div className="checkAnswer">
            <button disabled={userAnswered?.[index]?.value ? true : false} onClick={() => correctAnswer(index, question.id)}><i className="fa-regular fa-badge-check"></i> إرسال الإجابة</button>
            <button onClick={retry}><i className="fa-re4gular fa-arrows-rotate"></i> إعادة المحاولة</button>
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default GroupOpenEnded;
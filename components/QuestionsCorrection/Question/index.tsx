'use client';
import { useState } from 'react';
//= Utils
import { successNotify } from '@/utils/toast';
//= Store
import { useAppDispatch } from '@/store/hooks';
import { setQuestions } from '@/store/slices/teacher';
//= Api
import { correctQuestion } from '@/API/quizzes/reported-quizzes';
import { getQuestionsForTeacher } from "@/API/quizzes/reported-quizzes";
//= Styles
import styles from './question.module.scss';

type Props = {
  question: any;
}

function Question({ question }: Props) {
  const [grade, setGrade] = useState('');
  const dispatch = useAppDispatch();

  const correctAnswer = async () => {
    const data = {
      _method: 'PUT',
      is_correct: 1,
      achieved_mark: grade,
    }
    const response = await correctQuestion(question.id, data);
    if (response.success) {
      const response = await getQuestionsForTeacher();
      dispatch(setQuestions(response));
      successNotify('تم تصحيح السؤال بنجاح');
      setGrade('');
    }
  }

  return (
    <div className={styles.questionWrapper}>
      <div className={styles.user}>
        <img src={question?.student?.photo_file || '/images/default.jpg'} alt=" user_image" />
        <div className={styles.details}>
          <p>{question?.student?.name}</p>
          <span>{question?.student?.phone}</span>
        </div>
      </div>
      <div className={styles.question}>
        <p><span>السؤال:</span> {question.question.title}</p>
      </div>
      <div className={styles.questionBlock}>
        <div className={styles.textarea}>
          {question.given_answer}
        </div>
      </div>
      <div className={styles.actions}>
        <input type="number" placeholder="الدرجة" value={grade} onChange={(e) => setGrade(e.target.value)} />
        <button onClick={correctAnswer}>تصحيح</button>
      </div>
    </div>
  )
}

export default Question;
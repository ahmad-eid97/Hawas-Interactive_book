'use client';
import { useAppSelector } from "@/store/hooks";
//= Components
import Container from "@mui/material/Container";
import Question from "./Question";
//= Styles
import styles from './wrapper.module.scss';

function QuestionsCorrectionWrapper() {
  const teacher = useAppSelector((state) => state.teacher);

  return (
    <Container maxWidth="xl">
      <div className={styles.wrapper}>
        <h1>أسئلة الطلاب</h1>
        {teacher?.questions?.data?.length ?
          <>
            {teacher?.questions?.data?.map((question: any, idx: number) => (
              <Question key={idx} question={question} />
            ))}
          </>
          :
          <p className={styles.noQuestions}>لا توجد أسئلة للتصحيح</p>
        }
      </div>
    </Container>
  )
}

export default QuestionsCorrectionWrapper;
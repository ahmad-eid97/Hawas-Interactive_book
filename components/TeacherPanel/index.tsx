'use client';
import React, { useState } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
//= Modules
import Cookies from 'universal-cookie';
//= Components
import { Icon } from '@iconify/react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import QuestionsCorrectionWrapper from '../QuestionsCorrection';
import QuizzesList from './QuizzesList';
import ParentQuestionsList from './ParentQuestionsList';
import ChildrenQuestionsList from './ChildrenQuestionsList';
//= Hooks
import { useAppSelector } from '@/store/hooks';
//= Styles
import cls from './styles.module.scss';

type Props = {
  schools: any;
  schoolClasses: any;
}

function TeacherPanelWrapper({ schools, schoolClasses }: Props) {
  const [value, setValue] = useState("questions");
  const teacher = useAppSelector((state) => state.teacher);
  const searchParams = useSearchParams();
  const parentQuestionsPage = searchParams.get("quiz_id");
  const childrendQuestionsPage = searchParams.get("parent_id");
  const router = useRouter();
  const cookies = new Cookies();

  if (cookies.get("hawas-user")?.role !== 'teacher') {
    router.push('/books');
  }

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const AnswersCorrectionLabel = () => (
    <div>
      <p>تصحيح الاسئلة</p>
      {
        teacher?.questions?.data?.length ?
          <span className={cls.number}>{teacher.questions.data.length}</span>
          :
          null
      }
    </div>
  )

  const renderTab = () => {
    const componentRendered: { [key: string]: JSX.Element } = {
      questions: <QuestionsCorrectionWrapper />,
      quizzes: (parentQuestionsPage && !childrendQuestionsPage) ? <ParentQuestionsList /> : childrendQuestionsPage ? <ChildrenQuestionsList /> : <QuizzesList schools={schools} schoolClasses={schoolClasses} />
    }

    return componentRendered[value]
  }

  return (
    <div className={cls.wrapper}>
      <Container maxWidth="xl">
        <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label={<AnswersCorrectionLabel />} icon={<Icon icon="mdi:paper-check" />} value={"questions"} className={cls.tab_btn} />
            <Tab label="الإختبارات" icon={<Icon icon="mdi:paper-add" />} value={"quizzes"} className={cls.tab_btn} />
          </Tabs>
        </Box>
        {renderTab()}
      </Container>
    </div>
  )
}

export default TeacherPanelWrapper
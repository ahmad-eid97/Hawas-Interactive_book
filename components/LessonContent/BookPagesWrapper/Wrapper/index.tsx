'use client';
import { useState, useRef, Fragment, useContext } from "react";
import { PagesContext } from "../PagesContext/context";
//== Modules
import { Icon } from "@iconify/react";
import Cookies from "universal-cookie";
//== Components
import { BookPages, NextButton } from "@/components";
import AddAssignmentModal from '../AddAssignmentModal';
import QuizAssignmentModal from "../QuizAssignmentModal";
//== Styles
import cls from './bookPagesWrapper.module.scss';
import { Tooltip } from "@mui/material";
import { getLessonPages } from "@/API/lessonPages";

interface CProps {
  initialData: { book: any, content: any[], quizzes: any[], current_lesson: any };
  bookId: number;
  nextLesson: any;
  prevLesson: any;
  lessonId: number;
}

const BookPagesWrapper = ({ initialData, bookId, nextLesson, prevLesson, lessonId }: CProps) => {
  const [data, setData] = useState(initialData);
  const [openAssignment, setOpenAssignment] = useState(false);
  const [openQuizAssignment, setOpenQuizAssignment] = useState(false);
  const [targetedQuizAssignment, setTargetedQuizAssignment] = useState('');
  const flippy = useRef(null);
  const cookies = new Cookies();
  const { searchOpened, setSearchOpened, searchTerm, setSearchTerm, openDrawing, setOpenDrawing } = useContext(PagesContext);

  function handleOpenQuizAssignment(assignment: any) {
    setTargetedQuizAssignment(assignment);
    setOpenQuizAssignment(true);
  }

  function toggleDrawing() {
    setOpenDrawing(p => {
      if (p) {
        (window as any).saveHighlight = true;
        setTimeout(() => {
          (window as any).saveHighlight = false;
        }, 3000);
      }
      return !p;
    });
    document.body.classList.toggle('edit-highlight-mode');
  }

  return (
    <>
      {searchOpened &&
        <div className={cls.search_box}>
          {/* <div className={styles.layer} onClick={() => setSearchOpened(false)}></div> */}
          <input type="search" placeholder="ابحث عن محتوي" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      }
      <div className={cls.icons}>
        <div className={cls.highlight} onClick={() => setSearchOpened(!searchOpened)}>
          <Icon icon="ic:baseline-search" />
        </div>
        <div className={cls.draw} onClick={() => toggleDrawing()}>
          {openDrawing ?
            <Tooltip title="حفظ التظليل">
              <Icon icon="ion:save" />
            </Tooltip>
            :
            <Tooltip title="تظليل النص">
              <Icon icon="fluent:hand-draw-16-regular" />
            </Tooltip>
          }
        </div>
      </div>
      <BookPages data={data} flippy={flippy} bookId={bookId} />
      <NextButton bookId={bookId} nextLesson={nextLesson} prevLesson={prevLesson} flippy={flippy} />
      <div className={cls.assignments}>
        {data?.current_lesson?.assignments?.length || (!data?.current_lesson?.assignments?.length && cookies.get('hawas-user')?.role === 'teacher') ?
          <p><Icon icon="material-symbols:assignment-add-outline" /> أوراق العمل</p>
          :
          null
        }
        {data?.current_lesson?.assignments?.length ?
          <>
            {data?.current_lesson?.assignments?.map((assignment: any, idx: number) => (
              <Fragment key={idx}>
                {assignment.quiz_id ?
                  <div className={`${cls.item} ${cls[`item${Math.ceil(Math.random() * 6)}`]}`} onClick={() => handleOpenQuizAssignment(assignment.quiz_id)}>
                    {assignment.title?.length >= 50 ? assignment.title.substring(0, 25) + '...' : assignment.title}
                  </div>
                  :
                  <a href={assignment.file_path} target="_blank" download={true} className={`${cls.item} ${cls[`item${Math.ceil(Math.random() * 6)}`]}`} key={idx}>
                    {assignment.title?.length >= 50 ? assignment.title.substring(0, 25) + '...' : assignment.title}
                  </a>
                }
              </Fragment>
            ))}
          </>
          :
          null
        }
        {cookies.get('hawas-user')?.role === 'teacher' ?
          <div className={cls.add}>
            <button onClick={() => setOpenAssignment(true)}>إضافة ورقة عمل +</button>
          </div>
          :
          null
        }
      </div>

      {openAssignment ?
        <AddAssignmentModal setOpenAssignment={setOpenAssignment} lessonId={lessonId} classId={data?.book?.school_class_id} />
        :
        null
      }
      {openQuizAssignment ?
        <QuizAssignmentModal setOpenQuizAssignment={setOpenQuizAssignment} quizId={targetedQuizAssignment} bookId={bookId} />
        :
        null
      }
    </>
  )
}

export default BookPagesWrapper;
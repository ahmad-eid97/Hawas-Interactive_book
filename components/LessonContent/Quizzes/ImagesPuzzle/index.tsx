"use client";
//== Component Logic
import useLogic from './logic';
//== Types
import { QuestionData } from '../types';
//== Styles
import cls from './imagesPuzzle.module.scss';

const NumberDragging = ({ questionData }: { questionData: QuestionData }) => {
  const { dragStart, dragEnd, dragOver, drop, retry, rendered, correctAnswer } = useLogic();

  if (!rendered) return null;
  return (
    <div className={cls.imagesPuzzle}>
      <h2>قم بتجميع الصورة التي أمامك:</h2>
      <div className={cls.images}>
        <img
          src="/images/quizzes/part1.png"
          alt="check-mark"
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
        />
        <img
          src="/images/quizzes/part2.png"
          alt="check-mark"
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
        />
        <img
          src="/images/quizzes/part3.png"
          alt="check-mark"
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
        />
        <img
          src="/images/quizzes/part4.png"
          alt="check-mark"
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
        />
        <img
          src="/images/quizzes/part5.png"
          alt="check-mark"
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
        />
        <img
          src="/images/quizzes/part6.png"
          alt="check-mark"
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
        />
        <img
          src="/images/quizzes/part7.png"
          alt="check-mark"
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
        />
        <img
          src="/images/quizzes/part8.png"
          alt="check-mark"
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
        />
        <img
          src="/images/quizzes/part9.png"
          alt="check-mark"
          draggable={true}
          onDragStart={(e) => dragStart(e)}
          onDragEnd={(e) => dragEnd(e)}
        />
      </div>
      <div className={cls.items}>
        <div className={cls.item} onDragOver={(e) => dragOver(e)} onDrop={(e) => drop(e)}>
        </div>
        <div className={cls.item} onDragOver={(e) => dragOver(e)} onDrop={(e) => drop(e)}>
        </div>
        <div className={cls.item} onDragOver={(e) => dragOver(e)} onDrop={(e) => drop(e)}>
        </div>
        <div className={cls.item} onDragOver={(e) => dragOver(e)} onDrop={(e) => drop(e)}>
        </div>
        <div className={cls.item} onDragOver={(e) => dragOver(e)} onDrop={(e) => drop(e)}>
        </div>
        <div className={cls.item} onDragOver={(e) => dragOver(e)} onDrop={(e) => drop(e)}>
        </div>
        <div className={cls.item} onDragOver={(e) => dragOver(e)} onDrop={(e) => drop(e)}>
        </div>
        <div className={cls.item} onDragOver={(e) => dragOver(e)} onDrop={(e) => drop(e)}>
        </div>
        <div className={cls.item} onDragOver={(e) => dragOver(e)} onDrop={(e) => drop(e)}>
        </div>
      </div>
      <div className="checkAnswer">
        <button onClick={correctAnswer}><i className="fa-regular fa-badge-check"></i> فحص الإجابات</button>
        <button onClick={retry}><i className="fa-regular fa-arrows-rotate"></i> إعادة المحاولة</button>
      </div>
    </div>
  )
}

export default NumberDragging;
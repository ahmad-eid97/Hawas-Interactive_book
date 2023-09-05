"use client";
//== Modules
import Grid from '@mui/material/Grid';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './coloring&Dragging.module.scss';

export default function ColoringAndDragging() {
  const { items, dragStart, dragOver, dragLeave, dragEnd, drop, colors, setChoosedColor, colorLetter, rendered, retry } = useLogic();

  if (!rendered) return null;
  return (
    <>
      <h2 className={styles.heading}>أكمل الكلمة الناقصة وقم بتلوين حرف العين ( ع ) باللون الأحمر:</h2>
      <div className={styles.coloringAndDragging}>
        <div className={styles.firstQuestion}>
          <div className={styles.colors}>
            {colors.map((color, index) => (
              <p onClick={() => setChoosedColor(color)} key={index} style={{ backgroundColor: color }}></p>
            ))}
          </div>
          <p className={styles.word}>
            سر<span onClick={(e) => colorLetter(e)}>عـ<span className={styles.layer}></span></span>ة
          </p>
          <span onClick={(e) => colorLetter(e)}>عـ
            <span className={styles.layer}></span>
          </span>
        </div>
        <div className={styles.secondQuestion}>
          <img src="/images/quizzes/speed.png" alt="first_question" />
          <div className={styles.dragging}>
            <div className={styles.droppables}>
              <div onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, 0, 0)}>
                <p>س</p>
              </div>
              {items.map((_, index) => (
                <div onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, 0, 0)} key={index}></div>
              ))}
              <div onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, 0, 0)}>
                <p>ة</p>
              </div>
            </div>
            <div className={styles.letters}>
              <p>ة</p>
              {items.map((item, index) => (
                <p
                  draggable={true}
                  onDragStart={(e) => dragStart(e)}
                  onDragEnd={(e) => dragEnd(e)}
                  key={index}>
                  {item}
                </p>
              ))}
              <p>س</p>
            </div>
          </div>
        </div>
      </div >
      <div className="checkAnswer">
        <button><i className="fa-regular fa-badge-check"></i> فحص الإجابات</button>
        <button onClick={retry}><i className="fa-regular fa-arrows-rotate"></i> إعادة المحاولة</button>
      </div>
    </>
  )
}

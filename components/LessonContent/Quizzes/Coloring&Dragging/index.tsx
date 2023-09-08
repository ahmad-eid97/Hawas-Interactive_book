"use client";
//== Component Logic
import useLogic from './logic';
//== Types
import { QuestionData } from '../types';
//== Styles
import styles from './coloring&Dragging.module.scss';

export default function ColoringAndDragging({ questionData }: { questionData: QuestionData }) {
  const { items, items2, items3, dragStart, dragOver, dragLeave, dragEnd, drop, colors, setChoosedColor, colorLetter, rendered, retry } = useLogic({ questionData });

  console.log(questionData)

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
          {/* @ts-ignore */}
          {!questionData?.question_audio && !questionData.question_video_link &&
            <>
              <p className={styles.word}>
                سر<span onClick={(e) => colorLetter(e)}>عـ<span className={styles.layer}></span></span>ة
              </p>
              <span onClick={(e) => colorLetter(e)}>عـ
                <span className={styles.layer}></span>
              </span>
            </>
          }
          {/* @ts-ignore */}
          {questionData?.question_audio &&
            <>
              <p className={styles.word}>
                <span onClick={(e) => colorLetter(e)}>ز<span className={styles.layer}></span></span>ملاء
              </p>
              <span onClick={(e) => colorLetter(e)}>ز
                <span className={styles.layer}></span>
              </span>
            </>
          }
          {/* @ts-ignore */}
          {questionData?.question_video_link &&
            <>
              <p className={styles.word}>
                إشارا<span onClick={(e) => colorLetter(e)}>ت<span className={styles.layer}></span></span>
              </p>
              <span onClick={(e) => colorLetter(e)}>ت
                <span className={styles.layer}></span>
              </span>
            </>
          }
        </div>
        <div className={styles.secondQuestion}>
          <img src="/images/quizzes/speed.png" alt="first_question" />
          {/* @ts-ignore */}
          {!questionData?.question_audio && !questionData.question_video_link &&
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
          }
          {/* @ts-ignore */}
          {questionData?.question_audio &&
            <div className={styles.dragging}>
              <div className={styles.droppables}>
                <div onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, 0, 0)}>
                  <p>ز</p>
                </div>
                {items2.map((_, index) => (
                  <div onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, 0, 0)} key={index}></div>
                ))}
                <div onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, 0, 0)}>
                  <p>ء</p>
                </div>
              </div>
              <div className={styles.letters}>
                <p>ز</p>
                {items2.map((item, index) => (
                  <p
                    draggable={true}
                    onDragStart={(e) => dragStart(e)}
                    onDragEnd={(e) => dragEnd(e)}
                    key={index}>
                    {item}
                  </p>
                ))}
                <p>ء</p>
              </div>
            </div>
          }
          {/* @ts-ignore */}
          {questionData?.question_video_link &&
            <div className={styles.dragging}>
              <div className={styles.droppables}>
                <div onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, 0, 0)}>
                  <p>إ</p>
                </div>
                {items3.map((_, index) => (
                  <div onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, 0, 0)} key={index}></div>
                ))}
                <div onDragOver={(e) => dragOver(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => drop(e, 0, 0)}>
                  <p>ت</p>
                </div>
              </div>
              <div className={styles.letters}>
                <p>إ</p>
                {items3.map((item, index) => (
                  <p
                    draggable={true}
                    onDragStart={(e) => dragStart(e)}
                    onDragEnd={(e) => dragEnd(e)}
                    key={index}>
                    {item}
                  </p>
                ))}
                <p>ت</p>
              </div>
            </div>
          }
        </div>
      </div >
      <div className="checkAnswer">
        <button><i className="fa-regular fa-badge-check"></i> فحص الإجابات</button>
        <button onClick={retry}><i className="fa-regular fa-arrows-rotate"></i> إعادة المحاولة</button>
      </div>
    </>
  )
}

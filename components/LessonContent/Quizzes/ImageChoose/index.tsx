//== Components
import { PageLoader } from "@/components";
//== Component Logic
import useLogic from "./logic";
//== Types
import { QuestionData } from "../types";
//== Styles
import styles from './imageChoose.module.scss';

const ImageChoose = ({ questionData }: { questionData: QuestionData }) => {
  const { items, question, choosedAnswer, setChoosedAnswer, isLoading } = useLogic({ questionData });

  if (isLoading) return <PageLoader />;
  return (
    <>
      <h2>{questionData.title}</h2>
      <div className={styles.imageChoose}>
        <div className={styles.choices}>
          {items.map((item: any) => (
            <div className={`${styles.itemWrapper} ${!item?.answer_img ? styles.onlyText : ''}`} key={item.id}>
              <span key={item.id}>
                {item?.answer_img ?
                  <img src={item.answer_img} alt="choice" loading='lazy' onClick={() => setChoosedAnswer(item.id)} className={choosedAnswer === item.id ? styles.choosed : ''} />
                  :
                  <span onClick={() => setChoosedAnswer(item.id)} className={choosedAnswer === item.id ? styles.choosed : ''}>{item.title}</span>
                }
              </span>
              <p>
                {(!item.is_correct && choosedAnswer === item.id) ? <i className={`fa-duotone fa-triangle-exclamation ${styles.wrong}`}></i> : null}
                {(item.is_correct && item.id === choosedAnswer) ? <i className={`fa-duotone fa-circle-check ${styles.correct}`}></i> : null}
              </p>
            </div>
          ))}
        </div>
        <img className={styles.question_img} src={question.question_img} alt="" />
      </div>
    </>
  )
}

export default ImageChoose
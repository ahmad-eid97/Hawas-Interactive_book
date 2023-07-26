//== Components
import { PageLoader } from "@/components";
//== Component Logic
import useLogic from "./logic";
//== Types
import { QuestionData } from "../types";
//== Styles
import styles from './imageChoose.module.scss';

const ImageChoose = ({ questionData }: { questionData: QuestionData }) => {
  const { items, choosedAnswer, setChoosedAnswer, isLoading } = useLogic({ questionData });

  if (isLoading) return <PageLoader />;
  return (
    <div className={styles.imageChoose}>
      <h2>{questionData.title}</h2>
      <div className={styles.choices}>
        {items.map((item: any) => (
          <div key={item.id}>
            <img src={item.answer_img} alt="choice" loading='lazy' key={item.id} onClick={() => setChoosedAnswer(item.id)} className={choosedAnswer === item.id ? styles.choosed : ''} />
            <p>
              {(!item.is_correct && choosedAnswer === item.id) ? <i className={`fa-duotone fa-triangle-exclamation ${styles.wrong}`}></i> : null}
              {(item.is_correct && item.id === choosedAnswer) ? <i className={`fa-duotone fa-circle-check ${styles.correct}`}></i> : null}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageChoose
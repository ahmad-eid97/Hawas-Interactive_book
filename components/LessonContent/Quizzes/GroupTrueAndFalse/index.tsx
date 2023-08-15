//== Hooks
import { Fragment } from 'react';
//== Components
import { PageLoader } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './groupTrueAndFalse.module.scss';

interface GroupTrueAndFalseProps {
  questionData: any
}

const GroupTrueAndFalse: React.FC<GroupTrueAndFalseProps> = ({ questionData }) => {
  const { rendered, items, studentAnswer, chooseAnswer, retry, correctAnswer, showCorrection, isLoading } = useLogic({ questionData });

  if (!rendered) return null;
  if (isLoading) return <PageLoader />
  return (
    <div className={styles.groupTrueAndFalse}>
      <h2>{questionData.title}</h2>
      <ul>
        {items.map((item: any, idx: number) => (
          <li key={idx}>
            {item}
            <span>
              <i className={`fa-solid fa-check ${studentAnswer[idx] === true ? styles.trueChoosed : ''}`} onClick={() => chooseAnswer(idx, true)}></i>
              <i className={`fa-solid fa-xmark ${studentAnswer[idx] === false ? styles.falseChoosed : ''}`} onClick={() => chooseAnswer(idx, false)}></i>
            </span>
          </li>
        ))}
      </ul>
      {showCorrection &&
        <div className={`correctData ${showCorrection.correct ? 'correct' : 'wrong'}`}>
          {showCorrection.data.map((one, idx) => (
            <Fragment key={idx}>
              {idx === 0 ?
                <p><i className="fa-solid fa-lightbulb-on"></i> {one}</p>
                :
                <p key={idx}>{one}</p>
              }
            </Fragment>
          ))}
        </div>
      }
      <div className="checkAnswer">
        <button onClick={correctAnswer}><i className="fa-regular fa-badge-check"></i> فحص الإجابات</button>
        <button onClick={retry}><i className="fa-regular fa-arrows-rotate"></i> إعادة المحاولة</button>
      </div>
    </div>
  );
}

export default GroupTrueAndFalse;
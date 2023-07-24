//== Component Logic
import useLogic from './logic';
//== Components
import { PageLoader } from '@/components';
//== Types
import { QuestionData } from '../types';
//== Styles
import styles from './imageColoring.module.scss';

const ImageColoring = ({ questionData }: { questionData: QuestionData }) => {
  const { colors, changeColor, fillElement, isLoading } = useLogic({ questionData });

  if (isLoading) return <PageLoader />
  return (
    <div className={styles.imageColoring}>
      <h2>{questionData.title}</h2>
      <div className={styles.colors}>
        {colors.map((color, idx) => (
          <span key={idx} style={{ backgroundColor: color }} onClick={() => changeColor(color)}></span>
        ))}
      </div>
      <div className={styles.wrapper}>
        <div className={styles.coloredImage}>
          <svg width="250" height="300" viewBox="-100 -100 200 200">
            <g stroke="black" strokeWidth="2">
              <circle cx="0" cy="-45" r="8" fill="#4F6D7A" />
              <circle cx="0" cy="50" r="15" fill="#F79257" />
              <path
                d="M -50 40 L -50 50 L 50 50 L 50 40 Q 40 40 40 10 C 40 -60 -40 -60 -40 10 Q -40 40 -50 40"
                fill="#FDEA96"
              />
            </g>
          </svg>
        </div>
        <div className={styles.targetImage}>
          <svg width="250" height="300" viewBox="-100 -100 200 200">
            <g stroke="black" strokeWidth="2">
              <circle cx="0" cy="-45" r="8" fill="#fff" onClick={fillElement} />
              <circle cx="0" cy="50" r="15" fill="#fff" onClick={fillElement} />
              <path
                d="M -50 40 L -50 50 L 50 50 L 50 40 Q 40 40 40 10 C 40 -60 -40 -60 -40 10 Q -40 40 -50 40"
                fill="#fff"
                onClick={fillElement}
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ImageColoring;
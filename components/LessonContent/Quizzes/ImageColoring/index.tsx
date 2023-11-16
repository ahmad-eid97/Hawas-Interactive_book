//== Component Logic
import useLogic from './logic';
//== Components
import { PageLoader } from '@/components';
//== Utils
// import renderSVG from '@/utils/renderSVG';
//== Styles
import styles from './imageColoring.module.scss';

const ImageColoring = ({ questionData }: { questionData: any }) => {
  const { changeColor, fillElement, isLoading, questionDetails, whiteImage } = useLogic({ questionData });

  if (isLoading) return <PageLoader />
  return (
    <div className={styles.imageColoring}>
      <h2>{questionData.title}</h2>
      <div className={styles.colors}>
        {questionDetails.colors.split(',').map((color: any, idx: number) => (
          <span key={idx} style={{ backgroundColor: color }} onClick={() => changeColor(color)}></span>
        ))}
      </div>
      <div className={styles.wrapper}>
        <div className={styles.coloredImage}>
          <div dangerouslySetInnerHTML={{ __html: questionDetails?.colored_image }}></div>
        </div>
        <div className={styles.targetImage} onClick={fillElement}>
          <div dangerouslySetInnerHTML={{ __html: whiteImage }}></div>
        </div>
      </div>
    </div>
  )
}

export default ImageColoring;
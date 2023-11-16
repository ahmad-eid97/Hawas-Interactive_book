"use client";
//== Modules
import { ReactSketchCanvas } from 'react-sketch-canvas';
//== Components
import { PageLoader } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Types
import { QuestionData } from '../types';
//== Styles
import styles from './drawing.module.scss';

const Drawing = ({ questionData }: { questionData: QuestionData }) => {
  const { colors, canvasStyles, choosedColor, changeCanvasColor, drawingCanvas, undoDrawing, resetCanvas, isLoading, questionDetails } = useLogic({ questionData });

  if (isLoading) return <PageLoader />
  return (
    <div className={styles.drawing}>
      <h2>{questionData.title}</h2>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src={questionDetails?.questionImage} alt="drwawing_image" loading='lazy' />
        </div>
        <div className={styles.drawingArea}>
          <ReactSketchCanvas
            style={canvasStyles}
            strokeWidth={4}
            strokeColor={choosedColor}
            ref={drawingCanvas}
          />
          <div className={styles.controls}>
            <div className={styles.actions}>
              <button onClick={undoDrawing}><i className="fa-duotone fa-rotate-left"></i></button>
              <button onClick={resetCanvas}><i className="fa-duotone fa-trash"></i></button>
            </div>
            <div className={styles.colors}>
              {colors.map((color, idx) => (
                <span key={idx} style={{ backgroundColor: color }} onClick={() => changeCanvasColor(color)}></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drawing
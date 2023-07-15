"use client";
//== Modules
import { ReactSketchCanvas } from 'react-sketch-canvas';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './drawing.module.scss';

const Drawing = () => {
  const { colors, canvasStyles, choosedColor, changeCanvasColor, drawingCanvas, undoDrawing, resetCanvas } = useLogic();

  return (
    <div className={styles.drawing}>
      <h2>إرسم الشكل التالي في المنطقة الفارغة</h2>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src="/images/quizzes/draw.png" alt="drwawing_image" loading='lazy' />
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
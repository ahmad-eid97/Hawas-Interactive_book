//== Styles
import styles from './pageLoader.module.scss';

const PageLoader = () => {
  return (
    <div className={styles.pageLoader}>
      <div className={styles.cube}>
        <div className={`${styles.cube__face} ${styles["cube__face--front"]}`}>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
        </div>

        <div className={`${styles.cube__face} ${styles["cube__face--back"]}`}>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
        </div>

        <div className={`${styles.cube__face} ${styles["cube__face--right"]}`}>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
        </div>

        <div className={`${styles.cube__face} ${styles["cube__face--left"]}`}>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
        </div>

        <div className={`${styles.cube__face} ${styles["cube__face--top"]}`}>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
        </div>

        <div className={`${styles.cube__face} ${styles["cube__face--bottom"]}`}>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
          <span className={styles.faceBox}></span>
        </div>
      </div>
      <h4>جاري التحميل...</h4>
    </div>
  )
}

export default PageLoader
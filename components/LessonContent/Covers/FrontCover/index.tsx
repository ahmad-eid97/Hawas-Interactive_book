//== Styles
import styles from './frontCover.module.scss';

const FrontCover = ({ cover, lessonNumber, lessonTitle }: { cover: string, lessonNumber: number, lessonTitle: string }) => {
  console.log(lessonNumber)
  return (
    <div className={styles.frontCover}>
      <img src={`/images/lesson/${lessonNumber}.png`} alt="logo_file" />
      <button>{lessonTitle}</button>
    </div>
  )
}

export default FrontCover;
//== Styles
import styles from './frontCover.module.scss';

const FrontCover = ({ cover, lessonTitle }: { cover: string, lessonTitle: string }) => {
  return (
    <div className={styles.frontCover}>
      <img src={cover} alt="logo_file" />
      <button>{lessonTitle}</button>
    </div>
  )
}

export default FrontCover;
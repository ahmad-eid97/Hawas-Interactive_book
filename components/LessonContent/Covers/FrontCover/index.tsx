//== Styles
import styles from './frontCover.module.scss';

const FrontCover = ({ cover, lessonNumber }: { cover: string, lessonNumber: number }) => {
  console.log(lessonNumber)
  return (
    <div className={styles.frontCover}>
      <img src={lessonNumber !== 1 ? cover : "/images/lesson/lessonCover.jpeg"} alt="logo_file" />
      <button>إفتح الفصل</button>
    </div>
  )
}

export default FrontCover;
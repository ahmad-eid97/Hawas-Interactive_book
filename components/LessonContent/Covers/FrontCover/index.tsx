//== Styles
import styles from './frontCover.module.scss';

const FrontCover = ({ cover }: { cover: string }) => {
  return (
    <div className={styles.frontCover}>
      <img src={cover} alt="logo_file" />
      <button>إفتح الفصل</button>
    </div>
  )
}

export default FrontCover;
//== Styles
import styles from './imageSection.module.scss';

interface CProps {
  data: {
    photo_file: string;
  }
}

const ImageSection = ({ data }: CProps) => {
  return (
    <div className={styles.imageSction}>
      <img src={data.photo_file} alt="question_image" />
    </div>
  )
}

export default ImageSection
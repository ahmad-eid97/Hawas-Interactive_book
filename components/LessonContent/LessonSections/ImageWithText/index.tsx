//== Styles
import styles from './imageWithText.module.scss';

const ImageWithText = ({ data }: { data: any }) => {

  return (
    <div className={`${styles.imageWithText} ${styles[data.image_direction]}`}>
      <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
      <img src={data.photo_file} alt="image" />
    </div>
  )
}

export default ImageWithText;
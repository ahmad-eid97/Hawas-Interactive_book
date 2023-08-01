//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './imageSection.module.scss';

interface CProps {
  data: {
    photo_file: string;
  }
}

const ImageSection = ({ data }: CProps) => {
  const { rendered } = useLogic({ data });

  if (!rendered) return null;
  return (
    <div className={styles.imageSction}>
      <img src={data.photo_file ? data.photo_file : ''} alt="question_image" loading='lazy' />
    </div>
  )
}

export default ImageSection
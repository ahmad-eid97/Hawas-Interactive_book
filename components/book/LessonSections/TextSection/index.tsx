//== Styles
import styles from './textSection.module.scss';

interface CProps {
  data: {
    title: string;
    description: string
  }
}

let interval: any;

const startHoverHandler = () => {
  let timer = 0;
  interval = setInterval(() => {
    timer += 1
  }, 1000)
}

const endHoverHandler = async () => {
  clearInterval(interval)
}

const TextSection = ({ data }: CProps) => {
  return (
    <div className={styles.textSection}>
      <h3><i className="fa-duotone fa-star"></i> {data.title}:</h3>
      <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
      {/* <mark className={`${styles.text} ${data.description && data.description.length > 500 && data.description.length < 1000 && styles.medium} ${data.description && data.description.length > 1000 && styles.long}`} onMouseEnter={startHoverHandler} onMouseLeave={endHoverHandler}>{data.description}</mark> */}
    </div>
  )
}

export default TextSection
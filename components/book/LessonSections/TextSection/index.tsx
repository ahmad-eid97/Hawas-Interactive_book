//== Styles
import styles from './textSection.module.scss';

interface CProps {
  data: any
}

const TextSection = ({ data }: CProps) => {
  return (
    <div className={styles.textSection}>
      TextSection
    </div>
  )
}

export default TextSection
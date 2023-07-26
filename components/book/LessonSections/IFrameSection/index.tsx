//== Styles
import styles from './iFrameSection.module.scss';

interface CProps {
  data: any;
}

const IFrameSection = ({ data }: CProps) => {
  console.log(data)
  return (
    <div className={styles.iFrameSection}>
      <iframe src={data.iframe} frameBorder="0"></iframe>
    </div>
  )
}

export default IFrameSection;
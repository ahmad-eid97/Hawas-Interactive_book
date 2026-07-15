//== Modules
import Container from '@mui/material/Container';
//== Styles
import styles from './pageHeader.module.scss';

interface PageHeaderProps {
  bgImg?: string,
  padding?: string,
  bgColor?: string,
  color?: string,
  title: string,
  src?: string,
}

const PageHeader: React.FC<PageHeaderProps> = ({ bgImg, padding, bgColor, color, title, src }: PageHeaderProps) => {
  return (
    <header className={styles.header}>
      <img src="/images/shapes/sparkle.svg" alt="" className={`deco-shape anim-pop ${styles.decoSparkle}`} />
      <img src="/images/shapes/sparkle-white.svg" alt="" className={`deco-shape anim-pop anim-delay-2 ${styles.decoSparkleSmall}`} />
      <img src="/images/shapes/ring.svg" alt="" className={`deco-shape anim-float-slow ${styles.decoRing}`} />
      <img src="/images/shapes/cloud.svg" alt="" className={`deco-shape anim-drift anim-delay-1 ${styles.decoCloud}`} />
      <img src="/images/shapes/paper-plane.svg" alt="" className={`deco-shape anim-float ${styles.decoPlane}`} />
      <div className={styles.container}>
        <h1 style={{ color: color }}>{title}</h1>
      </div>
      {src ? <img src={src} alt="..." className={styles.absoluteImg} /> : null}
      <div className={`${styles.divider}`} />
    </header>
  );
}

export default PageHeader;
"use client";
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
    <header className={styles.header} style={{ backgroundImage: `url(` + bgImg + `)`, padding: padding, backgroundColor: bgColor }}>
      <Container maxWidth="xl" className={styles.container}>
        <h1 style={{ color: color }}>{title}</h1>
        {/* <Breadcrumb color={color} page={page} /> */}
      </Container>
      {src ? <img src={src} alt="..." className={styles.absoluteImg} /> : null}
    </header>
  );
}

export default PageHeader;
"use client";
//== Modules
import Container from '@mui/material/Container';
//= Api
import { getAboutSection } from '@/API/pages';
//== Styles
import styles from './aboutDetails.module.scss';

interface AboutDetailsProps {
  data: Awaited<ReturnType<typeof getAboutSection>> | null;
}

const AboutDetails: React.FC<AboutDetailsProps> = ({ data }) => {
  return (
    <Container maxWidth="xl" className={styles.about}>
      <div className={styles.intro}>
        <h1>{data?.title as string}</h1>
        <p className={styles.big}>{data?.sub_title as string}</p>
        <p className="w-xl-80 mx-auto line-height-md">
          {data?.description as string}
        </p>
      </div>
    </Container>
  );
}

export default AboutDetails;
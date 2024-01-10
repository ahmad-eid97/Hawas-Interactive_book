"use client";
//== Modules
import Container from '@mui/material/Container';
//= Types
import { PrivacyData } from '@/types';
//== Styles
import styles from './terms.module.scss';

interface PrivacyProps {
  data: PrivacyData | null
}

const Privacy: React.FC<PrivacyProps> = ({ data }) => {
  return (
    <>
      <Container maxWidth="xl" className={styles.policy}>
        <div className={styles.heading}>
          <h2>
            سياسة الخصوصية
          </h2>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: data?.description || '' }}></div>
        </div>
      </Container>
    </>
  );
}

export default Privacy;
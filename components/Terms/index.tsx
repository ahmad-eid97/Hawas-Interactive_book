"use client";
//== Modules
import Container from '@mui/material/Container';
//= Types
import { TermsData } from '@/types';
//== Styles
import styles from './terms.module.scss';

interface TermsProps {
  data: TermsData | null
}

const Terms: React.FC<TermsProps> = ({ data }) => {
  return (
    <>
      <Container maxWidth="xl" className={styles.policy}>
        <div className={styles.heading}>
          <h2>
            الشروط و الاحكام
          </h2>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: data?.description || '' }}>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Terms;
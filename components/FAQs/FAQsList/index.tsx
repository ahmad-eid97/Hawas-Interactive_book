"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//= Types
import { FAQItem } from '@/types';
//== Styles
import styles from './faqsList.module.scss';

interface FAQsListProps {
  data: FAQItem[];
}

const FAQsList: React.FC<FAQsListProps> = ({ data }) => {
  return (
    <>
      <Container maxWidth="xl" className={styles.faqs}>
        <div className={styles.heading}>
          <h2>فيما يلي معظم الأسئلة والأجوبة لحواس</h2>
        </div>
        <Grid container spacing={3}>
          {
            data.length > 0 ?
              data.map(faq => (
                <Grid item sm={6} xs={12} key={faq.id}>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <h5>{faq.question || ''}</h5>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p>{faq.answer || ''} </p>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              ))
              :
              <Grid item xs={12}><p style={{ textAlign: 'center', padding: '50px 0' }}>لا توجد أسئلة شائعة</p></Grid>
          }
        </Grid>
      </Container>
    </>
  );
}

export default FAQsList;
"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Service from './Item';
//== Component Logic
import useLogic from './logic';
//= Types
import { IService } from '@/types';
//== Styles
import styles from './servicesList.module.scss';

interface ServicesListProps {
  data: IService[];
}

const ServicesList: React.FC<ServicesListProps> = ({ data }) => {
  const { router } = useLogic();

  return (
    <>
      <Container maxWidth="xl" className={styles.services}>
        <div className={styles.heading}>
          <h2>
            نقدّم مجموعة متنوعة من الخدمات
          </h2>
          <p>
            حواس يوفر نظرة شاملة عن الخدمات المقدمة التي تهدف إلى دعم صحة وسلامة الأفراد. يتضمن هذا القسم مجموعة متنوعة من الخدمات المبتكرة والمتخصصة المصممة لتعزيز الوعي الصحي، وتعزيز الأساليب الآمنة لتحقيق أسلوب حياة صحي وآمن للمجتمع.
          </p>
        </div>
        <Grid container spacing={3}>
          {
            data.length > 0 &&
            data.map((item, index) => (
              <Grid item md={4} sm={6} xs={12} key={index}>
                <Service item={item} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}

export default ServicesList;
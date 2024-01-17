"use client";
//== Utils
import Link from 'next/link';
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//= Types
import type { ICategory } from '@/types';
//== Styles
import styles from './mainSections.module.scss';

interface MainSectionsProps {
  data: ICategory[];
}

const MainSections: React.FC<MainSectionsProps> = ({ data }) => {

  const links = {
    'قناة الحواس': '/channel',
    'ورشات الحواس': '/workshops',
    'محاضرات الحواس': '/lectures',
    'أفلام الحواس': '/films',
    'مسرحيات الحواس': '/plays',
    'مكتبة حواس': '/library'
  }

  return (<div className={styles.infoBox}>
    <Container maxWidth="xl">
      <div className={styles.header}>
        <h1>الاقسام الرئيسية</h1>
        <p>أقسام حواس الرئيسية لتجد ما يناسبك من المحتوي حسب المرحلة العلمية والمجال العلمي.</p>
      </div>
      <Grid container spacing={4} justifyContent="center">
        {
          data.length > 0 ?
            data.map(category => (
              <Grid item xs={12} sm={6} md={4} xl={2} lg={3} key={category.id} className={styles.cardContainer}>
                {/* @ts-ignore */}
                <Link href={links[category.name]} className={styles.card}>
                  <div className={styles.content}>
                    <div className={styles.iconContainer}>
                      <div className={styles.icon}>
                        <img src={category.image} alt="category image" />
                      </div>
                    </div>
                    <div className={styles.footer}>
                      <h5>{category.name}</h5>
                    </div>
                  </div>
                </Link>
              </Grid>
            ))
            :
            <p>لا توجد فئات</p>
        }
      </Grid>
    </Container>
  </div >
  );
}

export default MainSections;
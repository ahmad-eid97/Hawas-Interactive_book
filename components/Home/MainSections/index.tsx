"use client";
//== Utils
import Link from 'next/link';
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Tv2, Wrench, Mic2, Film, Drama, Library, type LucideProps } from 'lucide-react';
//= Types
import type { ICategory } from '@/types';
//== Styles
import styles from './mainSections.module.scss';

interface MainSectionsProps {
  data: ICategory[];
}

type CategoryName = 'قناة الحواس' | 'ورشات الحواس' | 'محاضرات الحواس' | 'أفلام الحواس' | 'مسرحيات الحواس' | 'مكتبة حواس';

const links: Record<CategoryName, string> = {
  'قناة الحواس': '/channel',
  'ورشات الحواس': '/workshops',
  'محاضرات الحواس': '/lectures',
  'أفلام الحواس': '/films',
  'مسرحيات الحواس': '/plays',
  'مكتبة حواس': '/library',
};

const icons: Record<CategoryName, React.FC<LucideProps>> = {
  'قناة الحواس': Tv2,
  'ورشات الحواس': Wrench,
  'محاضرات الحواس': Mic2,
  'أفلام الحواس': Film,
  'مسرحيات الحواس': Drama,
  'مكتبة حواس': Library,
};

const MainSections: React.FC<MainSectionsProps> = ({ data }) => {
  return (
    <div className={styles.infoBox}>
      <img src="/images/shapes/dots-grid.svg" alt="" className={`deco-shape ${styles.decoDotsRight}`} />
      <img src="/images/shapes/dots-grid.svg" alt="" className={`deco-shape ${styles.decoDotsLeft}`} />
      <img src="/images/shapes/rocket.svg" alt="" className={`deco-shape anim-float ${styles.decoRocket}`} />
      <img src="/images/shapes/rainbow.svg" alt="" className={`deco-shape anim-float-slow anim-delay-1 ${styles.decoRainbow}`} />
      <img src="/images/shapes/sparkle.svg" alt="" className={`deco-shape anim-pop anim-delay-2 ${styles.decoSparkle}`} />
      <Container maxWidth="xl">
        <div className={styles.header}>
          <h1>الاقسام الرئيسية</h1>
          <p>أقسام حواس الرئيسية لتجد ما يناسبك من المحتوي حسب المرحلة العلمية والمجال العلمي.</p>
        </div>
        <Grid container spacing={5} justifyContent="center">
          {
            data.length > 0 ?
              data.map(category => {
                const href = links[category.name as CategoryName] ?? '/';
                const IconComponent = icons[category.name as CategoryName];
                return (
                  <Grid item xs={12} sm={6} md={4} xl={2} lg={3} key={category.id} className={styles.cardContainer}>
                    <Link href={href} className={styles.card}>
                      <div className={styles.content}>
                        <div className={styles.iconContainer}>
                          <div className={styles.icon}>
                            {IconComponent && <IconComponent size={80} strokeWidth={1.2} color="#fff" />}
                          </div>
                        </div>
                        <div className={styles.footer}>
                          <h5>{category.name}</h5>
                        </div>
                      </div>
                    </Link>
                  </Grid>
                );
              })
              :
              <p>لا توجد فئات</p>
          }
        </Grid>
      </Container>
    </div>
  );
}

export default MainSections;

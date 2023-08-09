//== Utils
import Link from 'next/link';
//== Modules
import Grid from '@mui/material/Grid';
//== Styles
import styles from './course.module.scss';

interface CourseProps {
}

const Course: React.FC<CourseProps> = () => {
  return (
    <div className={`${styles.card}`}>
      <div className={styles.cardImgContainer}>
        <img src="/images/home/product-19.jpg" alt="product_title" />
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.details}>
          <Link href="#"><h4>تصوير الأزياء من المحترفين</h4></Link>
          <Grid container alignItems="flex-end" >
            <Grid item xs>
              <ul className={styles.nav}>
                <li className={styles.navItem}>
                  <div className={styles.icon}>
                    <i className="fa-regular fa-book"></i>
                  </div>
                  <div className={styles.text}>5 فصول</div>
                </li>
              </ul>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Course;
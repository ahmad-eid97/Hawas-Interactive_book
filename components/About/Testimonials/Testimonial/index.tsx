//== Modules
import Grid from "@mui/material/Grid";
//== Types
import { Testimonial as ITestimonial } from '@/types';
//== Styles
import styles from './testimonials.module.scss';

interface TestimonialProps {
  data: ITestimonial;
}

const Testimonial: React.FC<TestimonialProps> = ({ data }) => {
  return (
    <div className={styles.card}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} className={styles.avatar}>
          <img src={data.image} alt={data.description} />
        </Grid>
        <Grid item xs={12} className={styles.name}>
          <h5 className="mb-0">{data.title}</h5>
          <p>{data.job}</p>
        </Grid>
      </Grid>

      <div className={styles.cardFooter}>
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
      </div>
    </div>
  );
}

export default Testimonial;
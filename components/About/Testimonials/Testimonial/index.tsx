//== Modules
import Grid from "@mui/material/Grid";
//== Styles
import styles from './testimonials.module.scss';

interface TestimonialProps { }

const Testimonial: React.FC<TestimonialProps> = () => {
  return (
    <div className={styles.card}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} className={styles.avatar}>
          <img src="/images/about/avatar-1.jpg" />
        </Grid>
        <Grid item xs={12} className={styles.name}>
          <h5 className="mb-0">Albert Cole</h5>
          <p>Designer</p>
        </Grid>
      </Grid>

      <div className={styles.cardFooter}>
        <p>“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “</p>
      </div>
    </div>
  );
}

export default Testimonial;
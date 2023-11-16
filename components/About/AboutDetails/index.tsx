"use client";
//== Modules
import Container from '@mui/material/Container';
//== Styles
import styles from './aboutDetails.module.scss';

interface AboutDetailsProps { }

const AboutDetails: React.FC<AboutDetailsProps> = () => {
  return (
    <Container maxWidth="xl" className={styles.about}>
      <div className={styles.intro}>
        <h1>Our Story</h1>
        <p className={styles.big}>Discover your perfect program in our courses.</p>

        <p className="w-xl-80 mx-auto line-height-md">
          Convallis vitae, nunc ut venenatis, lectus. Tellus nunc orci dolor nec facilisis et lacus, eu aliquet. Amet imperdiet ac venenatis, lacus. Tortor interdum quisque et, eu etiam ac. Hac lectus at posuere est consequat euismod tellus ut. Dolor ut diam sed dignissim eget gravida. Lectus mattis hac vitae, sed quis vel ornare sed. Ut vel cursus sed id eu. Laoreet bibendum eget dui sapien bibendum sapien.
        </p>
      </div>
    </Container>
  );
}

export default AboutDetails;
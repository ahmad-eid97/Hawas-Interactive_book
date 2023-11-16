"use client";
//== Utils
import Link from 'next/link';
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Lightbox from "yet-another-react-lightbox";
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './serviceDetails.module.scss';

interface ServiceProps { }

const Service: React.FC<ServiceProps> = () => {
  const { items, open, imageIndex, setOpen, openImage } = useLogic();

  return (
    <>
      <Container maxWidth="xl" className={styles.service}>
        <h2>Service Name</h2>
        <Grid container spacing={4}>
          <Grid item lg={8} xs={12}>
            <img src="/images/home/photo-23.jpg" alt="Images" />
            <p>
              QA establishes and maintains set requirements for developing or manufacturing reliable products. A quality assurance system is meant to increase customer confidence and a company's credibility, while also improving work processes and efficiency, and it enables a company to better compete with others.
              The ISO (International Organization for Standardization) is a driving force behind QA practices and mapping the processes used to implement QA. QA is often paired with the ISO 9000 international standard. Many companies use ISO 9000 to ensure that their quality assurance system is in place and effective.
              The concept of QA as a formalized practice started in the manufacturing industry, and it has since spread to most industries, including software development
            </p>
          </Grid>
          <Grid item lg={4} xs={12}>
            <div className={styles.widget}>
              <h3 className={styles.title}>Our Main Services</h3>
              <div className={styles.services}>
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-dot"></i>
                    <Link href="/service" className="">Service Name</Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-dot"></i>
                    <Link href="/service" className="">Service Name</Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-dot"></i>
                    <Link href="/service" className="">Service Name</Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-dot"></i>
                    <Link href="/service" className="">Service Name</Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-dot"></i>
                    <Link href="/service" className="">Service Name</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.widget}>
              <h3 className={styles.title}>Gallery</h3>
              <ul className={styles.gallery}>
                {items.map((item, idx) => (
                  <li className={styles.gallery}>
                    <div onClick={() => openImage(idx)}>
                      <i className="fa-solid fa-eye"></i>
                      <img src={item.src} alt="Images" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Lightbox
        index={imageIndex}
        open={open}
        close={() => setOpen(false)}
        slides={[...items]}
      />
    </>
  );
}

export default Service;
"use client";
//== Utils
import Link from 'next/link';
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Lightbox from "yet-another-react-lightbox";
//== Component Logic
import useLogic from './logic';
//= Types
import { IService } from '@/types';
//== Styles
import styles from './serviceDetails.module.scss';

interface ServiceProps {
  data: IService | null;
}

const Service: React.FC<ServiceProps> = ({ data }) => {
  const { items, open, imageIndex, setOpen, openImage } = useLogic();

  return (
    <>
      <Container maxWidth="xl" className={styles.service}>
        <h2>{data?.title || ''}</h2>
        <Grid container spacing={4}>
          <Grid item lg={8} xs={12}>
            <img src={data?.image || ''} alt="Images" />
            <p dangerouslySetInnerHTML={{ __html: data?.description || '' }} />
          </Grid>
          <Grid item lg={4} xs={12}>
            <div className={styles.widget}>
              <h3 className={styles.title}>خدمات أخرى</h3>
              <div className={styles.services}>
                <ul>
                  {
                    data?.features.length ?
                      data.features.map((feature) => (
                        <li key={feature.id}>
                          <i className="fa-solid fa-circle-dot"></i>
                          <Link href={`/service/${feature.id}`} className="">{feature.title}</Link>
                        </li>
                      ))
                      :
                      <li>
                        <p>لا توجد خدمات أخرى</p>
                      </li>
                  }
                </ul>
              </div>
            </div>
            <div className={styles.widget}>
              <h3 className={styles.title}>المعرض</h3>
              <ul className={styles.gallery}>
                {
                  items.length ?
                    items.map((item, idx) => (
                      <li className={styles.gallery} key={item.id}>
                        <div onClick={() => openImage(idx)}>
                          <i className="fa-solid fa-eye"></i>
                          <img src={item.src} alt="Images" />
                        </div>
                      </li>
                    ))
                    :
                    <p>لا توجد صور في المعرض</p>
                }
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
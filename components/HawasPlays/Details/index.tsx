"use client";
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//= Types
import type { IPlay } from "@/types";
//== Styles
import styles from './details.module.scss';

interface PlayDetailsProps {
  data: IPlay | null;
}

const PlayDetails: React.FC<PlayDetailsProps> = ({ data }) => {
  return (
    <>
      <section className={styles.details}>
        <Container maxWidth="xl">
          <Grid container className={styles.header} justifyContent="center" alignItems="start" spacing={5}>
            <Grid item xs={12} className={styles.body}>
              <img src={data?.image} alt="" />
              <div className={styles.content}>
                {/* <div className={styles.meta}>
                  <ul>
                    <li><i className="fa-regular fa-clock"></i> {format(new Date(), 'dd MMMM yyy', { locale: ar })}</li>
                  </ul>
                </div> */}
                <h2 className={styles.title}>{data?.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: data?.description || '' }} />
                <h4>فيديو المسرحية</h4>
                <iframe src={data?.video} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}

export default PlayDetails;
"use client";
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
//== Utils
import Link from 'next/link';
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Lightbox from "yet-another-react-lightbox";
//== Component Logic
import useLogic from './logic';
//= Types
import { IBlogDetails } from '@/types';
//== Styles
import "yet-another-react-lightbox/styles.css";
import styles from './blogDetails.module.scss';

interface BlogDetailsProps {
  data: IBlogDetails | null;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ data }) => {
  const { items, open, imageIndex, setOpen, openImage } = useLogic({ data });

  return (
    <>
      <section className={styles.blogDetails}>
        <Container maxWidth="xl">
          <Grid container className={styles.header} justifyContent="center" alignItems="start" spacing={5}>
            <Grid item lg={12} md={12} sm={12} xs={12} className={styles.blogBody}>
              <img src={data?.image || ''} alt="" />
              <div className={styles.content}>
                <div className={styles.meta}>
                  <ul>
                    <li>
                      <a href="#" className={styles.postAdmin}>
                        كتابة {data?.username || ''}
                      </a>
                    </li>
                    <li>{format(new Date(data?.publish_date || ''), 'dd MMMM yyy', { locale: ar })}</li>
                  </ul>
                </div>
                <h2 className={styles.blogTitle}>{data?.title || ''}</h2>
                <div dangerouslySetInnerHTML={{ __html: data?.description || '' }}></div>
                <div>
                  <div className={styles.shareLinks}>
                    <span>مشاركة</span>
                    {
                      typeof window !== 'undefined' &&
                      <ul>
                        <li><a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(window.location.href)}`} target='_blank'><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href={`https://twitter.com/intent/tweet?text=${data?.title} ${encodeURI(window.location.href)}`} target='_blank'><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURI(window.location.href)}`} target='_blank'><i className="fa-brands fa-linkedin"></i></a></li>
                      </ul>
                    }
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Lightbox
        index={imageIndex}
        open={open}
        close={() => setOpen(false)}
        slides={[...items]}
      />
    </>
  );
}

export default BlogDetails;
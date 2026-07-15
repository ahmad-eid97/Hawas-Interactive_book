"use client";
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
//== Utils
import Link from 'next/link';
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Lightbox from "yet-another-react-lightbox";
//== Components
import { Icon } from '@iconify/react';
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
            <Grid item lg={9} md={10} sm={11} xs={12} className={styles.blogBody}>
              <img src={data?.image || ''} alt="" />
              <div className={styles.content}>
                <div className={styles.data}>
                  <div className={styles.user}>
                    <Icon icon="solar:user-linear" />
                    <span>{data?.username || ''}</span>
                  </div>
                  <div className={styles.date}>
                    <Icon icon="fontisto:date" />
                    {format(new Date(data?.publish_date || ''), 'dd MMMM yyy', { locale: ar })}
                  </div>
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
            <Grid item lg={3} md={10} sm={11} xs={12}>
              <aside>
                <div className={`${styles.widget} ${styles.list}`}>
                  <h3 className={styles.title}>الفئات</h3>
                  <ul>
                    <li><Icon icon="ph:dot-duotone" /> <Link href="/blogs">{data?.category.name}</Link></li>
                  </ul>
                </div>
                <div className={styles.widget}>
                  <h3 className={styles.title}>أخر المقالات</h3>
                  <ul>
                    {
                      data?.features && data?.features.length > 0 ?
                        data?.features.map(feature => (
                          <li key={feature.id || ''}>
                            <div className={styles.item}>
                              <Link href={`/blogs/${feature.id || '1'}`} className={styles.img}>
                                <img src={feature.image || ''} alt="image_not_found" />
                              </Link>
                              <div className={styles.content}>
                                <h4 className={styles.postTitle}>
                                  <Link href={`/blogs/${feature.id || '1'}`}>
                                    {feature.title || ''}
                                  </Link>
                                </h4>
                                <span className={styles.date}>{format(new Date(feature?.publish_date || ''), 'dd MMMM yyy', { locale: ar })}</span>
                              </div>
                            </div>
                          </li>
                        ))
                        :
                        <li>
                          <p>لا توجد مقالات</p>
                        </li>
                    }
                  </ul>
                </div>
                <div className={styles.widget}>
                  <h3 className={styles.title}>المعرض</h3>
                  <ul className={styles.galleryContainer}>
                    {items.length > 0 ?
                      items.map((item, idx) => (
                        <li className={styles.gallery} key={idx}>
                          <div onClick={() => openImage(idx)}>
                            <i className="fa-solid fa-eye"></i>
                            <img src={item.src} alt="Images" />
                          </div>
                        </li>
                      ))
                      :
                      <li>
                        <p>لا توجد صور في المعرض</p>
                      </li>
                    }
                  </ul>
                </div>
              </aside>
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
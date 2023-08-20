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
import "yet-another-react-lightbox/styles.css";
import styles from './blogDetails.module.scss';

interface BlogDetailsProps { }

const BlogDetails: React.FC<BlogDetailsProps> = () => {
  const { items, open, imageIndex, setOpen, openImage } = useLogic();

  return (
    <>
      <section className={styles.blogDetails}>
        <Container maxWidth="xl">
          <Grid container className={styles.header} justifyContent="center" alignItems="start" spacing={5}>
            <Grid item lg={8} md={9} sm={11} xs={12} className={styles.blogBody}>
              <img src="/images/home/photo-23.jpg" alt="" />
              <div className={styles.content}>
                <div className={styles.meta}>
                  <ul>
                    <li>
                      <a href="#" className={styles.postAdmin}>
                        <span>
                          <img src="/images/home/photo-23.jpg" alt="" />
                        </span>
                        Nicolas Crank
                      </a>
                    </li>
                    <li>22 May 2020</li>
                    <li>5 minute read</li>
                  </ul>
                </div>
                <h2 className={styles.blogTitle}>You only live once, but if you do it right, once is enough.</h2>

                <p>
                  Most improve you Digital Marketing selling Campaign this is is important for our ability to learn from mistakes, but it alsogive rise to self-criticism, because it is part of the threat-protection system in theme other wordsImprove you Digital Marketing selling.
                </p>
                <h3>Make your Business more faster</h3>

                <p>
                  Improve you Digital Marketing selling inventore veritatis is important for our ability to learn from mistakes, but it alsogive rise to self-criticism, because it is part of the threat-protection system in the other wordsImprove you Digital Marketing selling. Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vem, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <blockquote>
                  <p>
                    “Excepteur sint occaecat cupidatat non proident, sunt culpa quite deserunt enal mollit anim id estambul ilaborum. Sed ultra practice omnis iste natus none of error unexpected site.”
                  </p>
                </blockquote>
                <h3>Make your Business more faster</h3>

                <p>
                  Improve you Digital Marketing selling inventore veritatis is important for our ability to learn from mistakes, but it alsogive rise to self-criticism, because it is part of the threat-protection system in the other wordsImprove you Digital Marketing selling. Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vem, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Improve you Digital Marketing selling inventore veritatis is important for our ability to learn from mistakes, but it alsogive rise to self-criticism, because it is part of the threat-protection system in the other wordsImprove you Digital Marketing selling. Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vem, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div>
                  <div className={styles.shareLinks}>
                    <span>Share</span>
                    <ul>
                      <li>
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item lg={4} md={9} sm={11} xs={12}>
              <aside>
                <div className={styles.widget}>
                  <h3 className={styles.title}>Categories</h3>
                  <ul>
                    <li><Link href="/blog">Medecines (12)</Link></li>
                    <li><Link href="/blog">Food Supplements (21)</Link></li>
                    <li><Link href="/blog">Medical Equipments (09)</Link></li>
                    <li><Link href="/blog">Beauty and Health (10)</Link></li>
                    <li><Link href="/blog">Dietary Products (08)</Link></li>
                    <li><Link href="/blog">Kids Medecine (15)</Link></li>
                    <li><Link href="/blog">Kolikata Harbel (17)</Link></li>
                  </ul>
                </div>
                <div className={styles.widget}>
                  <h3 className={styles.title}>Recent Post</h3>
                  <ul>
                    <li>
                      <div className={styles.item}>
                        <Link href="/blogs/1" className={styles.img}>
                          <img src="/images/home/photo-23.jpg" alt="image_not_found" />
                        </Link>
                        <div className={styles.content}>
                          <h4 className={styles.postTitle}>
                            <Link href="/blogs/1">
                              Let food be thy medicine and medicine be thy food.
                            </Link>
                          </h4>
                          <span className={styles.date}>22 May 2020 </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={styles.item}>
                        <Link href="/blogs/1" className={styles.img}>
                          <img src="/images/home/photo-23.jpg" alt="image_not_found" />
                        </Link>
                        <div className={styles.content}>
                          <h4 className={styles.postTitle}>
                            <Link href="/blogs/1">
                              Let food be thy medicine and medicine be thy food.
                            </Link>
                          </h4>
                          <span className={styles.date}>22 May 2020 </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={styles.item}>
                        <Link href="/blogs/1" className={styles.img}>
                          <img src="/images/home/photo-23.jpg" alt="image_not_found" />
                        </Link>
                        <div className={styles.content}>
                          <h4 className={styles.postTitle}>
                            <Link href="/blogs/1">
                              Let food be thy medicine and medicine be thy food.
                            </Link>
                          </h4>
                          <span className={styles.date}>22 May 2020 </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className={styles.widget}>
                  <h3 className={styles.title}>Gallery</h3>
                  <ul className={styles.galleryContainer}>
                    {items.map((item, idx) => (
                      <li className={styles.gallery} key={idx}>
                        <div onClick={() => openImage(idx)}>
                          <i className="fa-solid fa-eye"></i>
                          <img src={item.src} alt="Images" />
                        </div>
                      </li>
                    ))}
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
//== Utils
import Link from 'next/link';
//== Styles
import styles from './blogItem.module.scss';

interface BlogItemProps { }

const BlogItem: React.FC<BlogItemProps> = () => {
  return (
    <>
      <div className={`${styles.card} ${styles.primary}`}>
        <img src="/images/home/photo-20.jpg" alt="blog_image" />
        <div className={styles.lateDate}>
          <h3>26<span>March</span></h3>
        </div>
        <div className={styles.text}>
          <h3><Link href="/blogs/1">Beauty Weeks With Experts</Link></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. </p>
        </div>
      </div>
    </>
  );
}

export default BlogItem;
//== Utils
import Link from 'next/link';
//= Types
import type { Blog } from '@/types';
//== Styles
import styles from './post.module.scss';

interface PostProps {
  data: Blog;
}

const Post: React.FC<PostProps> = ({ data }) => {
  return (
    <div className={styles.post}>
      <div className={styles.cardZoom}>
        <img src={data.image} alt="post_image" />
        <Link href={`/blogs/${data.slug}`} className={styles.badge}>
          <span>{data.category.name}</span>
        </Link>
      </div>
      <div className={styles.content}>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <i className="fa-regular fa-user"></i>
            <div className={styles.text}>{data.username}</div>
          </li>
          <li className={styles.navItem}>
            <i className="fa-regular fa-calendar"></i>
            <div className={styles.text}>{data.publish_date}</div>
          </li>
          <li className={styles.navItem}>
            <i className="fa-regular fa-eye"></i>
            <div className={styles.text}>{data.views}</div>
          </li>
        </ul>
        <Link href={`/blogs/${data.slug}`}>
          <h5>{data.title}</h5>
        </Link>
      </div>
    </div>
  );
}

export default Post;
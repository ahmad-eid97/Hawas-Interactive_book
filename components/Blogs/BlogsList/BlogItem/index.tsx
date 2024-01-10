import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
//== Utils
import Link from 'next/link';
//= Types
import type { Blog } from '@/types';
//== Styles
import styles from './blogItem.module.scss';

interface BlogItemProps {
  data: Blog;
}

const BlogItem: React.FC<BlogItemProps> = ({ data }) => {
  const dateDay = format(new Date(data.publish_date), 'dd', { locale: ar });
  const dateMonth = format(new Date(data.publish_date), 'MMMM', { locale: ar });

  return (
    <>
      <div className={`${styles.card} ${styles.primary}`}>
        <img src={data.image} alt="blog_image" />
        <div className={styles.lateDate}>
          <h3>{dateDay}<span>{dateMonth}</span></h3>
        </div>
        <div className={styles.text}>
          <h3><Link href={`/blogs/${data.id}`}>{data.title}</Link></h3>
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
      </div>
    </>
  );
}

export default BlogItem;
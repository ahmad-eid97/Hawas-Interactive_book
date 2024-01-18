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
  return (
    <>
      <div className={`${styles.card}`}>
        <Link href={`/blogs/${data.slug}`}>
          <img src={data.image} alt="blog_image" />
        </Link>
        <div className={styles.info}>
          <p>
            <i className="fa-regular fa-user"></i>
            {data?.username || ''}
          </p>
          <p>
            <i className="fa-regular fa-calendar"></i>
            {format(new Date(data?.publish_date || ''), 'dd MMMM yyy', { locale: ar })}
          </p>
          <p>
            <i className="fa-regular fa-eye"></i>
            {data?.views || '0'}
          </p>
        </div>
        <div className={styles.text}>
          <h3><Link href={`/blogs/${data.slug}`}>{data.title}</Link></h3>
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
      </div>
    </>
  );
}

export default BlogItem;
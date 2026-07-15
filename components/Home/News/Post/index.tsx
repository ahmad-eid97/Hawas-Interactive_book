//== Modules
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
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
    <div className={`${styles.card}`}>
      <Link href={`/blogs/${data.slug}`}>
        <img src={data.image} alt="blog_image" />
      </Link>
      <div className={styles.content}>
        <div className={styles.top}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fff" fill-opacity="1" d="M0,192L21.8,181.3C43.6,171,87,149,131,154.7C174.5,160,218,192,262,186.7C305.5,181,349,139,393,138.7C436.4,139,480,181,524,197.3C567.3,213,611,203,655,186.7C698.2,171,742,149,785,138.7C829.1,128,873,128,916,144C960,160,1004,192,1047,197.3C1090.9,203,1135,181,1178,149.3C1221.8,117,1265,75,1309,58.7C1352.7,43,1396,53,1418,58.7L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
          </svg>
        </div>
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
    </div>
  );
}

export default Post;
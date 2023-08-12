//== Utils
import Link from 'next/link';
//== Styles
import styles from './404.module.scss';

interface NotFoundProps { }

const NotFound: React.FC<NotFoundProps> = () => {

  return (
    <div className={styles.notFound}>
      <div className={styles.content}>
        <img src="/images/404/404.png" alt="not_found" />
        <h1>أوبس, حدث خطأ ما
          <br />
          أو الصفحة غير موجودة...
        </h1>
        <Link href="/">
          العودة للصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
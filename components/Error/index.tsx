//== Utils
import Link from 'next/link';
//== Styles
import styles from './error.module.scss';

interface ErrorProps {
  error: Error,
  reset: () => void
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div className={styles.error}>
      <div className={styles.content}>
        <img src="/images/error/error.svg" alt="error" />
        <h1>
          {error.message}
        </h1>
        <div className={styles.actions}>
          <button onClick={reset}>
            محاولة مرة أخري
          </button>
          <Link href="/">
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
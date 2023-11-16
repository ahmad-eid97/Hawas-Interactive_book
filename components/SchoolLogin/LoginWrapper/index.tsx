//== Components
import { SchoolLoginForm } from '@/components';
//== Styles
import styles from './loginWrapper.module.scss';

interface LoginWrapperProps { }

const LoginWrapper: React.FC<LoginWrapperProps> = () => {
  return (
    <div className={styles.loginWrapper}>
      <SchoolLoginForm />
    </div>
  );
}

export default LoginWrapper;
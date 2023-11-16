//== Components
import { ParentLoginForm } from '@/components';
//== Styles
import styles from './loginWrapper.module.scss';

interface LoginWrapperProps { }

const LoginWrapper: React.FC<LoginWrapperProps> = () => {
  return (
    <div className={styles.loginWrapper}>
      <ParentLoginForm />
    </div>
  );
}

export default LoginWrapper;
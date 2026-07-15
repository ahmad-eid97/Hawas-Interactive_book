//== Components
import { TeacherLoginForm } from '@/components';
//== Styles
import styles from './loginWrapper.module.scss';

interface LoginWrapperProps { }

const LoginWrapper: React.FC<LoginWrapperProps> = () => {
  return (
    <div className={styles.loginWrapper}>
      <TeacherLoginForm />
    </div>
  );
}

export default LoginWrapper;
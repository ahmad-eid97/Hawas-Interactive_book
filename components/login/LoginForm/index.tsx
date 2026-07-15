"use client";
//== Utils
import Link from 'next/link';
//== Components
import Svg from './Svg';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './loginForm.module.scss';

const LoginForm = () => {
  const { loginData, handleFields, login } = useLogic();

  return (
    <>
      <form className={styles.loginForm}>
        <div className={styles.head}>
          <Link href="/">
            الصفحة الرئيسية
          </Link>
          <Link href="/">
            <img src="/images/navbar/navbar_logo.png" alt="logo" />
          </Link>
        </div>

        <Svg />

        <div className={`${styles.inputGroup} ${styles.inputGroup1}`}>
          <label htmlFor="loginEmail" id="loginEmailLabel">البريد الإلكتروني</label>
          <input type="email" name='email' id="loginEmail" placeholder='البريد الإلكتروني' autoComplete='off' value={loginData.email} onChange={(e) => handleFields(e)} />
        </div>
        <div className={`${styles.inputGroup} ${styles.inputGroup2}`}>
          <div>
            <label htmlFor="loginPassword" id="loginPasswordLabel">كلمة المرور</label>
            <label id="showPasswordToggle" htmlFor="showPasswordCheck">عرض
              <input id="showPasswordCheck" type="checkbox" />
              <div className={styles.indicator}></div>
            </label>
          </div>
          <input type="password" name='password' id="loginPassword" placeholder='كلمة المرور' autoComplete='off' value={loginData.password} onChange={(e) => handleFields(e)} />
        </div>
        <div className={`${styles.inputGroup} ${styles.inputGroup3}`}>
          <button id="login" type='button' onClick={login}>تسجيل الدخول</button>
        </div>
        <p className={styles.switch}>
          تسجيل دخول ك <Link href="/school-login">مدرسة </Link> أو <Link href="/teacher-login">معلم </Link>
        </p>
      </form>
    </>
  )
}

export default LoginForm
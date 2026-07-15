"use client";
//== Utils
import Link from 'next/link';
//== Components
import { AnimatedIcons } from '@/components';
//== Component Logic
import useLogic from './logic';
//== Assets
import animatedPicture from '../../../public/animatedPictures/Father.json';
//== Styles
import styles from './loginForm.module.scss';

const LoginForm = () => {
  const { loginData, handleFields, login, showMyPassword, showPassword } = useLogic();

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

        <div className={styles.animatedPicture}>
          <AnimatedIcons animationData={animatedPicture} />
        </div>

        {/* <Svg /> */}

        <div className={`${styles.inputGroup} ${styles.inputGroup1}`}>
          <label htmlFor="loginEmail" id="loginEmailLabel">البريد الإلكتروني</label>
          <input type="email" name='email' id="loginEmail" placeholder='البريد الإلكتروني' autoComplete='off' value={loginData.email} onChange={(e) => handleFields(e)} />
        </div>
        <div className={`${styles.inputGroup} ${styles.inputGroup2}`}>
          <div>
            <label htmlFor="loginPassword" id="loginPasswordLabel">كلمة المرور</label>
            <label id="showPasswordToggle" htmlFor="showPasswordCheck">عرض
              <input id="showPasswordCheck" type="checkbox" onChange={showMyPassword} />
              <div className={styles.indicator}></div>
            </label>
          </div>
          <input type={showPassword ? "text" : "password"} name='password' id="loginPassword" placeholder='كلمة المرور' autoComplete='off' value={loginData.password} onChange={(e) => handleFields(e)} />
        </div>
        <div className={`${styles.inputGroup} ${styles.inputGroup3}`}>
          <button id="login" onClick={login}>تسجيل الدخول</button>
        </div>
        <p className={styles.switch}>
          تسجيل دخول ك <Link href="/login">طالب </Link> أو <Link href="/teacher-login">مدرس </Link>
        </p>
      </form>
    </>
  )
}

export default LoginForm
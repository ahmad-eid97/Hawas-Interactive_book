"use client";
import { useAppSelector } from '@/store/hooks';
//== Modules
import Container from '@mui/material/Container';
//== Utils
import Link from 'next/link';
//== Utils
import Cookies from "universal-cookie"
//== Components
import TopBar from './TopBar';
import MobileMenu from './MobileMenu';
//== Component Logic
import useLogic from './logic';
//= Api
import { getAllSettings } from '@/API/pages';
//= Types
import { MenuItem } from '@/types';
//== Styles
import styles from './navbar.module.scss';

interface NavbarProps {
  menus: MenuItem[];
  settingsData: Awaited<ReturnType<typeof getAllSettings>> | null;
}

const Navbar: React.FC<NavbarProps> = ({ menus, settingsData }) => {
  const { navDropdown, setNavDropdown } = useLogic();
  const cookie = new Cookies();
  const user = cookie.get('hawas-user');
  const teacher = useAppSelector((state) => state.teacher);

  return (
    <header className={`${styles.navbar}`}>
      <Container maxWidth="xl" className={styles.topContainer} suppressHydrationWarning>
        <TopBar settingsData={settingsData} />
      </Container>
      <Container maxWidth="xl" className={styles.container} suppressHydrationWarning>
        <Link className={styles.logo} href="/">
          <img src="/images/navbar/navbar_logo.png" alt="hawas_logo" />
        </Link>
        <div className={styles.links} suppressHydrationWarning>
          <ul className={`${styles.navLinks}`}>
            {
              menus.map((menu) => (
                <li className={styles.link} key={menu.id}>
                  <Link href={menu.link}>
                    <span>{menu.label}</span>
                  </Link>
                </li>
              ))
            }
            {user?.role === 'teacher' ?
              <>
                <li className={styles.link}>
                  <Link href="/teacher-panel">
                    <span>لوحة المعلم</span>
                  </Link>
                </li>
                {
                  teacher?.questions?.data?.length ?
                    <span className={styles.number}>{teacher.questions.data.length}</span>
                    :
                    null
                }
              </>
              :
              null
            }
          </ul>
        </div>
        <ul className={styles.drawers}>
          <li className={`${styles.drawerItem} ${styles.mobileNave}`}>
            <MobileMenu menus={menus} user={user} />
          </li>
        </ul>
      </Container>
    </header>
  );
}

export default Navbar;
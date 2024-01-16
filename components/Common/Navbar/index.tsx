"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//== Utils
import Link from 'next/link';
//== Components
import TopBar from './TopBar';
import MobileMenu from './MobileMenu';
//== Component Logic
import useLogic from './logic';
//= Api
import { getAllSettings } from '@/API/pages';
//= Types
import { FooterSocialLinks, MenuItem } from '@/types';
//== Styles
import styles from './navbar.module.scss';

interface NavbarProps {
  menus: MenuItem[];
  settingsData: Awaited<ReturnType<typeof getAllSettings>> | null;
}

const Navbar: React.FC<NavbarProps> = ({ menus, settingsData }) => {
  const { navDropdown, setNavDropdown } = useLogic();

  return (
    <header className={`${styles.navbar}`}>
      <Container maxWidth="xl" className={styles.topContainer}>
        <TopBar settingsData={settingsData} />
      </Container>
      <Container maxWidth="xl" className={styles.container}>
        <Link className={styles.logo} href="/">
          <img src="/images/navbar/navbar_logo.png" alt="hawas_logo" />
        </Link>
        <div className={styles.links}>
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
          </ul>
        </div>
        <ul className={styles.drawers}>
          <li className={`${styles.drawerItem} ${styles.mobileNave}`}>
            <MobileMenu />
          </li>
        </ul>
      </Container>
    </header>
  );
}

export default Navbar;
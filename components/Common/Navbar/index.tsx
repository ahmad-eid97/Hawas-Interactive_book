"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//== Utils
import Link from 'next/link';
//== Components
import TopBar from './TopBar';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './navbar.module.scss';

interface NavbarProps {
}

const Navbar: React.FC<NavbarProps> = () => {
  const { navDropdown, setNavDropdown } = useLogic();

  return (
    <header className={`${styles.navbar}`}>
      <Container maxWidth="xl" className={styles.topContainer}>
        <TopBar />
      </Container>
      <Container maxWidth="xl" className={styles.container}>
        <Link className={styles.logo} href="/">
          <img src="./images/navbar/hawaslogofinal1.png" alt="hawas_logo" />
        </Link>
        <div className={styles.links}>
          <ul className={`${styles.navLinks}`}>
            <li
              className={`${styles.link} ${styles.maxWidth}`}
              onMouseEnter={() => setNavDropdown(1)}
              onMouseLeave={() => setNavDropdown(0)}
            >
              <span>
                {" "}
                برامجنا{" "}
                <i className="fa-regular fa-angle-down"></i>
              </span>
              {navDropdown === 1 && (
                <div className={styles.linkDropdown2}>
                  <Grid container>
                    <Grid item md={4}>
                      <h5 className="dropdown-header">
                        Courses List
                      </h5>
                      <a href="#">
                        Courses List v1
                      </a>
                      <a href="#">
                        Courses List v2
                      </a>
                      <a href="#">
                        Courses List v3
                      </a>
                      <a href="#">
                        Courses List v4
                      </a>
                      <a href="#">
                        Courses List v5
                      </a>
                      <a className="dropdown-item mb-5" href="#">
                        Courses List v6
                      </a>
                    </Grid>
                    <Grid item md={4}>
                      <h5 className="dropdown-header">
                        Courses Single
                      </h5>
                      <a href="#">
                        Courses Single v1
                      </a>
                      <a href="#">
                        Courses Single v2
                      </a>
                      <a href="#">
                        Courses Single v3
                      </a>
                      <a href="#">
                        Courses Single v4
                      </a>
                      <a href="#">
                        Courses Single v5
                      </a>
                    </Grid>
                    <Grid item md={4}>
                      <h5 className="dropdown-header">
                        Lesson Single
                      </h5>
                      <a href="#">
                        Lesson Single v1
                      </a>
                      <a href=".#">
                        Lesson Single v2
                      </a>

                      <h5 className="dropdown-header">
                        Instructors
                      </h5>
                      <a href="#">
                        Instructors List v1
                      </a>
                      <a href="#">
                        Instructors List v2
                      </a>
                      <a href="#">
                        Instructors Single
                      </a>
                    </Grid>
                  </Grid>
                </div>
              )}
            </li>
            <li
              className={styles.link}
            >
              <span>
                {" "}
                المدونة

              </span>
            </li>
            <li
              className={styles.link}
            >
              <span>
                {" "}
                قناة حواس
              </span>
            </li>
            <li
              className={styles.link}
            >
              <span>
                {" "}
                من نحن
              </span>
            </li>
            <li
              className={styles.link}

              onMouseEnter={() => setNavDropdown(6)}
              onMouseLeave={() => setNavDropdown(0)}
            >
              <span>
                {" "}
                اتصل بنا
              </span>
            </li>
          </ul>
        </div>
        <ul className={styles.drawers}>
          <li className={styles.drawerItem}>
            {/* <UserDrawer /> */}
          </li>
          <li className={`${styles.drawerItem} ${styles.mobileNave}`}>
            {/* <MobileNaveDrawer /> */}
          </li>
        </ul>
      </Container>
    </header>
  );
}

export default Navbar;
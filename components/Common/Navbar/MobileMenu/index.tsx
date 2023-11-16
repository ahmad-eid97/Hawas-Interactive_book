//== Utils
import Link from "next/link";
//== Modules
import { Container, Drawer } from "@mui/material";
//== Component Logic
import useLogic from "./logic";
//== Styles
import styles from './mobileMenu.module.scss';

interface MobileMenuProps { }

const MobileMenu: React.FC<MobileMenuProps> = () => {
  const { state, toggleDrawer } = useLogic();

  const userDrawerContent = (anchor: any) => (
    <div>
      <Container maxWidth="xl">
        <div className={styles.drawer}>
          <ul className={styles.navLinks}>
            <li
              className={`${styles.link} ${styles.maxWidth}`}
            >
              <Link href="/">
                <i className="fa-light fa-house"></i>
                الرئيسية
              </Link>
            </li>
            <li
              className={styles.link}
            >
              <Link href="/books">
                <i className="fa-light fa-book"></i>
                الكتب
              </Link>
            </li>
            <li
              className={styles.link}
            >
              <Link href="/courses">
                <i className="fa-light fa-graduation-cap"></i>
                الدورات العلمية
              </Link>
            </li>
            <li
              className={styles.link}
            >
              <Link href="/blogs">
                <i className="fa-light fa-blog"></i>
                المدونة
              </Link>
            </li>
            <li
              className={styles.link}
            >
              <Link href="/about-us">
                <i className="fa-light fa-address-card"></i>
                من نحن
              </Link>
            </li>
            <li
              className={styles.link}
            >
              <Link href="/contact-us">
                <i className="fa-light fa-messages"></i>
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
  return (
    <div className={styles.mobileNav}>
      <span onClick={toggleDrawer("left", true)}>
        <i className="fa-duotone fa-bars-sort"></i>
      </span>
      <Drawer
        anchor={"left"}
        // @ts-ignore
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {userDrawerContent("left")}
      </Drawer>
    </div>
  );
}

export default MobileMenu;
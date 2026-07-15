//== Utils
import Link from "next/link";
//== Modules
import { Container, Drawer } from "@mui/material";
//== Component Logic
import useLogic from "./logic";
//= Types
import { MenuItem } from '@/types';
//== Styles
import styles from './mobileMenu.module.scss';

type Props = {
  menus: MenuItem[];
  user: any;
}

const MobileMenu: React.FC<Props> = ({ menus, user }) => {
  const { state, toggleDrawer } = useLogic();
  const { logout } = useLogic();

  const userDrawerContent = (anchor: any) => (
    <div>
      <Container maxWidth="xl">
        <div className={styles.drawer}>
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
              <li className={styles.link}>
                <span className={styles.number}>20</span>
                <Link href="/questions-correction">
                  <span>تصحيح الأسئلة</span>
                </Link>
              </li>
              :
              null
            }

            <li className={styles.link} onClick={logout}>
              <span>تسجيل الخروج</span>
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
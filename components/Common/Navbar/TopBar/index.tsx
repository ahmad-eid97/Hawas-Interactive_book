"use client";
//== Utils
import Cookies from 'universal-cookie';
//== Component Logic
import useLogic from './logic';
//= Api
import { getAllSettings } from '@/API/pages';
//= Types
import { FooterSocialLinks } from '@/types';
//== Styles
import styles from './topBar.module.scss';


interface TopBarProps {
  settingsData: Awaited<ReturnType<typeof getAllSettings>> | null;
}

const cookie = new Cookies();

const TopBar: React.FC<TopBarProps> = ({ settingsData }) => {
  const { logout } = useLogic();

  return (
    <div className={styles.topBar}>
      <ul className={styles.nav}>
        <li className={styles.item}>
          {
            cookie.get('hawas-auth') ?
              <i className="fa-regular fa-right-from-bracket" onClick={logout}></i>
              :
              null
          }
          <span>{settingsData?.contact_email}</span>
        </li>
      </ul>
      <ul className={styles.nav}>
        <li className={styles.item}>
          <a href={'https://' + settingsData?.facebook_url || ''} className="nav-link p-0 text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li className={styles.item}>
          <a href={'https://' + settingsData?.instagram_url || ''} className="nav-link p-0 text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li className={styles.item}>
          <a href={'https://' + settingsData?.youtube_url || ''} className="nav-link p-0 text-white">
            <i className="fab fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default TopBar;
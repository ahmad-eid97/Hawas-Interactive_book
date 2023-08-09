//== Styles
import styles from './topBar.module.scss';
//== Component Interface
interface TopBarProps {
}

const TopBar: React.FC<TopBarProps> = () => {
  return (
    <div className={styles.topBar}>
      <ul className={styles.nav}>
        <li className={styles.item}>
          <span>support@gridsapps.com</span>
        </li>
      </ul>

      <ul className={styles.nav}>
        <li className={styles.item}>
          <a href="#" className="nav-link p-0 text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li className={styles.item}>
          <a href="#" className="nav-link p-0 text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li className={styles.item}>
          <a href="#" className="nav-link p-0 text-white">
            <i className="fab fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default TopBar;
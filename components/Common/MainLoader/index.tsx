//== Styles
import styles from './mainLoader.module.scss';

interface MainLoaderProps { }

const MainLoader: React.FC<MainLoaderProps> = () => {
  return (
    <div className={styles.mainLoader}>
      <div className={styles.content}>
        <img src="/images/common/loader.gif" alt="loader" />
        <p>جاري التحميل...</p>
      </div>
    </div>
  );
}

export default MainLoader;
import Brand from './Brand/Brand';
import NavList from '../NavList/NavList';
import Hamburger from './Hamburger/Hamburger';
import styles from './Toolbar.module.css';
const Toolbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <Brand />
        <div className={styles.navList}>
          <NavList />
        </div>
        <div className={styles.hamburger}>
          <Hamburger />
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;

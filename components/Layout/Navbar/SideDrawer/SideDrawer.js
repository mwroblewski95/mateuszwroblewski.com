import { useContext } from 'react';
import NavbarContext from '../../../../context/NavbarContext';
import NavList from '../NavList/NavList';
import styles from './SideDrawer.module.css';
const SideDrawer = () => {
  const { isMenuOpen } = useContext(NavbarContext);

  return (
    <nav className={`${styles.sideDrawer} ${isMenuOpen ? styles.isActive : null}`}>
      <div className="container">
        <NavList />
      </div>
    </nav>
  );
};

export default SideDrawer;
